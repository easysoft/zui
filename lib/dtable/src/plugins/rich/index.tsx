import {formatString} from '@zui/helpers/src/format-string';
import {formatDate} from '@zui/helpers/src/date-helper';
import {ProgressCircle} from '@zui/progress-circle/src/component';
import {ProgressBar} from '@zui/progress/src/components';
import '@zui/progress/src/style';
import {definePlugin} from '../../helpers/shared-plugins';

import type {JSX, ComponentChildren} from 'preact';
import type {DateLike} from '@zui/helpers/src/date-helper';
import type {DTablePlugin, RowInfo, ColInfo, DTableWithPlugin, CustomRenderResultList} from '../../types';

export type ColLinkSetting = string | false | ({url: string} & JSX.HTMLAttributes<HTMLAnchorElement>) | ((info: {row: RowInfo, col: ColInfo}) => string | false | ({url: string} & JSX.HTMLAttributes<HTMLAnchorElement>));

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
        progressType: 'circle' | 'bar';
        barColor: string;
        barBgColor: string;
        barWidth: number;
        barHeight: number;
        link: ColLinkSetting;
        digits: number;
        format: ColFormatSetting;
        formatDate: ColDateFormatSetting;
        invalidDate: string;
        html: ColHTMLSetting;
        map: ColMapSetting;
        mapSplitter: string;
        mapJoiner: string;
        hint: boolean | string | ((info: {row: RowInfo, col: ColInfo}) => string);
        styleMap: Record<string, string> | ((info: {row: RowInfo, col: ColInfo}) => Record<string, string>);
    }>,
};

export type DTableRich = DTableWithPlugin<DTableRichTypes>;

export function renderLink(link: ColLinkSetting | undefined, info: {row: RowInfo, col: ColInfo}, content?: ComponentChildren, props?: Record<string, unknown>) {
    if (typeof link === 'function') {
        link = link(info);
    }
    if (typeof link === 'string' && link.length) {
        link = {url: link};
    }
    if (!link) {
        return content;
    }
    const {url, ...linkProps} = link as ({url: string;} & JSX.HTMLAttributes<HTMLAnchorElement>);
    const {setting} = info.col;
    const dataset: Record<string, string> = {};
    if (setting) {
        Object.keys(setting).forEach(k => {
            if (k.startsWith('data-')) {
                dataset[k] = setting[k] as string;
            }
        });
    }
    return <a href={formatString(url, info.row.data)} {...props} {...linkProps} {...dataset}>{content}</a>;
}

export function renderFormat(format: ColFormatSetting | undefined, info: {row: RowInfo, col: ColInfo}, value?: unknown) {
    if (format === undefined || format === null) {
        return;
    }
    const rowData = info.row.data;
    value = value ?? rowData?.[info.col.name];
    if (typeof format === 'function') {
        return format(value, info);
    }
    return formatString(format, {...rowData, '0': value});
}

export function renderDatetime(format: ColDateFormatSetting, info: {row: RowInfo, col: ColInfo}, value?: unknown, invalidDate?: string) {
    if (!value) {
        return invalidDate ?? value as string;
    }
    value = value ?? info.row.data?.[info.col.name];
    if (value === '0000-00-00 00:00:00' || value === '0000-00-00') {
        return invalidDate ?? '';
    }
    if (format === false) {
        return value as string;
    }
    if (format === true) {
        format = '[yyyy-]MM-dd hh:mm';
    }
    if (typeof format === 'function') {
        format = format(value, info);
    }
    return formatDate(value as DateLike, format, invalidDate ?? value as string);
}

export function renderLinkCell(result: CustomRenderResultList, info: {row: RowInfo, col: ColInfo}) {
    const {link} = info.col.setting;
    const linkElement = renderLink(link as ColLinkSetting, info, result[0]);
    if (linkElement) {
        result[0] = linkElement;
    }
    return result;
}

export function renderFormatCell(result: CustomRenderResultList, info: {row: RowInfo, col: ColInfo, value: unknown}) {
    const {format, digits} = info.col.setting;
    let value = result[0];
    if (typeof digits === 'number' && !Number.isNaN(Number(value))) {
        value = Number(value);
        if (digits >= 0) {
            value = (value as number).toFixed(digits);
        }
    }
    if (format) {
        value = renderFormat(format as ColFormatSetting, info, value);
    }
    result[0] = value as string;
    return result;
}

export function renderMapCell(result: CustomRenderResultList, info: {row: RowInfo, col: ColInfo}) {
    const {map, mapSplitter = ',', mapJoiner} = info.col.setting as DTableRichTypes['col'];
    if (map) {
        let value: string | string[] = result[0] as string;
        if (typeof value === 'string' && mapSplitter) {
            value = value.split(mapSplitter);
        }
        if (typeof map === 'function') {
            result[0] = map(value, info);
        } else if (typeof map === 'object') {
            if (!Array.isArray(value)) {
                value = [value];
            }
            result[0] = value.map(v => map[v] ?? v).join(mapJoiner ?? mapSplitter);
        }
    }
    return result;
}

export function renderStyleMapCell(styleMap: Record<string, string> | ((info: {row: RowInfo, col: ColInfo}) => Record<string, string>), result: CustomRenderResultList, info: {row: RowInfo, col: ColInfo}) {
    const style: Record<string, unknown> = {};
    if (typeof styleMap === 'function') {
        Object.assign(style, styleMap(info));
    } else {
        Object.keys(styleMap).forEach(name => {
            const value = info.row.data?.[styleMap[name]] as string;
            if (value !== undefined) {
                style[name] = value;
            }
        });
    }
    if (Object.keys(style).length) {
        result.push({style});
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
                const {progressType, barColor, barBgColor, barHeight = 6, barWidth = 64, circleSize = 24, circleBorderSize = 1, circleBgColor = 'var(--color-border)', circleColor = 'var(--color-success-500)'} = col.setting;
                const percent = result[0] as number;
                result[0] = progressType === 'bar' ? (
                    <ProgressBar
                        className="rounded-full"
                        width={barWidth}
                        height={barHeight}
                        color={barColor || circleColor}
                        background={barBgColor}
                        percent={percent}
                    />
                ) : (
                    <ProgressCircle
                        percent={percent}
                        size={circleSize}
                        circleWidth={circleBorderSize}
                        circleBg={circleBgColor}
                        circleColor={circleColor}
                        text
                    />
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
        const {formatDate: dateFormat, html, hint, styleMap} = info.col.setting;
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

        if (hint) {
            let hintText = info.value;
            if (typeof hint === 'function') {
                hintText = hint.call(this, info);
            } else if (typeof hint === 'string') {
                hintText = formatString(hint, info.row.data);
            } else if (typeof result[0] === 'string') {
                hintText = result[0];
            }
            result.push({attrs: {title: hintText}});
        }

        if (styleMap) {
            result = renderStyleMapCell(styleMap, result, info);
        }

        return result;
    },
};

export const rich = definePlugin(richPlugin, {buildIn: true});
