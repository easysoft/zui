import 'zui-dev';
import {VirtualGrid} from './src/main';

onPageUpdate(() => {
    const element = document.getElementById('virtualGridExample');
    if (element) {
        const virtualGrid = new VirtualGrid(element, {
            width: 400,
            height: 200,
            className: 'gray',
            cells: [
                {key: '1', className: 'primary', bounding: {left: 0, top: 0, width: 100, height: 50}},
                {key: '2', className: 'danger', bounding: {left: 0, top: 50, width: 50, height: 50}},
            ],
        });
        console.log('> virtualGrid', virtualGrid);
    }
});
