import {Button} from '@zui/button/src/component/button';
import {TooltipButtonOptions} from '../types';
import {TooltipTrigger} from './tooltip-trigger';

export class TooltipButton extends TooltipTrigger<TooltipButtonOptions> {
    get triggerElement() {
        return this.ref.current.base as HTMLElement;
    }

    render() {
        const props = this.beforeRender();
        return <Button {...props} />;
    }
}
