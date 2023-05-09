import {JSX} from 'preact';
import {formatString} from '@zui/helpers/src/format-string';
import {formatDate} from '@zui/helpers/src/date-helper';
import {definePlugin} from '../../helpers/shared-plugins';
import './style.css';
import type {DateLike} from '@zui/helpers/src/date-helper';
import type {DTablePlugin, RowInfo, ColInfo} from '../../types';

export type DTableActionButton = {
    action: string;
} & Partial<{
    icon: string,
    disabled: boolean,
    title: string,
    className: string,
}>;

export type DTableRichTypes = {
    col: Partial<{
        linkTemplate: string;
        link: string | ({template: string} & JSX.HTMLAttributes<HTMLElement>) | ((info: {row: RowInfo, col: ColInfo}) => string | ({template: string} & JSX.HTMLAttributes<HTMLElement>));
        linkProps: Record<string, unknown>;
        avatarWithName: string;
        avatarClass: string;
        avatarKey: string;
        circleSize: number;
        circleBgColor: string;
        circleColor: string;
        circleBorderSize: number;
        actionBtnTemplate: string;
        actionBtnData: Record<string, Omit<DTableActionButton, 'action'>>,
        actionBtnClass: string;
        format: string | {type: 'text' | 'html' | 'datetime', format: string | ((value: unknown) => string)};
    }>,
};

const richPlugin: DTablePlugin<DTableRichTypes> = {
    name: 'rich',
    colTypes: {
        html: {
            onRenderCell(result) {
                result[0] = {
                    html: result[0],
                };
                return result;
            },
        },
        link: {
            onRenderCell(result, {col, row}) {
                let {link, linkTemplate = '', linkProps} = col.setting;
                if (link) {
                    if (typeof link === 'string') {
                        link = {template: link};
                    } else if (typeof link === 'function') {
                        link = link({row, col});
                    }
                    ({template: linkTemplate, ...linkProps} = link as {template: string});
                }
                const url = formatString(linkTemplate, row.data);
                result[0] = <a href={url} {...linkProps}>{result[0]}</a>;
                return result;
            },
        },
        avatar: {
            onRenderCell(result, {col, row}) {
                const {data: rowData} = row;
                const {avatarWithName, avatarClass = 'size-xs rounded-full', avatarKey = `${col.name}Avatar`} = col.setting;
                const avatar = (
                    <div className={`avatar ${avatarClass} flex-none`}>
                        <img src={rowData ? (rowData[avatarKey] as string) : ''} />
                    </div>
                );
                if (avatarWithName) {
                    result.unshift(avatar);
                } else {
                    result[0] = avatar;
                }
                return result;
            },
        },
        progress: {
            align: 'center',
            onRenderCell(result, {col}) {
                const {circleSize = 24, circleBorderSize = 1, circleBgColor = 'var(--color-border)', circleColor = 'var(--color-success-500)'} = col.setting;
                const radius = (circleSize - circleBorderSize) / 2;
                const center = circleSize / 2;
                const percent = result[0] as number;
                result[0] = (
                    <svg width={circleSize} height={circleSize}>
                        <circle cx={center} cy={center} r={radius} stroke-width={circleBorderSize} stroke={circleBgColor} fill="transparent" />
                        <circle cx={center} cy={center} r={radius} stroke-width={circleBorderSize} stroke={circleColor} fill="transparent" stroke-linecap="round" stroke-dasharray={Math.PI * radius * 2} stroke-dashoffset={Math.PI * radius * 2 * (100 - percent) / 100} style={{transformOrigin: 'center', transform: 'rotate(-90deg)'}} />
                        <text x={center} y={center + circleBorderSize} dominant-baseline="middle" text-anchor="middle" style={{fontSize: `${radius}px`}}>{Math.round(percent)}</text>
                    </svg>
                );
                return result;
            },
        },
        actionButtons: {
            onRenderCell(result, {col, row}) {
                const actions = row.data?.[col.name] as (string | DTableActionButton)[];
                if (!actions) {
                    return result;
                }
                const {actionBtnTemplate = '<button type="button" data-action="{action}" title="{title}" class="{className}"><i class="icon icon-{icon}"></i></button>', actionBtnData = {}, actionBtnClass = 'btn text-primary square size-sm ghost'} = col.setting;

                return [{
                    html: actions.map(action => {
                        if (typeof action === 'string') {
                            action = {action};
                        }
                        const actionData = actionBtnData[action.action];
                        if (actionData) {
                            action = {className: actionBtnClass, ...actionData, ...action};
                        }

                        return formatString(actionBtnTemplate, action);
                    }).join(' '),
                }];
            },
        },
        format: {
            onRenderCell(result, {col}) {
                let {format: formatSetting} = col.setting;
                if (!formatSetting) {
                    return result;
                }
                if (typeof formatSetting === 'string') {
                    formatSetting = {type: 'text', format: formatSetting};
                }
                const {format, type} = formatSetting;
                const value = result[0];
                if (typeof format === 'function') {
                    result[0] = type === 'html' ? {html: format(value)} : format(value);
                } else if (type === 'datetime') {
                    result[0] = formatDate(value as DateLike, format);
                } else if (type === 'html') {
                    result[0] = {html: formatString(format, value)};
                } else {
                    result[0] = formatString(format, value);
                }
                return result;
            },
        },
    },
};

export const rich = definePlugin(richPlugin, {buildIn: true});
