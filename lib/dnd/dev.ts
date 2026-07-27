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
        autoUpdate: {resize: true, scroll: true, targets: 'all'},
        onChange(newState, oldState, event) {
            console.log('onChange', event.type, {newState, oldState});
        },
    });

    console.log('> moveable', moveable);

    new Resizable('#resize1', {
        selector: 'self',
        containerPadding: 24,
    });
    new Resizable('#resize2', {
        selector: 'self',
        containerPadding: 24,
    });
    new Resizable('#resize3', {
        selector: 'self',
        minWidth: 100,
        minHeight: 100,
        containerPadding: 24,
    });
    new Resizable('#resize4', {
        selector: 'self',
        containerPadding: {
            left: 100,
            top: 200,
            right: 200,
            bottom: 100,
        },
    });
});
