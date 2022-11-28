import {Component} from 'preact';

export interface ProgressCircleProps {
    circleSize: number,
    circleBorderSize: number,
    percent: number,
    circleBgColor: string,
    circleColor: string,
}

export class ProgressCircle extends Component<ProgressCircleProps> {
    static NAME = 'zui.progress-circle';

    static defaultProps = {
        circleSize: 24,
        circleBorderSize: 2,
        circleBgColor: 'var(--progress-circle-bg)',
        circleColor: 'var(--progress-circle-bar-color)',
    };

    render() {
        const {percent, circleSize, circleBorderSize, circleBgColor, circleColor} = this.props;
        const radius = (circleSize - circleBorderSize) / 2;
        const center = circleSize / 2;
        return (
            <svg width={circleSize} height={circleSize} class="progress-circle">
                <circle cx={center} cy={center} r={radius} stroke={circleBgColor} stroke-width={circleBorderSize}/>
                <circle cx={center} cy={center} r={radius} stroke={circleColor} stroke-dasharray={Math.PI * radius * 2} stroke-dashoffset={Math.PI * radius * 2 * (100 - percent) / 100} stroke-width={circleBorderSize}/>
                <text x={center} y={center + circleBorderSize / 4 } dominant-baseline="middle"  style={{fontSize: `${radius}px`}}>{Math.round(percent)}</text>
            </svg>
        );
    }
}
