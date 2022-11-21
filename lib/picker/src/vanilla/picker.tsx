import '@zui/css-icons/src/icons/arrow.css';
import '../css/index.css';
import {ComponentFromReact} from '@zui/com-helpers/src/helpers/component-react';
import {PickerMenu as PickerMenuReact} from '../component/picker-menu';
import type {PickerOptions, PickerBasicProps, PickerItemProps} from '../types';

export class Picker<T extends PickerBasicProps = PickerItemProps> extends ComponentFromReact<PickerOptions<T>, PickerMenuReact<T>> {
    static NAME = 'picker';

    static Component = PickerMenuReact;
}