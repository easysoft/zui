import 'zui-dev';
import '@zui/button';
import '@zui/input-control';
import {SearchBox} from './src/main';

onPageUpdate(() => {
    const searchBox = new SearchBox('#searchBox', {
        placeholder: 'Search...',
        circle: true,
    });
});
