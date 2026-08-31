import '@zui/menu';
import 'zui-dev';
import {$} from '@zui/core';
import {Draggable, Moveable, Resizable} from './src/main';

$.registerLib('sortablejs', {
    src: '/lib/sortable/public/sortable.min.js',
    name: 'Draggable',
});

let instances: {destroy: () => void}[] = [];

onPageUpdate(() => {
    // Destroy instances from the previous run so HMR does not leak global mouse/scroll/resize listeners.
    instances.forEach(instance => instance.destroy());
    instances = [];

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

    const resize1 = new Resizable('#resize1', {
        selector: 'self',
        containerPadding: 24,
    });
    const resize2 = new Resizable('#resize2', {
        selector: 'self',
        containerPadding: 24,
    });
    const resize3 = new Resizable('#resize3', {
        selector: 'self',
        minWidth: 100,
        minHeight: 100,
        containerPadding: 24,
    });
    const resize4 = new Resizable('#resize4', {
        selector: 'self',
        containerPadding: {
            left: 100,
            top: 200,
            right: 200,
            bottom: 100,
        },
    });

    instances.push(draggable, moveable, resize1, resize2, resize3, resize4);
});
