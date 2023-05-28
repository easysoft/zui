import {Component} from 'preact';
import {classes} from '@zui/core';
import {Alert} from '@zui/alert/src/component';
import {MessagerItemOptions, MessagerPlacement} from '../types';

function getAnimationFromPlacement(placement?: MessagerPlacement): string {
    if (placement === 'center') {
        return 'fade-from-center';
    }
    if (placement) {
        if (placement.includes('top')) {
            return 'fade-from-top';
        }
        if (placement.includes('bottom')) {
            return 'fade-from-bottom';
        }
    }
    return 'fade';
}

export class MessagerItem extends Component<MessagerItemOptions> {
    componentDidMount() {
        this.props.afterRender?.call(this, {firstRender: true});
    }

    componentDidUpdate(): void {
        this.props.afterRender?.call(this, {firstRender: false});
    }

    componentWillUnmount(): void {
        this.props.beforeDestroy?.call(this);
    }

    render() {
        const {
            afterRender,
            beforeDestroy,
            margin,
            type,
            placement,
            animation,
            show,
            className,
            time,
            ...alertOptions
        } = this.props;
        return (
            <Alert
                className={classes('messager', className, type, animation === true ? getAnimationFromPlacement(placement) : animation, show ? 'in' : '')}
                {...alertOptions}
            />
        );
    }
}
