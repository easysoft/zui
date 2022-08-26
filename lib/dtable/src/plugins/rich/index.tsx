import {formatString} from '@zui/helpers/src/format-string';
import {formatDate, DateLike} from '@zui/helpers/src/date-helper';
import {DTablePlugin} from '../../types/plugin';
import {definePlugin} from '../../helpers/shared-plugins';
import './style.css';

export interface DTableActionButton {
    action: string,
    icon?: string,
    disabled?: boolean,
    title?: string,
    className?: string,
}

export interface DTableRichColSetting {
    linkTemplate?: string;
    linkProps?: Record<string, unknown>;
    avatarWithName?: string;
    avatarClass?: string;
    avatarKey?: string;
    circleSize?: number;
    circleBgColor?: string;
    circleColor?: string;
    circleBorderSize?: number;
    actionBtnTemplate?: string;
    actionBtnData?: Record<string, Omit<DTableActionButton, 'action'>>,
    actionBtnClass?: string;
    format?: string | {type: 'text' | 'html' | 'datetime', format: string | ((value: unknown) => string)};
}

export const rich: DTablePlugin<{}, {}, DTableRichColSetting> = {
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
            onRenderCell(result, _rowID, col, rowData) {
                const {linkTemplate = '', linkProps} = col.setting as DTableRichColSetting;
                const url = formatString(linkTemplate, rowData);
                result[0] = <a href={url} {...linkProps}>{result[0]}</a>;
                return result;
            },
        },
        avatar: {
            onRenderCell(result, rowID, col, rowData) {
                const {avatarWithName, avatarClass = 'size-sm circle', avatarKey = `${col.name}Avatar`} = col.setting as DTableRichColSetting;
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
        circleProgress: {
            onRenderCell(result, rowID, col) {
                const {circleSize = 24, circleBorderSize = 1, circleBgColor = 'var(--color-border)', circleColor = 'var(--color-green-500)'} = col.setting as DTableRichColSetting;
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
            onRenderCell(result, _rowID, col, rowData) {
                const actions = rowData?.[col.name] as (string | DTableActionButton)[];
                if (!actions) {
                    return result;
                }
                const {actionBtnTemplate = '<button type="button" data-action="{action}" title="{title}" class="{className}"><i class="icon icon-{icon}"></i></button>', actionBtnData = {}, actionBtnClass = 'btn text-primary square size-sm ghost'} = col.setting as DTableRichColSetting;

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
            onRenderCell(result, _rowID, col) {
                let {format: formatSetting} = col.setting as DTableRichColSetting;
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

export default definePlugin<{}, {}, DTableRichColSetting>(rich);
