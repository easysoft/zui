import {Button} from '@zui/button/src/component/button';
import {formatString} from '@zui/helpers/src/format-string';
import {updatePagerInfo} from '../helpers/update-pager-info';
import {PageLinkCreator, PagerInfo, PagerGotoProps} from '../types';
import {classes} from '@zui/browser-helpers/src/classes';
import {Component} from 'preact';


class PagerGoto extends Component<PagerGotoProps & {pagerInfo: PagerInfo, linkCreator: PageLinkCreator}> {

    state = {
        inputValue: 1,
    };

    getValue(event: Event): void {
        let inputValue = Number(event.target?.value);
        inputValue = inputValue > this.props.pagerInfo.pageTotal ? this.props.pagerInfo.pageTotal : inputValue;
        this.setState(() => ({inputValue: inputValue}));
    }

    onUpdatePage():void {
        this.props.pagerInfo.page = this.state.inputValue;
        const updatedPage = this.state.inputValue <= this.props.pagerInfo.pageTotal ? this.state.inputValue :  this.props.pagerInfo.pageTotal;
        const info = updatePagerInfo(this.props.pagerInfo, updatedPage);
        this.props.url = typeof this.props.linkCreator === 'function' ? this.props.linkCreator(info)  : formatString(this.props.linkCreator, info);
    }

    render() {
        const {
            type: pagerItemType,
            btnType: type,
            pagerInfo,
            size,
            ...btnProps
        } = this.props;

        const {className} = btnProps;
        btnProps.className = 'input-group-addon';
        return (
            <div className={classes('input-group', size ? `size-${size}` : '', className)}>
                <input type="number" class="form-control" max={pagerInfo.pageTotal} min="1" value={this.state.inputValue} onInput={this.getValue.bind(this)}  />
                <Button type={type} {...btnProps} onClick={this.onUpdatePage.bind(this)}/>
            </div>
        );
    }
}

export default PagerGoto;
