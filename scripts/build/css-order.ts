import postcss, {type ChildNode, type Node} from 'postcss';
import {isCSSRequest, normalizePath, type Plugin} from 'vite';

const start = '! __ZUI_CSS_START__:';
const end = '! __ZUI_CSS_END__';

/** Order extracted styles by the generated entry, without changing JS execution. */
export function cssOrderPlugin(entry: string, libraryRoots: string[], recordCss?: (file: string, source: string, contributions: {id: string; bytes: number}[]) => void): Plugin {
    const paths = libraryRoots.map(path => `${normalizePath(path)}/`).sort((a, b) => b.length - a.length);
    const ownerOf = (id: string) => paths.find(path => id.startsWith(path)) ?? id.match(/^.*\/node_modules\/(?:@[^/]+\/)?[^/]+\//)?.[0];
    return {
        name: 'zui:css-order',
        apply: 'build',
        transform(code, id) {
            if (!isCSSRequest(id) || !code.trim() || /[?&](?:inline|raw|url)(?:[=&]|$)/.test(id)) {
                return;
            }
            // Normal Vite plugins run after CSS processing and before CSS extraction.
            return {code: `/*${start}${encodeURIComponent(id)}*/${code}/*${end}*/`, map: null};
        },
        generateBundle: {
            order: 'post',
            handler(_options, bundle) {
                const main = this.getModuleInfo(normalizePath(entry));
                if (!main) {
                    this.error(`Cannot determine CSS order: build entry "${entry}" is missing.`);
                }
                const entryIds = new Set(main.importedIds);
                const libraryOrder = new Map<string, number>();
                main.importedIds.forEach((id, index) => {
                    const owner = ownerOf(id);
                    if (owner && !libraryOrder.has(owner)) {
                        libraryOrder.set(owner, index);
                    }
                });
                const visited = new Set<string>();
                const order = new Map<string, {group: number; index: number}>();
                main.importedIds.forEach((entryId, group) => {
                    const owner = ownerOf(entryId);
                    const lazy: string[] = [];
                    const visit = (id: string) => {
                        const library = ownerOf(id);
                        // Explicit entries own their styles even when another library imports them first.
                        if (visited.has(id) || (id !== entryId && entryIds.has(id)) || (library && libraryOrder.has(library) && library !== owner)) {
                            return;
                        }
                        visited.add(id);
                        const info = this.getModuleInfo(id);
                        info?.importedIds.forEach(visit);
                        if (isCSSRequest(id)) {
                            order.set(id, {group, index: order.size});
                        }
                        lazy.push(...info?.dynamicallyImportedIds ?? []);
                    };
                    visit(entryId);
                    for (const id of lazy) {
                        visit(id);
                    }
                });
                const position = (id: string) => order.get(id) ?? {
                    group: libraryOrder.get(ownerOf(id) ?? '') ?? main.importedIds.length,
                    index: Number.MAX_SAFE_INTEGER,
                };
                for (const asset of Object.values(bundle)) {
                    if (asset.type !== 'asset' || !asset.fileName.endsWith('.css') || typeof asset.source !== 'string' || !asset.source.includes(start)) {
                        continue;
                    }
                    const css = postcss.parse(asset.source);
                    const blocks: {id: string; nodes: ChildNode[]}[] = [];
                    let current: ChildNode[] | undefined;
                    for (const node of [...css.nodes]) {
                        if (node.type === 'comment' && node.text.startsWith(start)) {
                            current = [];
                            blocks.push({id: decodeURIComponent(node.text.slice(start.length)), nodes: current});
                            node.remove();
                        } else if (node.type === 'comment' && node.text === end) {
                            current = undefined;
                            node.remove();
                        } else if (current) {
                            current.push(node);
                            node.remove();
                        }
                    }
                    blocks.sort((a, b) => {
                        const first = position(a.id);
                        const second = position(b.id);
                        return first.group - second.group || first.index - second.index;
                    });
                    css.append(blocks.flatMap(block => block.nodes));
                    asset.source = css.toString();
                    if (recordCss) {
                        const owners = new Map<Node, string>(blocks.flatMap(block => block.nodes.map(node => [node, block.id] as const)));
                        const sizes = new Map<string, number>();
                        postcss.stringify(css, (text, node) => {
                            let top: Node | undefined = node;
                            while (top?.parent && top.parent !== css) top = top.parent;
                            const id = (top && owners.get(top)) ?? '';
                            sizes.set(id, (sizes.get(id) ?? 0) + Buffer.byteLength(text));
                        });
                        recordCss(asset.fileName, asset.source, [...sizes].map(([id, bytes]) => ({id, bytes})));
                    }
                }
            },
        },
    };
}
