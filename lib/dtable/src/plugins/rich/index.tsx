import {JSX, ComponentChildren, h as _h} from 'preact';
import {formatString} from '@zui/helpers/src/format-string';
import {formatDate} from '@zui/helpers/src/date-helper';
import {definePlugin} from '../../helpers/shared-plugins';
import {Avatar} from '@zui/avatar/src/component';
import './style.css';
import type {AvatarOptions} from '@zui/avatar/src/types';
import type {DateLike} from '@zui/helpers/src/date-helper';
import type {DTablePlugin, RowInfo, ColInfo, DTableWithPlugin, CustomRenderResultList} from '../../types';
import {classes} from '@zui/browser-helpers/src/classes';

export type ColLinkSetting = string | ({url: string} & JSX.HTMLAttributes<HTMLAnchorElement>) | ((info: {row: RowInfo, col: ColInfo}) => string | ({url: string} & JSX.HTMLAttributes<HTMLAnchorElement>));

export type ColDateFormatSetting = string | ((value: unknown, info: {row: RowInfo, col: ColInfo}) => string);

export type ColFormatSetting = string | ((value: unknown, info: {row: RowInfo, col: ColInfo}) => string);

export type ColHTMLSetting = boolean | string | ((value: unknown, info: {row: RowInfo, col: ColInfo}) => string);

export type DTableRichTypes = {
    col: Partial<{
        avatarClass?: string,
        avatarKey?: string,
        avatarCodeKey?: string,
        avatarProps?: AvatarOptions,
        avatarNameKey?: string;
        circleSize: number;
        circleBgColor: string;
        circleColor: string;
        circleBorderSize: number;
        link: ColLinkSetting;
        format: ColFormatSetting;
        formatDate: ColDateFormatSetting;
        html: ColHTMLSetting;
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

export function renderFormat(format: ColFormatSetting | undefined, info: {row: RowInfo, col: ColInfo}, value?: unknown) {
    if (format === undefined || format === null) {
        return;
    }
    value = value ?? info.row.data?.[info.col.name];
    if (typeof format === 'function') {
        return format(value, info);
    }
    return formatString(format, value);
}

export function renderDatetime(format: ColDateFormatSetting, info: {row: RowInfo, col: ColInfo}, value?: unknown) {
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
        result[0] = renderFormat(format as ColFormatSetting, info, result[0]);
    }
    return result;
}

export function renderDatetimeCell(result: CustomRenderResultList, info: {row: RowInfo, col: ColInfo}, defaultFormat: ColDateFormatSetting = '[yyyy-]MM-dd hh:mm') {
    const {format = defaultFormat} = info.col.setting;
    result[0] = renderDatetime(format as ColDateFormatSetting, info, result[0]);
    return result;
}

export function renderHtmlCell(result: CustomRenderResultList, info: {row: RowInfo, col: ColInfo}, defaultHtml: ColHTMLSetting = false) {
    const {html = defaultHtml} = info.col.setting;
    if (html === false) {
        return result;
    }
    const content = result[0];
    const htmlCode = html === true ? content : renderFormat(html as ColFormatSetting, info, content);
    result[0] = {
        html: htmlCode,
    };
    return result;
}

const richPlugin: DTablePlugin<DTableRichTypes> = {
    name: 'rich',
    colTypes: {
        html: {
            onRenderCell(result, info) {
                return renderHtmlCell(result, info, true);
            },
        },
        avatar: {
            onRenderCell(result, {col, row}) {
                const {data: rowData} = row;
                const text = rowData ? (rowData[col.name] as string) : undefined;
                if (!text?.length) {
                    return result;
                }
                const {avatarClass = 'rounded-full', avatarKey = `${col.name}Avatar`, avatarProps, avatarCodeKey, avatarNameKey = `${col.name}Name`} = col.setting;
                const name = (rowData ? (rowData[avatarNameKey] as string) : text) || result[0];
                const props = {
                    size: 'xs',
                    className: classes(avatarClass, avatarProps?.className, 'flex-none'),
                    src: rowData ? (rowData[avatarKey] as string) : undefined,
                    text: name,
                    code: avatarCodeKey ? (rowData ? (rowData[avatarCodeKey] as string) : undefined) : text,
                    ...avatarProps,
                } as AvatarOptions;

                result[0] = <Avatar {...props} />;
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
    },
    onRenderCell(result, info) {
        const {formatDate: dateFormat, html} = info.col.setting;
        if (dateFormat) {
            result = renderDatetimeCell(result, info, dateFormat);
        }
        result = renderFormatCell(result, info);
        if (html) {
            result = renderHtmlCell(result, info);
        } else {
            result = renderLinkCell(result, info);
        }

        return result;
    },
};

export const rich = definePlugin(richPlugin, {buildIn: true});
