import SplitJS from 'split.js';
import {Component, $} from '@zui/core';
import {SplitOptions} from '../types';

export class Split extends Component<SplitOptions> {
    static SplitJS = SplitJS;

    protected declare _split: SplitJS.Instance;

    // setSizes behaves the same as the sizes configuration option, passing an array of percents or CSS values.
    // It updates the sizes of the elements in the split.
    /**
     * setSizes behaves the same as the sizes configuration option, passing an array of percents or CSS values.
     * It updates the sizes of the elements in the split.
     *
     * @param sizes Sizes of the elements in the split.
     */
    setSizes(sizes: number[]): void {
        return this._split.setSizes(sizes);
    }

    /**
     * getSizes returns an array of percents, suitable for using with setSizes or creation.
     *
     * @returns An array of percents, suitable for using with setSizes or creation.
     */
    getSizes(): number[] {
        return this._split.getSizes();
    }

    /**
     * collapse changes the size of element at index to 0.
     * Every element except the last is collapsed towards the front (left or top).
     * The last is collapsed towards the back.
     *
     * @param index Index of the element to collapse.
     */
    collapse(index: number): void {
        return this._split.collapse(index);
    }

    /**
     * Destroy the instance. It removes the gutter elements, and the size CSS styles Split.js set.
     *
     * @param preserveStyles   Whether to preserve styles.
     * @param preserveGutters  Whether to preserve gutters.
     */
    destroy(preserveStyles?: boolean, preserveGutters?: boolean): void {
        super.destroy();
        return this._split.destroy(preserveStyles, preserveGutters);
    }

    afterInit() {
        const {elements = '.split-cell', ...options} = this.options;
        const splitElements = (Array.isArray(elements) ? elements : [elements]).reduce<HTMLElement[]>((list, selector) => {
            if (selector) {
                if (selector instanceof HTMLElement) {
                    list.push(selector);
                } else {
                    (typeof selector === 'string' ? this.$element.children(selector) : $(selector)).each((_, ele) => {
                        list.push(ele);
                    });
                }
            }
            return list;
        }, []);
        this._split = SplitJS(splitElements, options);
    }
}
