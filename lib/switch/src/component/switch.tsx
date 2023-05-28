import {Component, h as _h, Attributes, ComponentType, ComponentChild} from 'preact';
import {classes} from '@zui/core';
import {SwitchProps} from '../types/switch-props';

export class Switch extends Component<SwitchProps> {
    state = {checked: false};

    handleOnClick = () => {
        this.setState({checked: !this.state.checked});
    };

    componentDidMount() {
        this.setState({checked: this.props.defaultChecked ?? false});
    }

    render(): ComponentChild {
        const {
            component,
            className,
            children,
            text,
            icon,
            surffixIcon,
            disabled,
            defaultChecked,
            onChange,
            ...others
        } = this.props;

        const val = this.state.checked ? 1 : 0;
        const switchComponent = component || 'div';
        const prefixIcon = (typeof icon === 'string' ? <i class={`icon ${icon}`} /> : icon);
        const trailingIcon = (typeof surffixIcon === 'string' ? <i class={`icon ${surffixIcon}`} /> : surffixIcon);

        const finalChildren = [
            <input onChange={onChange} type="checkbox" value={val} checked={this.state.checked ? true : false} />,
            <label>{prefixIcon}{text}{trailingIcon}</label>,
        ];

        return _h(
            switchComponent as ComponentType<SwitchProps>,
            {
                className: classes('switch', className, {disabled: disabled}),
                onClick: this.handleOnClick,
                ...others,
            } as Attributes,
            ...finalChildren,
            children,
        );
    }
}
