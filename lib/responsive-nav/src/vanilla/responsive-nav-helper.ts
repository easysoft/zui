import {$, type Cash, i18n, Component, html, debounce, evalValue} from '@zui/core';
import type {Item} from '@zui/common-list';
import type {ResponsiveNavHelperProps} from '../types';
import {listenResize} from '@zui/core/src/dom';
import {Dropdown} from '@zui/dropdown';

export class ResponsiveNavHelper extends Component<ResponsiveNavHelperProps> {
    static DEFAULT = {
        showSelected: true,
    };

    static NAME = 'ResponsiveNavHelper';

    protected _observer?: ResizeObserver;

    protected _windowResizeHandler?: () => void;

    protected declare _tryRender: () => void;

    protected _moreItems?: Item[];

    protected _moreElements?: HTMLElement[];

    protected _dropdown?: Dropdown;

    init() {
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
        $more.css({display: 'flex', opacity: 0});
        const moreSize = this.getItemSize($more[0] as HTMLElement);
        $more.css({display: 'none', opacity: 0});

        let size = moreSize;
        let overflow = false;
        this._moreItems = undefined;
        this._moreElements = [];
        const sizeMap = new Map<HTMLElement, number>();
        const {fixedItems = '.is-rsh-fixed', moreItems = '.is-rsh-more', showSelected} = this.options;
        const $fixedItems = fixedItems ? $items.filter(fixedItems) : null;
        const fixedItemSet = $fixedItems?.length ? new Set($fixedItems) : null;
        const $moreItems = moreItems ? $items.filter(moreItems) : null;
        const moreItemSet = $moreItems?.length ? new Set($moreItems) : null;
        if ($fixedItems?.length) {
            for (const item of $fixedItems) {
                size += this.getItemSize(item);
            }
        }
        for (const item of $items) {
            const $item = $(item);
            const fixed = fixedItemSet?.has(item);
            $item.toggleClass('rsh-fixed-item', !!fixed);
            if (fixed || $item.hasClass('rsh-more')) {
                continue;
            }

            const originDisplay = $item.data('rsh-display') || $item.css('display');
            if (moreItemSet?.has(item)) {
                this._moreElements!.push(item);
                $item.css({display: 'none'}).addClass('rsh-overflow-item');
                continue;
            }
            const opacity = $item.css('opacity');
            $item.data({'rsh-opacity': opacity, 'rsh-display': originDisplay}).css({display: originDisplay, opacity: 0});
            const itemSize = this.getItemSize(item as HTMLElement);
            sizeMap.set(item, itemSize);

            if (!overflow) {
                size += itemSize;
            }

            if (size > containerSize) {
                overflow = true;
            }

            if (overflow) {
                this._moreElements!.push(item);
            }

            $item.css({opacity, display: overflow ? 'none' : originDisplay}).toggleClass('rsh-overflow-item', overflow);
        }

        let hasMoreItems = !!this._moreElements!.length;
        if (overflow && !moreItemSet?.size) {
            const overflowSize = this._moreElements!.reduce((size, item) => {
                const $item = $(item);
                if (!size && $item.hasClass('divider')) {
                    return 0;
                }
                const itemSize = sizeMap.get(item) || 0;
                return size + itemSize;
            }, 0);
            if (moreSize >= overflowSize) {
                overflow = false;
                for (const item of this._moreElements!) {
                    const $item = $(item);
                    $item.css({display: $item.data('rsh-display') || 'flex', opacity: $item.data('rsh-opacity') || 1});
                }
                this._moreElements = [];
                hasMoreItems = false;
            }
        }

        this.$element.toggleClass('rsh-has-more-items', hasMoreItems)
            .toggleClass('rsh-overflowed', overflow);
        $more.css({display: hasMoreItems ? 'flex' : 'none', opacity: 1}).appendTo(this.$element);

        if (hasMoreItems && showSelected) {
            this._renderMoreBtn();
        }
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

        const {getContainerSize, scrollbarDetect, scrollbarSize = 10} = this.options;
        let size = getContainerSize ? getContainerSize.call(this, container) : container.offsetWidth;

        if (scrollbarDetect !== false) {
            const scrollbarDetectFn = typeof scrollbarDetect === 'function' ? scrollbarDetect : () => (window.innerWidth - document.body.clientWidth);
            if (!scrollbarDetectFn()) {
                size -= scrollbarSize;
            }
        }
        return size;
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
        const {getMoreItem = this.getMoreItem.bind(this), getMoreItems, mergeDropdown} = this.options;
        if (getMoreItems) {
            return getMoreItems.call(this, _moreElements);
        }
        const moreItems = _moreElements.reduce((items, element) => {
            const userItem = getMoreItem.call(this, element);
            if (userItem) {
                if (userItem.type === 'divider' && (!items.length || items[items.length - 1]?.type === 'divider')) {
                    return items;
                }
                if (Array.isArray(userItem.items)) {
                    if (!userItem.items.length) {
                        return items;
                    }
                    if (mergeDropdown && (mergeDropdown === true || $(element).closest(mergeDropdown).length)) {
                        if (items.length) {
                            items.push({type: 'divider'});
                        }
                        items.push(...userItem.items, {type: 'divider'});
                        return items;
                    }
                }
                items.push(userItem);
            }
            return items;
        }, [] as Item[]);
        if (moreItems.length && moreItems[moreItems.length - 1]?.type === 'divider') {
            moreItems.pop();
        }
        return moreItems;
    }

