import {Component, ComponentChildren} from 'preact';
import {classes} from '@zui/browser-helpers/src/classes';
import {contrastColor, hslToRgb} from '@zui/helpers/src/color-helper';
import {getUniqueCode} from '@zui/helpers/src/string-code';
import {AvatarOptions} from '../types/';
import '../style/index.css';

function getAvatarText(text: string, maxTextLength: number) {
    if (/^[\u4e00-\u9fa5\s]+$/.test(text)) {
        text = text.length <= maxTextLength ? text : text.substring(text.length - maxTextLength);
    } else if (/^[A-Za-z\d\s]+$/.test(text)) {
        text = text[0].toUpperCase();
    } else {
        text = text.length <= maxTextLength ? text : text.substring(0, maxTextLength);
    }
    return text;
}

export class Avatar extends Component<AvatarOptions> {
    render() {
        const {
            className,
            style,
            size,
            circle,
            rounded,
            background,
            foreColor,
            text,
            code,
            maxTextLength = 2,
            src,
            saturation = 0.4,
            lightness = 0.6,
            children,
            ...others
        } = this.props;

        const finalClass = ['avatar', className];
        const finalStyle = {...style, background, color: foreColor};

        if (size) {
            if (typeof size === 'number') {
                finalStyle.width = `${size}px`;
                finalStyle.height = `${size}px`;
                finalStyle.fontSize = `${Math.max(12, Math.round(size / 2))}px`;
            } else {
                finalClass.push(`size-${size}`);
            }
        }
        if (circle) {
            finalClass.push('circle');
        } else if (rounded) {
            if (typeof rounded === 'number') {
                finalStyle.borderRadius = `${rounded}px`;
            } else {
                finalClass.push(`rounded-${rounded}`);
            }
        }

        let content: ComponentChildren | undefined;
        if (src) {
            finalClass.push('has-img');
            content = <img src={src} alt={text} />;
        } else if (text?.length) {
            if (!background && code) {
                const hue = typeof code === 'number' ? code : getUniqueCode(code);
                finalStyle.background = `hsl(${hue},${saturation * 100}%,${lightness * 100}%)`;
                if (!foreColor) {
                    const rgb = hslToRgb(hue, saturation, lightness);
                    finalStyle.color = contrastColor(rgb);
                }
            } else if (!foreColor && background) {
                finalStyle.color = contrastColor(background);
            }
            const displayText = getAvatarText(text, maxTextLength);
            finalClass.push('has-text', `has-text-${displayText.length}`);
            content = <div>{displayText}</div>;
        }

        return (
            <div
                className={classes(finalClass)}
                style={finalStyle}
                {...others}
            >
                {content}
                {children}
            </div>
        );
    }
}
