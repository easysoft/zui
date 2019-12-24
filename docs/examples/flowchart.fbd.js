if ($.zui.FlowChart) {
    var textGenerator = function(elementType) {
        if (!elementType.newElementsCounter) {
            elementType.newElementsCounter = 1;
        }
        return elementType.name.substring(4) + '_' + (elementType.newElementsCounter++);
    };
    var renderInOut = function($node, elementType, options) {
        var that = this;
        if (elementType.hasPorts()) {
            that.renderPorts(options);
        }
        var style = options.style;
        var shapeStyle = options.shapeStyle;

        $node.css(style);
        var size = {
            width:  $node.outerWidth(),
            height: $node.outerHeight(),
        };
        var $shape = $node.children('.flowchart-shape');
        if (!$shape.length) {
            $shape = $('<svg class="flowchart-shape" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0"><polygon /></svg>').appendTo($node);
        }
        var $polygon = $shape.children('polygon');
        $polygon.css($.zui.FlowChart.convertCssToSvgStyle(shapeStyle));
        var points = [[0, 0], [size.width - 20, 0], [size.width, size.height / 2], [size.width - 20, size.height], [0, size.height]];
        var pointsStr = [];
        points.forEach(function(point) {
            pointsStr.push($.isArray(point) ? point.join(',') : point);
        });
        $polygon.attr('points', pointsStr.join(' '));
        $shape.css(size).show();
    };
    var createPorts = function(ins, outs) {
        if (typeof ins === 'string') {
            ins = ins.split(',');
        }
        ins.unshift('-');
        if (typeof outs === 'string') {
            outs = outs.split(',');
        }
        outs.unshift('-');
        return {
            top: null,
            bottom: null,
            left: ins.map(function(name) {
                if (name === '-') {
                    return {
                        name: '',
                        space: 1
                    };
                }
                return {
                    name: name,
                    rest: name.indexOf('*') > -1,
                    maxLinkCount: 1,
                    direction: 'in',
                    free: false
                };
            }),
            right: outs.map(function(name) {
                if (name === '-') {
                    return {
                        name: '',
                        space: 1
                    };
                }
                return {
                    name: name,
                    rest: name.indexOf('*') > -1,
                    maxLinkCount: 1,
                    direction: 'out',
                    free: false
                };
            })
        };
    };
    var newElementsCounter = {};
    var createModelType = function(name, ins, outs) {
        return {
            displayName: name,
            ports: createPorts(ins, outs),
            type: 'rectangle',
            portLineLength: 8,
            style: {borderRadius: 0},
            textStyle: {padding: 0, minWidth: 120},
            text: textGenerator,
            fbdModel: true
        };
    };
    var types = {
        FBD_AND: createModelType('与', 'I*', 'Q'),
        FBD_OR: createModelType('或', 'I*', 'Q'),
        FBD_NOT: createModelType('非', 'I', 'Q'),
        FBD_SET: createModelType('设置', 'I1,I2', 'Q'),
        FBD_XOR: createModelType('异或', 'I1,I2', 'Q'),
        FBD_XNOR: createModelType('同或', 'I1,I2', 'Q'),
        FBD_EQ: createModelType('等于', 'I1,I2', 'Q'),
        FBD_NE: createModelType('不等于', 'I1,I2', 'Q'),
        FBD_GT: createModelType('大于', 'I1,I2', 'Q'),
        FBD_GE: createModelType('大于等于', 'I1,I2', 'Q'),
        FBD_LT: createModelType('小于', 'I1,I2', 'Q'),
        FBD_LE: createModelType('小于等于', 'I1,I2', 'Q'),
        FBD_ADD: createModelType('加', 'I*', 'Q'),
        FBD_SUB: createModelType('减', 'I1,I2', 'Q'),
        FBD_MUL: createModelType('乘', 'I*', 'Q'),
        FBD_DIV: createModelType('除', 'I1,I2', 'Q'),
        FBD_MOD: createModelType('求余', 'I1,I2', 'Q'),
        FBD_ABS: createModelType('绝对值', 'I', 'Q'),
        FBD_EXP: createModelType('平方', 'I', 'Q'),
        FBD_EXPT: createModelType('N次方', 'I', 'Q'),
        FBD_SQRT: createModelType('根号', 'I1,I2', 'Q'),
        FBD_LN: createModelType('自然对数', 'I', 'Q'),
        FBD_LOG: createModelType('10对数', 'I', 'Q'),
        FBD_MAX: createModelType('最大值', 'I*', 'Q'),
        FBD_MIN: createModelType('最小值', 'I*', 'Q'),
        FBD_LIMIN: createModelType('限制', 'MI,IN,MX', 'Q'),
        FBD_SEL: createModelType('选择', 'G,IN0,IN1', 'Q'),
        FBD_TON: createModelType('上升沿延时', 'IN,PT', 'Q,ET'),
        FBD_TOF: createModelType('下降沿延时', 'IN,PT', 'Q,ET'),
        FBD_TP: createModelType('脉冲', 'IN,PT', 'Q,ET'),
        FBD_RS: createModelType('锁存器RS', 'SET,RESET', 'Q'),
        FBD_SR: createModelType('锁存器SR', 'SET,RESET', 'Q'),
        FBD_RTRIG: createModelType('上升沿', 'CLK', 'Q'),
        FBD_FTRIG: createModelType('下降沿', 'CLK', 'Q'),
        FBD_CTU: createModelType('上升沿计数', 'CU,RESET,PV', 'Q,CV'),
        FBD_CTD: createModelType('下降沿计数', 'CU,RESET,PV', 'Q,CV'),
        FBD_CTUD: createModelType('递增递减计数器', 'CU,CD,RESET,LOAD,PV', 'QU,QD,CV'),
        FBD_INPUT: {
            displayName: '输入模块',
            ports: {
                left: null,
                top: null,
                bottom: null,
                right: [{
                    name: 'in',
                    maxLinkCount: 1,
                    direction: 'in',
                }]
            },
            style: {borderRadius: 0, borderWidth: 0},
            textStyle: {padding: '5px 20px 5px 9px', minHeight: '30px', minWidth: 100},
            shapeStyle: {fill: '#fff', strokeWidth: 1, stroke: '#333'},
            type: 'rectangle',
            portLineLength: 10,
            render: renderInOut,
            text: function(elementType) {
                if (!newElementsCounter[elementType.name]) {
                    newElementsCounter[elementType.name] = 1;
                }
                return elementType.displayName.toUpperCase() + (newElementsCounter[elementType.name]++);
            },
        },
        FBD_OUTPUT: {
            displayName: '输出模块',
            ports: {
                right: null,
                top: null,
                bottom: null,
                left: [{
                    name: 'out',
                    maxLinkCount: 1,
                    direction: 'out',
                }]
            },
            style: {borderRadius: 0, borderWidth: 0},
            textStyle: {padding: '5px 20px 5px 9px', minHeight: '30px', minWidth: 100},
            shapeStyle: {fill: '#fff', strokeWidth: 1, stroke: '#333'},
            type: 'rectangle',
            portLineLength: 10,
            render: renderInOut,
            text: function(elementType) {
                if (!newElementsCounter[elementType.name]) {
                    newElementsCounter[elementType.name] = 1;
                }
                return elementType.displayName.toUpperCase() + (newElementsCounter[elementType.name]++);
            },
        }
    };
    var defaultOptions = {
        elementTypes: types
    };
    $.zui.FlowChart.addPlugin('fbd', {
        defaultOptions: defaultOptions,
        onRenderNode: function($node, node) {
            if (node.elementType.fbdModel) {
                $node.attr('data-model-name', node.elementType.displayName).addClass('flowchart-fbd-model');
            }
        },
        style: [
            '#{id} .flowchart-contextmenu {min-width: 360px}',
            '#{id} .flowchart-contextmenu .col-xs-4 {width: 25%}',
            '#{id} .flowchart-fbd-model {align-items: flex-start!important;}',
            '#{id} .flowchart-fbd-model:before {content: attr(data-model-name); position: absolute; left: 0; right: 0; top: 0; text-align: center}',
            '#{id} .flowchart-fbd-model.flowchart-active.flowchart-element-focused {box-shadow: none!important}',
            '#{id} .flowchart-fbd-model.flowchart-element-focused .flowchart-text {box-shadow: 0 0 0 2px {activeColor}!important; min-height: 20px!important}',
            '#{id} .flowchart-fbd-model .flowchart-text {top: -20px}',
            '#{id} .flowchart-fbd-model .flowchart-port-left:before {content: attr(data-name); position: absolute; display: block; left: 100%; padding-left: 5px}',
            '#{id} .flowchart-fbd-model .flowchart-port-right:before {content: attr(data-name); position: absolute; display: block; right: 100%; padding-right: 5px}',
            '#{id} .flowchart-fbd-model .flowchart-port-resthoder.flowchart-port-left:before, #{id} .flowchart-fbd-model .flowchart-port-resthoder.flowchart-port-right:before {opacity: .5}',
        ].join('\n')
    });
}
