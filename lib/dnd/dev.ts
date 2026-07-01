import '@zui/menu';
import 'zui-dev';
import {$} from '@zui/core';
import {Draggable, Moveable, Resizable} from './src/main';

$.registerLib('sortablejs', {
    src: '/lib/sortable/public/sortable.min.js',
    name: 'Draggable',
});

onPageUpdate(() => {
    const draggable = new Draggable('#example1', {
        onDragStart: (event, dragElement) => {
            console.log('onDragStart', event, dragElement);
        },
        onDragEnd: (event, dragElement) => {
            console.log('onDragEnd', {event, dragElement});
        },
        onDragEnter: (event, dragElement, dropElement) => {
            console.log('onDragEnter', {event, dragElement, dropElement});
        },
        onDragLeave: (event, dragElement, dropElement) => {
            console.log('onDragLeave', {event, dragElement, dropElement});
        },
        onDrop: (event, dragElement, dropElement) => {
            console.log('onDrop', {event, dragElement, dropElement});
        },
        onChange(newState, oldState) {
            console.log('onChange', {newState, oldState});
        },
    });
    console.log('> draggable', draggable);

    const moveable = new Moveable('#example2', {
        container: 'self',
        containerPadding: 8,
        autoUpdate: true,
        onChange(newState, oldState, event) {
            console.log('onChange', event.type, {newState, oldState});
        },
    });

    console.log('> moveable', moveable);

    new Resizable('#resize1', {
        x: 'left',
        y: 'top',
        edgeDetection: {
            container: 'viewport',
            distance: 24,
        },
    });
    new Resizable('#resize2', {
        x: 'right',
        y: 'bottom',
        edgeDetection: {
            container: 'viewport',
            distance: 24,
        },
    });
    new Resizable('#resize3', {
        x: 'right',
        y: 'top',
        minWidth: 100,
        minHeight: 100,
        edgeDetection: {
            container: 'viewport',
            distance: 24,
        },
    });
    new Resizable('#resize4', {
        x: 'left',
        y: 'bottom',
        edgeDetection: {
            container: 'viewport',
            distance: {
                left: 100,
                top: 200,
                right: 200,
                bottom: 100,
            },
        },
    });
});
