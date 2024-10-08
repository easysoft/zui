import {deepCall} from '@zui/helpers';
import {$, Cash, type Selector} from '../cash';
import {nextGid} from './gid';

export interface CommandContext {
    name: string,
    options: Record<string, unknown>,
    event: Event,
    scope: string,
    prevResult?: unknown,
    element?: HTMLElement,
    abort?: () => void,
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type CommandCallback = (context: CommandContext, params: any[]) => any;

export type CommandEventCallback = (event: Event, data: [context: CommandContext, params: unknown[]]) => void;

export type CommandsBindOptions = {
    scope?: string,
    events?: string,
    onCommand?: CommandCallback,
    commands?: Record<string, CommandCallback>,
    scoped?: boolean,
};

export type CommandsBindInfo = CommandsBindOptions & {
    element: HTMLElement,
    gid: number,
};

export interface CommandExecutionOptions {
    execute: (context: CommandContext, params: unknown[]) => unknown;
    event: Event;
    scope?: string;
    options?: Record<string, unknown>;
    signal?: AbortSignal;
}

export interface CommandExecuteInfo {
    name: string;
    scope: string;
    options: Record<string, unknown>;
    params: unknown[];
}

export interface CommandsExecuteInfo {
    async?: boolean;
    commands: CommandExecuteInfo[];
}

export type CommandLike = string | CommandExecuteInfo | undefined;

export type CommandsLike = string | CommandsExecuteInfo | (string | CommandExecuteInfo)[];

export function parseCommand(commandLike: CommandLike): CommandExecuteInfo | undefined {
    if (!commandLike) {
        return;
    }
    if (typeof commandLike === 'object') {
        return commandLike;
    }
    commandLike = commandLike.replace(/^#/, '');
    if (!commandLike.length) {
        return;
    }
    if (!commandLike.startsWith('/')) {
        commandLike = `/${commandLike}`;
    }
    const url = new URL(window.location.origin + commandLike);
    const [, name = '', ...params] = url.pathname.split('/');
    let finalName = name.trim();
    if (!finalName.length) {
        return;
    }
    let scope = '';
    if (finalName.includes('~')) {
        [finalName, scope] = finalName.split('~');
    }
    return {
        name: finalName,
        scope,
        options: Object.fromEntries([...url.searchParams.entries()].map(([key, value]) => {
            try {
                if (value.includes('%')) {
                    value = decodeURIComponent(value);
                }
                value = JSON.parse(value);
                // eslint-disable-next-line no-empty
            } catch (_) {}
            return [key, value];
        })),
        params: params.map((param) => {
            try {
                if (param.includes('%')) {
                    param = decodeURIComponent(param);
                }
                return JSON.parse(param);
            } catch (_) {
                return param;
            }
        }),
    };
}

export function parseCommands(commandsLike: CommandsLike): CommandsExecuteInfo {
    if (Array.isArray(commandsLike)) {
        return {commands: commandsLike.map(parseCommand).filter(Boolean) as CommandExecuteInfo[]};
    }
    if (typeof commandsLike === 'object') {
        return commandsLike;
    }
    commandsLike = commandsLike.replace(/^#!?/, '');
    const async = commandsLike.includes('>');
    const commands = commandsLike.split(async ? '>' : '|').map(parseCommand);
    return {
        async,
        commands: commands.filter(Boolean) as CommandExecuteInfo[],
    };
}

/**
 * 执行单个命令。
 * Execute single command.
 *
 * @param command 命令。 Command.
 * @param options 选项。 Options.
 * @returns 命令执行结果。 Command execution result.
 */
export function executeCommand(command: CommandLike, options: CommandExecutionOptions, prevResult?: unknown): unknown {
    if (typeof command === 'string') {
        command = parseCommand(command);
    }
    if (!command) {
        return;
    }
    const {execute, event, scope} = options;
    if (scope && command.scope && command.scope !== scope) {
        return;
    }
    return execute({
        name: command.name,
        options: {
            ...options.options,
            ...command.options,
        },
        event,
        scope: command.scope,
        prevResult,
    }, command.params);
}

/**
 * 执行命令行。
 * Execute command line.
 *
 * @param commands 命令行。 Command line.
 * @param context 上下文信息。 Context information.
 * @returns 命令执行结果。 Command execution result.
 */
export async function executeCommands(commands: CommandsLike, options: CommandExecutionOptions): Promise<unknown[]> {
    const {async, commands: commandList} = parseCommands(commands);
    if (!commandList.length) {
        return [];
    }
    const {signal} = options;
    if (async) {
        const results = await Promise.all(commandList.map(command => {
            if (signal?.aborted) {
                return;
            }
            return executeCommand(command, options);
        }));
        return results;
    }
    const results = [];
    let result;
    for (const command of commandList) {
        if (!signal?.aborted) {
            break;
        }
        result = await executeCommand(command, options, result);
        if (signal?.aborted) {
            result = undefined;
        }
        results.push(result);
    }
    return results;
}

const COMMAND_DATA_NAME  = 'zui.commands';
const COMMANDS_ATTR      = 'z-commands';
const COMMAND_PROXY_ATTR = 'zui-commands-proxy';
const COMMAND_ATTR       = 'zui-command';

export function bindCommands(element?: Selector, options?: CommandsBindOptions | CommandCallback | string): void {
    if (typeof options === 'string') {
        options = {scope: options};
    } else if (typeof options === 'function') {
        options = {onCommand: options};
    }
    const {scope = '', events = 'click'} = options ?? {};
    const $element = $(element);
    const zCommands = ($element.attr(COMMANDS_ATTR) || '').split(',');
    if (scope && !zCommands.includes(scope)) {
        zCommands.push(scope);
    }
    $element.attr(COMMANDS_ATTR, zCommands.join(',')).data(COMMAND_DATA_NAME, {
        [scope]: {
            ...options,
            scope,
            events,
            gid: nextGid(),
        },
        ...$element.data(COMMAND_DATA_NAME),
    });
}

export function unbindCommands(element: Selector, scopes: string | true = true): void {
    const $element = $(element);
    if (scopes === true) {
        $element.removeAttr(COMMANDS_ATTR);
        $element.removeData(COMMAND_DATA_NAME);
    } else if (scopes.length) {
        const boundCommands = $element.data(COMMAND_DATA_NAME) || {};
        scopes.split(',').forEach(scope => {
            delete boundCommands[scope];
        });
        const boundScopes = Object.keys(boundCommands);
        if (boundScopes.length) {
            $element.attr(COMMANDS_ATTR, boundScopes.join(',')).data(COMMAND_DATA_NAME, bindCommands);
        } else {
            unbindCommands($element, true);
        }
    }
}

function getCommandBindInfo($target: Cash, scope: string): CommandsBindInfo | undefined {
    let $element = $target.closest(`[${COMMANDS_ATTR}]`);
    if (!$element.length) {
        const $proxy = $target.closest(`[${COMMAND_PROXY_ATTR}]`);
        if ($proxy.length) {
            $element = $($proxy.data('zui.commandProxy') || $proxy.attr('COMMAND_PROXY_ATTR'));
        }
    }
    if (!$element.length) {
        return;
    }
    const commandsData = $element.data(COMMAND_DATA_NAME) || {};
    const boundCommands = Object.values<CommandsBindInfo>(commandsData).sort((a, b) => (b.gid - a.gid));
    let commandInfo: CommandsBindInfo | undefined;
    if (scope?.length) {
        commandInfo = boundCommands.find(x => x.scope === scope);
        if (!commandInfo) {
            commandInfo = boundCommands.find(x => !x.scope?.length && !x.scoped);
        }
        return commandInfo;
    } else {
        commandInfo = boundCommands.find(x => !x.scope?.length && !x.scoped);
        if (!commandInfo) {
            commandInfo = boundCommands.find(x => !x.scoped);
        }
    }
    if (commandInfo) {
        commandInfo.element = $element[0] as HTMLElement;
    } else {
        commandInfo = getCommandBindInfo($target.parent(), scope);
    }
    return commandInfo;
}

function handleGlobalCommand(event: Event & {commandHandled?: boolean}) {
    if (!event.currentTarget) {
        return;
    }
    const $target = $(event.target as HTMLElement);
    if ($target.closest('.disabled,[disabled]').length) {
        return;
    }
    const commandLine = $target.attr(COMMAND_ATTR) || ($target.is('a[href^="#!"]') ? $target.attr('href') : '');
    if (!commandLine) {
        return;
    }
    const abortController = new AbortController();
    const abort = () => abortController.abort();
    executeCommands(commandLine, {
        signal: abortController.signal,
        execute: (context, params) => {
            const {scope, name} = context;
            const finalContext = {
                ...context,
                abort,
            };
            let result;
            const bindInfo = getCommandBindInfo($target, scope);
            if (bindInfo) {
                finalContext.element = bindInfo.element;
                const onCommand = (bindInfo.commands ? bindInfo.commands[name] : null) || bindInfo.onCommand;
                if (onCommand) {
                    result = onCommand(finalContext, params);
                    if (event.commandHandled) {
                        return result;
                    }
                }
            }

            const eventData = [finalContext, params];
            $target.trigger('command', eventData).trigger(`command:${scope ? `${name}.${scope}` : name}`, eventData);
            if (scope) {
                $target.trigger(`command:.${scope}`, eventData);
            }

            if (event.commandHandled) {
                return result;
            }

            if (scope === 'event') {
                if (name === 'stop') {
                    event.stopPropagation();
                } else if (name === 'prevent') {
                    event.preventDefault();
                } else {
                    deepCall(event, name, params);
                }
                return;
            }
            if (scope === 'window') {
                return deepCall(window, name, params);
            }
            if (scope === 'zui') {
                return deepCall((window as unknown as {zui: object}).zui, name, params);
            }
            if (scope === 'target') {
                return deepCall($target[0] as HTMLElement, name, params);
            }
            if (scope === '$target') {
                return deepCall($target, name, params);
            }
            if (scope === '$') {
                return deepCall($, name, params);
            }

            return result;
        },
        event,
    });
}

declare module 'cash-dom' {
    interface Cash {
        command(this: Cash, scopedName: string, callback: CommandEventCallback): Cash;
        offCommand(this: Cash, scopedName: string, callback?: CommandEventCallback): Cash;

        commands(this: Cash, options?: CommandsBindOptions | CommandCallback | string): Cash;
        unbindCommands(this: Cash, scope?: string): Cash;
    }
}

$.fn.command = function (this: Cash, scopedName: string, callback: CommandEventCallback): Cash {
    return this.on(`command:${scopedName}`, callback);
};

$.fn.offCommand = function (this: Cash, scopedName: string, callback?: CommandEventCallback): Cash {
    return this.off(`command:${scopedName}`, callback as CommandEventCallback);
};

$.fn.commands = function (this: Cash, options?: CommandsBindOptions | CommandCallback | string): Cash {
    this.each((_, element) => bindCommands(element, options));
    return this;
};

$.fn.unbindCommands = function (this: Cash, scope?: string): Cash {
    this.each((_, element) => unbindCommands(element, scope));
    return this;
};

$(() => {
    $(document).on('click.zui.command', `[${COMMAND_ATTR}],a[href^="#!"]`, handleGlobalCommand);
});
