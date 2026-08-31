import SplitJS from 'split.js';
import {Component, $, parseSize, SizeSetting, Cash} from '@zui/core';
import '@zui/css-icons/src/icons/chevron.css';

import type {SplitOptions} from '../types';

function mapSizes(sizes: (SizeSetting | null | undefined)[], totalSize: number, colsCount: number, gutterSize: number): number[] {
    totalSize = totalSize - (colsCount - 1) * gutterSize;
    // Copy the input so the caller's array (e.g. options.sizes) is never mutated.
    const list = sizes.slice(0, colsCount);
    while (list.length < colsCount) {
        list.push(undefined);
    }
    const initialSizes: number[] = [];
    const autoIndex: number[] = [];
    let currentSize = 0;
    list.forEach((size, index) => {
        if (size === null || size === undefined) {
            autoIndex.push(index);
            return;
        }
        const [val, unit] = parseSize(size);
        if (Number.isNaN(val)) {
            autoIndex.push(index);
            return;
        }
        const thisSize = unit === '%' ? (totalSize * val / 100) : val;
        currentSize += thisSize;
        initialSizes[index] = thisSize;
    });
    if (autoIndex.length) {
        const autoSize = Math.max(1, (totalSize - currentSize) / autoIndex.length);
        autoIndex.forEach((index) => {
            initialSizes[index] = autoSize;
            currentSize += autoSize;
        });
    }
    if (currentSize <= 0) {
        // Avoid divide-by-zero producing NaN percentages; fall back to an even distribution.
        return initialSizes.map(() => 100 / colsCount);
    }
    return initialSizes.map(size => 100 * size / currentSize);
}

export class Split extends Component<SplitOptions> {
    static NAME = 'Split';

    static DEFAULT = {
        gutterSize: 8,
        dblClickToggle: true,
    };

    static SplitJS = SplitJS;

    protected declare _split: SplitJS.Instance;

    protected declare _elements: HTMLElement[];

    protected declare _raf: number;

    protected _sizeBack: number[][] = [];

    /** 分栏数量。The number of panes. */
    get count() {
        return this._elements.length;
    }

    /** 是否为垂直分栏。Whether the split is vertical. */
    get isVertical() {
        return this.options.direction === 'vertical' || !!this.options.vertical;
    }

    /** 分栏容器在主轴方向上的总尺寸（像素）。The container size along the main axis, in pixels. */
    get totalSize() {
        return this.$element[this.isVertical ? 'height' : 'width']();
    }

    /**
     * 判断指定分栏是否已折叠（主轴尺寸小于 1px）。
     * Whether the pane at the given index is collapsed (its main-axis size is below 1px).
     *
     * @param index 分栏索引。Pane index.
     */
    isCollapsed(index: number) {
        return $(this._elements[index])[this.isVertical ? 'height' : 'width']() < 1;
    }

    /**
     * setSizes behaves the same as the sizes configuration option, passing an array of percents or CSS values.
     * It updates the sizes of the elements in the split.
     *
     * @param sizes Sizes of the elements in the split.
     */
    setSizes(sizes: number[], usePercent?: boolean): void {
        if (!usePercent) {
            sizes = mapSizes(sizes, this.totalSize, this.count, this.options.gutterSize!);
        }
        this._split.setSizes(sizes);
        this._update();
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
        this._sizeBack[index] = this.getSizes();
        this._split.collapse(index);
        this._update();
    }

    /**
     * 展开此前被折叠的分栏，尽量恢复折叠前的尺寸；若无备份则回退为一半尺寸。
     * Expand a previously collapsed pane, restoring the sizes captured before collapse, or falling back to half size.
     *
     * @param index 分栏索引。Pane index.
     */
    expand(index: number): void {
        const sizes = this.getSizes();
        const backSizes = this._sizeBack[index];
        if (backSizes) {
            sizes[index] = backSizes[index];
            const nearIndex = index === (this.count - 1) ? (index - 1) : (index + 1);
            sizes[nearIndex] = backSizes[nearIndex];
        } else {
            sizes[index] = 50;
        }
        this.setSizes(sizes);
    }

    /**
     * 在折叠与展开之间切换指定分栏。
     * Toggle the pane at the given index between collapsed and expanded.
     *
     * @param index 分栏索引。Pane index.
     */
    toggle(index: number): void {
        if (this.isCollapsed(index)) {
            this.expand(index);
        } else {
            this.collapse(index);
        }
    }

