import path from 'node:path';
import fs from 'fs-extra';
import {isFileServingAllowed, normalizePath, send} from 'vite';
import type {HtmlTagDescriptor, Plugin, ViteDevServer} from 'vite';
import {generateLibDoc} from '../docs/lib-doc-generator';
import type {LibInfo} from '../libs/lib-info';

/**
 * Convert scoped lib key to a URL-friendly name without `/`.
 * e.g. "@zentao/form-designer" → "zentao_form-designer"
 */
function toFriendlyLibUrlName(name: string): string {
    const match = /^@([^/]+)\/(.+)$/.exec(name);
    return match ? `${match[1]}_${match[2]}` : name;
}

/**
 * Prefer exact libs key match; otherwise short name (last `/` segment);
 * then scope_pkg form ("zentao_form-designer" → "@zentao/form-designer").
 * Short-name conflicts: first hit wins.
 */
function resolveLibName(name: string, libs: Record<string, LibInfo>): string | null {
    if (libs[name]) {
        return name;
    }
    for (const key of Object.keys(libs)) {
        const shortName = key.includes('/') ? key.slice(key.lastIndexOf('/') + 1) : key;
        if (shortName === name) {
            return key;
        }
    }
    for (const key of Object.keys(libs)) {
        if (toFriendlyLibUrlName(key) === name) {
            return key;
        }
    }
    return null;
}

function getLibNameFromUrl(url: string, libs?: Record<string, LibInfo>): string | null {
    const pathname = url.split('?')[0].split('#')[0];
    if (!/^\/(lib\/)?[\w-\d%]+\/?$/.test(pathname)) {
        return null;
    }
    const name = decodeURIComponent(pathname.replace('/lib/', '/').slice(1).split('/')[0]);
    if (!libs) {
        return name;
    }
    return resolveLibName(name, libs);
}

function isWithin(file: string, directory: string) {
    const relative = path.relative(directory, file);
    return relative !== '..' && !relative.startsWith(`..${path.sep}`) && !path.isAbsolute(relative);
}