    getMoreItem(element: HTMLElement): Item | undefined {
        const $element = $(element);
        if ($element.hasClass('divider')) {
            return {type: 'divider'};
        }
        const $dropdown = $element.children('[data-toggle="dropdown"],[z-use-dropdown],[zui-toggle-dropdown]');
        if ($dropdown.length) {
            let dropdown = Dropdown.query($dropdown);
            if (!dropdown) {
                dropdown = new Dropdown($dropdown);
            }
            let items = dropdown.options.items || dropdown.options.menu?.items;
            if (!items && $dropdown.attr('zui-toggle-dropdown')) {
                const toggleAttr = $dropdown.attr('zui-toggle-dropdown');
                const toggleOptions: typeof dropdown.options | null = toggleAttr ? evalValue(toggleAttr, ['_element', $dropdown[0]], ['_$element', $dropdown]) : null;
                if (toggleOptions) {
                    items = toggleOptions.items || toggleOptions.menu?.items;
                }
            }
            const text = $dropdown.find('.text').text();
            return {items, text, icon: $dropdown.find('.icon').attr('class')?.replace('icon ', ''), attrs: {title: text}};
        }
        const attrs = Object.fromEntries(Array.from(element.attributes).map(attr => [attr.name, attr.value]));
        if (attrs.style) {
            attrs.style = attrs.style.replace('display: none;', '');
        }
        if (attrs.class) {
            attrs.class = attrs.class.replace('nav-item', 'menu-item');
        }
        const $text = $element.find('.text');
        if ($text.length) {
            attrs.title = $text.text();
        }
        return {type: 'node', html: $element.html(), attrs};
    }

    getMore(): Cash {
        let $more = this.$element.find('.rsh-more');
        if ($more.length) {
            return $more;
        }

        $more = $('<li class="rsh-more item nav-item" style="order:9999"></li>');

        let moreSetting = this.options.more || {html: '<a><span class="more-vert"></span></a>', attrs: {title: i18n.getLang('more')!}};
        if (typeof moreSetting === 'string') {
            moreSetting = {text: moreSetting};
        }
        const $moreBtn = $(moreSetting.html || '<a></a>').attr({
            ...moreSetting.attrs,
        }).addClass('rsh-more-btn');
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

    _renderMoreBtn() {
        const $moreBtn = this.$element.find('.rsh-more-btn');
        const {showSelected} = this.options;
        if (!$moreBtn.length || !showSelected) {
            return;
        }
        if (!$moreBtn.data('originHTML')) {
            $moreBtn.data('originHTML', $moreBtn.html());
        }
        const $selectedItem = $(this._moreElements).filter(showSelected === true ? (_, item) => {
            const $item = $(item);
            return $item.is('.active,.selected') || !!$item.children('.active,.selected').length;
        } : showSelected);

        const hasSelected = !!$selectedItem.length;
        $moreBtn.toggleClass('active', hasSelected);
        if (hasSelected) {
            $moreBtn.empty().append($selectedItem.children().html());
            if (!$moreBtn.find('.caret,[class*="caret"]').length) {
                $moreBtn.append('<span class="caret"></span>');
            }
        } else {
            $moreBtn.html($moreBtn.data('originHTML'));
        }
    }
}

ResponsiveNavHelper.register();
