import {Component} from 'preact';
import {classes} from '@zui/core';
import {ProgressBarOptions} from '../types';

export class ProgressBar extends Component<ProgressBarOptions> {
    static defaultProps: Partial<ProgressBarOptions> = {
        percent: 50,
        height: 20,
        width: 'auto',
    };

    render(props: ProgressBarOptions) {
        const {percent = 50, color, background, height, width, children, className, style} = props;
        return (
            <div class={classes('progress', className)} style={{
                width,
                height,
                '--progress-bg': background,
                '--progress-bar-color': color,
                ...style,
            }}>
                <div class="progress-bar" style={{width: `${percent}%`}}>
                </div>
                {children}
            </div>
        );
    }
}
