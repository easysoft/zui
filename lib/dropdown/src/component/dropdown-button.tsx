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
            const currentPlacement = show ? placement : this.props.dropdown?.placement;
            caret = (currentPlacement === 'top' ? 'up' : currentPlacement === 'bottom' ? 'down' : currentPlacement as typeof caret) || (typeof caret === 'string' ? caret : '') || 'down';
        }
        props.caret = caret;
        return <Button {...props} />;
    }
}
