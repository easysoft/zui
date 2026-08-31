import {Component, parseSize, $} from '@zui/core';
import {store} from '@zui/store';
import {Moveable} from '@zui/dnd';
import '@zui/css-icons';
import '@zui/split';

import type {SizeSetting} from '@zui/core';
import type {SidebarOptions} from '../types';

function calcSize(size: SizeSetting, totalSize: number) {
    const [value, unit] = parseSize(size);
    const result = unit === '%' ? (totalSize * value / 100) : value;
    return Number.isFinite(result) ? Math.max(0, result) : 0;
}

const RESIZING_CLASS = 'is-sidebar-resizing';

const ANIMATION_CLASS = 'has-sidebar-animation';

const TRANSITION_CLASS = 'is-animating';

const GUTTER_SELECTOR = '.sidebar-gutter';

export class Sidebar extends Component<SidebarOptions, {
    sidebarResize: [number];
}> {
    static NAME = 'Sidebar';

    static DEFAULT: Partial<SidebarOptions> = {
        minWidth: 40,
        toggleBtn: true,
        animation: true,
        dragToResize: true,
        dbclick: 'reset',
    };

    declare _container: HTMLElement;

    declare _width: number;

    declare _side: 'left' | 'right';

    declare _storeID: string;

    declare _raf: number;

    declare _widthBack: number;

    declare _moveable?: Moveable;

    declare _startWidth: number;

    declare _defaultWidth: number;

    declare _minWidth: number;

    declare _maxWidth: number;

    get side() {
        return this._side;
    }

    get width() {
        return this._width;
    }

    get $parent() {
        const {parent} = this.options;
        const $parent = parent ? $(parent) : this.$element.parent();
        return $parent.length ? $parent : this.$element.parent();
    }

    afterInit() {
        const {$element} = this;
        const $container = this.$parent;
        const container = $container[0]!;
        const containerWidth = Math.max(0, $container.width());
        this._container = container;

        const {
            preserve,
            side = $element.hasClass('sidebar-right') ? 'right' : 'left',
            animation,
            dragToResize,
            width,
            minWidth = 0,
            maxWidth = Number.MAX_SAFE_INTEGER,
            toggleBtn,
            dbclick,
        } = this.options;
        this._storeID = preserve ? `SIDEBAR:${preserve}:width` : '';
        this._side = side === 'right' ? 'right' : 'left';
        this._minWidth = calcSize(minWidth, containerWidth);
        this._maxWidth = Math.max(this._minWidth, calcSize(maxWidth, containerWidth));
        this._defaultWidth = Math.max(this._minWidth, Math.min(this._maxWidth, calcSize(width ?? $element.width(), containerWidth)));
        const storedWidth = preserve ? store.get(this._storeID) : undefined;
        this._width = typeof storedWidth === 'number' && Number.isFinite(storedWidth)
            ? Math.max(0, Math.min(this._maxWidth, storedWidth))
            : this._defaultWidth;

        this.render();

        if (toggleBtn) {
            $element.on(`click${this.namespace}`, '.gutter-toggle', () => this.toggle());
        }

        if (dbclick) {
            $element.on(`dblclick${this.namespace}`, GUTTER_SELECTOR, () => {
                if (dbclick === 'reset') {
                    this.update(this._defaultWidth);
                } else {
                    this.toggle();
                }
            }).on('mousedown', GUTTER_SELECTOR, (event: Event) => {
                event.preventDefault();
            });
        }

        if (dragToResize) {
            this._moveable = new Moveable($element, {
                selector: GUTTER_SELECTOR,
                move: false,
                onMoveStart: () => {
                    this._startWidth = this._width;
                    this.$parent.addClass(RESIZING_CLASS).removeClass(ANIMATION_CLASS);
                },
                onMove: (_event, info) => {
                    const {deltaX} = info;
                    if (Math.abs(deltaX) < 10) {
                        return;
                    }
                    this.update(this._startWidth + (deltaX * (this._side === 'left' ? 1 : -1)));
                },
                onMoveEnd: () => {
                    if (animation) {
                        this.$parent.addClass(ANIMATION_CLASS);
                    }
                    this.$parent.removeClass(RESIZING_CLASS);
                },
            });
        }
        if (animation) {
            this.on('transitionend', (e) => {
                if (e.target === $element[0] && e.propertyName === 'width') {
                    $element.removeClass(TRANSITION_CLASS);
                }
            });
        }
    }

    destroy(): void {
        super.destroy();
        if (this._raf) {
            cancelAnimationFrame(this._raf);
        }
        this._moveable?.destroy();
    }

    toggle(collapsed?: boolean) {
        collapsed = collapsed ?? !!this._width;
        if (collapsed) {
            this._widthBack = this._width;
        }
        this.update(collapsed ? 0 : this._widthBack || this._defaultWidth);
    }

    update(width: number, immediately?: boolean) {
        if (!immediately) {
            if (this._raf) {
                cancelAnimationFrame(this._raf);
            }
            this._raf = requestAnimationFrame(() => {
                this._raf = 0;
                this.update(width, true);
            });
            return;
        }

        const {preserve, toggleBtn, onResize, onToggle, animation} = this.options;
        const maximumWidth = Math.max(0, Math.min(this._maxWidth, this._container.clientWidth));
        width = Number.isFinite(width) ? Math.max(0, width) : this._defaultWidth;
        if (width && width < this._minWidth) {
            width = toggleBtn ? 0 : Math.min(this._minWidth, maximumWidth);
        } else {
            width = Math.min(maximumWidth, width);
        }
        if (width === this._width) {
            return;
        }

        const isOldCollapsed = !this._width;
        const isCollapsed = !width;
        this._width = width;
        if (preserve) {
            store.set(this._storeID, width);
        }
        this.render();
        onResize?.(width);
        if (isOldCollapsed !== isCollapsed) {
            if (isOldCollapsed && animation) {
                this.$element.addClass(TRANSITION_CLASS);
            }
            onToggle?.(isCollapsed);
        }
        this.emit('sidebarResize', width);
    }

    render() {
        const {side, width, $element, $parent} = this;
        const isCollapsed = !width;
        const {toggleBtn, gutterWidth = parseSize($element.parent().css('gap')!)[0] || 1, animation} = this.options;
        $element.addClass(`sidebar-${side}`).toggleClass('is-collapsed', isCollapsed).toggleClass('is-expanded', !isCollapsed).css({'--gutter-width': `${gutterWidth}px`, width: `var(--sidebar-${side}-width)`, '--sidebar-duration': typeof animation === 'number' ? `${animation}ms` : null});

        let $gutter = $element.find(GUTTER_SELECTOR);
        if (!$gutter.length) {
            $gutter = $('<div class="sidebar-gutter gutter gutter-horz"></div>').appendTo($element);
        }

        if (toggleBtn) {
            if (!$gutter.children('.gutter-toggle').length) {
                $gutter.append(`<button class="gutter-toggle" type="button"><span class="chevron-${side}"></span></button>`);
            }
        } else {
            if (!$gutter.children('.gutter-resize-handler').length) {
                $gutter.append('<div class="gutter-resize-handler"></div>');
            }
        }

        $parent
            .addClass(`has-sidebar-${side}`)
            .css(`--sidebar-${side}-width`, `${width}px`)
            .toggleClass(`is-sidebar-${side}-collapsed`, isCollapsed);

        if (this._moveable?.state) {
            $element.removeClass(TRANSITION_CLASS);
        }
    }
}

Sidebar.register();
