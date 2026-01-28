import {$, type Cash, i18n, Component, html, nextGid, debounce} from '@zui/core';
import type {ResponsiveNavHelperProps} from '../types';
import {listenResize} from '@zui/core/src/dom';

export class ResponsiveNavHelper extends Component<ResponsiveNavHelperProps> {
    static NAME = 'ResponsiveNavHelper';

    protected _observer?: ResizeObserver;

    protected _windowResizeHandler?: () => void;

    protected declare _tryRender: () => void;

    init() {
        // Base implementation - override in subclasses
        this.$element.addClass('fade');
        this._tryRender = debounce(() => this.render(), this.options.debounce || 20) as () => void;
    }

    afterInit() {
        this.render();
        this.$element.addClass('in');

        const {watch = ['self']} = this.options;
        let watchWindow = false;
        const watchElements = watch.reduce((elements, watchType) => {
            if (watchType === 'window') {
                watchWindow = true;
            } else if (watchType === 'self') {
                elements.add(this.element);
            } else if (watchType === 'parent') {
                const parentElement = this.element.parentElement;
                if (parentElement) {
                    elements.add(parentElement);
                }
            } else {
                $(watchType).each((_, element) => {
                    elements.add(element as HTMLElement);
                });
            }
            return elements;
        }, new Set<HTMLElement>());

        if (watchElements.size) {
            this._observer = listenResize([...watchElements], () => {
                this._tryRender();
            });
        }
        if (watchWindow) {
            this._windowResizeHandler = this._tryRender;
            window.addEventListener('resize', this._windowResizeHandler);
        }
    }

    destroy(): void {
        super.destroy();
        this.$element.removeClass('rsh-overflowed').find('.rsh-more').remove();
        this._observer?.disconnect();
        if (this._windowResizeHandler) {
            window.removeEventListener('resize', this._windowResizeHandler);
            this._windowResizeHandler = undefined;
        }
    }

    render(options?: Partial<ResponsiveNavHelperProps>, reset?: boolean) {
        super.render(options, reset);

        const $container = this.getContainer();
        if (!$container.length) return;

        const containerSize = this.getContainerSize($container[0]);
        if (!containerSize) return;

        const $items = this.getItems();
        if (!$items.length) return;

        const $more = this.getMore();
        const $moreMenu = $more.find('.rsh-more-menu');
        const moreSize = this.getItemSize($more[0] as HTMLElement);

        let size = moreSize;
        let overflow = false;
        $moreMenu.empty();
        $items.each((_, item) => {
            const $item = $(item);
            if ($item.hasClass('rsh-more')) {
                return;
            }

            if (!overflow) {
                $item.css('display', 'flex');
                const itemSize = this.getItemSize($item[0] as HTMLElement);
                size += itemSize;
                if (size > containerSize) {
                    overflow = true;
                }
            }

            $item.css('display', overflow ? 'none' : 'flex');
            if (overflow) {
                this.addToMore($item, $moreMenu);
            }
        });

        this.$element.toggleClass('rsh-overflowed', overflow);
        $more.css('display', overflow ? 'flex' : 'none');
    }

    addToMore($item: Cash, $moreMenu: Cash) {
        const $menuItem = $item.clone().removeClass('nav-item').addClass('menu-item').css('display', 'flex');
        $moreMenu.append($menuItem);
    }

    getContainer(): Cash {
        const {container} = this.options;
        return container ? $(container) : this.$element;
    }

    getContainerSize(container?: HTMLElement): number {
        container = container || this.getContainer()[0] as HTMLElement;
        if (!container) return 0;

        const {getContainerSize} = this.options;
        return getContainerSize ? getContainerSize.call(this, container) : container.offsetWidth;
    }

    getItems(): Cash {
        const {items = 'li', ignoreItems} = this.options;
        let $items = this.$element.children(items);
        if (ignoreItems) {
            $items = $items.not(ignoreItems);
        }
        return $items;
    }

    getItemSize(item: HTMLElement) {
        const {getItemSize} = this.options;
        if (getItemSize) {
            return getItemSize.call(this, item);
        }
        const style = getComputedStyle(item);
        return item.offsetWidth + parseInt(style.marginLeft) + parseInt(style.marginRight);
    }

    getMore(): Cash {
        let $more = this.$element.find('.rsh-more');
        if ($more.length) {
            return $more;
        }

        $more = $('<li class="rsh-more item nav-item"></li>');

        let moreSetting = this.options.more || {html: '<a><span class="more-vert"></span></a>', attrs: {title: i18n.getLang('more')!}};
        if (typeof moreSetting === 'string') {
            moreSetting = {text: moreSetting};
        }
        const dropdownID = `rnh-dropdown-${nextGid()}`;
        const $menu = $(`<menu class="rsh-more-menu dropdown-menu menu" id="${dropdownID}"></menu>`);
        const $moreBtn = $(moreSetting.html || '<a></a>').attr({
            'data-toggle': 'dropdown',
            'data-target': `#${dropdownID}`,
            ...moreSetting.attrs,
        });
        if (moreSetting.icon) {
            $moreBtn.prepend(`<i class="icon ${moreSetting.icon}"></i>`);
        }
        if (moreSetting.text) {
            $moreBtn.append(html`<span class="text">${moreSetting.text}</span>` as string);
        }
        if (moreSetting.caret) {
            $moreBtn.append('<span class="caret"></span>');
        }
        $more.append($moreBtn, $menu);

        this.$element.append($more);
        this.options.onCreateMoreItem?.call(this, $more);
        return $more;
    }
}

ResponsiveNavHelper.register();
