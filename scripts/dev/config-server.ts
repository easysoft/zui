import path from 'path';
import fs from 'fs-extra';
import {HtmlTagDescriptor, Plugin} from 'vite';
import minimist from 'minimist';
import {generateLibDoc} from '../docs/lib-doc-generator';
import {getLibs} from '../libs/query';
import {LibInfo} from '../libs/lib-info';

function getLibNameFromUrl(url: string): string | null {
    if (/^\/(lib\/)?[\w-\d]+\/?$/.test(url)) {
        return url.replace('/lib/', '/').slice(1).split('/')[0];
    }
    return null;
}

let libsCache: Record<string, LibInfo> | undefined;
const argv = minimist(process.argv.slice(4));

export default (options: {rootPath: string}): Plugin => ({
    name: 'config-dev-server',
    configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
            if (!req.url) {
                return next();
            }

            if (req.url.startsWith('/libs/')) {
                let libsPath = req.url.substring('/libs/'.length);
                if (!libsPath.length) {
                    libsPath = `${libsPath}${argv.lib ?? 'buildIn'}`;
                }
                libsCache = await getLibs(libsPath);
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(libsCache));
                return;
            }

            if (/^\/lib\/[\w-\d]+\/README.md$/.test(req.url)) {
                const libName = req.url.replace('/lib/', '').split('/')[0];
                if (!libsCache) {
                    libsCache = await getLibs();
                }

                let markdownFile = path.join(options.rootPath, req.url);
                const libInfo = libsCache[libName];
                if (libInfo) {
                    markdownFile = path.join(libInfo.zui.path, 'README.md');
                }

                const markdownFileExits = await fs.pathExists(markdownFile);
                if (markdownFileExits) {
                    const content = await fs.readFile(markdownFile, 'utf-8');
                    const html = generateLibDoc(content, libName);
                    res.setHeader('Content-Type', 'text/html');
                    res.end(html);
                    return;
                } else {
                    res.setHeader('Content-Type', 'text/html');
                    res.end([
                        '<h1>404</h1>',
                        '<p>Cannot found the README.md file for development, your can create one:</p>',
                        `<pre class="underline"><code>${markdownFile}</code></pre>`,
                    ].join('\n'));
                    return;
                }
            }
            next();
        });
    },
    handleHotUpdate({file, server}) {
        const libPath = path.resolve(options.rootPath, 'lib');
        const extsPath = path.resolve(options.rootPath, 'exts');
        if ((file.startsWith(libPath) || file.startsWith(extsPath)) && file.endsWith('/README.md')) {
            const fileParts = file.split('/');
            const libName = fileParts[fileParts.length - 2];
            if (libName) {
                const content = fs.readFileSync(file, 'utf-8');
                const html = generateLibDoc(content, libName);
                server.ws.send('zui:lib-page-updated', {
                    libName: libName,
                    path: path.relative(options.rootPath, file),
                    content: html,
                });
                return [];
            }
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
