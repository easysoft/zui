import 'zui-dev';
import '@zui/button';
import '@zui/menu';
import '@zui/icons';
import '@zui/form-control';
import {ColorPicker, ColorInput} from './src/main';

onPageUpdate(() => {
    const colorPickerElement = document.querySelector<HTMLElement>('#colorPicker');
    if (colorPickerElement) {
        const colorPicker = new ColorPicker(colorPickerElement, {
            heading: '选择颜色',
            closeBtn: true,
            required: true,
        });
        console.log('> colorPicker', colorPicker);
    }

    const colorInputElement = document.querySelector<HTMLElement>('#colorInput');
    if (colorInputElement) {
        const colorInput = new ColorInput(colorInputElement, {
            hint: '选择颜色',
            defaultValue: '#ff0055',
        });
        console.log('> colorInput', colorInput);
    }
});
