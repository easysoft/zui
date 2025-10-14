import {bindCommands, CommandContext, ComponentFromReact, ComponentOptions} from '@zui/core';
import {DTable as DTableReact} from '../components/dtable';
import {removePlugin, definePlugin, getDTablePlugin} from '../helpers/shared-plugins';
import * as plugins from '../plugins';
import type {DTableOptions} from '../types/options';
import {deepCall} from '@zui/helpers/src/object';

export class DTable extends ComponentFromReact<DTableOptions, DTableReact> {
    static NAME = 'DTable';

    static Component = DTableReact;

    static definePlugin = definePlugin;

    static removePlugin = removePlugin;

    static getPlugin = getDTablePlugin;

    static plugins = plugins;

    get commandScope() {
        return this.options.commandScope || 'dtable';
    }

    afterInit(): void {
        super.afterInit();

        const {commands, onCommand} = this.options;
        if (commands || onCommand) {
            bindCommands(this.element, {
                commands,
                scope: this.commandScope,
                onCommand: this.executeCommand.bind(this),
            });
        }
    }

    executeCommand(context: CommandContext | string, params: unknown[] = []) {
        const {onCommand, commands} = this.options;
        let result;
        if (typeof context === 'string') {
            context = {name: context};
        }
        const {scope, name} = context;
        const onCommandFromProps = commands ? (commands[`${scope}~${name}`] || commands[name]) : null;
        if (onCommandFromProps) {
            return onCommandFromProps.call(this, context, params);
        }
        if (!context.scope || context.scope === this.commandScope) {
            const {name: commandName} = context;
            result = deepCall(this.$!, commandName, params);
        }
        if (onCommand) {
            result = onCommand.call(this, context, params);
        }
        return result;
    }

    setOptions(options?: Partial<ComponentOptions<DTableOptions>>, reset?: boolean): ComponentOptions<DTableOptions> {
        options = super.setOptions(options, reset);
        if (!options.parent) {
            options.parent = this.element;
        }
        return options as ComponentOptions<DTableOptions>;
    }
}

DTable.register();
