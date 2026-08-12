#!/usr/bin/env node

import {promises as fs} from 'node:fs';
import {createHash} from 'node:crypto';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const skillRoot = path.resolve(scriptDirectory, '..');
const starterRoot = path.join(skillRoot, 'assets', 'starter');
const vendorRoot = path.join(skillRoot, 'assets', 'vendor', 'zui-3.0.0');
const manifestPath = path.join(vendorRoot, 'manifest.json');

const HELP = `Create a dependency-free ZUI Web page.

Usage:
  node create-zui-page.mjs --output <directory> [options]

Options:
  -o, --output <directory>   Empty destination directory (required)
      --title <text>         Page title (default: ZUI 页面)
      --lang <tag>           HTML language tag (default: zh-CN)
      --cdn[=provider]       Use CDN resources instead of bundled assets
      --provider <name>      jsdelivr or unpkg (implies --cdn)
      --zui-version <value>  CDN version or tag (implies --cdn)
      --json                 Print a JSON result
  -h, --help                 Show this help

Bundled assets are the default. The command refuses to write into a non-empty
directory so it cannot overwrite an existing project.`;

function readOptionValue(args, index, name) {
    const value = args[index + 1];
    if (!value || value.startsWith('-')) {
        throw new Error(`${name} requires a value.`);
    }
    return value;
}

function parseArguments(args) {
    const options = {
        output: '',
        title: 'ZUI 页面',
        lang: 'zh-CN',
        cdn: false,
        provider: 'jsdelivr',
        zuiVersion: '',
        json: false,
        help: false,
    };

    for (let index = 0; index < args.length; index += 1) {
        const argument = args[index];
        if (argument === '-h' || argument === '--help') {
            options.help = true;
        } else if (argument === '-o' || argument === '--output') {
            options.output = readOptionValue(args, index, argument);
            index += 1;
        } else if (argument.startsWith('--output=')) {
            options.output = argument.slice('--output='.length);
        } else if (argument === '--title') {
            options.title = readOptionValue(args, index, argument);
            index += 1;
        } else if (argument.startsWith('--title=')) {
            options.title = argument.slice('--title='.length);
        } else if (argument === '--lang') {
            options.lang = readOptionValue(args, index, argument);
            index += 1;
        } else if (argument.startsWith('--lang=')) {
            options.lang = argument.slice('--lang='.length);
        } else if (argument === '--cdn') {
            options.cdn = true;
        } else if (argument.startsWith('--cdn=')) {
            options.cdn = true;
            options.provider = argument.slice('--cdn='.length);
        } else if (argument === '--provider') {
            options.cdn = true;
            options.provider = readOptionValue(args, index, argument);
            index += 1;
        } else if (argument.startsWith('--provider=')) {
            options.cdn = true;
            options.provider = argument.slice('--provider='.length);
        } else if (argument === '--zui-version') {
            options.cdn = true;
            options.zuiVersion = readOptionValue(args, index, argument);
            index += 1;
        } else if (argument.startsWith('--zui-version=')) {
            options.cdn = true;
            options.zuiVersion = argument.slice('--zui-version='.length);
        } else if (argument === '--json') {
            options.json = true;
        } else {
            throw new Error(`Unknown option: ${argument}`);
        }
    }
    return options;
}

function escapeHTML(value) {
    return value
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
}

function replaceToken(content, token, value) {
    return content.split(`{{${token}}}`).join(value);
}

