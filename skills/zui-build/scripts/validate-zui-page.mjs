#!/usr/bin/env node

import {promises as fs} from 'node:fs';
import path from 'node:path';

const HELP = `Validate a static page created with the zui-build skill.

Usage:
  node validate-zui-page.mjs --root <directory> [--json]

Options:
  -r, --root <directory>  Page directory containing index.html (required)
      --json              Print a JSON report
  -h, --help              Show this help`;

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

function countMatches(content, pattern) {
    return [...content.matchAll(pattern)].length;
}

function extractReferences(html, tagName, attributeName) {
    const pattern = new RegExp(`<${tagName}\\b[^>]*\\b${attributeName}\\s*=\\s*["']([^"']+)["'][^>]*>`, 'gi');
    return [...html.matchAll(pattern)].map(match => match[1]);
}

function isRemoteReference(reference) {
    return /^(?:https?:)?\/\//i.test(reference) || reference.startsWith('data:');
}

function stripURLSuffix(reference) {
    return reference.split(/[?#]/, 1)[0];
}

async function pathExists(filePath) {
    try {
        await fs.access(filePath);
        return true;
    } catch {
        return false;
    }
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
    const relativePath = path.relative(root, filePath);
    if (relativePath.startsWith('..') || path.isAbsolute(relativePath)) {
        errors.push(`${label} escapes the page root: ${reference}`);
        return null;
    }
    if (!(await pathExists(filePath))) {
        errors.push(`${label} does not exist: ${reference}`);
        return null;
    }
    return filePath;
}

function findDuplicateIDs(html) {
    const counts = new Map();
    for (const match of html.matchAll(/\bid\s*=\s*["']([^"']+)["']/gi)) {
        counts.set(match[1], (counts.get(match[1]) || 0) + 1);
    }
    return [...counts.entries()].filter(([, count]) => count > 1).map(([id]) => id);
}

function checkDocumentStructure(html, errors, warnings) {
    if (!/^\s*<!doctype html>/i.test(html)) {
        errors.push('Missing HTML doctype.');
    }
    if (!/<html\b[^>]*\blang\s*=\s*["'][^"']+["']/i.test(html)) {
        errors.push('Missing a non-empty html lang attribute.');
    }
    if (!/<meta\b[^>]*\bname\s*=\s*["']viewport["']/i.test(html)) {
        errors.push('Missing viewport metadata.');
    }
    if (!/<title>\s*[^<]+\s*<\/title>/i.test(html)) {
        errors.push('Missing a non-empty title.');
    }
    if (!/<main\b/i.test(html)) {
        errors.push('Missing the main landmark.');
    }
    if (!/<h1\b/i.test(html)) {
        errors.push('Missing an h1 heading.');
    }
    if (/{{[A-Z_]+}}/.test(html)) {
        errors.push('Unresolved starter template tokens remain.');
    }
    const duplicateIDs = findDuplicateIDs(html);
    if (duplicateIDs.length) {
        errors.push(`Duplicate id values: ${duplicateIDs.join(', ')}`);
    }
    const imagesWithoutAlt = countMatches(html, /<img\b(?![^>]*\balt\s*=)[^>]*>/gi);
    if (imagesWithoutAlt) {
        warnings.push(`${imagesWithoutAlt} image(s) do not declare alt text.`);
    }
    const buttonsWithoutType = countMatches(html, /<button\b(?![^>]*\btype\s*=)[^>]*>/gi);
    if (buttonsWithoutType) {
        warnings.push(`${buttonsWithoutType} button(s) do not declare type.`);
    }
}

function inspectDeclarativeUsage(html, warnings) {
    const usage = {
        create: countMatches(html, /\bzui-create\s*(?:=|>)/gi),
        toggle: countMatches(html, /\bzui-toggle\s*=/gi),
        events: countMatches(html, /\bzui-on-[\w-]+\s*=/gi),
        init: countMatches(html, /\bzui-init\s*=/gi),
    };
    if (/\bdata-zui\s*=/i.test(html)) {
        warnings.push('Deprecated data-zui syntax found; prefer zui-create.');
    }
    if (/\bdata-on\s*=/i.test(html)) {
        warnings.push('Deprecated data-on syntax found; prefer zui-on-*.');
    }
    if (/\bdata-toggle\s*=/i.test(html) && !/\bzui-toggle\s*=/i.test(html)) {
        warnings.push('Only data-toggle syntax was found; prefer zui-toggle when the component supports it.');
    }
    if (!Object.values(usage).some(Boolean)) {
        warnings.push('No declarative ZUI interaction found. This is fine for CSS-only pages; otherwise prefer zui-* attributes.');
    }
    return usage;
}

function inspectCDNReferences(references, warnings) {
    references.filter(isRemoteReference).forEach(reference => {
        if (!/(?:cdn\.jsdelivr\.net\/npm\/zui@|unpkg\.com\/zui@)[^/]+\/dist\/zui\.(?:css|js)/i.test(reference)) {
            warnings.push(`Unverified or unpinned ZUI CDN path: ${reference}`);
        } else if (/@latest\//i.test(reference)) {
            warnings.push(`Mutable CDN tag used instead of an exact version: ${reference}`);
        }
    });
}

async function validatePage(root) {
    const indexPath = path.join(root, 'index.html');
    const html = await fs.readFile(indexPath, 'utf8');
    const errors = [];
    const warnings = [];
    checkDocumentStructure(html, errors, warnings);

    const styleReferences = extractReferences(html, 'link', 'href').filter(reference => /zui(?:\.min)?\.css(?:[?#]|$)/i.test(reference));
    const scriptReferences = extractReferences(html, 'script', 'src').filter(reference => /zui(?:\.esm)?(?:\.min)?\.js(?:[?#]|$)/i.test(reference));
    if (!styleReferences.length) {
        errors.push('No ZUI stylesheet reference found.');
    }

    const declarative = inspectDeclarativeUsage(html, warnings);
    const requiresJavaScript = Object.values(declarative).some(Boolean);
    if (requiresJavaScript && !scriptReferences.length) {
        errors.push('Declarative ZUI attributes require zui.js, but no ZUI script reference was found.');
    }

    const localStyles = await Promise.all(styleReferences.map(reference => validateLocalReference(root, reference, 'ZUI stylesheet', errors)));
    await Promise.all(scriptReferences.map(reference => validateLocalReference(root, reference, 'ZUI script', errors)));
    await Promise.all(localStyles.filter(Boolean).map(async stylePath => {
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
        declarative,
        errors,
        warnings: [...new Set(warnings)],
    };
}

function printReport(report) {
    console.log(`${report.ok ? 'PASS' : 'FAIL'} ${report.entry}`);
    console.log(`ZUI resources: ${report.resources.styles.length} stylesheet(s), ${report.resources.scripts.length} script(s)`);
    console.log(`Declarative usage: create=${report.declarative.create}, toggle=${report.declarative.toggle}, events=${report.declarative.events}, init=${report.declarative.init}`);
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

main().catch(error => {
    console.error(`[zui-build] ${error.message}`);
    process.exitCode = 1;
});
