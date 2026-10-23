import Path from 'node:path';
import {fileURLToPath} from 'node:url';
import fs from 'fs-extra';
import {AI_ID, extractAiDocument, parseAiDocument} from './document';
import {buildAiIndex, checkAiCatalog, readAiCatalog} from './catalog';

const HELP = `ZUI AI 使用参考\n\n用法：\n  pnpm ai:build\n  pnpm ai:check\n  pnpm ai:read --lib <name> [--section <id> [--entry <id>]]\n\nbuild 自动生成根 ai.md；check 只读校验；read 原样输出文档或选定范围。\n`;

export function parseAiArgs(args: string[]): {command: string; lib?: string; section?: string; entry?: string} {
    if (args.includes('--help') || args.includes('-h')) {
        return {command: 'help'};
    }
    const [command, ...options] = args;
    if (!['build', 'check', 'read'].includes(command)) {
        throw new Error('请指定 build、check 或 read；使用 --help 查看用法。');
    }
    const result: {command: string; lib?: string; section?: string; entry?: string} = {command};
    for (let index = 0; index < options.length; index += 2) {
        const name = options[index];
        const value = options[index + 1];
        if (command !== 'read' || !['--lib', '--section', '--entry'].includes(name)) {
            throw new Error(`未知参数：${name}`);
        }
        const key = name.slice(2) as 'lib' | 'section' | 'entry';
        if (result[key] !== undefined) {
            throw new Error(`参数重复：${name}`);
        }
        if (!value || !AI_ID.test(value)) {
            throw new Error(`${name} 需要小写 ASCII 名称，不允许路径或空值。`);
        }
        result[key] = value;
    }
    if (command === 'read' && !result.lib) {
        throw new Error('read 必须指定 --lib。');
    }
    if (result.entry && !result.section) {
        throw new Error('--entry 必须同时指定 --section。');
    }
    return result;
}

export async function runAiCli(args: string[], root = process.cwd()): Promise<{code: number; output: string}> {
    const {command, lib, section, entry} = parseAiArgs(args);
    if (command === 'help') {
        return {code: 0, output: HELP};
    }
    if (command === 'build') {
        const catalog = await buildAiIndex(root);
        const count = catalog.libraries.filter(library => library.document).length;
        return {code: 0, output: `已生成 ai.md：${count}/${catalog.libraries.length} 个库具有有效文档，顶层 wip 排除 ${catalog.excluded.length} 个。\n`};
    }
    if (command === 'check') {
        const issues = await checkAiCatalog(root);
        return {code: issues.length ? 1 : 0, output: issues.length ? `${issues.join('\n')}\n` : 'AI 文档结构、链接、覆盖和全局索引检查通过。\n'};
    }
    const catalog = await readAiCatalog(root);
    const library = catalog.libraries.find(item => item.id === lib);
    if (!library) {
        throw new Error(`没有发现内置库 “${lib}”${catalog.excluded.includes(lib!) ? '（顶层 wip 已排除）' : ''}。`);
    }
    const file = Path.join(library.lib.zui.path, 'ai.md');
    if (!await fs.pathExists(file)) {
        throw new Error(`库 “${lib}” 缺少 ai.md。`);
    }
    const result = parseAiDocument(await fs.readFile(file, 'utf8'), lib!);
    if (!result.document) {
        throw new Error(`lib/${lib}/ai.md:\n${result.issues.join('\n')}`);
    }
    return {code: 0, output: extractAiDocument(result.document, section, entry)};
}

if (process.argv[1] && Path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
    runAiCli(process.argv.slice(2)).then(({code, output}) => {
        (code ? process.stderr : process.stdout).write(output);
        process.exitCode = code;
    }).catch((error: unknown) => {
        console.error(error instanceof Error ? error.message : String(error));
        process.exitCode = 1;
    });
}
