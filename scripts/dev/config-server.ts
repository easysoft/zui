import path from 'path';
import fs from 'fs-extra';
import {HtmlTagDescriptor, Plugin} from 'vite';
import {generateLibDoc} from '../docs/lib-doc-generator';
import {getLibs} from '../libs/query';
import {LibInfo} from '../libs/lib-info';

function getLibNameFromUrl(url: string): string | null {
    if (/^\/(lib\/)?[\w-\d%]+\/?$/.test(url)) {
        return decodeURIComponent(url.replace('/lib/', '/').slice(1).split('/')[0]);
    }
    return null;
}

const buildLibs = process.env.BUILD_LIBS ?? 'buildIn';
let libsCache: Record<string, LibInfo> | undefined = await getLibs(buildLibs.split(','));
const libsPaths = new Map<string, LibInfo>();

export default (options: {rootPath: string}): Plugin => ({
    name: 'config-dev-server',
    configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
            if (!req.url) {
                return next();
            }

            if (req.url.startsWith('/libs/')) {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(libsCache));
                return;
            }

            if (/^\/lib\/[\w-\d%]+\/(README|dev).md$/.test(req.url)) {
                const libName = decodeURIComponent(req.url.replace('/lib/', '').split('/')[0]);
                if (!libsCache) {
                    libsCache = await getLibs();
                }

                let markdownFile = path.join(options.rootPath, req.url);
                const libInfo = libsCache[libName];
                let markdownFileExits = false;
                if (libInfo) {
                    markdownFile = path.join(libInfo.zui.path, 'dev.md');
                    markdownFileExits = await fs.pathExists(markdownFile);
                    if (!markdownFileExits) {
                        markdownFile = path.join(libInfo.zui.path, 'README.md');
                    }
                    libsPaths.set(libInfo.zui.path, libInfo);
                }
                if (!markdownFileExits) {
                    markdownFileExits = await fs.pathExists(markdownFile);
                }
                if (markdownFileExits) {
                    const content = await fs.readFile(markdownFile, 'utf-8');
                    const html = generateLibDoc(content, libName);
                    res.setHeader('Content-Type', 'text/html');
                    res.end(html);
                    return;
                } else {
                    res.setHeader('Content-Type', 'text/html');
                    res.end([
                        `<h1>404 - ${libInfo?.zui.displayName ?? libName}</h1>`,
                        '<p>Cannot found the README.md or dev.md file in library folder, your can create one:</p>',
                        `<pre class="lighter border-light"><code><span class="text-primary">echo</span> <span class="text-success">"# ${libInfo?.zui.displayName ?? libName}"</span> &gt; ${markdownFile}</code></pre>`,
                    ].join('\n'));
                    return;
                }
            }
            next();
        });
    },
    handleHotUpdate({file, server}) {
        if (/\/(README|dev).md$/g.test(file)) {
            const libPath = path.dirname(file);
            const libName = libsPaths.get(libPath)?.zui.name;
            if (!libName) {
                return;
            }
            const content = fs.readFileSync(file, 'utf-8');
            const html = generateLibDoc(content, libName);
            server.ws.send('zui:lib-page-updated', {
                libName: libName,
                path: path.relative(options.rootPath, file),
                content: html,
            });
            return [];
        }
    },
    transformIndexHtml(html, ctx) {
        if (!ctx.originalUrl) {
            return html;
        }
        const libName = getLibNameFromUrl(ctx.originalUrl);
        const lib = libName && libsCache && libsCache[libName];
        if (lib) {
            let devEntryFile = path.join(lib.zui.path, 'dev.ts');
            if (!fs.existsSync(devEntryFile)) {
                devEntryFile = path.join(lib.zui.path, 'src/main.ts');
            }
            const descriptors: HtmlTagDescriptor[] = [{
                tag: 'script',
                attrs: {
                    type: 'module',
                    src: `/${path.relative(options.rootPath, devEntryFile)}`,
                },
                injectTo: 'body',
            }];
            if (libName !== 'utilities') {
                descriptors.push({
                    tag: 'script',
                    attrs: {
                        type: 'module',
                        src: '/lib/utilities/src/main.ts',
                    },
                    injectTo: 'body',
                });
            }
            return descriptors;
        }
        return html;
    },
});
