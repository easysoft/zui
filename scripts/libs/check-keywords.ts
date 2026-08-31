import Path from 'path';
import {fileURLToPath} from 'url';
import fs from 'fs-extra';
import {libTypeOrders} from './lib-type';

/**
 * Every lib manifest carries exactly one `zui:<type>` keyword, derived from its
 * `zui.type`. The field feeds no build or dev behaviour today — `scripts/libs/query.ts`
 * groups and orders libs from `zui.type` alone — so nothing keeps the two in step on
 * its own, which is how 52 of 65 manifests came to disagree with their own type.
 *
 * This module is both the generator and the guard: `checkLibKeywords` is pure and is
 * what `tests/unit/lib-keywords.test.ts` asserts on, and `--fix` is the same check with
 * writes enabled. They cannot drift apart because there is only one rule.
 *
 * Free-form keywords (`css`, `js`, `components`) are out of scope: the rule neither adds
 * nor removes them, and does not judge whether they are accurate.
 */

export const ZUI_KEYWORD_PREFIX = 'zui:';

export type LibKeywordsIssue
    = | 'invalid-type'
        | 'missing-field'
        | 'missing-entry'
        | 'wrong-entry'
        | 'duplicate-entry';

export interface LibManifestInfo {
    /** Directory name under `lib/`. */
    lib: string;
    /** Absolute path to the manifest. */
    file: string;
    /** Value of `zui.type`, if the manifest declares one. */
    type?: string;
    /** Value of `keywords`, or undefined when the field is absent. */
    keywords?: string[];
}

export interface LibKeywordsViolation {
    lib: string;
    file: string;
    issue: LibKeywordsIssue;
    /** The `zui:<type>` entry the manifest should carry, or '' when the type is unusable. */
    expected: string;
    /** The `zui:` entries the manifest actually carries. */
    actual: string[];
    message: string;
    /** False when the violation needs a human — an unusable `zui.type`. */
    fixable: boolean;
}

/** Read every built-in lib manifest. Exts are deliberately excluded: they are gitignored and absent on CI. */
export function readLibManifests(libsPath: string): LibManifestInfo[] {
    return fs.readdirSync(libsPath)
        .filter(lib => fs.existsSync(Path.join(libsPath, lib, 'package.json')))
        .sort()
        .map((lib) => {
            const file = Path.join(libsPath, lib, 'package.json');
            const manifest = fs.readJSONSync(file) as {keywords?: string[]; zui?: {type?: string}};
            return {lib, file, type: manifest.zui?.type, keywords: manifest.keywords};
        });
}

export function checkLibKeywords(manifests: LibManifestInfo[]): LibKeywordsViolation[] {
    const violations: LibKeywordsViolation[] = [];
    for (const {lib, file, type, keywords} of manifests) {
        const actual = (keywords ?? []).filter(keyword => keyword.startsWith(ZUI_KEYWORD_PREFIX));

        if (!type || libTypeOrders[type as keyof typeof libTypeOrders] === undefined) {
            violations.push({
                lib, file, issue: 'invalid-type', expected: '', actual, fixable: false,
                message: `zui.type is ${type ? `"${type}", which is not a known lib type` : 'missing'}`,
            });
            continue;
        }

        const expected = `${ZUI_KEYWORD_PREFIX}${type}`;
        const base = {lib, file, expected, actual, fixable: true};

        if (keywords === undefined) {
            violations.push({...base, issue: 'missing-field', message: `no keywords field; expected ["${expected}"]`});
        } else if (!actual.length) {
            violations.push({...base, issue: 'missing-entry', message: `no zui: entry; expected "${expected}"`});
        } else if (actual.length > 1) {
            violations.push({...base, issue: 'duplicate-entry', message: `${actual.length} zui: entries (${actual.join(', ')}); expected only "${expected}"`});
        } else if (actual[0] !== expected) {
            violations.push({...base, issue: 'wrong-entry', message: `has "${actual[0]}" but zui.type is "${type}"; expected "${expected}"`});
        }
    }
    return violations;
}

/**
 * Where a missing `keywords` field is inserted. The repo has no single key order, but
 * every manifest carries at least one of these, and `keywords` follows `browserslist`
 * or `version` in all 50 manifests that already declare it.
 */
const INSERT_AFTER_KEYS = ['browserslist', 'browser', 'version', 'name'];