    afterInit() {
        const {elements = '.split-cell', toggleBtn, vertical, sizes, gutterSize = 8, animation, dblClickToggle, ...options} = this.options;
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
        splitElements.forEach(element => $(element).addClass('split-cell'));
        this._elements = splitElements;
        this._handleDragEnd = this._handleDragEnd.bind(this);
        this._createGutter = this._createGutter.bind(this);
        let initialSizes: number[] | undefined;
        if (sizes) {
            initialSizes = mapSizes(sizes, this.totalSize, splitElements.length, gutterSize);
        }
        this._split = SplitJS(splitElements, {
            direction: vertical ? 'vertical' : 'horizontal',
            sizes: initialSizes,
            gutterSize,
            ...options,
            onDragEnd: this._handleDragEnd,
            gutter: this._createGutter,
        });

        const toggleFromGutter = ($gutter: Cash) => {
            const index = $gutter.z('index') as number;
            const {count} = this;
            this.toggle((index === (count - 1) && count > 2) ? index : (index - 1));
        };
        if (toggleBtn) {
            this.on('click', (event: MouseEvent) => {
                const $toggleBtn = $(event.target as HTMLElement).closest('.gutter-toggle');
                if (!$toggleBtn.length) {
                    return;
                }
                toggleFromGutter($toggleBtn.parent());
            });
        }
        if (dblClickToggle) {
            this.on('dblclick', (event: MouseEvent) => {
                const $gutter = $(event.target as HTMLElement).closest('.gutter');
                if (!$gutter.length) {
                    return;
                }
                toggleFromGutter($gutter);
            });
        }
        if (animation) {
            this.on('transitionend', this._update.bind(this, false));
        }
        this._update();
    }

    /**
     * Destroy the instance. It removes the gutter elements, and the size CSS styles Split.js set.
     *
     * @param preserveStyles   Whether to preserve styles.
     * @param preserveGutters  Whether to preserve gutters.
     */
    destroy(preserveStyles?: boolean, preserveGutters?: boolean): void {
        super.destroy();
        if (this._raf) {
            cancelAnimationFrame(this._raf);
        }
        // `_split` may be undefined if the instance is destroyed before afterInit runs (afterInit is scheduled via requestAnimationFrame).
        this._split?.destroy(preserveStyles, preserveGutters);
    }

    render() {
        super.render();
        this._update();
    }

    protected _update(immediately?: boolean) {
        if (!immediately) {
            if (this._raf) {
                cancelAnimationFrame(this._raf);
            }
            this._raf = requestAnimationFrame(() => {
                this._raf = 0;
                this._update(true);
            });
            return;
        }
        const {animation, vertical, gutterSize} = this.options;
        const isVertical = this.isVertical || !!vertical;
        this.$element
            .css('--split-gutter-size', `${gutterSize!}px`)
            .toggleClass('split-vert', isVertical)
            .toggleClass('split-horz', !isVertical)
            .toggleClass('has-animation', !!animation);
        this._elements.forEach((_element, index) => {
            const isCollapsed = this.isCollapsed(index);
            const $element = $(this._elements[index]).toggleClass('is-collapsed', isCollapsed);
            $element.prev('.gutter').toggleClass('is-next-collapsed', isCollapsed);
            $element.next('.gutter').toggleClass('is-prev-collapsed', isCollapsed);
        });
    }

    protected _createGutter(index: number, direction: 'horizontal' | 'vertical'): HTMLElement {
        const {toggleBtn} = this.options;
        const {count} = this;
        const $gutter = $(`<div class="gutter gutter-${direction === 'vertical' ? 'vert' : 'horz'}" />`)
            .z('index', index)
            .toggleClass('is-first', index === 1)
            .toggleClass('is-last', index === count - 1);
        if (toggleBtn === true || (Array.isArray(toggleBtn) && toggleBtn[index])) {
            $gutter.append('<button class="gutter-toggle" type="button"><span class="chevron-left"></span></button>');
        }
        return $gutter[0] as HTMLElement;
    }

    protected _handleDragEnd(sizes: number[]) {
        this._update();
        this.options.onDragEnd?.(sizes);
    }
}
