import 'zui-dev';
import {VirtualList} from './src/main';

onPageUpdate(() => {
    const virtualGrid = new VirtualList('#virtualList', {
        height: 200,
        className: 'bg-gray',
        itemCount: 20,
        padding: 12,
        gap: 8,
        skipOverflow: true,
        getItem(_data, index) {
            return {content: `${index}`, className: 'secondary rounded'};
        },
        itemSize(_data, index) {
            return (index + 1) * 10;
        },
    });
    Object.assign(window, {vg: virtualGrid});
    console.log('> virtualGrid', virtualGrid);
});
