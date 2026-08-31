import Path from 'path';
import {fileURLToPath} from 'url';
import {describe, expect, it} from 'vitest';
import {checkLibKeywords, fixManifestKeywords, readLibManifests, type LibKeywordsIssue, type LibManifestInfo} from '../../scripts/libs/check-keywords';

const rootPath = Path.resolve(fileURLToPath(import.meta.url), '../../..');
const libsPath = Path.join(rootPath, 'lib');

function manifest(over: Partial<LibManifestInfo> = {}): LibManifestInfo {
    return {lib: 'demo', file: '/lib/demo/package.json', type: 'component', keywords: ['css', 'zui:component'], ...over};
}

describe('lib keywords', () => {
    it('every lib manifest carries exactly one zui: keyword matching its zui.type', () => {
        const manifests = readLibManifests(libsPath);
        expect(manifests.length).toBeGreaterThan(0);

        const violations = checkLibKeywords(manifests);
        // Named so a failure reports which libs drifted, not just a count.
        expect(violations.map(violation => `${violation.lib}: ${violation.message}`)).toEqual([]);
    });

    describe('checkLibKeywords', () => {
        it('accepts a manifest whose zui: entry matches its type', () => {
            expect(checkLibKeywords([manifest()])).toEqual([]);
        });

        it('ignores free-form keywords entirely', () => {
            expect(checkLibKeywords([manifest({keywords: ['css', 'js', 'components', 'zui:component']})])).toEqual([]);
        });

        it.each<[LibKeywordsIssue, Partial<LibManifestInfo>]>([
            ['missing-field', {keywords: undefined}],
            ['missing-entry', {keywords: ['css']}],
            ['wrong-entry', {keywords: ['css', 'zui:control']}],
            ['duplicate-entry', {keywords: ['zui:component', 'zui:control']}],
        ])('reports %s', (issue, over) => {
            const violations = checkLibKeywords([manifest(over)]);
            expect(violations).toHaveLength(1);
            expect(violations[0].issue).toBe(issue);
            expect(violations[0].expected).toBe('zui:component');
        });

        it.each([undefined, 'not-a-type'])('reports an unusable zui.type (%s) as unfixable', (type) => {
            const violations = checkLibKeywords([manifest({type})]);
            expect(violations).toHaveLength(1);
            expect(violations[0].issue).toBe('invalid-type');
            expect(violations[0].fixable).toBe(false);
        });
    });

    describe('fixManifestKeywords', () => {
        const fix = (text: string, over: Partial<LibManifestInfo> = {}) => {
            const [violation] = checkLibKeywords([manifest(over)]);
            return fixManifestKeywords(text, violation);
        };

        it('swaps a wrong entry in place, keeping the array inline and the order intact', () => {
            const text = '{\n    "name": "@zui/demo",\n    "keywords": ["css", "zui:control", "js"],\n    "main": "src/main.ts"\n}\n';
            expect(fix(text, {keywords: ['css', 'zui:control', 'js']}))
                .toBe('{\n    "name": "@zui/demo",\n    "keywords": ["css", "zui:component", "js"],\n    "main": "src/main.ts"\n}\n');
        });

        it('appends a missing entry after the free-form keywords', () => {
            const text = '{\n    "keywords": ["css", "components"]\n}\n';
            expect(fix(text, {keywords: ['css', 'components']}))
                .toBe('{\n    "keywords": ["css", "components", "zui:component"]\n}\n');
        });

        it('collapses duplicate entries to one', () => {
            const text = '{\n    "keywords": ["zui:component", "css", "zui:control"]\n}\n';
            expect(fix(text, {keywords: ['zui:component', 'css', 'zui:control']}))
                .toBe('{\n    "keywords": ["zui:component", "css"]\n}\n');
        });

        it('inserts a missing field after browserslist', () => {
            const text = '{\n    "version": "0.0.1",\n    "browserslist": "",\n    "main": "src/main.ts"\n}\n';
            expect(fix(text, {keywords: undefined}))
                .toBe('{\n    "version": "0.0.1",\n    "browserslist": "",\n    "keywords": ["zui:component"],\n    "main": "src/main.ts"\n}\n');
        });

        it('falls back to version when there is no browserslist or browser', () => {
            const text = '{\n    "name": "@zui/demo",\n    "version": "0.0.1",\n    "main": "src/main.ts"\n}\n';
            expect(fix(text, {keywords: undefined}))
                .toBe('{\n    "name": "@zui/demo",\n    "version": "0.0.1",\n    "keywords": ["zui:component"],\n    "main": "src/main.ts"\n}\n');
        });

        it('preserves a multi-line array and CRLF line endings', () => {
            const text = '{\r\n    "keywords": [\r\n        "css",\r\n        "zui:control"\r\n    ]\r\n}\r\n';
            expect(fix(text, {keywords: ['css', 'zui:control']}))
                .toBe('{\r\n    "keywords": [\r\n        "css",\r\n        "zui:component"\r\n    ]\r\n}\r\n');
        });

        it('is idempotent', () => {
            const text = '{\n    "keywords": ["css", "zui:control"]\n}\n';
            const once = fix(text, {keywords: ['css', 'zui:control']});
            expect(checkLibKeywords([manifest({keywords: ['css', 'zui:component']})])).toEqual([]);
            expect(once).toBe('{\n    "keywords": ["css", "zui:component"]\n}\n');
        });
    });
});
