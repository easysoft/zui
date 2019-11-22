if ($.zui.FlowChart) {
    var types = {
        fsm_start: {
            width: 32,
            height: 32,
            type: 'dot',
            displayName: 'FSM 开始',
            text: '开始',
            portLineLength: 1,
            shapeStyle: {background: '#888'}
        },
        fsm_stop: {
            width: 32,
            height: 32,
            type: 'dot',
            shapeStyle: {background: '#888', boxShadow: 'inset 0 0 0 2px #fff'},
            text: '结束',
            portLineLength: 1,
            text: '结束',
            displayName: 'FSM 结束',
        },
        fsm_actionConvert: {
            type: 'relation',
            lineStyle: 'solid',
            text: '动作转换',
            displayName: 'FSM动作转换'
        },
        fsm_virtualActionConvert: {
            type: 'relation',
            lineStyle: 'dashed',
            text: '虚拟转换',
            displayName: 'FSM虚拟转换',
        },
        fsm_simpleState: {
            type: 'box',
            portLineLength: 1,
            text: '简单状态',
            displayName: 'FSM简单状态'
        },
        fsm_virtualState: {
            type: 'box',
            portLineLength: 1,
            shapeStyle: {borderStyle: 'dashed'},
            text: '虚拟状态',
            displayName: 'FSM虚拟状态',
        },
        fsm_actualState: {
            type: 'box',
            portLineLength: 1,
            shapeStyle: {paddingLeft: 30},
            text: '实际状态',
            displayName: 'FSM实际状态',
        },
        fsm_selectState: {
            type: 'diamond',
            portLineLength: 1,
            text: '选择状态',
            displayName: 'FSM选择状态',
        },
        fsm_fork: {
            type: 'rectangle',
            portLineLength: 6,
            displayName: 'FSM分叉',
            ports: {
                top: null,
                left: [{
                    name: 'in',
                    free: false,
                    space: 1.5,
                    maxLinkCount: 1
                }],
                bottom: null,
                right: [{
                    name: 'out1',
                    free: false,
                    space: 1.5,
                    maxLinkCount: 1
                }, {
                    name: 'out2',
                    free: false,
                    space: 1.5,
                    maxLinkCount: 1
                }]
            },
            style: {width: 20},
            textStyle: {padding: 0, top: '100%', position: 'absolute'},
            render: function($node, elementType, options) {
                var that = this;
                var flowChart = that.flowChart;
                if (elementType.hasPorts()) {
                    that.renderPorts(options);
                }
                var style = $.extend(options.style, options.shapeStyle);
                $node.css(style);

                var size = {
                    width:  $node.outerWidth(),
                    height: $node.outerHeight(),
                };
                var $shape = $node.children('.flowchart-shape');
                if (!$shape.length) {
                    $shape = $('<svg class="flowchart-shape" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0"><line class="line-1" /><line class="line-2" /></svg>').appendTo($node);
                }
                var svgStyle = $.zui.FlowChart.convertCssToSvgStyle(style);
                var markerEnd = 'url(#' + flowChart.initArrowMarker(8, svgStyle.stroke) + ')';
                var strokeWidth = svgStyle['stroke-width'];
                $shape.attr(size).children('.line-1').attr({
                    class: 'line-1',
                    x1: 0,
                    y1: (size.height - strokeWidth) / 2,
                    x2: size.width,
                    y2: (size.height / 2 - strokeWidth) / 2,
                    stroke: svgStyle.stroke,
                    'stroke-width': strokeWidth,
                    'marker-end': markerEnd
                });
                $shape.children('.line-2').attr({
                    class: 'line-2',
                    x1: 0,
                    y1: (size.height - strokeWidth) / 2,
                    x2: size.width,
                    y2: size.height / 2 + (size.height / 2 - strokeWidth) / 2,
                    stroke: svgStyle.stroke,
                    'stroke-width': strokeWidth,
                    'marker-end': markerEnd
                });
            }
        },
        fsm_merge: {
            type: 'rectangle',
            portLineLength: 6,
            displayName: 'FSM合并',
            ports: {
                top: null,
                left: [{
                    name: 'in1',
                    free: false,
                    maxLinkCount: 1,
                    direction: 'in',
                    space: 1.5,
                }, {
                    name: 'in2',
                    free: false,
                    maxLinkCount: 1,
                    direction: 'in',
                    space: 1.5,
                }],
                bottom: null,
                right: [{
                    name: 'out',
                    free: false,
                    maxLinkCount: 1,
                    direction: 'out',
                    space: 1.5,
                }]
            },
            style: {width: 20},
            textStyle: {padding: 0, top: '100%', position: 'absolute'},
            render: function($node, elementType, options) {
                var that = this;
                var flowChart = that.flowChart;
                if (elementType.hasPorts()) {
                    that.renderPorts(options);
                }
                var style = $.extend(options.style, options.shapeStyle);
                $node.css(style);

                var size = {
                    width:  $node.outerWidth(),
                    height: $node.outerHeight(),
                };
                var $shape = $node.children('.flowchart-shape');
                if (!$shape.length) {
                    $shape = $('<svg class="flowchart-shape" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0"><line class="line-1" /><line class="line-2" /></svg>').appendTo($node);
                }
                var svgStyle = $.zui.FlowChart.convertCssToSvgStyle(style);
                var markerEnd = 'url(#' + flowChart.initArrowMarker(8, svgStyle.stroke) + ')';
                var strokeWidth = svgStyle['stroke-width'];
                $shape.attr(size).children('.line-1').attr({
                    class: 'line-1',
                    x1: 0,
                    y1: (size.height / 2 - strokeWidth) / 2,
                    x2: size.width,
                    y2: (size.height - strokeWidth) / 2,
                    stroke: svgStyle.stroke,
                    'stroke-width': strokeWidth,
                    'marker-end': markerEnd
                });
                $shape.children('.line-2').attr({
                    class: 'line-2',
                    x1: 0,
                    y1: size.height / 2 + (size.height / 2 - strokeWidth) / 2,
                    x2: size.width,
                    y2: (size.height - strokeWidth) / 2,
                    stroke: svgStyle.stroke,
                    'stroke-width': strokeWidth,
                    'marker-end': markerEnd
                });
            }
        }
    };
    var defaultOptions = {
        elementTypes: types,
        quickAddActionType: 'fsm_simpleState'
    };
    $.zui.FlowChart.addPlugin('fsm', {
        defaultOptions: defaultOptions,
        style: [
            '.flowchart-contextmenu {min-width: 360px}',
            '.flowchart-contextmenu .col-xs-4 {width: 25%}',
            '#{id} .flowchart-element-fsm_fork, #{id} .flowchart-element-fsm_merge {align-items: flex-start!important;}',
            '#{id} .flowchart-element-fsm_actualState:before {content: " "; position: absolute; width: 30px; height: 30px; top: 4px; left: 4px; background: #888; border-radius: 50%; border: 1px solid #333}'
        ].join('\n')
    });
}
