import {JSX, ComponentChildren} from 'preact';
import {formatString} from '@zui/helpers/src/format-string';
import {formatDate} from '@zui/helpers/src/date-helper';
import {definePlugin} from '../../helpers/shared-plugins';
import './style.css';
import type {DateLike} from '@zui/helpers/src/date-helper';
import type {DTablePlugin, RowInfo, ColInfo, DTableWithPlugin, CustomRenderResultList} from '../../types';

export type ColLinkSetting = string | ({url: string} & JSX.HTMLAttributes<HTMLAnchorElement>) | ((info: {row: RowInfo, col: ColInfo}) => string | ({url: string} & JSX.HTMLAttributes<HTMLAnchorElement>));

export type ColDateFormatSetting = boolean | string | ((value: unknown, info: {row: RowInfo, col: ColInfo}) => string);

export type ColFormatSetting = string | ((value: unknown, info: {row: RowInfo, col: ColInfo}) => string);

export type ColHTMLSetting = boolean | string | ((value: unknown, info: {row: RowInfo, col: ColInfo}) => string);

export type ColMapSetting = Record<string, string> | ((value: unknown, info: {row: RowInfo, col: ColInfo}) => string);

export type DTableRichTypes = {
    col: Partial<{
        circleSize: number;
        circleBgColor: string;
        circleColor: string;
        circleBorderSize: number;
        link: ColLinkSetting;
        format: ColFormatSetting;
        formatDate: ColDateFormatSetting;
        invalidDate: string;
        html: ColHTMLSetting;
        map: ColMapSetting;
    }>,
};

export type DTableRich = DTableWithPlugin<DTableRichTypes>;

export function renderLink(link: ColLinkSetting | undefined, info: {row: RowInfo, col: ColInfo}, content?: ComponentChildren, props?: Record<string, unknown>) {
    if (!link) {
        return content;
    }
    if (typeof link === 'function') {
        link = link(info as unknown as {row: RowInfo, col: ColInfo});
    }
    if (typeof link === 'string') {
        link = {url: link};
    }
    const {url, ...linkProps} = link;
    return <a href={formatString(url, info.row.data)} {...props} {...linkProps}>{content}</a>;
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

export function renderDatetime(format: ColDateFormatSetting, info: {row: RowInfo, col: ColInfo}, value?: unknown, invalidDate?: string) {
    value = value ?? info.row.data?.[info.col.name];
    if (format === false) {
        return value as string;
    }
    if (format === true) {
        format = '[yyyy-]MM-dd hh:mm';
    }
    if (typeof format === 'function') {
        format = format(value, info);
    }
    return formatDate(value as DateLike, format, invalidDate);
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

export function renderMapCell(result: CustomRenderResultList, info: {row: RowInfo, col: ColInfo}) {
    const {map} = info.col.setting as DTableRichTypes['col'];
    if (typeof map === 'function') {
        result[0] = map(result[0], info);
    } else if (typeof map === 'object' && map) {
        result[0] = map[result[0] as string] ?? result[0];
    }
    return result;
}

export function renderDatetimeCell(result: CustomRenderResultList, info: {row: RowInfo, col: ColInfo}, defaultFormat: ColDateFormatSetting = '[yyyy-]MM-dd hh:mm') {
    const {formatDate: dateFormat = defaultFormat, invalidDate} = info.col.setting as DTableRichTypes['col'];
    result[0] = renderDatetime(dateFormat, info, result[0], invalidDate);
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
            formatDate: '[yyyy-]MM-dd hh:mm',
        },
        date: {
            formatDate: 'yyyy-MM-dd',
        },
        time: {
            formatDate: 'hh:mm',
        },
    },
    onRenderCell(result, info) {
        const {formatDate: dateFormat, html} = info.col.setting;
        if (dateFormat) {
            result = renderDatetimeCell(result, info, dateFormat);
        }

        result = renderMapCell(result, info);
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
