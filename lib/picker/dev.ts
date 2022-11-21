import '@zui/icons';
import 'zui-dev';
import {Picker} from './src/main';

onPageUpdate(() => {
    new Picker('#picker3', {
        items: [
            {text: '复制'},
            {text: '复制2'},
        ],
        onSelect: () => {console.log(111);},
    });
});