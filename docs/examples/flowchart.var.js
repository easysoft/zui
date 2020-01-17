if ($.zui.FlowChart) {
    var indexSeed = 1;
    $.zui.FlowChartElement.prototype.getVariables = function() {
        var vars = this.getData('vars');
        if (!vars) {
            return [];
        }
        var varsList = [];
        $.each(vars, function(name, variable) {
            varsList.push($.extend({name: name}, variable));
        });
        varsList.sort(function(var1, var2) {
            return var1.index - var2.index;
        });
        return varsList;
    };

    $.zui.FlowChartElement.prototype.getVariable = function(varName) {
        var vars = this.getData('vars');
        if (!vars) {
            return null;
        }
        var varData = vars[varName];
        return varData ? $.extend({name: varName}, varData) : null;
    };

    $.zui.FlowChartElement.prototype.setVariable = function(varName, varData) {
        var vars = this.getData('vars');
        if (!vars) {
            vars = {};
        }
        var newVars = {};
        if (typeof varName === 'object') {
            $.each(varName, function(name, value) {
                newVars[name] = varData ? $.extend({index: indexSeed++}, value) : {value: value, index: indexSeed++};
            });
        } else {
            newVars[varName] = {value: varData, index: indexSeed++};
        }
        if (this.flowChart.callCallback('beforeSetVariable', [newVars, this]) === false) {
            return;
        }
        this.setData('vars', $.extend(true, vars, newVars));
        this.flowChart.callCallback('afterSetVariable', [newVars, this]);
    };

    $.zui.FlowChartElement.prototype.setVariableObject = function(varName, varObject) {
        if (typeof varObject !== 'object') {
            throw new Error('FlowChart: The param "varObject" must be an object like "{value: 123}".');
        }
        var varData = {};
        varData[varName] = varObject;
        this.setVariable(varData, true);
    };

    $.zui.FlowChartElement.prototype.removeVariable = function(varName) {
        var vars = this.getData('vars');
        if (vars) {
            delete vars[varName];
        }
    };

    $.zui.FlowChart.prototype.checkTypeCanAddVariable = function(typeName, varName, varData) {
        if (this.typesCanAddVariablesFunc) {
            return this.typesCanAddVariablesFunc(typeName, varName, varData);
        } else if (this.typesCanAddVariablesMap) {
            return this.typesCanAddVariablesMap[typeName.toLowerCase()];
        }
        return false;
    };

    $.zui.FlowChart.addPlugin('var', {
        defaultOptions: {
            addVariablesFromDrop: true,
            typesCanAddVariables: function(type) {
                var typeLowerCase = type.toLowerCase();
                return typeLowerCase.indexOf('fsm_') === 0 || typeLowerCase.indexOf('fbd_') === 0;
            },
            onDrop: function(e) {
                var that = this;
                var newVarData = e.originalEvent.dataTransfer.getData('newVar');
                if (newVarData) {
                    e.preventDefault();
                    var $target = $(e.target).closest('.flowchart-element');
                    if ($target.length) {
                        var element = that.getElement($target.data('id'));
                        if (element) {
                            try {
                                newVarData = $.parseJSON(newVarData);
                            } catch (e) {
                                console.error('FlowChart: Cannot get correct "newVarData" data from drop event\'s dataTransfer.', newVarData);
                            }
                            if (newVarData && typeof newVarData === 'object' && newVarData.var) {
                                var varName = newVarData.var;
                                delete newVarData.var;
                                if (that.checkTypeCanAddVariable(element.type, varName, newVarData)) {
                                    element.setVariableObject(varName, newVarData);
                                } else {
                                    console.warn('FlowChart: Cannot add variable to the target element.', element);
                                }
                            } else {
                                console.warn('FlowChart: Data format error in  "newVarData" data from drop event\'s dataTransfer.', newVarData);
                            }
                        } else {
                            console.warn('FlowChart: Cannot add variable to the target element not in flowchart.', element);
                        }
                    }
                    return false;
                }
            }
        },
        style: [
            '#{id}.flowchart-drag-var-start.flowchart-drag-over .flowchart-can-add-var.flowchart-node {box-shadow: 0 0 4px 1px {activeColor}!important}'
        ].join('\n'),
        onRenderNode: function($node, node) {
            $node.toggleClass('flowchart-can-add-var', !!this.checkTypeCanAddVariable(node.type));
        },
        onRenderRelation: function($relation, relation) {
            $relation.toggleClass('flowchart-can-add-var', !!this.checkTypeCanAddVariable(relation.type));
        },
        onCreate: function() {
            var that = this;
            var options = that.options;
            var typesCanAddVariables = options.typesCanAddVariables;
            if (typeof typesCanAddVariables === 'string') {
                typesCanAddVariables = typesCanAddVariables.split(',');
            }
            if ($.isArray(typesCanAddVariables)) {
                var typesCanAddVariablesMap = {};
                typesCanAddVariables.forEach(function(type) {
                    typesCanAddVariablesMap[$.trim(type).toLowerCase()] = 1;
                });
                that.typesCanAddVariablesMap = typesCanAddVariablesMap;
            } else if (typeof typesCanAddVariables === 'function') {
                that.typesCanAddVariablesFunc = typesCanAddVariables;
            }

            if (options.addVariablesFromDrop) {
                if (typeof options.addVariablesFromDrop === 'string') {
                    var $dragElements = $(options.addVariablesFromDrop);
                    var handDragStart = function(e) {
                        var elementData = $(e.target).data();
                        if (elementData.var) {
                            e.originalEvent.dataTransfer.setData('newVar', JSON.stringify(elementData));
                            that.$container.addClass('flowchart-drag-var-start');
                        }
                    };
                    var handleDragEnd = function(e) {
                        that.$container.removeClass('flowchart-drag-var-start').removeClass('flowchart-drag-over');
                    };
                    if ($dragElements.is('[draggable="true"]')) {
                        $dragElements.on('dragstart', handDragStart).on('dragend', handleDragEnd);
                    } else {
                        $dragElements.on('dragstart', '[draggable="true"]', handDragStart).on('dragend', '[draggable="true"]', handleDragEnd);
                    }
                }

            }
        }
    });
}
