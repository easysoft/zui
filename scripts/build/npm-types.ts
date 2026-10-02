import Path from 'node:path';
import fs from 'fs-extra';
import ts from 'typescript';

export interface NpmTypesOptions {
    rootDir: string;
    runtimeEntry: string;
    outDir: string;
}

export async function emitNpmTypes({rootDir, runtimeEntry, outDir}: NpmTypesOptions) {
    const root = Path.resolve(rootDir);
    runtimeEntry = Path.resolve(root, runtimeEntry);
    outDir = Path.resolve(root, outDir);
    const typesDir = Path.join(outDir, 'types');
    const entry = Path.join(Path.dirname(runtimeEntry), 'npm-types.ts');
    const logicalEntry = Path.join(root, 'build/npm-types.ts');
    const source = await fs.readFile(runtimeEntry, 'utf8');

    // Resolve collisions in the aggregate package without renaming workspace APIs.
    await fs.writeFile(entry, `${source}
export type {ClassNameLike, CustomRenderResult, CustomRenderResultGenerator, CustomRenderResultItem, CustomRenderResultList} from '@zui/core';
export type {FileInfo, FileInfo as FileListFileInfo} from '@zui/file-list';
export type {FileInfo as FileSelectorFileInfo} from '@zui/file-selector';
export type {BlockProps, BlockProps as DashboardBlockProps} from '@zui/dashboard';
export type {BlockProps as DTableBlockProps, CustomRenderResult as DTableCustomRenderResult, CustomRenderResultGenerator as DTableCustomRenderResultGenerator, CustomRenderResultList as DTableCustomRenderResultList} from '@zui/dtable';
`);

    const config = ts.readConfigFile(Path.join(root, 'tsconfig.typecheck.json'), ts.sys.readFile);
    if (config.error) {
        throw new Error(ts.flattenDiagnosticMessageText(config.error.messageText, '\n'));
    }
    const parsed = ts.parseJsonConfigFileContent(config.config, ts.sys, root);
    const options: ts.CompilerOptions = {
        ...parsed.options,
        noEmit: false,
        declaration: true,
        emitDeclarationOnly: true,
        declarationMap: false,
        noEmitOnError: true,
        rootDir: root,
        outDir: typesDir,
    };
    const program = ts.createProgram([entry], options);

    function checkDiagnostics(diagnostics: readonly ts.Diagnostic[]) {
        if (diagnostics.length) {
            throw new Error(ts.formatDiagnosticsWithColorAndContext(diagnostics, {
                getCanonicalFileName: file => file,
                getCurrentDirectory: () => root,
                getNewLine: () => '\n',
            }));
        }
    }

    checkDiagnostics([...parsed.errors, ...ts.getPreEmitDiagnostics(program)]);
    await fs.emptyDir(typesDir);

    // Resolve workspace aliases and directory imports while source paths are known.
    // Explicit .js specifiers also work in Node16/NodeNext declaration consumers.
    const rewriteImports: ts.TransformerFactory<ts.SourceFile | ts.Bundle> = context => (file) => {
        if (!ts.isSourceFile(file)) {
            return file;
        }
        const resolve = (specifier: ts.StringLiteralLike) => {
            const resolved = ts.resolveModuleName(specifier.text, file.fileName, options, ts.sys).resolvedModule;
            const resolvedPath = resolved && Path.resolve(resolved.resolvedFileName);
            if (!resolvedPath || resolvedPath.includes(`${Path.sep}node_modules${Path.sep}`) || !resolvedPath.startsWith(`${root}${Path.sep}`)) {
                return specifier;
            }
            let relative = Path.relative(Path.dirname(Path.resolve(file.fileName) === entry ? logicalEntry : file.fileName), resolvedPath).replace(/\\/g, '/').replace(/\.(?:d\.)?tsx?$/, '.js');
            if (!relative.startsWith('.')) {
                relative = `./${relative}`;
            }
            return context.factory.createStringLiteral(relative);
        };
        const visit: ts.Visitor = (node) => {
            if (ts.isImportDeclaration(node) && ts.isStringLiteral(node.moduleSpecifier)) {
                if (node.moduleSpecifier.text.endsWith('.css')) {
                    return undefined;
                }
                return context.factory.updateImportDeclaration(node, node.modifiers, node.importClause, resolve(node.moduleSpecifier), node.attributes);
            }
            if (ts.isExportDeclaration(node) && node.moduleSpecifier && ts.isStringLiteral(node.moduleSpecifier)) {
                return context.factory.updateExportDeclaration(node, node.modifiers, node.isTypeOnly, node.exportClause, resolve(node.moduleSpecifier), node.attributes);
            }
            if (ts.isImportTypeNode(node) && ts.isLiteralTypeNode(node.argument) && ts.isStringLiteral(node.argument.literal)) {
                return context.factory.updateImportTypeNode(node, context.factory.createLiteralTypeNode(resolve(node.argument.literal)), node.attributes, node.qualifier, ts.visitNodes(node.typeArguments, visit, ts.isTypeNode), node.isTypeOf);
            }
            return ts.visitEachChild(node, visit, context);
        };
        const transformed = ts.visitNode(file, visit, ts.isSourceFile)!;
        return transformed.statements.length ? transformed : context.factory.updateSourceFile(transformed, [
            context.factory.createExportDeclaration(undefined, false, context.factory.createNamedExports([])),
        ]);
    };

    // Only the aggregate entry moves; imports are resolved against its real source above.
    const entryDeclaration = Path.join(typesDir, Path.relative(root, entry)).replace(/\.ts$/, '.d.ts');
    const writeFile: ts.WriteFileCallback = (fileName, data, writeByteOrderMark) => {
        ts.sys.writeFile(Path.resolve(fileName) === entryDeclaration ? Path.join(typesDir, 'build/npm-types.d.ts') : fileName, data, writeByteOrderMark);
    };
    const result = program.emit(undefined, writeFile, undefined, true, {afterDeclarations: [rewriteImports]});
    checkDiagnostics(result.diagnostics);
    if (result.emitSkipped) {
        throw new Error('ZUI declaration emit was skipped.');
    }

    // Share the same declaration graph between ESM and CommonJS, including globals.
    await fs.writeJSON(Path.join(typesDir, 'package.json'), {type: 'commonjs'});
    const ambientTypes = 'lib/core/src/types/tinykeys.d.ts';
    await fs.copy(Path.join(root, ambientTypes), Path.join(typesDir, ambientTypes));
    const declarations = `/// <reference path="./types/${ambientTypes}" />
export * from './types/build/npm-types.js';
`;
    await fs.writeFile(Path.join(outDir, 'zui.d.ts'), declarations);
    await fs.writeFile(Path.join(outDir, 'zui.d.cts'), declarations);
    await fs.writeFile(Path.join(typesDir, 'css.d.ts'), 'export {};\n');
    console.log(`TypeScript declarations written to ${outDir}`);
}