function findKeywordsSpan(text: string): {start: number; end: number} | undefined {
    const match = /"keywords"\s*:\s*\[/.exec(text);
    if (!match) {
        return undefined;
    }
    const end = text.indexOf(']', match.index + match[0].length);
    return end < 0 ? undefined : {start: match.index, end: end + 1};
}

/**
 * Rewrite one manifest's `keywords` so it carries exactly the expected `zui:` entry.
 * Edits the text in place rather than re-serializing the manifest: a JSON round-trip
 * expands the inline arrays this repo uses and turns a one-line diff into a whole-file
 * rewrite.
 */
export function fixManifestKeywords(text: string, violation: LibKeywordsViolation): string {
    const {expected} = violation;
    const eol = text.includes('\r\n') ? '\r\n' : '\n';
    const span = findKeywordsSpan(text);

    if (!span) {
        const lines = text.split(eol);
        const anchor = INSERT_AFTER_KEYS
            .map(key => lines.findIndex(line => new RegExp(`^\\s*"${key}"\\s*:`).test(line)))
            .find(index => index >= 0);
        if (anchor === undefined) {
            throw new Error(`Cannot place keywords in ${violation.file}: none of ${INSERT_AFTER_KEYS.join(', ')} found`);
        }
        const indent = /^\s*/.exec(lines[anchor])![0];
        lines.splice(anchor + 1, 0, `${indent}"keywords": [${JSON.stringify(expected)}],`);
        return lines.join(eol);
    }

    const source = text.slice(span.start, span.end);
    const entries: string[] = JSON.parse(source.slice(source.indexOf('[')));
    const kept = entries.filter(entry => !entry.startsWith(ZUI_KEYWORD_PREFIX));
    const at = entries.findIndex(entry => entry.startsWith(ZUI_KEYWORD_PREFIX));
    // Keep the zui: entry where it already sat; append it when the manifest had none.
    kept.splice(at < 0 ? kept.length : Math.min(at, kept.length), 0, expected);

    const multiline = source.includes('\n');
    if (!multiline) {
        return `${text.slice(0, span.start)}"keywords": [${kept.map(entry => JSON.stringify(entry)).join(', ')}]${text.slice(span.end)}`;
    }
    const indent = /^\s*/.exec(text.slice(text.lastIndexOf(eol, span.start) + eol.length))![0];
    const inner = kept.map(entry => `${indent}    ${JSON.stringify(entry)}`).join(`,${eol}`);
    return `${text.slice(0, span.start)}"keywords": [${eol}${inner}${eol}${indent}]${text.slice(span.end)}`;
}

export function fixLibKeywords(violations: LibKeywordsViolation[]): string[] {
    const fixed: string[] = [];
    for (const violation of violations) {
        if (!violation.fixable) {
            continue;
        }
        const text = fs.readFileSync(violation.file, 'utf8');
        const next = fixManifestKeywords(text, violation);
        if (next !== text) {
            fs.writeFileSync(violation.file, next);
            fixed.push(violation.lib);
        }
    }
    return fixed;
}

async function runCli() {
    const rootPath = Path.resolve(fileURLToPath(import.meta.url), '../../..');
    const libsPath = Path.join(rootPath, 'lib');
    const fix = process.argv.includes('--fix');

    const manifests = readLibManifests(libsPath);
    const violations = checkLibKeywords(manifests);

    if (!violations.length) {
        console.log(`All ${manifests.length} lib manifests carry the right zui: keyword.`);
        return;
    }

    for (const violation of violations) {
        console.log(`${violation.lib}: ${violation.message}`);
    }

    if (!fix) {
        console.log(`\n${violations.length} of ${manifests.length} manifests need fixing. Re-run with --fix.`);
        process.exitCode = 1;
        return;
    }

    const fixed = fixLibKeywords(violations);
    console.log(`\nFixed ${fixed.length} of ${violations.length} manifests.`);

    const remaining = checkLibKeywords(readLibManifests(libsPath));
    if (remaining.length) {
        console.log(`${remaining.length} still failing:`);
        for (const violation of remaining) {
            console.log(`  ${violation.lib}: ${violation.message}`);
        }
        process.exitCode = 1;
    }
}

if (process.argv[1] && fileURLToPath(import.meta.url) === Path.resolve(process.argv[1])) {
    await runCli();
}
