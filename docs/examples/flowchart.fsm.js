if ($.zui.FlowChart) {
    var textGenerator = function(elementType) {
        if (!elementType.newElementsCounter) {
            elementType.newElementsCounter = 1;
        }
        return elementType.name.substring(4) + '_' + (elementType.newElementsCounter++);
    };
    var types = {
        FSM_InitState: {
            beginType: true,
            width: 32,
            height: 32,
            type: 'dot',
            displayName: 'FSM初始状态',
            text: textGenerator,
            portLineLength: 1,
            shapeStyle: {background: '#888'},
        },
        FSM_EndState: {
            endType: true,
            width: 32,
            height: 32,
            type: 'dot',
            shapeStyle: {background: '#888', boxShadow: 'inset 0 0 0 2px #fff'},
            text: textGenerator,
            portLineLength: 1,
            displayName: 'FSM结束状态',
        },
        FSM_State: {
            type: 'box',
            portLineLength: 1,
            text: textGenerator,
            displayName: 'FSM简单状态'
        },
        FSM_VirState: {
            type: 'box',
            portLineLength: 1,
            shapeStyle: {borderStyle: 'dashed'},
            text: textGenerator,
            displayName: 'FSM虚拟状态',
        },
        // FSM_ConStates: {
        //     type: 'box',
        //     portLineLength: 1,
        //     shapeStyle: {borderStyle: 'dotted'},
        //     text: textGenerator,
        //     displayName: 'FSM并发组合状态',
        // },
        // FSM_SerStates: {
        //     type: 'box',
        //     portLineLength: 1,
        //     shapeStyle: {borderStyle: 'dotted'},
        //     text: textGenerator,
        //     displayName: 'FSM顺序组合状态',
        // },
        FSM_Action: {
            type: 'relation',
            lineStyle: 'solid',
            lineShape: 'bessel',
            text: textGenerator,
            displayName: 'FSM动作转换1'
        },
        FSM_Action1: {
            type: 'relation',
            lineStyle: 'solid',
            lineShape: 'arc',
            lineColor: '#1797cd',
            text: textGenerator,
            displayName: 'FSM动作转换2'
        },
        FSM_VirAction: {
            type: 'relation',
            lineStyle: 'dashed',
            lineShape: 'bessel',
            text: textGenerator,
            displayName: 'FSM虚拟转换',
        },
        FSM_SelectState: {
            type: 'diamond',
            portLineLength: 1,
            text: textGenerator,
            displayName: 'FSM选择状态',
        },
        FSM_ActState: {
            type: 'box',
            portLineLength: 1,
            shapeStyle: {paddingLeft: 30},
            text: textGenerator,
            displayName: 'FSM实际状态',
        },

        FSM_ActionBran: {
            type: 'rectangle',
            portLineLength: 6,
            displayName: 'FSM分叉',
            text: textGenerator,
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
        FSM_ActionComb: {
            type: 'rectangle',
            portLineLength: 6,
            displayName: 'FSM合并',
            text: textGenerator,
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
        defaultRelationType: 'FSM_Action',
        defaultActionType: 'FSM_State',
        quickAddActionType: 'FSM_State'
    };
    $.zui.FlowChart.addPlugin('fsm', {
        defaultOptions: defaultOptions,
        style: [
            '.flowchart-contextmenu {min-width: 360px}',
            '.flowchart-contextmenu .col-xs-4 {width: 25%}',
            '#{id} .flowchart-element-fsm_fork, #{id} .flowchart-element-fsm_merge {align-items: flex-start!important;}',
            '#{id} .flowchart-element-FSM_ActState:before {content: " "; position: absolute; width: 30px; height: 30px; top: 4px; left: 4px; background: #888; border-radius: 50%; border: 1px solid #333}'
        ].join('\n')
    });
}
