import {render} from 'preact';
import {getDefaultOptions} from './helpers/default-options';
import {ProgressCircleOptions} from './types/options'

export class ProgressCircle {
    static NAME = 'zui.progress-circle';

    element: HTMLElement;

    options: ProgressCircleOptions;

    constructor(element: HTMLElement, options?: Partial<ProgressCircleOptions>) {
        this.element = element;
        this.options = {...getDefaultOptions(), ...options} as ProgressCircleOptions;
        if (this.options.circleSize) {
            this.render();
        }
    }

    render(options?: Partial<ProgressCircleOptions>) {
        this.options = Object.assign(this.options, options);
        const {circleSize = 24, circleBorderSize = 1, circleBgColor = 'var(--color-border)', circleColor = 'var(--color-success-500)', percent = 40%} = this.options;
        const radius = (circleSize - circleBorderSize) / 2;
        const center = circleSize / 2;
        render((
            <svg width={circleSize} height={circleSize}>
                <circle cx={center} cy={center} r={radius} stroke-width={circleBorderSize} stroke={circleBgColor} fill="transparent" />
                <circle cx={center} cy={center} r={radius} stroke-width={circleBorderSize} stroke={circleColor} fill="transparent" stroke-linecap="round" stroke-dasharray={Math.PI * radius * 2} stroke-dashoffset={Math.PI * radius * 2 * (100 - percent) / 100} style={{transformOrigin: 'center', transform: 'rotate(-90deg)'}} />
                <text x={center} y={center + circleBorderSize} dominant-baseline="middle" text-anchor="middle" style={{fontSize: `${radius}px`}}>{Math.round(percent)}</text>
            </svg>
        ), this.element);
    }
}