export default function configDevServer(options: {rootPath: string; libsCache: Record<string, LibInfo>; sources: string[]; configFiles?: string[]; watchExtensions?: boolean}): Plugin {
    const {rootPath, libsCache, sources} = options;
    const visited = new Map<string, LibInfo>();
    let cleanup: (() => void) | undefined;

    async function renderMarkdown(lib: LibInfo) {
        for (const name of ['dev.md', 'README.md']) {
            const file = path.join(lib.zui.path, name);
            try {
                return {file, content: generateLibDoc(await fs.readFile(file, 'utf8'), lib.zui.name)};
            } catch (error) {
                if ((error as NodeJS.ErrnoException).code !== 'ENOENT') throw error;
            }
        }
        return {file: path.join(lib.zui.path, 'dev.md'), content: '<h1>未找到调试文档</h1><p>请在组件库目录中创建 dev.md 或 README.md。</p>'};
    }

    async function updateMarkdown(file: string, server: ViteDevServer) {
        const lib = visited.get(path.dirname(file));
        if (!lib || !/^(README|dev)\.md$/.test(path.basename(file))) return false;
        const result = await renderMarkdown(lib);
        if (visited.get(path.dirname(file)) !== lib) return false;
        server.ws.send('zui:lib-page-updated', {
            libName: lib.zui.name,
            path: path.relative(rootPath, result.file),
            content: result.content,
        });
        return true;
    }

    function isStructure(file: string) {
        if (options.configFiles?.includes(file)) return true;
        if (options.watchExtensions && file === path.join(rootPath, 'exts/libs.json')) return true;
        if (!/^(package\.json|tailwind\.(cjs|js))$/.test(path.basename(file))) return false;
        return sources.some((source) => {
            const relative = path.relative(source, file);
            return !relative.startsWith(`..${path.sep}`) && !path.isAbsolute(relative)
                && !relative.split(path.sep).some(part => part === 'node_modules' || part === '.git');
        });
    }

    return {
        name: 'config-dev-server',
        configureServer(server) {
            const publicRoots = Promise.all(Object.values(libsCache).map(lib => fs.realpath(path.join(lib.zui.path, 'public')).catch(() => undefined)));
            let timer: ReturnType<typeof setTimeout> | undefined;
            const onFile = (event: string, file: string) => {
                if (!['add', 'change', 'unlink'].includes(event)) return;
                if (isStructure(file)) {
                    clearTimeout(timer);
                    timer = setTimeout(() => {
                        void server.restart().catch(error => server.config.logger.error(String(error)));
                    }, 100);
                } else if (event !== 'change') {
                    void updateMarkdown(file, server).catch(error => server.config.logger.error(String(error)));
                }
            };
            server.watcher.add([...sources, ...options.configFiles ?? [], ...(options.watchExtensions ? [path.join(rootPath, 'exts/libs.json')] : [])]);
            server.watcher.on('all', onFile);
            cleanup = () => {
                clearTimeout(timer);
                server.watcher.off('all', onFile);
                visited.clear();
            };
            server.middlewares.use(async (req, res, next) => {
                try {
                    if (!req.url) return next();
                    const pathname = req.url.split('?')[0];
                    // Library public bundles are already built; source transforms can corrupt them.
                    if ((req.method === 'GET' || req.method === 'HEAD') && /\/public\/.*\.(?:[cm]?js|css)$/.test(pathname)) {
                        const query = new URLSearchParams(req.url.split('?')[1]);
                        const isModuleRequest = ['raw', 'url', 'import', 'worker', 'sharedworker', 'inline'].some(key => query.has(key));
                        const isLinkedCSS = req.headers.accept?.includes('text/css') || query.has('direct');
                        if (!isModuleRequest && (!pathname.endsWith('.css') || isLinkedCSS)) {
                            const decoded = decodeURIComponent(pathname);
                            const fsPath = decoded.slice('/@fs/'.length);
                            const requestedFile = decoded.startsWith('/@fs/')
                                ? path.resolve(/^(?:\/|[a-z]:)/i.test(fsPath) ? fsPath : `/${fsPath}`)
                                : path.resolve(rootPath, `.${decoded}`);
                            const directory = await fs.realpath(path.dirname(requestedFile)).catch(() => undefined);
                            const publicRoot = directory && (await publicRoots).find(root => root && isWithin(directory, root));
                            if (publicRoot) {
                                const file = await fs.realpath(requestedFile).catch(() => undefined);
                                if (!file) return next();
                                if (!isWithin(file, publicRoot) || !isFileServingAllowed(server.config, normalizePath(requestedFile)) || !isFileServingAllowed(server.config, normalizePath(file))) {
                                    res.statusCode = 403;
                                    res.end('Restricted public asset');
                                    return;
                                }
                                if (!(await fs.stat(file)).isFile()) return next();
                                send(req, res, await fs.readFile(file), pathname.endsWith('.css') ? 'text/css; charset=utf-8' : 'text/javascript; charset=utf-8', {headers: server.config.server.headers});
                                return;
                            }
                        }
                    }
                    if (pathname === '/libs/') {
                        res.setHeader('Content-Type', 'application/json');
                        res.end(JSON.stringify(libsCache));
                        return;
                    }
                    if (/^\/lib\/[\w%-]+\/(README|dev)\.md$/.test(pathname)) {
                        const rawName = decodeURIComponent(pathname.split('/')[2]);
                        const name = resolveLibName(rawName, libsCache);
                        if (!name) return next();
                        const lib = libsCache[name];
                        visited.set(lib.zui.path, lib);
                        const {content} = await renderMarkdown(lib);
                        res.setHeader('Content-Type', 'text/html');
                        res.end(content);
                        return;
                    }
                    next();
                } catch (error) {
                    next(error);
                }
            });
        },
        async handleHotUpdate({file, server}) {
            if (await updateMarkdown(file, server)) return [];
        },
        closeBundle() {
            cleanup?.();
        },
        transformIndexHtml(html, ctx) {
            if (!ctx.originalUrl) return html;
            const libName = getLibNameFromUrl(ctx.originalUrl, libsCache);
            const lib = libName && libsCache[libName];
            if (!lib) return html;
            const devEntryFile = ['dev.ts', 'dev.tsx', 'src/main.ts'].map(name => path.join(lib.zui.path, name)).find(file => fs.existsSync(file));
            if (!devEntryFile) return html;
            const relative = path.relative(rootPath, devEntryFile);
            const outside = relative.startsWith(`..${path.sep}`) || path.isAbsolute(relative);
            const url = outside ? `/@fs/${normalizePath(devEntryFile)}` : `/${normalizePath(relative)}`;
            const descriptors: HtmlTagDescriptor[] = [{
                tag: 'script',
                attrs: {type: 'module', src: encodeURI(url).replace(/[?#]/g, encodeURIComponent)},
                injectTo: 'body',
            }];
            if (libName !== 'utilities' && libName !== 'base') {
                descriptors.push({tag: 'script', attrs: {type: 'module', src: '/lib/utilities/src/main.ts'}, injectTo: 'body'});
            }
            return descriptors;
        },
    };
}
