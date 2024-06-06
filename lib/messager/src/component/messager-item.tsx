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

export function MessagerItem({
    margin,
    type,
    placement,
    animation,
    show,
    className,
    time,
    ...alertOptions
}: MessagerItemOptions) {
    if (typeof alertOptions.html === 'string') {
        alertOptions.content = {html: alertOptions.html};
        delete alertOptions.html;
    }
    return (
        <Alert
            className={classes('messager', className, type, animation === true ? getAnimationFromPlacement(placement) : animation, show ? 'in' : '')}
            {...alertOptions}
        />
    );
}
