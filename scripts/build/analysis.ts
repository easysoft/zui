import Path from 'node:path';
import {gzipSync} from 'node:zlib';
import fs from 'fs-extra';
import glob from 'fast-glob';
import {normalizePath, type Plugin} from 'vite';
import type {BuildPlan} from './config';
import type {LibInfo} from '../libs/lib-info';
import {renderBuildAnalysisHtml} from './analysis-html';

interface Contribution {
    id: string;
    bytes: number;
}

type Category = 'builtin' | 'extension' | 'dependency' | 'generated';

interface PackageSize {
    name: string;
    category: Category;
    bytes: number;
    modules: Contribution[];
}

export interface BuildAnalysisReport {
    schemaVersion: 1;
    name: string;
    version: string;
    notes: string[];
    externals: string[];
    files: {
        file: string;
        kind: 'javascript' | 'css' | 'asset';
        format?: string;
        bytes: number;
        gzipBytes: number;
        metric: 'rendered-js-before-minify' | 'output-bytes';
        packages: PackageSize[];
    }[];
}

const reportNames = ['build-analysis.html', 'build-analysis.json'];
const notes = [
    'JS 按 Rollup tree-shaking 后、最终压缩前的模块代码统计 UTF-8 字节；占比以模块贡献合计为分母，不等于最终文件占比，也不能据此推算移除一个库后的节省量。',
    'CSS 按最终输出片段归属到样式入口；PostCSS @import 展开及 Tailwind 生成内容计入该入口。资源按实际输出文件统计，内联资源已包含在 JS/CSS 中。',
    '原始体积和 gzip 为最终文件的实测字节；gzip 按整文件压缩，不按包拆分。ESM 和 UMD 是不同分发格式，请分别查看。',
    '共享模块在每个输出文件内只计一次；外置依赖不计入包内体积。未输出代码的库不列入贡献表。source map、类型声明及分析报告本身不计入。',
];

