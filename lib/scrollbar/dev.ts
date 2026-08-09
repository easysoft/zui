import 'zui-dev';
import {h, render} from 'preact';
import {Scrollbar} from './src/main';

onPageUpdate(() => {
    const element = document.querySelector('#scrollbarExample');
    if (!element) {
        return;
    }
    render(h(Scrollbar, {
        clientSize: 320,
        scrollSize: 960,
        defaultScrollPos: 160,
        onScroll: scrollPos => console.log('scroll position:', scrollPos),
    }), element);
});