function validateOptions(options, bundledVersion) {
    if (!options.output) {
        throw new Error('--output is required.');
    }
    if (!options.title.trim()) {
        throw new Error('--title cannot be empty.');
    }
    if (!/^[A-Za-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$/.test(options.lang)) {
        throw new Error(`Invalid language tag: ${options.lang}`);
    }
    if (!['jsdelivr', 'unpkg'].includes(options.provider)) {
        throw new Error(`Unsupported CDN provider: ${options.provider}`);
    }
    const version = options.zuiVersion || bundledVersion;
    if (!/^[0-9A-Za-z][0-9A-Za-z._-]*$/.test(version)) {
        throw new Error(`Invalid ZUI version or tag: ${version}`);
    }
    return version;
}

async function ensureEmptyDestination(destination) {
    try {
        const entries = await fs.readdir(destination);
        if (entries.length) {
            throw new Error(`Destination is not empty: ${destination}`);
        }
    } catch (error) {
        if (error.code !== 'ENOENT') {
            throw error;
        }
    }
}

async function copyDirectory(source, destination) {
    await fs.mkdir(destination, {recursive: true});
    const entries = await fs.readdir(source, {withFileTypes: true});
    await Promise.all(entries.map(async entry => {
        const sourcePath = path.join(source, entry.name);
        const destinationPath = path.join(destination, entry.name);
        if (entry.isDirectory()) {
            await copyDirectory(sourcePath, destinationPath);
        } else if (entry.isFile()) {
            await fs.copyFile(sourcePath, destinationPath);
        }
    }));
}

async function verifyVendorAssets(manifest) {
    await Promise.all(Object.entries(manifest.files).map(async ([relativePath, checksum]) => {
        const [algorithm, expectedHash] = checksum.split('-', 2);
        if (algorithm !== 'sha256' || !expectedHash) {
            throw new Error(`Unsupported checksum in manifest: ${relativePath}`);
        }
        const content = await fs.readFile(path.join(vendorRoot, relativePath));
        const actualHash = createHash(algorithm).update(content).digest('hex');
        if (actualHash !== expectedHash) {
            throw new Error(`Bundled ZUI checksum mismatch: ${relativePath}`);
        }
    }));
}

function getResourceURLs(options, version) {
    if (!options.cdn) {
        return {
            css: './assets/zui/zui.css',
            js: './assets/zui/zui.js',
            scriptAttributes: '',
            mode: 'bundled',
        };
    }
    const baseURL = options.provider === 'unpkg'
        ? `https://unpkg.com/zui@${version}/dist`
        : `https://cdn.jsdelivr.net/npm/zui@${version}/dist`;
    return {
        css: `${baseURL}/zui.css`,
        js: `${baseURL}/zui.js`,
        scriptAttributes: ' crossorigin="anonymous"',
        mode: `cdn:${options.provider}`,
    };
}

async function createPage(options) {
    const manifest = JSON.parse(await fs.readFile(manifestPath, 'utf8'));
    await verifyVendorAssets(manifest);
    const version = validateOptions(options, manifest.version);
    const destination = path.resolve(options.output);
    await ensureEmptyDestination(destination);

    const resources = getResourceURLs(options, version);
    let html = await fs.readFile(path.join(starterRoot, 'index.html'), 'utf8');
    const css = await fs.readFile(path.join(starterRoot, 'app.css'), 'utf8');
    const replacements = {
        LANG: escapeHTML(options.lang),
        TITLE: escapeHTML(options.title.trim()),
        ZUI_CSS: resources.css,
        ZUI_JS: resources.js,
        ZUI_SCRIPT_ATTRS: resources.scriptAttributes,
        ZUI_VERSION: escapeHTML(version),
    };
    Object.entries(replacements).forEach(([token, value]) => {
        html = replaceToken(html, token, value);
    });
    if (/{{[A-Z_]+}}/.test(html)) {
        throw new Error('The starter template contains an unresolved token.');
    }

    await fs.mkdir(destination, {recursive: true});
    await Promise.all([
        fs.writeFile(path.join(destination, 'index.html'), html, 'utf8'),
        fs.writeFile(path.join(destination, 'app.css'), css, 'utf8'),
    ]);
    if (!options.cdn) {
        await copyDirectory(vendorRoot, path.join(destination, 'assets', 'zui'));
    }

    return {
        root: destination,
        title: options.title.trim(),
        lang: options.lang,
        mode: resources.mode,
        zuiVersion: version,
        entry: path.join(destination, 'index.html'),
    };
}

async function main() {
    const options = parseArguments(process.argv.slice(2));
    if (options.help) {
        console.log(HELP);
        return;
    }
    const result = await createPage(options);
    if (options.json) {
        console.log(JSON.stringify(result, null, 2));
        return;
    }
    console.log(`Created ZUI page: ${result.entry}`);
    console.log(`Resources: ${result.mode}, ZUI ${result.zuiVersion}`);
    console.log(`Preview: python3 -m http.server 4173 --directory ${result.root}`);
}

main().catch(error => {
    console.error(`[zui-build] ${error.message}`);
    process.exitCode = 1;
});
