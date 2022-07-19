import path from 'path';
import fs from 'fs';

export default (options: {libRoot: string}) => ({
    name: 'html-ext-fallback',
    configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
            if (/^\/[\w-\d]+\/?$/.test(req.url)) {
                const libName = req.url.slice(1).split('/')[0];
                const libPath = path.resolve(options.libRoot, libName);
                if (fs.existsSync(libPath)) {
                    req.url = `/lib/${libName}/index.html`;
                    return next();
                }
            }
            next();
        });
    },
});
