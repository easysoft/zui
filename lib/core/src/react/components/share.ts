import {HElement} from './h-element';
import {HtmlContent} from './html-content';
import {CustomContent} from './custom-content';
import {Icon} from './icon';
import {Portal} from './portals';
import {registerReactComponent} from './components';

registerReactComponent({
    HElement,
    element: HElement,
    HtmlContent,
    html: HtmlContent,
    CustomContent,
    custom: CustomContent,
    Icon,
    Portal,
});
