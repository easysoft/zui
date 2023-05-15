import {JSX, ComponentChildren, h as _h} from 'preact';
import {formatString} from '@zui/helpers/src/format-string';
import {formatDate} from '@zui/helpers/src/date-helper';
import {definePlugin} from '../../helpers/shared-plugins';
import './style.css';
import type {DateLike} from '@zui/helpers/src/date-helper';
import type {DTablePlugin, RowInfo, ColInfo, DTableWithPlugin, CustomRenderResultList} from '../../types';

export type DTableActionButton = {
    action: string;
} & Partial<{
    icon: string,
    disabled: boolean,
    title: string,
    className: string,
}>;

export type ColLinkSetting = string | ({url: string} & JSX.HTMLAttributes<HTMLAnchorElement>) | ((info: {row: RowInfo, col: ColInfo}) => string | ({url: string} & JSX.HTMLAttributes<HTMLAnchorElement>));

export type DTableRichTypes = {
    col: Partial<{
        link: ColLinkSetting;
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
        format: string | ((value: unknown, info: {row: RowInfo, col: ColInfo}) => string);
        html: string | ((value: unknown, info: {row: RowInfo, col: ColInfo}) => string);
    }>,
};

export type DTableRich = DTableWithPlugin<DTableRichTypes>;

export function renderLink(link: ColLinkSetting | undefined, info: {row: RowInfo, col: ColInfo}, content?: ComponentChildren) {
    if (!link) {
        return;
    }
    if (typeof link === 'function') {
        link = link(info as unknown as {row: RowInfo, col: ColInfo});
    }
    if (typeof link === 'string') {
        link = {url: link};
    }
    const {url, ...linkProps} = link;
    return <a href={formatString(url, info.row.data)} {...linkProps}>{content}</a>;
}

export function renderFormat(format: string | ((value: unknown, info: {row: RowInfo, col: ColInfo}) => string) | undefined, info: {row: RowInfo, col: ColInfo}, value?: unknown) {
    if (format === undefined || format === null) {
        return;
    }
    value = value ?? info.row.data?.[info.col.name];
    if (typeof format === 'function') {
        return format(value, info);
    }
    return formatString(format, value);
}

export function renderDatetime(format: string | ((value: unknown, info: {row: RowInfo, col: ColInfo}) => string), info: {row: RowInfo, col: ColInfo}, value?: unknown) {
    value = value ?? info.row.data?.[info.col.name];
    if (typeof format === 'function') {
        format = format(value, info);
    }
    return formatDate(value as DateLike, format);
}

export function renderLinkCell(result: CustomRenderResultList, info: {row: RowInfo, col: ColInfo}) {
    const {link} = info.col.setting;
    const linkElement = renderLink(link as ColLinkSetting, info, result[0]);
    if (linkElement) {
        result[0] = linkElement;
    }
    return result;
}

export function renderFormatCell(result: CustomRenderResultList, info: {row: RowInfo, col: ColInfo}) {
    const {format} = info.col.setting;
    if (format) {
        result[0] = renderFormat(format as string | ((value: unknown, info: {row: RowInfo, col: ColInfo}) => string) | undefined, info, result[0]);
    }
    return result;
}

export function renderDatetimeCell(result: CustomRenderResultList, info: {row: RowInfo, col: ColInfo}, defaultFormat = '[yyyy-]MM-dd hh:mm') {
    const {format = defaultFormat} = info.col.setting;
    result[0] = renderDatetime(format as string | ((value: unknown, info: {row: RowInfo, col: ColInfo}) => string), info, result[0]);
    return result;
}

const richPlugin: DTablePlugin<DTableRichTypes> = {
    name: 'rich',
    colTypes: {
        html: {
            onRenderCell(result, info) {
                const {html} = info.col.setting;
                const content = result[0];
                const htmlCode = html === undefined ? content : renderFormat(html, info, content);
                result[0] = {
                    html: htmlCode,
                };
                return result;
            },
        },
        link: {
            onRenderCell: renderLinkCell,
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
        datetime: {
            onRenderCell(result, info) {
                return renderDatetimeCell(result, info);
            },
        },
        date: {
            onRenderCell(result, info) {
                return renderDatetimeCell(result, info, 'yyyy-MM-dd');
            },
        },
        time: {
            onRenderCell(result, info) {
                return renderDatetimeCell(result, info, 'hh:mm');
            },
        },
        format: {
            onRenderCell: renderFormatCell,
        },
    },
};

export const rich = definePlugin(richPlugin, {buildIn: true});
