import {$, Cash, type Selector} from '../cash';

interface CommandExecutionThis {
    name: string,
    context?: Record<string, unknown>,
    event?: Event,
    scope?: string,
}

/**
 * 命令回调函数。
 * Command callback function.
 *
 * @param context 命令上下文信息 Command context information.
 * @param params  命令参数 Command parameters.
 */
interface CommandCallback<P extends unknown[] = unknown[], R = unknown> {
    (this:CommandExecutionThis, ...params: P): R;
}

interface CommandExecutionOptions {
    execute: (this: CommandExecutionThis, ...params: unknown[]) => unknown;
    event?: Event;
    scope?: string;
    context?: Record<string, unknown>;
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
    let {context} = options;
    context = {
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
        ...context,
    };
    return execute.call({name, context, event, scope}, ...params.map((param) => {
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

export function bindCommands(element?: Selector, options?: {scope?: string, events?: string, execute?: CommandCallback} | CommandCallback | string): void {
    if (typeof options === 'string') {
        options = {scope: options};
    } else if (typeof options === 'function') {
        options = {execute: options};
    }
    const {scope = '', events = 'click', execute: initialExecute} = options ?? {};
    const $element = $(element);
    const dataAttr = `zui.commands.${scope}`;
    if ($element.z(dataAttr)) {
        return;
    }

    const cmdAttr = scope ? `zui-command-${scope}` : 'zui-command';
    $element.z(dataAttr, true).on(events.split(' ').map(x => `${x}.zui.command.${scope}`).join(' '), `[${cmdAttr}]${scope ? '' : ',a[href^="#!"]'}`, (event) => {
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
            execute: function (...params) {
                initialExecute?.call(this, ...params);
                const {name} = this;
                $target.trigger('command', [name, params, this]).trigger(`command:${scope ? `${name}.${scope}` : name}`, [params, this]);
                if (scope) {
                    $target.trigger(`command:.${scope}`, [params, this]);
                }
            },
            event,
            scope,
        });
    });
}

export function unbindCommands(element: Selector, scope?: string) {
    const dataAttr = `zui.commands.${scope || ''}`;
    $(element).z(dataAttr, null).off(`.zui.command${scope ? `.${scope}` : ''}`);
}

declare module 'cash-dom' {
    interface Cash {
        command(scopedName: string, callback: CommandCallback): Cash;
        offCommand(scopedName: string, callback?: CommandCallback): Cash;

        commands(options?: {scope?: string, events?: string, execute?: CommandCallback} | CommandCallback | string): Cash;
        unbindCommands(scope?: string): Cash;
    }
}

export type CommandEventCallback = (event: Event, data: [params: unknown[], context: CommandExecutionThis]) => void;

$.fn.command = function (this: Cash, scopedName: string, callback: CommandEventCallback): Cash {
    return this.on(`command:${scopedName}`, callback);
};

$.fn.offCommand = function (this: Cash, scopedName: string, callback?: CommandEventCallback): Cash {
    return this.off(`command:${scopedName}`, callback as CommandEventCallback);
};

$.fn.commands = function (this: Cash, options?: {scope?: string, events?: string, execute?: CommandCallback} | CommandCallback | string): Cash {
    bindCommands(this, options);
    return this;
};

$.fn.unbindCommands = function (this: Cash, scope?: string): Cash {
    unbindCommands(this, scope);
    return this;
};

$(() => bindCommands(document.body));
