import '@zui/menu';
import 'zui-dev';
import {$} from '@zui/core';
import {Draggable, Moveable} from './src/main';

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
        onChange(newState, oldState, event) {
            console.log('onChange', event.type, {newState, oldState});
        },
    });

    console.log('> moveable', moveable);
});
