import 'zui-dev';
import {Avatar} from './src/main';

onPageUpdate(() => {
    new Avatar('#avatar1', {
        text: 'User',
        code: 12,
        circle: true,
    });
    new Avatar('#avatar2', {
        text: '李',
        size: 20,
        circle: true,
    });
    new Avatar('#avatar3', {
        text: '韩梅梅',
        size: 20,
        circle: true,
    });
    new Avatar('#avatar4', {});
    new Avatar('#avatar5', {
        rounded: 'lg',
    });
    new Avatar('#avatar6', {
        rounded: 'lg',
        size: 'lg',
    });
});
