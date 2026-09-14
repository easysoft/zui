import Path from 'node:path';
import fs from 'fs-extra';
import ts from 'typescript';

/** Emit the actual public type graph, with repository aliases made package-local. */
export function emitWebComponentTypes(root: string, output: string, entries: string[], versions: Record<string, string>): Record<string, string> {
    const configPath = Path.join(root, 'tsconfig.typecheck.json');
    const loaded = ts.readConfigFile(configPath, ts.sys.readFile);
    if (loaded.error) {
        throw new Error(ts.flattenDiagnosticMessageText(loaded.error.messageText, '\n'));
    }
    const config = ts.parseJsonConfigFileContent(loaded.config, ts.sys, root);
    const options: ts.CompilerOptions = {
        ...config.options,
        noEmit: false,
        declaration: true,
        emitDeclarationOnly: true,
        declarationMap: false,
        rootDir: root,
        outDir: output,
    };
    const program = ts.createProgram([...entries, ...config.fileNames.filter(file => file.endsWith('.d.ts'))], options);
    const dependencies = new Set<string>();
    const files = new Map<string, string>();
    const emit = program.emit(undefined, (file, content, _bom, _onError, sources) => {
        const source = sources?.[0]?.fileName;
        if (!source) {
            throw new Error(`Missing declaration source for ${file}`);
        }
        // Styles are distributed separately and are not part of the type graph.
        content = content.replace(/^import\s+['"][^'"]+\.css['"];\s*$/gm, '');
        if (!content.trim()) {
            content = 'export {};\n';
        }
        content = content.replace(/(['"])(@zui\/[^'"]+)\1/g, (_match, quote: string, specifier: string) => {
            const resolved = ts.resolveModuleName(specifier, source, options, ts.sys).resolvedModule;
            if (!resolved || !resolved.resolvedFileName.startsWith(`${root}/lib/`)) {
                throw new Error(`Cannot package declaration import ${specifier} from ${source}`);
            }
            const target = Path.join(output, Path.relative(root, resolved.resolvedFileName)).replace(/\.tsx?$/, '.d.ts');
            const relative = Path.relative(Path.dirname(file), target).replaceAll(Path.sep, '/').replace(/\.d\.ts$/, '');
            return `${quote}${relative.startsWith('.') ? relative : `./${relative}`}${quote}`;
        });
        const ast = ts.createSourceFile(file, content, ts.ScriptTarget.Latest, true);
        const collect = (node: ts.Node) => {
            if ((ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) && node.moduleSpecifier && ts.isStringLiteral(node.moduleSpecifier)) {
                addDependency(node.moduleSpecifier.text, source);
            } else if (ts.isImportTypeNode(node) && ts.isLiteralTypeNode(node.argument) && ts.isStringLiteral(node.argument.literal)) {
                addDependency(node.argument.literal.text, source);
            }
            ts.forEachChild(node, collect);
        };
        collect(ast);
        files.set(file, content);
    });
    const diagnostics = [...config.errors, ...ts.getPreEmitDiagnostics(program), ...emit.diagnostics];
    if (diagnostics.length) {
        throw new Error(ts.formatDiagnosticsWithColorAndContext(diagnostics, {
            getCanonicalFileName: file => file,
            getCurrentDirectory: () => root,
            getNewLine: () => '\n',
        }));
    }
    for (const [file, content] of files) {
        fs.outputFileSync(file, content);
    }
    const ambientFiles = config.fileNames.filter(file => file.startsWith(`${root}/lib/`) && file.endsWith('.d.ts'));
    for (const file of ambientFiles) {
        fs.copyFileSync(file, Path.join(output, Path.relative(root, file)));
    }
    for (const entry of entries) {
        const file = Path.join(output, Path.relative(root, entry)).replace(/\.tsx?$/, '.d.ts');
        const references = ambientFiles.map((ambient) => {
            const relative = Path.relative(Path.dirname(file), Path.join(output, Path.relative(root, ambient))).replaceAll(Path.sep, '/');
            return `/// <reference path="${relative}" />`;
        });
        fs.writeFileSync(file, `${references.join('\n')}\n${fs.readFileSync(file, 'utf8')}`);
    }
    return Object.fromEntries([...dependencies].sort().map((name) => {
        const version = versions[name];
        if (!version || version.startsWith('workspace:')) {
            throw new Error(`Missing distributable type dependency: ${name}`);
        }
        return [name, version];
    }));

    function addDependency(specifier: string, source: string): void {
        if (!specifier.startsWith('.') && !specifier.startsWith('/')) {
            dependencies.add(specifier.split('/').slice(0, specifier.startsWith('@') ? 2 : 1).join('/'));
            const resolved = ts.resolveModuleName(specifier, source, options, ts.sys).resolvedModule;
            const externalTypes = resolved?.resolvedFileName.match(/\/node_modules\/(@types\/[^/]+)\//)?.[1];
            if (externalTypes) {
                dependencies.add(externalTypes);
            }
        }
    }
}
