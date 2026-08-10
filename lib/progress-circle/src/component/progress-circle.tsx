import {Component} from 'preact';
import type {ProgressCircleOptions} from '../types';

export class ProgressCircle extends Component<ProgressCircleOptions> {
    static defaultProps: Partial<ProgressCircleOptions> = {
        circleBg: 'var(--color-surface)',
        circleColor: 'var(--color-primary-500)',
        text: true,
    };

    render(props: ProgressCircleOptions) {
        const {percent = 50, size = 24, circleBg, circleColor, text, className, textStyle, textX, textY, children} = props;
        const normalizedPercent = Number.isFinite(percent) ? Math.max(0, Math.min(100, percent)) : 0;
        const normalizedSize = Number.isFinite(size) && size > 0 ? size : 24;
        const center = normalizedSize / 2;
        let {circleWidth = 0.1} = props;
        if (!Number.isFinite(circleWidth) || circleWidth < 0) {
            circleWidth = 0.1;
        }
        if (circleWidth < 1) {
            circleWidth = normalizedSize * circleWidth;
        }
        circleWidth = Math.min(normalizedSize, circleWidth);
        const radius = (normalizedSize - circleWidth) / 2;
        const circumference = Math.PI * radius * 2;
        return (
            <svg
                className={className}
                width={normalizedSize}
                height={normalizedSize}
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={normalizedPercent}
            >
                <circle
                    cx={center}
                    cy={center}
                    r={radius}
                    stroke-width={circleWidth}
                    stroke={circleBg}
                    fill="transparent"
                />
                <circle
                    cx={center}
                    cy={center}
                    r={radius}
                    stroke-width={circleWidth}
                    stroke={circleColor}
                    fill="transparent"
                    stroke-linecap="round"
                    stroke-dasharray={circumference}
                    stroke-dashoffset={circumference * (100 - normalizedPercent) / 100}
                    style={{transformOrigin: 'center', transform: 'rotate(-90deg)'}}
                />
                {text ? (
                    <text
                        x={textX ?? center}
                        y={textY ?? (center + (circleWidth / 2))}
                        dominant-baseline="middle"
                        text-anchor="middle"
                        style={textStyle || {fontSize: `${radius}px`, stroke: 'currentColor'}}
                    >
                        {text === true ? Math.floor(normalizedPercent) : text}
                    </text>
                ) : null}
                {children}
            </svg>
        );
    }
}
