import {Component} from 'preact';
import {classes} from '@zui/core';
import {createDate, formatDate, isValidDate} from '@zui/helpers/src/date-helper';
import type {TimeAgoProps} from '../types';
import '../i18n';
import {timeago} from '../helper';

export interface TimeAgoState {
    tick: number;
}

export class TimeAgo extends Component<TimeAgoProps, TimeAgoState> {
    state = {tick: 0};

    componentDidMount(): void {
        TimeAgo.register(this);
    }

    componentWillUnmount(): void {
        TimeAgo.unregister(this);
    }

    update() {
        this.setState(prevState => ({tick: prevState.tick + 1}));
    }

    render() {
        const {time, now, lang, invalidText, className, hint = true, hintFormat, ...others} = this.props;
        const date = createDate(time);

        if (!isValidDate(date)) {
            return <span class={classes('time-ago is-invalid', className)} {...others}>{invalidText ?? time}</span>;
        }

        const agoText = timeago(date, now, lang);
        const title = hint ? (typeof hint === 'string' ? hint : formatDate(date, hintFormat)) : undefined;
        return <span class={classes('time-ago', className)} title={title} {...others}>{agoText}</span>;
    }

    static timer = 0;

    static instances = new Set<TimeAgo>();

    static register(instance: TimeAgo) {
        this.instances.add(instance);
        if (this.timer === 0) {
            this.timer = window.setInterval(() => {
                this.instances.forEach(instance => instance.update());
            }, 60000);
        }
    }

    static unregister(instance: TimeAgo) {
        this.instances.delete(instance);
        if (this.instances.size === 0) {
            window.clearInterval(this.timer);
            this.timer = 0;
        }
    }
}
