import '@zui/button';
import 'zui-dev';
import {Tooltip} from './src/main';

onPageUpdate(() => {
    new Tooltip('#tooltipExp1', {title: 'hover 展示提示内容'});
    new Tooltip('#tooltipClick', {title: '点击展示提示内容', trigger: 'click'});
    
    new Tooltip('#tooltipExp2', {title: '左侧提示内容', placement: 'left'});
    new Tooltip('#tooltipExp3', {title: '上侧提示内容', placement: 'top'});
    new Tooltip('#tooltipExp4', {title: '下侧提示内容', placement: 'bottom-start'});
    new Tooltip('#tooltipExp5', {title: '右侧提示内容', placement: 'right'});

    new Tooltip('#tooltipShow1', {title: 'primary 外观', type: 'primary'});
    new Tooltip('#tooltipShow2', {title: 'secondary 外观', type: 'secondary'});
    new Tooltip('#tooltipShow3', {title: 'warning 外观', type: 'warning'});
    new Tooltip('#tooltipShow4', {title: 'success 外观', type: 'success'});
    new Tooltip('#tooltipShow5', {title: 'danger 外观', type: 'danger'});
    new Tooltip('#tooltipShow6', {title: 'important 外观', type: 'important'});
});