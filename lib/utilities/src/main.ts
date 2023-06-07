import './vars.css';
import './interactivity/index.css';
import './layout/index.css';
import './flex/index.css';
import './spacing/index.css';
import './sizing/index.css';
import './style/index.css';
import './typography/index.css';
import './backgrounds/index.css';
import './borders/index.css';
import './effects/index.css';
import {$} from '@zui/core';

$(() => {
    $('.disabled, [disabled]').on('click', (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();
    });
});
