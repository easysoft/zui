import {$, type Cash, i18n, Component, html, debounce} from '@zui/core';
import type {Item} from '@zui/common-list';
import type {ResponsiveNavHelperProps} from '../types';
import {listenResize} from '@zui/core/src/dom';
import {Dropdown} from '@zui/dropdown';

export class ResponsiveNavHelper extends Component<ResponsiveNavHelperProps> {
    static NAME = 'ResponsiveNavHelper';

    protected _observer?: ResizeObserver;

    protected _windowResizeHandler?: () => void;

    protected declare _tryRender: () => void;

    protected _moreItems?: Item[];

    protected _moreElements?: HTMLElement[];

    protected _dropdown?: Dropdown;

    init() {
        // Base implementation - override in subclasses
        this.$element.addClass('fade');
        this._tryRender = debounce(() => this.render(), this.options.debounce || 20) as () => void;
    }

    afterInit() {
        this.render();
        this.$element.addClass('in');

        const {watch = ['container']} = this.options;
        let watchWindow = false;
        const watchElements = watch.reduce((elements, watchType) => {
            if (watchType === 'window') {
                watchWindow = true;
            } else if (watchType === 'container') {
                elements.add(this.getContainer()[0] as HTMLElement);
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
        this._dropdown?.destroy();
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
        const moreSize = this.getItemSize($more[0] as HTMLElement);

        let size = moreSize;
        let overflow = false;
        this._moreItems = undefined;
        this._moreElements = [];
        for (const item of $items) {
            const $item = $(item);
            if ($item.hasClass('rsh-more')) {
                return;
            }

            const opacity = $item.css('opacity');
            if (!overflow) {
                $item.css({display: 'flex', opacity: 0});
                const itemSize = this.getItemSize($item[0] as HTMLElement);
                size += itemSize;
                if (size > containerSize) {
                    overflow = true;
                }
            }

            if (overflow) {
                this._moreElements!.push(item);
            }

            $item.css({opacity, display: overflow ? 'none' : 'flex'}).toggleClass('rsh-overflow-item', overflow);
        }

        this.$element.toggleClass('rsh-overflowed', overflow);
        $more.css('display', overflow ? 'flex' : 'none');
    }

    getContainer(): Cash {
        const {container} = this.options;
        if (container === 'parent') {
            return this.$element.parent();
        }
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

    getMoreItems(): Item[] {
        const {_moreElements} = this;
        if (!_moreElements?.length) {
            return [];
        }
        const {getMoreItem = this.getMoreItem.bind(this), getMoreItems} = this.options;
        if (getMoreItems) {
            return getMoreItems.call(this, _moreElements);
        }
        return _moreElements.reduce((items, element) => {
            const userItem = getMoreItem.call(this, element);
            if (userItem) {
                items.push(userItem);
            }
            return items;
        }, [] as Item[]);
    }

    getMoreItem(element: HTMLElement): Item | undefined {
        const $element = $(element);
        if ($element.hasClass('divider')) {
            return {type: 'divider'};
        }
        const $dropdown = $element.children('[data-toggle="dropdown"],z-use-dropdown');
        if ($dropdown.length) {
            let dropdown = Dropdown.query($dropdown);
            if (!dropdown) {
                dropdown = new Dropdown($dropdown);
            }
            return {items: dropdown.options.items || [], text: $dropdown.find('.text').text(), icon: $dropdown.find('.icon').attr('class')?.replace('icon ', '')};
        }
        const attrs = Object.fromEntries(Array.from(element.attributes).map(attr => [attr.name, attr.value]));
        if (attrs.style) {
            attrs.style = attrs.style.replace('display: none;', '');
        }
        if (attrs.class) {
            attrs.class = attrs.class.replace('nav-item', 'menu-item');
        }
        return {type: 'node', html: $element.html(), attrs};
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
        const $moreBtn = $(moreSetting.html || '<a></a>').attr({
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
        $more.append($moreBtn);

        this._dropdown = new Dropdown($moreBtn[0], {
            placement: 'bottom-start',
            items: this.getMoreItems.bind(this),
            ...this.options.moreDropdown,
        }) as Dropdown;

        this.$element.append($more);
        this.options.onCreateMore?.call(this, $more, this._dropdown);
        return $more;
    }
}

ResponsiveNavHelper.register();
