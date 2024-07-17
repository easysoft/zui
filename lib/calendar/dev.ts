import 'preact/debug';
import 'zui-dev';
import {Calendar} from './src/main';

onPageLoad(() => {
    const calendar = new Calendar('#calendar', {});
    console.log('> calendar instance created', calendar);
});