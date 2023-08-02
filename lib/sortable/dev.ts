import '@zui/menu';
import 'zui-dev';
import {$} from '@zui/core';
import {Sortable} from './src/main';

$.registerLib('sortablejs', {
    src: 'lib/sortable/public/sortable.min.js',
    name: 'Sortable',
});

onPageUpdate(() => {
    const sortable1 = new Sortable('#example1', {
        animation: 150,
        ghostClass: 'bg-primary-pale',
    });
    console.log('> sortable1', sortable1);
});
