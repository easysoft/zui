export type ExtensionSelection = true | string[] | undefined;

export const EXTENSION_HELP = 'Use --extensions for all registered extensions, or repeat --extension <group-or-directory>. Built-in libraries are always available.';
const selectionVariable = 'ZUI_SERVICE_EXTENSIONS';

function validateSelection(value: unknown): asserts value is ExtensionSelection {
    if (value === undefined || value === true) return;
    if (!Array.isArray(value) || !value.length || value.some(item => typeof item !== 'string' || !item.trim() || item !== item.trim())) {
        throw new Error(`Invalid extension selection. ${EXTENSION_HELP}`);
    }
}

/** Only consume ZUI options; the selected tool remains responsible for its own CLI. */
export function parseServiceArgs(input: string[], env: NodeJS.ProcessEnv = process.env) {
    const args: string[] = [];
    let extensions: ExtensionSelection;
    const values = input[0] === '--' ? input.slice(1) : input;
    const separator = values.indexOf('--');
    const options = separator < 0 ? values : values.slice(0, separator);
    const help = options.includes('--help') || options.includes('-h');
    if (!help && env.BUILD_LIBS !== undefined) {
        throw new Error(`BUILD_LIBS is no longer supported. ${EXTENSION_HELP}`);
    }
    for (let i = 0; i < values.length; i++) {
        const arg = values[i];
        if (arg === '--') {
            args.push(...values.slice(i));
            break;
        }
        if (/^--(?:lib|exts)(?:=|$)/.test(arg)) {
            throw new Error(`The source option ${arg.split('=')[0]} is no longer supported. ${EXTENSION_HELP}`);
        }
        if (arg === '--extensions') {
            if (Array.isArray(extensions)) throw new Error('--extensions and --extension are mutually exclusive.');
            extensions = true;
        } else if (arg === '--extension' || arg.startsWith('--extension=')) {
            if (extensions === true) throw new Error('--extensions and --extension are mutually exclusive.');
            const value = arg === '--extension' ? values[++i] : arg.slice('--extension='.length);
            if (!value || value.startsWith('-') || !value.trim() || value !== value.trim()) {
                throw new Error(`--extension requires a group or directory. ${EXTENSION_HELP}`);
            }
            extensions = [...(extensions ?? []), value];
        } else if (arg.startsWith('--extensions=')) {
            throw new Error(`--extensions does not accept a value. ${EXTENSION_HELP}`);
        } else {
            args.push(arg);
        }
    }
    return {extensions: Array.isArray(extensions) ? [...new Set(extensions)] : extensions, args, help};
}

/** Internal bridge to config files loaded by the tool's own process. */
export function serviceEnvironment(extensions: ExtensionSelection, env: NodeJS.ProcessEnv = process.env): NodeJS.ProcessEnv {
    validateSelection(extensions);
    const result = {...env};
    delete result.BUILD_LIBS;
    delete result[selectionVariable];
    if (extensions !== undefined) result[selectionVariable] = JSON.stringify(extensions);
    return result;
}

export function readServiceExtensions(env: NodeJS.ProcessEnv = process.env): ExtensionSelection {
    if (env.BUILD_LIBS !== undefined) throw new Error(`BUILD_LIBS is no longer supported. ${EXTENSION_HELP}`);
    const input = env[selectionVariable];
    const value: unknown = input === undefined ? undefined : JSON.parse(input);
    validateSelection(value);
    return value;
}
