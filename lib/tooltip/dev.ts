import '@zui/button';
import 'zui-dev';
import {Tooltip} from './src/main';

onPageUpdate(() => {
    new Tooltip('#tooltipClick', {title: '点击展示提示内容', trigger: 'click'});
    
    new Tooltip('#tooltipExp2', {title: 'top-start 提示内容', placement: 'top-start'});
    new Tooltip('#tooltipExp3', {title: 'top 提示内容', placement: 'top'});
    new Tooltip('#tooltipExp4', {title: 'top-end 提示内容', placement: 'top-end'});
    new Tooltip('#tooltipExp5', {title: 'left-start 提示内容', placement: 'left-start'});
    new Tooltip('#tooltipExp6', {title: 'left 提示内容', placement: 'left'});
    new Tooltip('#tooltipExp7', {title: 'left-end 提示内容', placement: 'left-end'});
    new Tooltip('#tooltipExp8', {title: 'right-start 提示内容', placement: 'right-start'});
    new Tooltip('#tooltipExp9', {title: 'right 提示内容', placement: 'right'});
    new Tooltip('#tooltipExp10', {title: 'right-end 提示内容', placement: 'right-end'});
    new Tooltip('#tooltipExp11', {title: 'bottom-start 提示内容', placement: 'bottom-start'});
    new Tooltip('#tooltipExp12', {title: 'bottom 提示内容', placement: 'bottom'});
    new Tooltip('#tooltipExp13', {title: 'bottom-end 提示内容', placement: 'bottom-end'});

    new Tooltip('#tooltipShow7', {title: 'white 外观', type: 'white', className: 'text-darker border border-light'});
    new Tooltip('#tooltipShow1', {title: 'primary 外观', type: 'primary', animation: false});
    new Tooltip('#tooltipShow2', {title: 'secondary 外观', type: 'secondary'});
    new Tooltip('#tooltipShow3', {title: 'warning 外观', type: 'warning'});
    new Tooltip('#tooltipShow4', {title: 'success 外观', type: 'success'});
    new Tooltip('#tooltipShow5', {title: 'danger 外观', type: 'danger'});
    new Tooltip('#tooltipShow6', {title: 'important 外观', type: 'important'});
});
