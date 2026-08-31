import {Component} from 'preact';
import {classes} from '@zui/core';
import {createDate, formatDate, isValidDate} from '@zui/helpers';
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

    componentDidUpdate(previousProps: Readonly<TimeAgoProps>): void {
        if (previousProps.time !== this.props.time || previousProps.now !== this.props.now) {
            TimeAgo.schedule();
        }
    }

    update() {
        this.setState(prevState => ({tick: prevState.tick + 1}));
    }

    render() {
        const {time, now, lang, invalidText, className, hint = true, hintFormat, ...others} = this.props;
        const date = createDate(time);

        if (!isValidDate(date)) {
            return <span className={classes('time-ago is-invalid', className)} {...others}>{invalidText ?? String(time)}</span>;
        }

        const agoText = timeago(date, now, lang);
        const title = hint ? (typeof hint === 'string' ? hint : formatDate(date, hintFormat)) : undefined;
        return <span className={classes('time-ago', className)} title={title} {...others}>{agoText}</span>;
    }

    static timer = 0;

    static instances = new Set<TimeAgo>();

    static register(instance: TimeAgo) {
        this.instances.add(instance);
        this.schedule();
    }

    static unregister(instance: TimeAgo) {
        this.instances.delete(instance);
        this.schedule();
    }

    static schedule() {
        if (this.timer) {
            window.clearTimeout(this.timer);
            this.timer = 0;
        }
        const delays = [...this.instances].map((instance) => {
            if (instance.props.now !== undefined || !isValidDate(instance.props.time)) {
                return Number.POSITIVE_INFINITY;
            }
            const diff = Math.abs(Date.now() - createDate(instance.props.time).getTime());
            return diff < 60000 ? 1000 : 60000 - (Date.now() % 60000) + 1;
        });
        const delay = Math.min(...delays);
        if (Number.isFinite(delay)) {
            this.timer = window.setTimeout(() => {
                this.timer = 0;
                this.instances.forEach(instance => instance.update());
                this.schedule();
            }, delay);
        }
    }
}
