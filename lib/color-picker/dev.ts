import 'zui-dev';
import '@zui/button';
import '@zui/menu';
import '@zui/form-control';
import {ColorPicker} from './src/main';

onPageUpdate(() => {
    const colorPickerElement = document.querySelector<HTMLElement>('#colorPicker');
    if (colorPickerElement) {
        const colorPicker = new ColorPicker(colorPickerElement, {
            heading: '选择颜色',
            closeBtn: true,
        });
        console.log('> colorPicker', colorPicker);
    }
});