/** Observe the existing build; analysis never changes module selection or emitted runtime code. */
export async function createBuildAnalysis(plan: BuildPlan) {
    const libraries = Object.values(plan.libsMap).filter(lib => lib.zui.path);
    const roots = (await Promise.all(libraries.map(async lib => [lib.zui.path, await fs.realpath(lib.zui.path)]
        .map(path => ({lib, path: `${normalizePath(Path.resolve(path))}/`})))))
        .flat().sort((a, b) => b.path.length - a.path.length);
    const byName = new Map(libraries.map(lib => [lib.name, lib]));
    const identity = (lib: LibInfo) => ({name: lib.name, category: (lib.zui.sourceType === 'build-in' ? 'builtin' : lib.zui.sourceType === 'npm' ? 'dependency' : 'extension') as Category});
    const ownerOf = (source: string): {name: string; category: Category; id: string} => {
        const id = normalizePath(source);
        if (!id || id.startsWith('\0')) {
            return {name: '(generated)', category: 'generated', id: id.replace(/\0/g, '') || '(unattributed)'};
        }
        const npm = id.lastIndexOf('/node_modules/');
        const packagePath = npm < 0 ? undefined : id.slice(npm + '/node_modules/'.length);
        const name = packagePath?.match(/^(?:@[^/]+\/)?[^/]+/)?.[0];
        const root = roots.find(item => id.startsWith(item.path) && !id.slice(item.path.length - 1).includes('/node_modules/'));
        if (root) {
            return {...identity(root.lib), id: `${root.lib.name}/${id.slice(root.path.length)}`};
        }
        if (name) {
            const lib = byName.get(name);
            return {...(lib ? identity(lib) : {name, category: 'dependency' as const}), id: packagePath!};
        }
        return {name: '(generated)', category: 'generated', id: normalizePath(Path.relative(plan.rootDir, id)).replace(/build\/run-[^/]+\//g, 'build/')};
    };
    const packages = (contributions: Contribution[]) => {
        const groups = new Map<string, PackageSize>();
        for (const contribution of contributions) {
            if (!contribution.bytes) continue;
            const owner = ownerOf(contribution.id);
            let group = groups.get(owner.name);
            if (!group) {
                group = {name: owner.name, category: owner.category, bytes: 0, modules: []};
                groups.set(owner.name, group);
            }
            group.bytes += contribution.bytes;
            group.modules.push({id: owner.id, bytes: contribution.bytes});
        }
        return [...groups.values()].sort((a, b) => b.bytes - a.bytes || a.name.localeCompare(b.name));
    };
    const chunks = new Map<string, {format: string; contributions: Contribution[]}>();
    const styles = new Map<string, {source: string; contributions: Contribution[]}>();
    const assets = new Map<string, string>();
    const externals = new Set<string>();
    const plugin: Plugin = {
        name: 'zui:build-analysis',
        generateBundle: {
            order: 'post',
            handler(options, bundle) {
                for (const output of Object.values(bundle)) {
                    if (output.type === 'chunk') {
                        for (const id of [...output.imports, ...output.dynamicImports]) {
                            if (!bundle[id]) externals.add(id);
                        }
                        chunks.set(output.fileName, {
                            format: options.format,
                            contributions: Object.entries(output.modules).map(([id, module]) => ({id, bytes: Buffer.byteLength(module.code ?? '')})),
                        });
                    } else if (output.originalFileNames.length === 1) {
                        assets.set(output.fileName, Path.resolve(plan.rootDir, output.originalFileNames[0]));
                    }
                }
            },
        },
    };
    return {
        plugin,
        recordCss(file: string, source: string, contributions: Contribution[]) {
            styles.set(file, {source, contributions});
        },
        async write(directory: string): Promise<BuildAnalysisReport> {
            const names = (await glob('**/*', {cwd: directory, dot: true, onlyFiles: true, followSymbolicLinks: false})).sort();
            if (names.some(name => reportNames.includes(name.toLowerCase()))) {
                throw new Error('Build analysis would overwrite an existing build-analysis.html/json asset.');
            }
            const publicSources = new Map<string, string>();
            for (const lib of plan.libs) {
                if (!lib.zui.path || lib.zui.publicPath === false) continue;
                const publicDir = Path.join(lib.zui.path, 'public');
                for (const file of await glob('**/*', {cwd: publicDir, dot: true, onlyFiles: true})) {
                    publicSources.set(normalizePath(Path.join(lib.zui.publicPath || lib.zui.name, file)), Path.join(publicDir, file));
                }
            }
            const report: BuildAnalysisReport = {schemaVersion: 1, name: plan.name, version: plan.version, notes, externals: [...externals].sort(), files: []};
            for (const file of names) {
                if (/\.(?:map|d\.[cm]?ts)$/.test(file)) continue;
                const content = await fs.readFile(Path.join(directory, file));
                const chunk = chunks.get(file);
                const css = styles.get(file);
                let contributions: Contribution[];
                if (chunk) {
                    contributions = chunk.contributions;
                } else if (css && css.source === content.toString('utf8')) {
                    contributions = css.contributions;
                } else {
                    const source = assets.get(file) ?? publicSources.get(file) ?? '';
                    contributions = [{id: source, bytes: content.length}];
                }
                report.files.push({
                    file, kind: chunk ? 'javascript' : file.endsWith('.css') ? 'css' : 'asset', format: chunk?.format,
                    bytes: content.length, gzipBytes: gzipSync(content).length,
                    metric: chunk ? 'rendered-js-before-minify' : 'output-bytes', packages: packages(contributions),
                });
            }
            const kinds = ['javascript', 'css', 'asset'];
            report.files.sort((a, b) => kinds.indexOf(a.kind) - kinds.indexOf(b.kind) || a.file.localeCompare(b.file));
            await fs.writeFile(Path.join(directory, reportNames[0]), renderBuildAnalysisHtml(report), {flag: 'wx'});
            await fs.writeFile(Path.join(directory, reportNames[1]), `${JSON.stringify(report, null, 4)}\n`, {flag: 'wx'});
            return report;
        },
    };
}

export type BuildAnalysis = Awaited<ReturnType<typeof createBuildAnalysis>>;
