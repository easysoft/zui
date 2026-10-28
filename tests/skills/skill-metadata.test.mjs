import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import {fileURLToPath} from 'node:url';
import {readSkill, validateSkills} from '../../scripts/tests/skill-metadata.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

test('all repository skills have valid metadata, UI references and Markdown links', () => {
    assert.deepEqual(validateSkills(root), []);
});

test('metadata validation handles YAML and catches broken navigation and UI metadata', (t) => {
    const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'zui-skill-metadata-'));
    t.after(() => fs.rmSync(directory, {recursive: true, force: true}));
    const skill = path.join(directory, 'skills/example');
    fs.mkdirSync(path.join(skill, 'agents'), {recursive: true});
    const file = path.join(skill, 'SKILL.md');
    fs.writeFileSync(file, '---\nname: example\ndescription: >\n  Read YAML: including\n  folded descriptions.\n---\n# Example\n\n[Details](details.md#工作流)\n');
    fs.writeFileSync(path.join(skill, 'details.md'), '# Details\n\n## 工作流\n');
    const ui = path.join(skill, 'agents/openai.yaml');
    fs.writeFileSync(ui, 'interface:\n  display_name: Example\n  short_description: Example skill\n  default_prompt: Use $example.\n');
    assert.equal(readSkill(file).description, 'Read YAML: including folded descriptions.');
    assert.deepEqual(validateSkills(directory), []);
    fs.appendFileSync(file, '\n[Missing](missing.md)\n[Wrong](details.md#absent)\n');
    fs.writeFileSync(ui, 'interface:\n  default_prompt: Use $wrong.\n  icon_small: assets/missing.png\n');
    const errors = validateSkills(directory).join('\n');
    for (const expected of ['missing link', 'missing anchor', 'display_name', '$example', 'icon_small']) assert.ok(errors.includes(expected), errors);
    fs.writeFileSync(file, '---\nname: example\nname: duplicate\ndescription: invalid\n---\n');
    assert.throws(() => readSkill(file), /duplicated mapping key/u);
});
