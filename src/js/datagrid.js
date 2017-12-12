/* ========================================================================
 * ZUI: datagrid.js
 * http://zui.sexy
 * ========================================================================
 * Copyright (c) 2014-2016 cnezsoft.com; Licensed MIT
 * ======================================================================== */


(function($) {
    'use strict';

    var get2DArrValue = function(arr, rowIndex, colIndex) {
        var row = arr[rowIndex];
        return row && row[colIndex];
    };

    var set2DArrValue = function(arr, rowIndex, colIndex, value) {
        var row = arr[rowIndex];
        if (!row) {
            row = [];
            arr[rowIndex] = row;
        }
        row[colIndex] = value;
    };

    // Define the datagrid model name
    var NAME = 'zui.datagrid';

    var DEFAULT_VALUE_OPERATOR = {
        date: {
            getter: function(dataValue, cell, dataGrid) {
                var formater = dataGrid.options.defaultDateFormater;
                return dataValue + ',' + Date.create(dataValue).format(formater);
            },
            setter: function(inputValue, cell, dataGrid) {
                if (typeof inputValue === 'string') {
                    var intValue = Number.parseInt(inputValue, 10);
                    if (!Number.isNaN(intValue)) {
                        inputValue = intValue;
                    }
                }
                return Date.timestamp(inputValue);
            }
        }
    };

    // The datagrid modal class
    var DataGrid = function(element, options) {
        var that     = this;
        var $element = that.$ = $(element);
        that.name    = NAME;
        that.id      = NAME + '.' + $.zui.uuid();
        options      = $.extend({}, DataGrid.DEFAULTS, that.$.data(), options);

        options.valueOperator    = $.extend({}, DEFAULT_VALUE_OPERATOR, options.valueOperator);
        options.rowDefaultHeight = options.rowDefaultHeight || 30;
        options.headerHeight     = options.headerHeight || options.rowDefaultHeight || 30;
        if (typeof options.borderWidth !== 'number') {
            options.borderWidth = 1;
        }
        that.options             = options;

        // Initialize
        var $container = $element.find('.datagrid-container:first');
        if (!$container.length) {
            $container = $('<div class="datagrid-container" />').appendTo($element);
        }
        $container.css({
            width  : options.width,
            height : options.height,
            borderWidth: options.borderWidth
        });
        var $document = $(document);
        var createScrollbar = function(direction) {
            var $scrollbar = $container.find('.datagrid-scrollbar-' + direction);
            if (!$scrollbar.length) {
                $scrollbar = $('<div class="datagrid-scrollbar datagrid-scrollbar-' + direction + '"><div class="bar"></div></div>').appendTo($container);
            }
            var isMouseDown = false;
            var lastPos = null;
            var eventSuffix = '.scrollbar' + direction + '.' + that.id;
            var startPagePos, startPageOffset, isClickBar, startScrollOffset;
            var handleMousePosition = function(e) {
                if (!isMouseDown) return;
                var pos = e[direction === 'h' ? 'pageX' : 'pageY'];
                if (lastPos === pos) {
                    return;
                }
                lastPos = pos;
                pos = (pos - startPagePos) + startPageOffset;
                var scroll = that.layout[direction + 'Scroll'];
                var offset;
                if (isClickBar) {
                    offset = (lastPos - startPagePos) + startScrollOffset;
                } else {
                    offset = Math.max(0, Math.min(scroll.space, pos - Math.round(scroll.barSize/2)));
                }
                if (direction === 'h') {
                    that.setScrollbarOffset(offset);
                } else {
                    that.setScrollbarOffset(null, offset);
                }
            };
            $scrollbar.on('mousedown', function(e) {
                isMouseDown = true;
                var scroll = that.layout[direction + 'Scroll'];
                var degree = direction === 'h' ? 'X' : 'Y';
                startPageOffset = e['offset' + degree];
                startPagePos = e['page' + degree];
                isClickBar = $(e.target).is('.bar');
                startScrollOffset = scroll.offset;
                if (isClickBar) {
                    startPageOffset += startScrollOffset;
                }
                handleMousePosition(e);
                $scrollbar.addClass('scrolling');
                $document.on('mouseup' + eventSuffix, function(e) {
                    isMouseDown = false;
                    handleMousePosition(e);
                    $document.off(eventSuffix);
                    $scrollbar.removeClass('scrolling');
                }).on('mousemove' + eventSuffix, handleMousePosition);
            });
            that['$' + direction + 'Scroll'] = $scrollbar;
            that['$' + direction + 'Scrollbar'] = $scrollbar.find('.bar');
        };
        createScrollbar('h');
        createScrollbar('v');
        $container.on('mousewheel', function(e) {
            that.scroll(that.layout.scrollLeft + event.deltaX, that.layout.scrollTop + event.deltaY);
        });

        that.$container = $container;

        var $cells = $element.find('.datagrid-cells:first');
        if (!$cells.length) {
            $cells = $('<div class="datagrid-cells" />').appendTo($container);
        }
        $cells.toggleClass('datagrid-hover-cell', !!options.hoverCell)
              .toggleClass('datagrid-hover-row', !!options.hoverRow)
              .toggleClass('datagrid-hover-col', !!options.hoverCol)
              .toggleClass('datagrid-hover-shadow', !!options.hoverCol);
        that.$cells = $cells;

        // configs is an object
        that.configs = $.extend({}, options.configs);

        that.layout       = {scrollLeft: 0, scrollTop: 0};
        that.configsCache = {};
        that.userConfigs  = {};

        // states is 2D arrays
        that.states = [];
        that.cells  = [];

        that.resetData(options.data, options.cols);
        that.render();

        if (options.responsive) {
            $container.on('resize', function() {
                that.layout.cols = null;
                that.render();
            });
        }

        if (options.hoverCol) {
            $cells.on('mouseenter', '.datagrid-cell-head', function() {
                var $headCol = $(this);
                var colIndex = $headCol.data('col');
                $('.datagrid-cell.hover').removeClass('hover');
                $('.datagrid-cell[data-col="' + colIndex + '"]').addClass('hover');
            }).on('mouseleave', '.datagrid-cell-head.hover', function() {
                $('.datagrid-cell.hover').removeClass('hover');
            });
        }
    };

    DataGrid.prototype.resetData = function(data, cols) {
        if (cols) {
            this.layout.cols = null;
        }

        cols = cols || this.cols || [];
        if (!cols.length) {
            if (data && data.length) {
                $.each(data[0], function(name) {
                    cols.push({
                        name: name
                    });
                });
            }
        } else {
            for (var i = 0; i < cols.length; ++i) {
                var col = cols[i];
                if (typeof col === 'string') {
                    cols[i] = {name: col};
                }
            }
        }

        this.cols = cols;
        this.data = data || [];
    };

    DataGrid.prototype.getRowLayout = function(rowIndex) {
        var layout = this.layout;
        if (rowIndex === 0) {
            return {
                top: 0,
                height: layout.headerHeight
            };
        }
        var rowHeight =  layout.rowHeight;
        return {
            height: rowHeight,
            top: layout.headerHeight + (rowIndex > 1 ? ((rowIndex - 1) * rowHeight) : 0) + rowIndex * layout.borderWidth
        };
    };

    DataGrid.prototype.updateLayout = function() {
        var that            = this;
        var options         = that.options;
        var layout          = that.layout;
        var data            = that.data;
        var dataLength      = data.length;
        var $container      = that.$container;
        var containerWidth  = $container.width();
        var containerHeight = $container.height();

        // Caculate cols layout
        if (!layout.cols) {
            var cols                = that.cols;
            var colAutoMinWidth     = options.colAutoMinWidth;
            var colAutoDefaultWidth = options.colAutoDefaultWidth;
            var growTotal           = 0;
            var minGrowWidth        = 0;
            var rowIndexWidth       = options.rowIndexWidth;
            var colsLayout          = [{
                left: 0,
                width: options.showRowIndex ? (rowIndexWidth === 'auto' ? ((dataLength + '').length * 14 + 10) : rowIndexWidth) : 0,
            }];
            var cellsTotalWidth     = 0;
            var fixedWidth          = colsLayout[0].width;
            var lastGrowColIndex    = false;
            var lastMaxGrow         = 0;
            var colLayout, colWidth;

            for (var i = 0; i < cols.length; ++i) {
                var col = cols[i];
                colWidth = col.width;
                if (!colWidth || colWidth === 'auto') {
                    colWidth = 0.1;
                }
                colLayout = {left: 0};
                if (colWidth >= 1) {
                    if (col.minWidth !== undefined) {
                        colWidth = Math.max(colWidth, col.minWidth);
                    }
                    colLayout.width = colWidth;
                    fixedWidth += colWidth;
                } else {
                    if (col.minWidth === undefined) {
                        col.minWidth = colAutoMinWidth;
                    }
                    colLayout.grow = colWidth;
                    growTotal += colWidth;
                    minGrowWidth += col.minWidth;
                    if (lastMaxGrow <= colLayout.grow) {
                        lastMaxGrow = colLayout.grow;
                        lastGrowColIndex = i + 1;
                    }
                }
                colLayout.minWidth = col.minWidth;
                colsLayout.push(colLayout);
            }
            var flexWidth = containerWidth - fixedWidth;
            var autoOverflow = flexWidth < minGrowWidth;
            var colsLenght = colsLayout.length;
            for (var j = 0; j < colsLenght; ++j) {
                colLayout = colsLayout[j];
                colWidth = colLayout.width;
                if (!colWidth) {
                    if (autoOverflow) {
                        colWidth = colAutoDefaultWidth * colLayout.grow * 10;
                    } else {
                        colWidth = flexWidth * colLayout.grow / growTotal;
                    }
                    colWidth = Math.floor(Math.max(colLayout.minWidth, colWidth));
                    colLayout.width = colWidth;
                }
                if (j > 0) {
                    var lastColLayout = colsLayout[j - 1];
                    colLayout.left = lastColLayout.left + lastColLayout.width;
                }
                cellsTotalWidth += colWidth;
            }

            var extraGap = containerWidth - cellsTotalWidth;
            if (lastGrowColIndex && extraGap > 0) {
                colsLayout[lastGrowColIndex].width += extraGap;
                cellsTotalWidth += extraGap;
            }
            layout.width = cellsTotalWidth;
            layout.cols = colsLayout;
        }

        layout.containerWidth  = containerWidth;
        layout.containerHeight = containerHeight;
        layout.rowHeight       = options.rowDefaultHeight;
        layout.borderWidth     = options.borderWidth;
        layout.headerHeight    = options.showHeader ? (options.headerHeight) : 0;
        layout.rowsLength      = dataLength + 1;
        layout.colsLength      = layout.cols.length;
        layout.height          = layout.headerHeight + dataLength * (layout.rowHeight + layout.borderWidth);

        that.layout = layout;
        return layout;
    };

    DataGrid.prototype.getCell = function(rowIndex, colIndex) {
        var that = this;
        var cell = get2DArrValue(that.cells, rowIndex, colIndex);
        if (cell) {
            return cell;
        }
        var config = that.getCellConfig(rowIndex, colIndex);
        var col = colIndex > 0 ? that.cols[colIndex - 1] : null;
        var type, value;
        if (colIndex === 0) {
            type = 'index';
            value = rowIndex || '';
        } else if (rowIndex === 0) {
            var colLabel = col && col.label;
            type = 'head';
            value = (colLabel !== undefined && colLabel !== null) ? colLabel : ((col && col.name) || colIndex);
        } else {
            type = 'cell';
            value = that.data[rowIndex - 1][col.name];
        }
        if (rowIndex > 0 && config.valueType) {
            var valueOperator = config.valueOperator || that.options.valueOperator;
            if (valueOperator) {
                var typeOperator = valueOperator[config.valueType];
                if (typeOperator && typeOperator.getter) {
                    value = typeOperator.getter(value, cell, that);
                }
            }
        }
        cell = {
            type: type,
            value: value,
            rowIndex: rowIndex,
            colIndex: colIndex,
            config: config
        };
        set2DArrValue(that.cells, rowIndex, colIndex, cell);
        return cell;
    };

    DataGrid.prototype.getCellBounds = function(rowIndex, colIndex) {
        var layout = this.layout;
        var colLayout = layout.cols[colIndex];
        var rowLayout = this.getRowLayout(rowIndex);
        return {
            left: colLayout.left,
            width: colLayout.width,
            top: rowLayout.top,
            height: rowLayout.height
        };
    };

    DataGrid.prototype.getRowConfig = function(rowIndex) {
        var that = this;
        var rowId = 'R' + rowIndex;
        var config = that.configsCache[rowId];
        if (!config) {
            config = $.extend({
                // height: 'auto'
            }, that.configs[rowId], that.userConfigs[rowId]);
            that.configsCache[rowId] = config;
        }
        return config;
    };

    DataGrid.prototype.getColConfig = function(colIndex) {
        var that = this;
        var colId = 'C' + colIndex;
        var config = that.configsCache[colId];
        if (!config) {
            config = $.extend(
                {
                    // html: false,
                    // style: null,
                    // className: '',
                    // valueOperator: null,
                    valueType: 'string'
                },
                colIndex > 0 ? that.cols[colIndex - 1] : null,
                that.configs[colId],
                that.userConfigs[colId]
            );
            that.configsCache[colId] = config;
        }
        return config;
    };

    DataGrid.prototype.getCellConfig = function(rowIndex, colIndex) {
        var that = this;
        var cellId = 'R' + rowIndex + 'C' + colIndex;
        var config = that.configsCache[cellId];
        if (!config) {
            config = $.extend(
                {},
                that.getColConfig(colIndex),
                that.getRowConfig(rowIndex),
                that.configs[cellId],
                that.userConfigs[cellId]
            );
            that.configsCache[cellId] = config;
        }
        return config;
    };

    DataGrid.prototype.renderCell = function(rowIndex, colIndex, $row) {
        var that      = this;
        var options   = that.options;
        var cell      = that.getCell(rowIndex, colIndex);
        var elementId = ['cell', rowIndex, colIndex].join('-');
        var $cell     = $('#' + elementId);
        if (!$cell.length) {
            $row = $row || $('#row-' + rowIndex);
            $cell = (options.cellCreator ? options.cellCreator(cell, that) : $('<div class="datagrid-cell" />')).appendTo($row);
            $cell.attr({
                id: elementId,
                'data-type': cell.type,
                'data-col': cell.colIndex,
                'data-row': cell.rowIndex
            }).toggleClass('datagrid-cell-head', rowIndex === 0)
              .toggleClass('datagrid-cell-cell', cell.type === 'cell')
              .toggleClass('datagrid-cell-index', colIndex === 0);
        }

        // Caculate cell style
        var borderWidth = options.borderWidth;
        var colLayout = that.layout.cols[colIndex];
        var colsLength = that.layout.colsLength;
        var cellBoundsStyle = {
            top: borderWidth ? -borderWidth : 0,
            bottom: borderWidth ? -borderWidth : 0,
            left: borderWidth ? (colLayout.left - borderWidth) : colLayout.left,
            width: borderWidth ? (colLayout.width + ((colsLength - 1) === colIndex ? 2 : 1) * borderWidth) : colLayout.width,
            borderWidth: borderWidth
        };
        var style = $.extend({}, cell.config.style, cellBoundsStyle);
        $cell.css(style);

        if (options.cellFormator) {
            options.cellFormator($cell, cell);
        } else {
            $cell[cell.html ? 'html' : 'text'](cell.value);
            if (cell.config.className) {
                $cell.addClass(cell.config.className);
            }
        }
    };

    DataGrid.prototype.renderRow = function(rowIndex) {
        var that       = this;
        var options    = that.options;
        var rowLayout  = that.getRowLayout(rowIndex);
        var colsLength = that.layout.colsLength;
        var elementId  = 'row-' + rowIndex;
        var $row       = $('#' + elementId);
        if (!$row.length) {
            $row = (options.rowCreator ? options.rowCreator(rowIndex, that) : $('<div class="datagrid-row" />')).appendTo(that.$cells);
            $row.attr({
                id: elementId,
                'data-row': rowIndex
            }).css({
                top: rowLayout.top,
                height: rowLayout.height
            }).toggleClass('datagrid-row-head', rowIndex === 0)
              .toggleClass('datagrid-row-cell', rowIndex !== 0);
        }
        for (var i = 0; i < colsLength; ++i) {
            that.renderCell(rowIndex, i, $row);
        }
        return $row;
    };

    DataGrid.prototype.renderData = function() {
        for (var i = 1; i < this.layout.rowsLength; ++i) {
            this.renderRow(i);
        }
    };

    DataGrid.prototype.render = function() {
        var that = this;
        var options = that.options;

        that.updateLayout();

        that.$cells.css({
            width: that.layout.width,
            height: that.layout.height
        });

        // Render header
        if (options.showHeader) {
            that.renderRow(0);
        }

        // Render rows
        that.renderData();

        // Render scrollbars
        that.renderScrollbars();
    };

    DataGrid.prototype.setScrollbarOffset = function(offsetX, offsetY) {
        var that = this;
        var layout = that.layout;
        var scrollLeft = layout.scrollLeft;
        var scrollTop = layout.scrollTop;
        if (typeof offsetX === 'number') {
            var hScroll = layout.hScroll;
            if (hScroll.offset !== offsetX) {
                scrollLeft = Math.round(offsetX * hScroll.size / hScroll.space);
            }
        }
        if (typeof offsetY === 'number') {
            var vScroll = layout.vScroll;
            if (vScroll.offset !== offsetY) {
                scrollTop = Math.round(offsetY * vScroll.size / vScroll.space);
            }
        }
        that.scroll(scrollLeft, scrollTop);
    };

    DataGrid.prototype.renderScrollbars = function() {
        var that = this;
        var layout = that.layout;
        var vSize = layout.height - layout.containerHeight;
        var hSize = layout.width - layout.containerWidth;
        var showVBar = vSize > 0;
        var showHBar = hSize > 0;
        that.$vScroll.toggle(showVBar);
        that.$hScroll.toggle(showHBar);
        layout.scrollLeft = showHBar ? Math.max(0, Math.min(hSize, layout.scrollLeft)) : 0;
        layout.scrollTop = showVBar ? Math.max(0, Math.min(vSize, layout.scrollTop)) : 0;
        if (showVBar) {
            var $bar = that.$vScrollbar;
            var scale = layout.containerHeight / layout.height;
            var barSize = Math.max(20, Math.floor(scale * layout.containerHeight));
            var scrollSpace = layout.containerHeight - barSize;
            var scrollScale = scrollSpace / vSize;
            var offset = Math.round(layout.scrollTop * scrollScale);
            layout.vScroll = {
                space: scrollSpace,
                size: vSize,
                scale: scrollScale,
                barSize: barSize,
                offset: offset
            };
            var barStyle = {
                height: barSize,
                top: offset
            };
            $bar.css(barStyle);
        }
        if (showHBar) {
            var $bar = that.$hScrollbar;
            var scale = layout.containerWidth / layout.width;
            var barSize = Math.max(20, Math.floor(scale * layout.containerWidth));
            var scrollSpace = layout.containerWidth - barSize;
            var offset = Math.round(layout.scrollLeft * scrollSpace / hSize);
            var barStyle = {
                width: barSize,
                left: offset
            };
            layout.hScroll = {
                offset: offset,
                space: scrollSpace,
                size: hSize,
                barSize: barSize
            };
            $bar.css(barStyle);
        }
        that.$cells.css({
            top: -layout.scrollTop,
            left: -layout.scrollLeft
        });
    };

    DataGrid.prototype.scroll = function(scrollLeft, scrollTop) {
        if (this.scrollLeft(scrollLeft, true) || this.scrollTop(scrollTop, true)) {
            this.renderScrollbars();
        }
    };

    DataGrid.prototype.scrollLeft = function(scrollLeft, notRender) {
        var layout = this.layout;
        scrollLeft = Math.max(0, Math.min(scrollLeft, layout.width - layout.containerWidth));
        var needRender = scrollLeft !== layout.scrollLeft;
        if (needRender) {
            layout.scrollLeft = scrollLeft;
            if (!notRender) this.renderScrollbars();
        }
        return needRender;
    };

    DataGrid.prototype.scrollTop = function(scrollTop, notRender) {
        var layout = this.layout;
        scrollTop = Math.max(0, Math.min(scrollTop, layout.height - layout.containerHeight));
        var needRender = scrollTop !== layout.scrollTop;
        if (needRender) {
            layout.scrollTop = scrollTop;
            if (!notRender) this.renderScrollbars();
        }
        return needRender;
    };

    // default options
    DataGrid.DEFAULTS = {
        // The data grid width, if set 'auto', then use the container element width
        width: 'auto',

        // The data grid height, if set 'auto', then use the screen height
        height: 400,

        // The data columns definitions, require an object array
        cols: [],

        // The init data, require an object array
        data: [],

        // The cells configurations
        configs: {},

        // The cells default states
        states: {},

        // Cell default height
        rowDefaultHeight: 30,

        // Column default width
        colAutoDefaultWidth: 80,

        // Column min width
        colAutoMinWidth: 50,

        // Show cells header
        showHeader: true,

        // Cells header height
        // headerHeight: 30,

        // Show row index number
        showRowIndex: true,

        // Row index width
        rowIndexWidth: 'auto',

        // Create cell element
        cellCreator: null,

        // Format cell element
        cellFormator: null,

        // Row creator
        rowCreator: null,

        // Border width (px)
        borderWidth: 1,

        // Use row hover effection
        hoverRow: true,

        // Use column hover effection
        hoverCol: true,

        // Use cell hover effection
        hoverCell: true,

        // Show shadow when hover
        hoverShadow: true,

        // Relayout on container resize
        responsive: true,

        // Value operator
        valueOperator: {},

        // Default date formater
        defaultDateFormater: 'yyyy-MM-dd hh:mm'
    };

    // Extense jquery element
    $.fn.datagrid = function(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data(NAME);
            var options = typeof option == 'object' && option;

            if(!data) $this.data(NAME, (data = new DataGrid(this, options)));

            if(typeof option == 'string') data[option]();
        });
    };

    DataGrid.NAME = NAME;

    $.fn.datagrid.Constructor = DataGrid;

    // Auto call datagrid after document load complete
    $(function() {
        $('[data-ride="datagrid"]').datagrid();
    });
}(jQuery));

