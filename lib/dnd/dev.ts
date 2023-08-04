import '@zui/menu';
import 'zui-dev';
import {$} from '@zui/core';
import {Draggable} from './src/main';

$.registerLib('sortablejs', {
    src: '/lib/sortable/public/sortable.min.js',
    name: 'Draggable',
});

onPageUpdate(() => {
    const sortable1 = new Draggable('#example1', {
        onDragStart: (event, dragElement) => {
            console.log('onDragStart', event, dragElement);
            return true;
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
    });
    console.log('> sortable1', sortable1);
});
