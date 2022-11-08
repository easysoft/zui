import {Button} from '@zui/button/src/component/button';
import {DropdownButtonOptions} from '../types';
import {DropdownTrigger} from './dropdown-trigger';

export class DropdownButton extends DropdownTrigger<DropdownButtonOptions> {
    get triggerElement() {
        return this.ref.current.base as HTMLElement;
    }

    render() {
        const {placement, show} = this.state;
        const props = this.beforeRender();
        let {caret = true} = props;
        if (caret !== false && (show || caret === true)) {
            caret = (show ? (placement === 'top' ? 'up' : placement === 'bottom' ? 'down' : placement as typeof caret) : caret) || 'down';
        }
        props.caret = caret;
        return <Button {...props} />;
    }
}
