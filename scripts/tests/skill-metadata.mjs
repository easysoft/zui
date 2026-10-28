import fs from 'node:fs';
import path from 'node:path';
import {load, JSON_SCHEMA} from 'js-yaml';
import MarkdownIt from 'markdown-it';
import markdownItAnchor from 'markdown-it-anchor';

const markdown = new MarkdownIt().use(markdownItAnchor);

export function readSkill(file) {
    const source = fs.readFileSync(file, 'utf8');
    const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/u)?.[1];
    if (!frontmatter) throw new Error(`${file}: missing YAML frontmatter`);
    const meta = load(frontmatter, {schema: JSON_SCHEMA, filename: file});
    if (!meta || typeof meta.name !== 'string' || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/u.test(meta.name) || meta.name.length > 64) throw new Error(`${file}: invalid skill name`);
    if (meta.name !== path.basename(path.dirname(file))) throw new Error(`${file}: name must match the skill directory`);
    if (typeof meta.description !== 'string' || !meta.description.trim() || meta.description.length > 1024 || /[<>]/u.test(meta.description)) throw new Error(`${file}: invalid description`);
    return {name: meta.name, description: meta.description.trim()};
}

export function skillFiles(root) {
    return ['.agents/skills', 'skills-exts', 'skills'].flatMap((directory) => {
        const base = path.join(root, directory);
        if (!fs.existsSync(base)) return [];
        return fs.readdirSync(base).sort().map(name => path.join(base, name, 'SKILL.md')).filter(file => fs.existsSync(file));
    });
}

function documents(directory) {
    return fs.readdirSync(directory, {withFileTypes: true}).flatMap((entry) => {
        // Generated AI references have their own checker; assets/templates resolve in the output project.
        if (['ai', 'assets', 'templates'].includes(entry.name)) return [];
        const file = path.join(directory, entry.name);
        return entry.isDirectory() ? documents(file) : entry.name.endsWith('.md') ? [file] : [];
    });
}

export function validateSkills(root) {
    const errors = [];
    const names = new Set();
    const parsed = new Map();
    const parse = (file) => {
        if (!parsed.has(file)) parsed.set(file, markdown.parse(fs.readFileSync(file, 'utf8'), {}));
        return parsed.get(file);
    };
    for (const file of skillFiles(root)) {
        try {
            const {name} = readSkill(file);
            if (names.has(name)) throw new Error(`${file}: duplicate skill name ${name}`);
            names.add(name);
            const directory = path.dirname(file);
            const uiFile = path.join(directory, 'agents/openai.yaml');
            const ui = load(fs.readFileSync(uiFile, 'utf8'), {schema: JSON_SCHEMA, filename: uiFile});
            for (const key of ['display_name', 'short_description', 'default_prompt']) {
                if (typeof ui?.interface?.[key] !== 'string' || !ui.interface[key].trim()) errors.push(`${uiFile}: missing interface.${key}`);
            }
            const mentions = ui?.interface?.default_prompt?.match(/\$[a-z0-9-]+/gu) || [];
            if (!mentions.includes(`$${name}`)) errors.push(`${uiFile}: default_prompt must mention $${name}`);
            for (const key of ['icon_small', 'icon_large']) {
                const resource = ui?.interface?.[key];
                if (resource !== undefined && (typeof resource !== 'string' || !fs.existsSync(path.resolve(directory, resource)))) errors.push(`${uiFile}: missing ${key} resource`);
            }
            if (ui?.policy?.allow_implicit_invocation !== undefined && typeof ui.policy.allow_implicit_invocation !== 'boolean') errors.push(`${uiFile}: allow_implicit_invocation must be boolean`);
            for (const document of documents(directory)) {
                const inspect = tokens => tokens.forEach((token) => {
                    const href = token.type === 'link_open' ? token.attrGet('href') : token.type === 'image' ? token.attrGet('src') : null;
                    if (href && !/^(?:[a-z][a-z0-9+.-]*:|\/\/)/iu.test(href)) {
                        const [relative, fragment] = href.split('#').map(decodeURIComponent);
                        const target = relative ? path.resolve(path.dirname(document), relative) : document;
                        if (!fs.existsSync(target)) errors.push(`${document}: missing link ${href}`);
                        else if (fragment && target.endsWith('.md')) {
                            const anchors = parse(target).filter(item => item.type === 'heading_open').map(item => item.attrGet('id'));
                            if (!anchors.includes(fragment) && !anchors.includes(encodeURIComponent(fragment))) errors.push(`${document}: missing anchor ${href}`);
                        }
                    }
                    if (token.children) inspect(token.children);
                });
                inspect(parse(document));
            }
        } catch (error) {errors.push(error.message);}
    }
    return errors;
}
