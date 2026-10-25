#!/usr/bin/env node
// Generated copies live beside manifest.json; this source is maintained in scripts/ai/.
import fs from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const help = '用法：node <skill-root>/references/ai/read.mjs [--lib <name> [--section <id> [--entry <id>]]] [--runtime-version <exact-version>]\n省略 --lib 读取索引。仅需 Node，无需源码仓库、pnpm 或第三方依赖。\n';
const digest = content => `sha256-${createHash('sha256').update(content).digest('hex')}`;

async function main(args) {
    if (args.length === 1 && ['--help', '-h'].includes(args[0])) {
        return help;
    }
    const options = {};
    for (let index = 0; index < args.length; index += 2) {
        const key = args[index];
        const value = args[index + 1];
        if (!['--lib', '--section', '--entry', '--runtime-version'].includes(key) || Object.hasOwn(options, key)) {
            throw new Error(`未知或重复参数：${key}`);
        }
        const pattern = key === '--runtime-version' ? /^\d+\.\d+\.\d+(?:-[\da-z.-]+)?(?:\+[\da-z.-]+)?$/i : /^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/;
        if (!value || !pattern.test(value)) {
            throw new Error(`${key} 的值无效；名称不能是路径，版本必须是明确版本号。`);
        }
        options[key] = value;
    }
    if ((options['--entry'] && !options['--section']) || (options['--section'] && !options['--lib'])) {
        throw new Error('--entry 需要 --section；--section 需要 --lib。');
    }
    const manifest = JSON.parse(await fs.readFile(path.join(root, 'manifest.json'), 'utf8'));
    if (manifest.schemaVersion !== 1 || manifest.source.kind !== 'source-snapshot') {
        throw new Error('不支持的参考清单。请重新导出技能。');
    }
    const catalogSource = await fs.readFile(path.join(root, 'catalog.json'), 'utf8');
    if (digest(catalogSource) !== manifest.catalogIntegrity) {
        throw new Error('提取目录与清单不一致，请重新导出。');
    }
    const catalog = JSON.parse(catalogSource);
    let runtimeVersion = options['--runtime-version'];
    let runtimeLabel = '指定运行版本';
    if (!runtimeVersion && manifest.bundledRuntime) {
        const vendorFile = path.resolve(root, manifest.bundledRuntime.manifest);
        const vendorSource = await fs.readFile(vendorFile);
        if (digest(vendorSource) !== manifest.bundledRuntime.integrity) {
            throw new Error('内置运行资源清单已变化，请重新导出技能参考。');
        }
        runtimeVersion = JSON.parse(vendorSource).version;
        runtimeLabel = '内置运行版本';
    }
    const compatibility = !runtimeVersion
        ? '运行版本未知；先确认目标包版本、导出、类型和 CSS。'
        : runtimeVersion === manifest.source.version
            ? `${runtimeLabel} ${runtimeVersion}：版本号相同，构建内容和 API 行为仍未验证。`
            : `${runtimeLabel} ${runtimeVersion}：与文档版本不同，禁止直接将本参考视为该版本的可用 API。`;
    const library = options['--lib'];
    const relative = library ? `lib/${library}/ai.md` : 'ai.md';
    const record = catalog[relative];
    if (!record) {
        throw new Error(`没有随包参考：${relative}`);
    }
    const source = await fs.readFile(path.join(root, relative), 'utf8');
    if (digest(source) !== record.integrity) {
        throw new Error(`参考内容与清单不一致：${relative}；请重新导出。`);
    }
    const section = options['--section'];
    const entry = options['--entry'];
    const range = entry ? record.entries[`${section}/${entry}`] : section ? record.sections[section] : [0, source.length];
    if (!range) {
        throw new Error(`没有章节或条目：${[library, section, entry].filter(Boolean).join('/')}`);
    }
    return [
        `> 文档：ZUI ${manifest.source.version} 源码快照；基线提交 ${manifest.source.revision}。`,
        `> ${compatibility}`,
        '> 先读 setup 和 constraints。workspace 示例需要源码工作区；npm/browser 能力以目标运行资源为准。源码快照不证明任意发布包包含同名 API。',
        `> 文件：${path.join(root, relative)}`,
        '',
        source.slice(...range),
    ].join('\n');
}

main(process.argv.slice(2)).then(output => process.stdout.write(output)).catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
});
