import {formatString} from '@zui/helpers/src/format-string';
import {DTablePlugin} from '../../types/plugin';
import {definePlugin} from '../../helpers/shared-plugins';
import './style.css';

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
}

export const plugin: DTablePlugin<{}, {}, DTableRichColSetting> = {
    name: 'rich',
    colTypes: {
        link: {
            onRenderCell(result, rowID, col, rowData) {
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
                    <div className={`avatar ${avatarClass}`}>
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
    },
};

export default definePlugin<{}, {}, DTableRichColSetting>(plugin);
