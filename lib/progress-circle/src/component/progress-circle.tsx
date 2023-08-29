import {Component} from 'preact';
import {ProgressCircleOptions} from '../types';

export class ProgressCircle extends Component<ProgressCircleOptions> {
    static defaultProps: Partial<ProgressCircleOptions> = {
        circleBg: 'var(--color-surface)',
        circleColor: 'var(--color-primary-500)',
        text: true,
    };

    render(props: ProgressCircleOptions) {
        const {percent = 50, size = 24, circleBg, circleColor, text, className, textStyle, textX, textY, children} = props;
        const center = size / 2;
        let {circleWidth = 0.1} = props;
        if (circleWidth < 1) {
            circleWidth = size * circleWidth;
        }
        const radius = (size - circleWidth) / 2;
        return (
            <svg className={className} width={size} height={size}>
                <circle cx={center} cy={center} r={radius} stroke-width={circleWidth} stroke={circleBg} fill="transparent" />
                <circle cx={center} cy={center} r={radius} stroke-width={circleWidth} stroke={circleColor} fill="transparent" stroke-linecap="round" stroke-dasharray={Math.PI * radius * 2} stroke-dashoffset={Math.PI * radius * 2 * (100 - percent) / 100} style={{transformOrigin: 'center', transform: 'rotate(-90deg)'}} />
                {text ? <text x={textX ?? center} y={textY ?? (center + (circleWidth / 2))} dominant-baseline="middle" text-anchor="middle" style={textStyle || {fontSize: `${radius}px`}}>{text === true ? Math.round(percent) : text}</text> : null}
                {children}
            </svg>
        );
    }
}
