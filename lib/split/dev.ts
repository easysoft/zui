import '@zui/menu';
import 'zui-dev';
import {$} from '@zui/core';
import '@zui/button';
import {Split} from './src/main';

let instances: Split[] = [];

onPageUpdate(() => {
    // Destroy instances from the previous run so HMR does not leak listeners or double-initialize.
    instances.forEach(instance => instance.destroy());
    instances = [];

    const split1 = new Split('#splitExample1', {
        minSize: 0,
        toggleBtn: true,
        sizes: [50, 125, 'auto', 'auto'],
        animation: true,
        onDragEnd: (sizes) => {
            console.log('> split1 onDragEnd', sizes);
        },
    });
    console.log('> split1', split1);

    const split2 = new Split('#splitExample2', {
        minSize: 0,
        vertical: true,
        toggleBtn: true,
    });
    console.log('> split2', split2);

    const split3 = new Split('#splitExample3', {
        minSize: 0,
        animation: true,
    });
    console.log('> split3', split3);

    // Wire the control buttons to programmatic collapse/expand/toggle methods.
    $('[data-split-collapse],[data-split-expand],[data-split-toggle]').on('click', (event: MouseEvent) => {
        const button = event.currentTarget as HTMLElement;
        const collapse = button.getAttribute('data-split-collapse');
        const expand = button.getAttribute('data-split-expand');
        const toggle = button.getAttribute('data-split-toggle');
        if (collapse !== null) {
            split3.collapse(+collapse);
        } else if (expand !== null) {
            split3.expand(+expand);
        } else if (toggle !== null) {
            split3.toggle(+toggle);
        }
    });

    instances.push(split1, split2, split3);
});
