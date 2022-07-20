import path from 'path';
import fs from 'fs-extra';
import {Plugin} from 'vite';
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
            const libName = getLibNameFromUrl(req.url);
            if (libName) {
                const libPath = path.resolve(options.rootPath, 'lib', libName);
                const htmlFilePath = path.join(libPath, 'index.html');
                if (fs.existsSync(htmlFilePath)) {
                    req.url = `/lib/${libName}/index.html`;
                    return next();
                }
            } else if (/^\/lib\/[\w-\d]+\/README.md$/.test(req.url)) {
                const markdownFile = path.join(options.rootPath, req.url);
                if (fs.existsSync(markdownFile)) {
                    const content = await fs.readFile(markdownFile, 'utf-8');
                    const html = generateLibDoc(content);
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
                const html = generateLibDoc(content);
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
            const libPath = path.resolve(options.rootPath, 'lib', libName);
            const currentPath = path.join(options.rootPath, ctx.originalUrl);
            const mainFilePath = path.relative(currentPath, path.resolve(libPath, 'src/main.ts'));
            html = html.replace('<script type="module" src="/src/main.ts"></script>', `<script type="module" src="/src/main.ts"></script>\n<script type="module" src="${mainFilePath}"></script>`);
        }
        return html;
    },
});
