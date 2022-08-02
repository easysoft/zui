import path from 'path';
import fs from 'fs-extra';
import {HtmlTagDescriptor, Plugin} from 'vite';
import {generateLibDoc} from './lib-doc-generator';

function getLibNameFromUrl(url: string): string | null {
    if (/^\/(lib\/)?[\w-\d]+\/?$/.test(url)) {
        return url.replace('/lib/', '/').slice(1).split('/')[0];
    }
    return null;
}

export default (options: {rootPath: string}): Plugin => ({
    name: 'config-dev-server',
    configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
            if (!req.url) {
                return next();
            }
            let libName = getLibNameFromUrl(req.url);
            if (libName) {
                const libPath = path.resolve(options.rootPath, 'lib', libName);
                const htmlFilePath = path.join(libPath, 'index.html');
                if (fs.existsSync(htmlFilePath)) {
                    req.url = `/lib/${libName}/index.html`;
                    return next();
                }
            } else if (/^\/lib\/[\w-\d]+\/README.md$/.test(req.url)) {
                libName = req.url.replace('/lib/', '/').slice(1).split('/')[0];
                const markdownFile = path.join(options.rootPath, req.url);
                if (fs.existsSync(markdownFile)) {
                    const content = await fs.readFile(markdownFile, 'utf-8');
                    const html = generateLibDoc(content, libName);
                    res.setHeader('Content-Type', 'text/html');
                    res.end(html);
                    return;
                }
            }
            next();
        });
    },
    handleHotUpdate({file, server}) {
        const libPath = path.resolve(options.rootPath, 'lib');
        if (file.startsWith(libPath) && file.endsWith('/README.md')) {
            const libName = file.substring(libPath.length + 1, file.length - '/README.md'.length);
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
        if (libName) {
            const devEntryFile = path.join(options.rootPath, 'lib', libName, 'dev.ts');
            const hasDevEntry = fs.existsSync(devEntryFile);
            const descriptors: HtmlTagDescriptor[] = [{
                tag: 'script',
                attrs: {
                    type: 'module',
                    src: `/lib/${libName}/${hasDevEntry ? 'dev.ts' : 'src/main.ts'}`,
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
