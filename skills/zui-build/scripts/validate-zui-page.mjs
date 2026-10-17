#!/usr/bin/env node

import {promises as fs} from 'node:fs';
import path from 'node:path';
import {URL} from 'node:url';

const HELP = `Validate a static page created with the zui-build skill.

Usage:
  node validate-zui-page.mjs --root <directory> [--json]

Options:
  -r, --root <directory>  Page directory containing index.html (required)
      --json              Print a JSON report
  -h, --help              Show this help`;

// Script type attributes require an essence match, without MIME parameters.
// https://mimesniff.spec.whatwg.org/#javascript-mime-type
const JAVASCRIPT_TYPES = new Set([
    'application/ecmascript', 'application/javascript', 'application/x-ecmascript', 'application/x-javascript',
    'text/ecmascript', 'text/javascript', 'text/javascript1.0', 'text/javascript1.1', 'text/javascript1.2',
    'text/javascript1.3', 'text/javascript1.4', 'text/javascript1.5', 'text/jscript', 'text/livescript',
    'text/x-ecmascript', 'text/x-javascript',
]);

function readOptionValue(args, index, name) {
    const value = args[index + 1];
    if (!value || value.startsWith('-')) {
        throw new Error(`${name} requires a value.`);
    }
    return value;
}

function parseArguments(args) {
    const options = {root: '', json: false, help: false};
    for (let index = 0; index < args.length; index += 1) {
        const argument = args[index];
        if (argument === '-h' || argument === '--help') {
            options.help = true;
        } else if (argument === '-r' || argument === '--root') {
            options.root = readOptionValue(args, index, argument);
            index += 1;
        } else if (argument.startsWith('--root=')) {
            options.root = argument.slice('--root='.length);
        } else if (argument === '--json') {
            options.json = true;
        } else {
            throw new Error(`Unknown option: ${argument}`);
        }
    }
    return options;
}

function decodeAttribute(value) {
    return value.replace(/&(?:#(x[\da-f]+|\d+)|amp|quot|apos|lt|gt);/gi, (entity, code) => {
        if (code) {
            const point = code[0].toLowerCase() === 'x' ? parseInt(code.slice(1), 16) : Number(code);
            return point > 0 && point <= 0x10ffff ? String.fromCodePoint(point) : '\ufffd';
        }
        return {'&amp;': '&', '&quot;': '"', '&apos;': '\'', '&lt;': '<', '&gt;': '>'}[entity.toLowerCase()];
    });
}

