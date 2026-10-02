import Path from 'node:path';
import {loadConfigFromFile, mergeConfig, type InlineConfig, type ResolverFunction, type UserConfig} from 'vite';
import {viteZip} from 'vite-plugin-zip-file';
import {createSharedViteConfig} from '../../vite.shared';
import {createPostcssConfig} from './css-config.cjs';
import {getBuildMetadata} from './metadata';
import type {BuildPlan} from './config';

export {ensureExtsTsconfig} from './metadata';

function checkCustomConfig(config: UserConfig) {
    const managedFields = [
        'root', 'base', 'publicDir', 'configFile', 'mode',
        'build.lib', 'build.outDir', 'build.emptyOutDir', 'build.write', 'build.watch',
        'build.minify', 'build.cssMinify', 'build.sourcemap', 'build.cssCodeSplit',
        'build.rollupOptions.input', 'build.rollupOptions.external', 'build.rollupOptions.output',
        'css.postcss', 'css.transformer', 'experimental.renderBuiltUrl',
    ];
    for (const field of managedFields) {
        let value: unknown = config;
        for (const key of field.split('.')) {
            value = value && typeof value === 'object' ? (value as Record<string, unknown>)[key] : undefined;
        }
        if (value !== undefined) {
            throw new Error(`ZUI build: custom Vite field "${field}" is managed by BuildPlan. Set the corresponding build JSON or CLI option instead.`);
        }
    }
}

/** Validate custom configuration before clearing outputs, without loading library presets. */
export async function loadCustomViteConfig(plan: BuildPlan): Promise<UserConfig> {
    let customConfig: UserConfig = {};
    if (plan.viteConfig) {
        const loaded = await loadConfigFromFile({command: 'build', mode: 'production'}, plan.viteConfig, plan.rootDir);
        if (!loaded) {
            throw new Error(`ZUI build: cannot load Vite config "${plan.viteConfig}".`);
        }
        customConfig = loaded.config;
        checkCustomConfig(customConfig);
    }
    return customConfig;
}

/** Create the distribution configuration after library prebuilds have prepared their presets. */
export async function createBuildViteConfig(plan: BuildPlan, customConfig?: UserConfig): Promise<InlineConfig> {
    customConfig ??= await loadCustomViteConfig(plan);
    const metadata = await getBuildMetadata(plan.rootDir, Object.values(plan.libsMap));
    const sharedRuntimes = ['preact', '@preact/signals', '@preact/signals-core', 'cash-dom'];
    const resolveExplicitRuntime: ResolverFunction = function (source, _importer, options) {
        return this.resolve(source, plan.entry, {...options, skipSelf: true});
    };
    const config: InlineConfig = mergeConfig(createSharedViteConfig({
        mode: 'production',
        rootPath: plan.rootDir,
        libsCache: plan.libsMap,
        replacementLibs: plan.libs.map(lib => lib.name),
        appVersion: plan.version,
        ...metadata,
    }), {
        configFile: false,
        root: plan.rootDir,
        mode: 'production',
        base: './',
        publicDir: plan.publicDir,
        resolve: {
            dedupe: sharedRuntimes.filter(name => !plan.dependencies[name]),
            alias: sharedRuntimes.filter(name => plan.dependencies[name]).map(name => ({
                find: name,
                replacement: name,
                customResolver: resolveExplicitRuntime,
            })),
        },
        build: {
            outDir: plan.outDir,
            target: ['chrome107', 'edge107', 'firefox104', 'safari16'],
            lib: {
                entry: plan.entry,
                name: 'zui',
                formats: ['es', 'umd'],
                fileName: (format: string) => `${plan.fileName}${format === 'umd' ? '' : `.${format === 'es' ? 'esm' : format}`}.js`,
                cssFileName: plan.fileName,
            },
            rollupOptions: {
                external: Object.keys(plan.externals),
                output: {
                    globals: plan.externals,
                    assetFileNames: (chunkInfo: {name?: string}) => chunkInfo.name ?? 'noname',
                },
            },
            assetsInlineLimit: 256,
            sourcemap: plan.sourcemap,
            cssMinify: false,
            minify: plan.minify,
        },
        css: {postcss: createPostcssConfig({...plan.css, tailwindConfigs: plan.tailwindConfigs})},
        experimental: {
            renderBuiltUrl(filename: string, {type}: {type: 'public' | 'asset'}) {
                return type === 'public' ? `./${filename}` : {relative: true};
            },
        },
        plugins: plan.zip ? [viteZip({folderPath: plan.outDir, outPath: Path.dirname(plan.zip), zipName: Path.basename(plan.zip)})] : [],
    });
    return mergeConfig(config, customConfig);
}
