import {$, Cash, type Selector} from '../cash';

export interface CommandContext {
    name: string,
    options: Record<string, unknown>,
    event: Event,
    scope: string,
}

/**
 * 命令回调函数。
 * Command callback function.
 *
 * @param context 命令上下文信息 Command context information.
 * @param params  命令参数 Command parameters.
 */
export interface CommandCallback<P extends unknown[] = unknown[], R = unknown> {
    (context: CommandContext, ...params: P): R;
}

export type CommandEventCallback = (event: Event, data: [context: CommandContext, params: unknown[]]) => void;

interface CommandExecutionOptions {
    execute: (context: CommandContext, ...params: unknown[]) => unknown;
    event: Event;
    scope: string;
    options: Record<string, unknown>;
}

/**
 * 执行单个命令行。
 * Execute single command line.
 *
 * @param commandLine 命令行。 Command line.
 * @param options 选项。 Options.
 * @returns 命令执行结果。 Command execution result.
 */
function executeSingleCommandLine(commandLine: string, options: CommandExecutionOptions): unknown {
    commandLine = commandLine.replace(/^#?!?!?>?/, '');
    if (!commandLine.startsWith('/')) {
        commandLine = `/${commandLine}`;
    }
    const url = new URL(window.location.origin + commandLine);
    const [, name = '', ...params] = url.pathname.split('/');
    const {execute, event, scope} = options;
    let {options: executeOptions} = options;
    executeOptions = {
        ...Object.fromEntries([...url.searchParams.entries()].map(([key, value]) => {
            try {
                if (value.includes('%')) {
                    value = decodeURIComponent(value);
                }
                value = JSON.parse(value);
                // eslint-disable-next-line no-empty
            } catch (_) {}
            return [key, value];
        })),
        ...executeOptions,
    };
    return execute({name, options: executeOptions, event, scope}, ...params.map((param) => {
        try {
            if (param.includes('%')) {
                param = decodeURIComponent(param);
            }
            return JSON.parse(param);
        } catch (_) {
            return param;
        }
    }));
}

/**
 * 异步方式执行命令行。
 * Execute command line asynchronously.
 *
 * @param commandLine 命令行。 Command line.
 * @param context 上下文信息。 Context information.
 * @returns 命令执行结果。 Command execution result.
 */
async function executeCommandLineAsync(commandLine: string, options: CommandExecutionOptions) : Promise<unknown> {
    if (commandLine.includes('>')) {
        const subCommandLines = commandLine.split('>');
        const results = [];
        for (const subCommandLine of subCommandLines) {
            if (!subCommandLine.length) {
                continue;
            }
            const result = await executeSingleCommandLine(subCommandLine, options);
            results.push(result);
        }
        return results;
    }

    if (commandLine.includes('|')) {
        return Promise.all(commandLine.split('|').map((line) => executeSingleCommandLine(line, options)));
    }

    return executeSingleCommandLine(commandLine, options);
}

/**
 * 执行命令行。
 * Execute command line.
 *
 * @param commandLine 命令行。 Command line.
 * @param context 上下文信息。 Context information.
 * @returns 命令执行结果。 Command execution result.
 */
function executeCommandLine(commandLine: string, options: CommandExecutionOptions): unknown {
    if (/^#?!?!?>/.test(commandLine)) {
        return executeCommandLineAsync(commandLine, options);
    }

    if (commandLine.includes('>')) {
        const subCommandLines = commandLine.split('>');
        const results = [];
        for (const subCommandLine of subCommandLines) {
            const result = executeCommandLine(subCommandLine, options);
            results.push(result);
        }
        return results;
    }

    if (commandLine.includes('|')) {
        const subCommandLines = commandLine.split('|');
        const results = [];
        for (const subCommandLine of subCommandLines) {
            const result = executeCommandLine(subCommandLine, options);
            results.push(result);
        }
        return results;
    }

    return executeSingleCommandLine(commandLine, options);
}

export type CommandsBindOptions = {scope?: string, events?: string, execute?: CommandCallback, commands?: Record<string, CommandCallback>};

export function bindCommands(element?: Selector, options?: CommandsBindOptions | CommandCallback | string): void {
    if (typeof options === 'string') {
        options = {scope: options};
    } else if (typeof options === 'function') {
        options = {execute: options};
    }
    const {scope = '', events = 'click', execute: initialExecute, commands} = options ?? {};
    const $element = $(element);
    const dataAttr = `z-commands${scope ? `-${scope}` : ''}`;
    if ($element.attr(dataAttr)) {
        return;
    }

    const cmdAttr = scope ? `zui-command-${scope}` : 'zui-command';
    $element.attr(dataAttr, '').on(events.split(' ').map(x => `${x}.zui.command.${scope}`).join(' '), `[${cmdAttr}]${scope ? '' : ',a[href^="#!"]'}`, (event) => {
        if (event.commandHandled) {
            return;
        }
        const $target = $(event.currentTarget);
        if ($target.is('.disabled,[disabled]')) {
            return;
        }
        const commandLine = $target.attr(cmdAttr) || ($target.is('a[href^="#!"]') ? $target.attr('href') : '');
        if (!commandLine) {
            return;
        }
        event.commandHandled = true;
        if (commandLine.startsWith('#!!') || commandLine.startsWith('!!')) {
            event.stopPropagation();
        }
        executeCommandLine(commandLine, {
            execute: (context, ...params) => {
                initialExecute?.(context, ...params);
                const commandExecute = commands?.[context.name];
                commandExecute?.(context, ...params);
                const {name} = context;
                const eventData = [context, params];
                $target.trigger('command', eventData).trigger(`command:${scope ? `${name}.${scope}` : name}`, eventData);
                if (scope) {
                    $target.trigger(`command:.${scope}`, eventData);
                }
            },
            event,
            scope,
            options: {},
        });
    });
}

export function unbindCommands(element: Selector, scope?: string) {
    const dataAttr = `zui.commands.${scope || ''}`;
    $(element).z(dataAttr, null).off(`.zui.command${scope ? `.${scope}` : ''}`);
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
    bindCommands(this, options);
    return this;
};

$.fn.unbindCommands = function (this: Cash, scope?: string): Cash {
    unbindCommands(this, scope);
    return this;
};

$(() => bindCommands(document.body));