function extractReferences(html) {
    // shortcut: Scan ordinary static HTML; browser checks still cover malformed markup and dynamic resources.
    const resources = {styles: [], scripts: []};
    const tags = /<!--[^]*?(?:-->|$)|<![^>]*>|<\/?([a-z][\w:-]*)(?=[\s/>])((?:"[^"]*"|'[^']*'|[^'">])*)>/gi;
    const rawTextTags = new Set(['script', 'style', 'textarea', 'title', 'xmp', 'iframe', 'noembed', 'noframes', 'noscript', 'plaintext']);
    let templateDepth = 0;
    let match;
    while ((match = tags.exec(html))) {
        const name = match[1]?.toLowerCase();
        if (!name) {
            continue;
        }
        const closing = match[0].startsWith('</');
        if (name === 'template') {
            templateDepth = Math.max(0, templateDepth + (closing ? -1 : 1));
        }
        if (closing) {
            continue;
        }
        if (rawTextTags.has(name)) {
            const closingTag = new RegExp(`</${name}(?=[\\s/>])[^>]*>`, 'gi');
            closingTag.lastIndex = tags.lastIndex;
            const end = name === 'plaintext' ? null : closingTag.exec(html);
            tags.lastIndex = end ? closingTag.lastIndex : html.length;
        }
        if (templateDepth || !['link', 'script'].includes(name)) {
            continue;
        }
        const attributes = new Map();
        const attributePattern = /([^\s"'<>/=]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
        for (const attribute of match[2].matchAll(attributePattern)) {
            const key = attribute[1].toLowerCase();
            if (!attributes.has(key)) {
                attributes.set(key, decodeAttribute(attribute[2] ?? attribute[3] ?? attribute[4] ?? ''));
            }
        }
        const href = attributes.get('href')?.trim();
        const src = attributes.get('src')?.trim();
        if (name === 'link' && attributes.get('rel')?.toLowerCase().split(/\s+/).includes('stylesheet') && /(?:^|\/)zui(?:\.min)?\.css(?:[?#]|$)/i.test(href || '')) {
            resources.styles.push(href);
        }
        const type = attributes.get('type')?.trim().toLowerCase() || '';
        if (name === 'script' && (!type || type === 'module' || JAVASCRIPT_TYPES.has(type)) && /(?:^|\/)zui(?:\.esm)?(?:\.min)?\.js(?:[?#]|$)/i.test(src || '')) {
            resources.scripts.push(src);
        }
    }
    return resources;
}

function isRemoteReference(reference) {
    return /^(?:https?:)?\/\//i.test(reference) || reference.startsWith('data:');
}

function stripURLSuffix(reference) {
    return reference.split(/[?#]/, 1)[0];
}

async function pathExists(filePath) {
    try {
        return (await fs.stat(filePath)).isFile();
    } catch {
        return false;
    }
}

function isOutsideRoot(root, filePath) {
    const relativePath = path.relative(root, filePath);
    return relativePath === '..' || relativePath.startsWith(`..${path.sep}`) || path.isAbsolute(relativePath);
}

async function validateLocalReference(root, reference, label, errors) {
    if (isRemoteReference(reference)) {
        return null;
    }
    let cleanReference;
    try {
        cleanReference = decodeURIComponent(stripURLSuffix(reference));
    } catch {
        errors.push(`${label} contains invalid URL encoding: ${reference}`);
        return null;
    }
    const filePath = cleanReference.startsWith('/')
        ? path.resolve(root, `.${cleanReference}`)
        : path.resolve(root, cleanReference);
    if (isOutsideRoot(root, filePath)) {
        errors.push(`${label} escapes the page root: ${reference}`);
        return null;
    }
    if (!(await pathExists(filePath))) {
        errors.push(`${label} does not exist: ${reference}`);
        return null;
    }
    if (isOutsideRoot(await fs.realpath(root), await fs.realpath(filePath))) {
        errors.push(`${label} escapes the page root through a symlink: ${reference}`);
        return null;
    }
    return filePath;
}

function inspectCDNReferences(references, warnings) {
    references.filter(isRemoteReference).forEach((reference) => {
        let version;
        try {
            const url = new URL(reference, 'https://localhost');
            const packagePath = url.hostname === 'cdn.jsdelivr.net' ? '/npm/zui@' : url.hostname === 'unpkg.com' ? '/zui@' : '';
            if (packagePath && url.pathname.startsWith(packagePath)) {
                version = url.pathname.slice(packagePath.length).match(/^([^/]+)\/dist\/zui(?:\.min\.css|\.css|(?:\.esm)?(?:\.min)?\.js)$/)?.[1];
            }
        } catch {
            // Malformed remote references are reported as unverified paths below.
        }
        if (!version) {
            warnings.push(`Unverified or unpinned ZUI CDN path: ${reference}`);
        } else if (!/^\d+\.\d+\.\d+(?:-[\da-z.-]+)?(?:\+[\da-z.-]+)?$/i.test(version)) {
            warnings.push(`Mutable CDN tag used instead of an exact version: ${reference}`);
        }
    });
}

async function validatePage(root) {
    const indexPath = path.join(root, 'index.html');
    const html = await fs.readFile(indexPath, 'utf8');
    const errors = [];
    const warnings = [];

    const {styles: styleReferences, scripts: scriptReferences} = extractReferences(html);
    if (!styleReferences.length) {
        errors.push('No ZUI stylesheet reference found.');
    }

    const localStyles = await Promise.all(styleReferences.map(reference => validateLocalReference(root, reference, 'ZUI stylesheet', errors)));
    await Promise.all(scriptReferences.map(reference => validateLocalReference(root, reference, 'ZUI script', errors)));
    await Promise.all(localStyles.filter(Boolean).map(async (stylePath) => {
        const iconPath = path.join(path.dirname(stylePath), 'icons', 'zenicon.woff');
        if (!(await pathExists(iconPath))) {
            errors.push(`ZUI icon font is missing next to the local stylesheet: ${iconPath}`);
        }
    }));
    inspectCDNReferences([...styleReferences, ...scriptReferences], warnings);

    return {
        ok: errors.length === 0,
        root,
        entry: indexPath,
        resources: {
            styles: styleReferences,
            scripts: scriptReferences,
        },
        errors,
        warnings: [...new Set(warnings)],
    };
}

function printReport(report) {
    console.log(`${report.ok ? 'PASS' : 'FAIL'} ${report.entry}`);
    console.log(`ZUI resources: ${report.resources.styles.length} stylesheet(s), ${report.resources.scripts.length} script(s)`);
    report.errors.forEach(error => console.error(`ERROR ${error}`));
    report.warnings.forEach(warning => console.warn(`WARN  ${warning}`));
}

async function main() {
    const options = parseArguments(process.argv.slice(2));
    if (options.help) {
        console.log(HELP);
        return;
    }
    if (!options.root) {
        throw new Error('--root is required.');
    }
    const report = await validatePage(path.resolve(options.root));
    if (options.json) {
        console.log(JSON.stringify(report, null, 2));
    } else {
        printReport(report);
    }
    if (!report.ok) {
        process.exitCode = 1;
    }
}

main().catch((error) => {
    console.error(`[zui-build] ${error.message}`);
    process.exitCode = 1;
});
