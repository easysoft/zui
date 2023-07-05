import {Component, ComponentChild, createRef} from 'preact';
import {$, classes} from '@zui/core';
import {Button} from '@zui/button/src/component/button';

export interface ValueSelectorProps {
    max: number;
    min: number;
    value: number;
    className?: string;
    onChange?: (value: number) => void;
}

export class ValueSelector extends Component<ValueSelectorProps> {
    #ref = createRef<HTMLDivElement>();

    #handleClickItem = (event: MouseEvent) => {
        const {onChange} = this.props;
        if (!onChange) {
            return;
        }
        const $element = $(event.target as HTMLElement).closest('[data-value]');
        const value = $element.dataset('value');
        if (value) {
            onChange(+value);
            event.stopPropagation();
        }
    };

    componentDidMount() {
        $(this.#ref.current).find('.active').scrollIntoView({block: 'center'});
    }

    render(props: ValueSelectorProps) {
        const {className, max, min, value} = props;
        const valueView: ComponentChild[] = [];
        const nowYear = new Date().getFullYear();
        for (let i = min; i <= max; ++i) {
            valueView.push(<Button type="ghost" key={i} data-value={i} active={i === value} className={classes(nowYear === i ? 'is-current' : '')} onClick={this.#handleClickItem}>{i}</Button>);
        }
        return (
            <div className={className} ref={this.#ref}>
                {valueView}
            </div>
        );
    }
}
