import {HElement} from './h-element';
import {HtmlContent} from './html-content';
import {CustomContent} from './custom-content';
import {LazyContent} from './lazy-content';
import {Icon} from './icon';
import {Portal} from './portals';
import {registerReactComponent} from './components';

registerReactComponent({
    HElement,
    element: HElement,
    HtmlContent,
    html: HtmlContent,
    CustomContent,
    LazyContent,
    custom: CustomContent,
    lazy: LazyContent,
    Icon,
    Portal,
});
