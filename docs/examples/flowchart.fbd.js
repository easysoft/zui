if ($.zui.FlowChart) {
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
            text: function(elementType) {
                if (!newElementsCounter[elementType.name]) {
                    newElementsCounter[elementType.name] = 1;
                }
                return elementType.displayName.toUpperCase() + (newElementsCounter[elementType.name]++);
            },
            fbdModel: true
        };
    };
    var types = {
        fbd_and: createModelType('AND', 'I1,I2', 'Q'),
        fbd_or: createModelType('OR', 'I1,I2', 'Q'),
        fbd_not: createModelType('NOT', 'I', 'Q'),
        fbd_xor: createModelType('XOR', 'I1,I2', 'Q'),
        fbd_xnor: createModelType('XNOR', 'I1,I2', 'Q'),
        fbd_eq: createModelType('EQ', 'I1,I2', 'Q'),
        fbd_ne: createModelType('NE', 'I1,I2', 'Q'),
        fbd_gt: createModelType('GT', 'I1,I2', 'Q'),
        fbd_ge: createModelType('GE', 'I1,I2', 'Q'),
        fbd_lt: createModelType('LT', 'I1,I2', 'Q'),
        fbd_le: createModelType('LE', 'I1,I2', 'Q'),
        fbd_add: createModelType('ADD', 'I1,I2', 'Q'),
        fbd_sub: createModelType('SUB', 'I1,I2', 'Q'),
        fbd_mul: createModelType('MUL', 'I1,I2', 'Q'),
        fbd_div: createModelType('DIV', 'I1,I2', 'Q'),
        fbd_mod: createModelType('MOD', 'I1,I2', 'Q'),
        fbd_abs: createModelType('ABS', 'I', 'Q'),
        fbd_exp: createModelType('EXP', 'I', 'Q'),
        fbd_expt: createModelType('EXPT', 'I', 'Q'),
        fbd_sqrt: createModelType('SQRT', 'I1,I2', 'Q'),
        fbd_ln: createModelType('LN', 'I', 'Q'),
        fbd_log: createModelType('LOG', 'I', 'Q'),
        fbd_max: createModelType('MAX', 'I1,I2', 'Q'),
        fbd_min: createModelType('MIN', 'I1,I2', 'Q'),
        fbd_limin: createModelType('LIMIN', 'MI,IN,MX', 'Q'),
        fbd_sel: createModelType('SEL', 'G,IN0,IN1', 'Q'),
        fbd_ton: createModelType('TON', 'IN,PT', 'Q,ET'),
        fbd_tof: createModelType('TOF', 'IN,PT', 'Q,ET'),
        fbd_tp: createModelType('TP', 'IN,PT', 'Q,ET'),
        fbd_rs: createModelType('RS', 'SET,RESET', 'Q'),
        fbd_sr: createModelType('SR', 'SET,RESET', 'Q'),
        fbd_rtrig: createModelType('R_TRIG', 'CLK', 'Q'),
        fbd_ftrig: createModelType('F_TRIG', 'CLK', 'Q'),
        fbd_ctu: createModelType('CTU', 'CU,RESET,PV', 'Q,CV'),
        fbd_ctd: createModelType('CTD', 'CU,RESET,PV', 'Q,CV'),
        fbd_ctud: createModelType('CTUD', 'CU,CD,RESET,LOAD,PV', 'QU,QD,CV'),
        fbd_in: {
            displayName: 'DATA_IN',
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
        fbd_out: {
            displayName: 'DATA_OUT',
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
        ].join('\n')
    });
}
