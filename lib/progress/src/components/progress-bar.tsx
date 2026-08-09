import {Component} from 'preact';
import {classes} from '@zui/core';
import type {ProgressBarOptions} from '../types';

export class ProgressBar extends Component<ProgressBarOptions> {
    static defaultProps: Partial<ProgressBarOptions> = {
        percent: 50,
        height: 20,
        width: 'auto',
    };

    render(props: ProgressBarOptions) {
        const {percent = 50, color, background, height, width, children, className, style} = props;
        const normalizedPercent = Number.isFinite(percent) ? Math.max(0, Math.min(100, percent)) : 0;
        return (
            <div
                className={classes('progress', className)}
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={normalizedPercent}
                style={{
                    width,
                    height,
                    '--progress-bg': background,
                    '--progress-bar-color': color,
                    ...style,
                }}
            >
                <div className="progress-bar" aria-hidden="true" style={{width: `${normalizedPercent}%`}}>
                </div>
                {children}
            </div>
        );
    }
}
