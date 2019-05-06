/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2011 kindsoft.net
*
* @author Roddy <luolonghao@gmail.com>
* @site http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
*******************************************************************************/

KindEditor.plugin('table', function (K) {
    var self = this;
    var name = 'table';
    var allLangs = {
        zh_cn: {
            name: '表格',
            xRxC: '{0}行 × {1}列',
            headerRow: '标题行',
            headerCol: '标题列',
            tableStyle: '表格样式',
            addHeaderRow: '添加表格标题行',
            stripedRows: '隔行变色效果',
            hoverRows: '鼠标悬停效果',
            autoChangeTableWidth: '自动调整表格尺寸',
            tableWidthFixed: '按表格文字自适应',
            tableWidthFull: '按页面宽度自适应',
            tableBorder: '表格边框',
            tableHead: '标题',
            tableContent: '内容'
        },
        zh_tw: {
            name: '表格',
            xRxC:'{0}行×{1}列',
            headerRow:'標題行',
            headerCol:'標題列',
            tableStyle: '表格樣式',
            addHeaderRow: '添加表格標題行',
            stripedRows: '隔行變色效果',
            hoverRows: '鼠標懸停效果',
            autoChangeTableWidth: '自動調整表格尺寸',
            tableWidthFixed: '按表格文字自適應',
            tableWidthFull: '按頁面寬度自適應',
            tableBorder: '表格邊框',
            tableHead: '標題',
            tableContent: '內容'
        },
        en: {
            name: 'Table',
            xRxC: '{0} Rows × {1} Columns',
            headerRow: 'Header Row',
            headerCol: 'Header Column',
            tableStyle: 'Table style',
            addHeaderRow: 'Add header row',
            stripedRows: 'Striped effection',
            hoverRows: 'Mouse hover effection',
            autoChangeTableWidth: 'Automatically adjust table size',
            tableWidthFixed: 'Adaptive by form text',
            tableWidthFull: 'Page width adaptive',
            tableBorder: 'Table border',
            tableHead: 'Title',
            tableContent: 'Text'
        }
    };
    var $elements = [];
    var lang = $.extend({}, self.lang('table.'), allLangs[($.clientLang || $.zui.clientLang)()]);

    // 设置颜色
    function _setColor(box, color) {
        color = color.toLowerCase();
        box.css('background-color', color);
        if (color) {
            box.css('color', color === '#000000' ? '#FFFFFF' : '#000000');
        }
        box.name === 'input' ? box.val(color) : box.html(color);
    }
    // 初始化取色器
    var pickerList = [];
    function _initColorPicker(dialogDiv, colorBox, onSetColor) {
        colorBox.bind('click,mousedown', function (e) {
            e.stopPropagation();
        });
        function removePicker() {
            K.each(pickerList, function () {
                this.remove();
            });
            pickerList = [];
            K(document).unbind('click,mousedown', removePicker);
            dialogDiv.unbind('click,mousedown', removePicker);
        }
        colorBox.click(function (e) {
            removePicker();
            var box = K(this),
                pos = box.pos();
            var picker = K.colorpicker({
                x: pos.x,
                y: pos.y + box.height(),
                z: 811214,
                selectedColor: K(this).html(),
                colors: self.colorTable,
                noColor: self.lang('table.defaultBorderColor'),
                shadowMode: self.shadowMode,
                click: function (color) {
                    _setColor(box, color);
                    removePicker();
                    onSetColor && onSetColor(color);
                }
            });
            pickerList.push(picker);
            K(document).bind('click,mousedown', removePicker);
            dialogDiv.bind('click,mousedown', removePicker);
        });
    }
    // 取得下一行cell的index
    function _getCellIndex(table, row, cell) {
        var rowSpanCount = 0;
        for (var i = 0, len = row.cells.length; i < len; i++) {
            if (row.cells[i] == cell) {
                break;
            }
            rowSpanCount += row.cells[i].rowSpan - 1;
        }
        return cell.cellIndex - rowSpanCount;
    }

    function removeEvent() {
        K.each($elements, function () {
            this.off('.kTable');
        });
    }

    function updateTable(setting, $table, onUpdateSetting) {
        if (!$table) {
            var table = self.plugin.getSelectedTable();
            $table = $(table[0]);
        }
        if (!$table || !$table.length) return;
        if (!setting) {
            setting = $.extend({
                borderColor: '#ddd'
            }, self.tableSetting, setting);
            if (setting.autoWidth === undefined) {
                setting.autoWidth = $table[0].style.width === 'auto';
            }
            if (setting.stripedRows === undefined) {
                var $rows = $table.find('tbody>tr');
                var coloredRowsLength = $rows.filter(function() {
                    return !!this.style.backgroundColor;
                }).length;
                setting.stripedRows = coloredRowsLength >= Math.floor($rows/2);
            }
        }
        self.tableSetting = setting;
        if (setting.header !== undefined) {
            if ($table.is('.ke-plugin-table-example')) {
                $table.find('thead').toggleClass('hidden', !setting.header);
            } else {
                var $thead = $table.find('thead');
                if (setting.header) {
                    if (!$thead.length) {
                        var theadHtml = ['<thead><tr>'];
                        var $firstRow = $table.find('tbody>tr:first').children();
                        var colsCount = 0;
                        $firstRow.each(function() {
                           var $cell = $(this);
                           var cellSpan = $cell.attr('colspan');
                           colsCount += cellSpan ? parseInt(cellSpan) : 1;
                        });
                        for(var i = 0; i < colsCount; ++i) {
                            theadHtml.push('<th>' + (K.IE ? '&nbsp;' : '<br />') +  '</th>');
                        }
                        theadHtml.push('</tr></thead>');
                        $thead = $(theadHtml.join(''));
                        $table.prepend($thead);
                    }
                } else {
                    $thead.remove();
                }
            }
            onUpdateSetting && onUpdateSetting('header', setting.header);
        }
        if (setting.stripedRows !== undefined) {
            var $rows = $table.find('tbody>tr');
            $rows.each(function(index) {
                $(this).css('background-color', (setting.stripedRows && (index % 2 === 0)) ? '#f9f9f9' : 'none');
            });
            onUpdateSetting && onUpdateSetting('stripedRows', setting.stripedRows);
        }
        // if (setting.hoverRows !== undefined) {
        //     $table.toggleClass('table-hover', !!setting.hoverRows);
        //     onUpdateSetting && onUpdateSetting('hoverRows', setting.hoverRows);
        // }
        if (setting.autoWidth !== undefined) {
            $table.css(setting.autoWidth ? {
                width: 'auto',
                maxWidth: '100%'
            } : {
                width: '100%',
            });
            onUpdateSetting && onUpdateSetting('autoWidth', setting.autoWidth);
        }
        if (setting.borderColor !== undefined) {
            $table.find('td,th').css('border', '1px solid ' + setting.borderColor);
            onUpdateSetting && onUpdateSetting('borderColor', setting.borderColor);
        }
    }

    function insertTable(row, col, headerRow, headerCol) {
        if (!(row * col)) {
            return;
        }
        var $table = $('<table class="table table-kindeditor table-bordered "></table>');
        var $body = $('<tbody></tbody>');
        for (var r = 0; r < row; r++) {
            var $row = $('<tr></tr>');
            for (var c = 0; c < col; c++) {
                var $cell = $('<td style="border-color: #ddd">' + (K.IE ? '&nbsp;' : '<br />') + '</td>');
                $row.append($cell);
            }
            $body.append($row);
        }
        $table.append($body);
        var html = $('<div>').append($table).html();
        if (!K.IE) {
            html += '<br />';
        }
        self.insertHtml(html);
        return $table;
    }

    function modifyTable(table) {
        var $table = $(table[0]);
        var theadHtml = ['<thead><tr>'];
        var tbodyHtml = ['<tbody>'];
        for(var i = 0; i < 6; ++i) {
            theadHtml.push('<th style="padding:4px">{tableHead}</th>');
            tbodyHtml.push('<tr>');
            for(var j = 0; j < 6; ++j) {
                tbodyHtml.push('<td style="padding:4px">{tableContent}</td>');
            }
            tbodyHtml.push('</tr>');
        }
        theadHtml.push('</tr></thead>');
        tbodyHtml.push('</tbody>');
        var dialogHtml = [
'<div class="container" style="padding: 15px">',
    '<div class="row">',
        '<div class="col-xs-5 col-left">',
            '<div class="form-group">',
                '<label>{tableStyle}</label>',
                '<div class="checkbox" style="margin: 0 0 5px"><label><input type="checkbox" name="header"> {addHeaderRow}</label></div>',
                '<div class="checkbox" style="margin: 0 0 5px"><label><input type="checkbox" name="stripedRows"> {stripedRows}</label></div>',
                // '<div class="checkbox" style="margin: 0 0 5px"><label><input type="checkbox" name="hoverRows"> {hoverRows}</label></div>',
            '</div>',
            '<div class="form-group">',
                '<label>{autoChangeTableWidth}</label>',
                '<div class="radio" style="margin: 0 0 5px"><label><input type="radio" name="autoWidth" value="auto"> {tableWidthFixed}</label></div>',
                '<div class="radio" style="margin: 0 0 5px"><label><input type="radio" name="autoWidth" value=""> {tableWidthFull}</label></div>',
            '</div>',
            '<div class="form-group" style="margin: 0">',
                '<label>{tableBorder}</label>',
                '<div class="input-group" style="width: 180px">',
                    '<span class="input-group-addon">{borderColor}</span>',
                    '<input class="form-control ke-plugin-table-input-color" readonly style="background: #dddddd; color: #333; font-size: 12px" value="#dddddd" name="borderColor" />',
                '</div>',
            '</div>',
        '</div>',
        '<div class="col-xs-7 col-right">',
            '<table class="table table-bordered table-kindeditor ke-plugin-table-example">',
                theadHtml.join(''),
                tbodyHtml.join(''),
            '<table>',
        '</div>',
    '</div>',
'</div>'].join('').format(lang);
        var $dialog = $(dialogHtml);
        var $exampleTable = $dialog.find('.ke-plugin-table-example');
        var bookmark = self.cmd.range.createBookmark();
        var $colorBox = $dialog.find('.ke-plugin-table-input-color');
        var colorBox = K($colorBox[0]);
        $dialog.on('change.kTable', 'input[name]', function() {
            var $input = $(this);
            var updateSetting = {};
            updateSetting[$input.attr('name')] = $input.is('[type="checkbox"]') ? $input.is(':checked') : $input.val();
            updateTable(updateSetting, $exampleTable);
        });

        var dialog = self.createDialog({
            name: name + 'Dialog',
            width: 550,
            title: self.lang(name),
            body: $dialog[0],
            beforeRemove: function () {
                $dialog.off('.kTable');
            },
            yesBtn: {
                name: self.lang('yes'),
                click: function (e) {
                    updateTable({
                        borderColor: $dialog.find('[name="borderColor"]').val(),
                        header: $dialog.find('[name="header"]').is(':checked'),
                        stripedRows: $dialog.find('[name="stripedRows"]').is(':checked'),
                        hoverRows: $dialog.find('[name="hoverRows"]').is(':checked'),
                        autoWidth: $dialog.find('[name="autoWidth"]:checked').val(),
                    }, $table);
                    self.hideDialog().focus();
                    self.cmd.range.moveToBookmark(bookmark);
                    self.cmd.select();
                    self.addBookmark();
                }
            }
        });
        _initColorPicker(dialog.div, colorBox, function(color) {
            updateTable({borderColor: color}, $exampleTable);
        });

        updateTable(self.tableSetting, $exampleTable, function(name, value) {
            switch (name) {
            case 'borderColor':
                _setColor(colorBox, value || '#dddddd');
                break;
            case 'header':
                $dialog.find('[name="header"]').prop('checked', !!value);
                break;
            case 'stripedRows':
                $dialog.find('[name="stripedRows"]').prop('checked', !!value);
                break;
            case 'hoverRows':
                $dialog.find('[name="hoverRows"]').prop('checked', !!value);
                break;
            case 'autoWidth':
                $dialog.find('[name="autoWidth"][value="' + (value ? 'auto' : '') + '"]').prop('checked', true);
                break;
            }
        });
    }

    self.plugin.table = {
        // modify table
        prop: function () {
            var table = self.plugin.getSelectedTable();
            if (table && table.length) {
                modifyTable(table);
            }
        },
        //modify cell
        cellprop: function () {
            var html = [
                '<div style="padding:20px;">',
                //width, height
                '<div class="ke-dialog-row">',
                '<label for="keWidth" style="width:90px;">' + lang.size + '</label>',
                lang.width + ' <input type="text" id="keWidth" class="ke-input-text ke-input-number" name="width" value="" maxlength="4" /> &nbsp; ',
                '<select name="widthType">',
                '<option value="%">' + lang.percent + '</option>',
                '<option value="px">' + lang.px + '</option>',
                '</select> &nbsp; ',
                lang.height + ' <input type="text" class="ke-input-text ke-input-number" name="height" value="" maxlength="4" /> &nbsp; ',
                '<select name="heightType">',
                '<option value="%">' + lang.percent + '</option>',
                '<option value="px">' + lang.px + '</option>',
                '</select>',
                '</div>',
                //align
                '<div class="ke-dialog-row">',
                '<label for="keAlign" style="width:90px;">' + lang.align + '</label>',
                lang.textAlign + ' <select id="keAlign" name="textAlign">',
                '<option value="">' + lang.alignDefault + '</option>',
                '<option value="left">' + lang.alignLeft + '</option>',
                '<option value="center">' + lang.alignCenter + '</option>',
                '<option value="right">' + lang.alignRight + '</option>',
                '</select> ',
                lang.verticalAlign + ' <select name="verticalAlign">',
                '<option value="">' + lang.alignDefault + '</option>',
                '<option value="top">' + lang.alignTop + '</option>',
                '<option value="middle">' + lang.alignMiddle + '</option>',
                '<option value="bottom">' + lang.alignBottom + '</option>',
                '<option value="baseline">' + lang.alignBaseline + '</option>',
                '</select>',
                '</div>',
                //border
                '<div class="ke-dialog-row">',
                '<label for="keBorder" style="width:90px;">' + lang.border + '</label>',
                lang.borderColor + ' <span class="ke-inline-block ke-input-color"></span>',
                '</div>',
                //background color
                '<div class="ke-dialog-row">',
                '<label for="keBgColor" style="width:90px;">' + lang.backgroundColor + '</label>',
                '<span class="ke-inline-block ke-input-color"></span>',
                '</div>',
                '</div>'
            ].join('');
            var bookmark = self.cmd.range.createBookmark();
            var dialog = self.createDialog({
                name: name,
                width: 500,
                title: self.lang('tablecell'),
                body: html,
                beforeRemove: function () {
                    colorBox.unbind();
                },
                yesBtn: {
                    name: self.lang('yes'),
                    click: function (e) {
                        var width = widthBox.val(),
                            height = heightBox.val(),
                            widthType = widthTypeBox.val(),
                            heightType = heightTypeBox.val(),
                            padding = paddingBox.val(),
                            spacing = spacingBox.val(),
                            textAlign = textAlignBox.val(),
                            verticalAlign = verticalAlignBox.val(),
                            borderColor = K(colorBox[0]).html() || '',
                            bgColor = K(colorBox[1]).html() || '';
                        if (!/^\d*$/.test(width)) {
                            alert(self.lang('invalidWidth'));
                            widthBox[0].focus();
                            return;
                        }
                        if (!/^\d*$/.test(height)) {
                            alert(self.lang('invalidHeight'));
                            heightBox[0].focus();
                            return;
                        }
                        cell.css({
                            width: width !== '' ? (width + widthType) : '',
                            height: height !== '' ? (height + heightType) : '',
                            'background-color': bgColor,
                            'text-align': textAlign,
                            'vertical-align': verticalAlign,
                            'border-style': 'solid',
                            'border-color': borderColor
                        });
                        self.hideDialog().focus();
                        self.cmd.range.moveToBookmark(bookmark);
                        self.cmd.select();
                        self.addBookmark();
                    }
                }
            }),
                div = dialog.div,
                widthBox = K('[name="width"]', div).val(100),
                heightBox = K('[name="height"]', div),
                widthTypeBox = K('[name="widthType"]', div),
                heightTypeBox = K('[name="heightType"]', div),
                paddingBox = K('[name="padding"]', div).val(2),
                spacingBox = K('[name="spacing"]', div).val(0),
                textAlignBox = K('[name="textAlign"]', div),
                verticalAlignBox = K('[name="verticalAlign"]', div),
                colorBox = K('.ke-input-color', div);
            _initColorPicker(div, colorBox.eq(0));
            _initColorPicker(div, colorBox.eq(1));
            _setColor(colorBox.eq(0), '#000000');
            _setColor(colorBox.eq(1), '');
            // foucs and select
            widthBox[0].focus();
            widthBox[0].select();
            // get selected cell
            var cell = self.plugin.getSelectedCell();
            var match,
                cellWidth = cell[0].style.width || cell[0].width || '',
                cellHeight = cell[0].style.height || cell[0].height || '';
            if ((match = /^(\d+)((?:px|%)*)$/.exec(cellWidth))) {
                widthBox.val(match[1]);
                widthTypeBox.val(match[2]);
            } else {
                widthBox.val('');
            }
            if ((match = /^(\d+)((?:px|%)*)$/.exec(cellHeight))) {
                heightBox.val(match[1]);
                heightTypeBox.val(match[2]);
            }
            textAlignBox.val(cell[0].style.textAlign || '');
            verticalAlignBox.val(cell[0].style.verticalAlign || '');
            _setColor(colorBox.eq(0), K.toHex(cell[0].style.borderColor || ''));
            _setColor(colorBox.eq(1), K.toHex(cell[0].style.backgroundColor || ''));
            widthBox[0].focus();
            widthBox[0].select();
        },
        insert: function () {
            console.warn('Table insert not available.');
        },
        'delete': function () {
            var table = self.plugin.getSelectedTable();
            self.cmd.range.setStartBefore(table[0]).collapse(true);
            self.cmd.select();
            table.remove();
            self.addBookmark();
        },
        colinsert: function (offset) {
            var table = self.plugin.getSelectedTable()[0],
                row = self.plugin.getSelectedRow()[0],
                cell = self.plugin.getSelectedCell()[0],
                index = cell.cellIndex + offset;
            // 取得第一行的index
            index += table.rows[0].cells.length - row.cells.length;

            for (var i = 0, len = table.rows.length; i < len; i++) {
                var newRow = table.rows[i],
                    newCell = newRow.insertCell(index);
                if (newRow.parentNode.tagName === 'THEAD') {
                    newCell.outerHTML = '<th></th>';
                }
                newCell.innerHTML = K.IE ? '' : '<br />';
                // 调整下一行的单元格index
                index = _getCellIndex(table, newRow, newCell);
            }
            self.cmd.range.selectNodeContents(cell).collapse(true);
            self.cmd.select();
            self.addBookmark();
        },
        colinsertleft: function () {
            this.colinsert(0);
        },
        colinsertright: function () {
            this.colinsert(1);
        },
        rowinsert: function (offset) {
            var table = self.plugin.getSelectedTable()[0],
                row = self.plugin.getSelectedRow()[0],
                cell = self.plugin.getSelectedCell()[0];
            var rowIndex = row.rowIndex;
            if (offset === 1) {
                rowIndex = row.rowIndex + (cell.rowSpan - 1) + offset;
            }
            var newRow = table.insertRow(rowIndex);

            for (var i = 0, len = row.cells.length; i < len; i++) {
                // 调整cell个数
                if (row.cells[i].rowSpan > 1) {
                    len -= row.cells[i].rowSpan - 1;
                }
                var newCell = newRow.insertCell(i);
                // copy colspan
                if (offset === 1 && row.cells[i].colSpan > 1) {
                    newCell.colSpan = row.cells[i].colSpan;
                }
                newCell.innerHTML = K.IE ? '' : '<br />';
            }
            // 调整rowspan
            for (var j = rowIndex; j >= 0; j--) {
                var cells = table.rows[j].cells;
                if (cells.length > i) {
                    for (var k = cell.cellIndex; k >= 0; k--) {
                        if (cells[k].rowSpan > 1) {
                            cells[k].rowSpan += 1;
                        }
                    }
                    break;
                }
            }
            self.cmd.range.selectNodeContents(cell).collapse(true);
            self.cmd.select();
            self.addBookmark();
        },
        rowinsertabove: function () {
            this.rowinsert(0);
        },
        rowinsertbelow: function () {
            this.rowinsert(1);
        },
        rowmerge: function () {
            var table = self.plugin.getSelectedTable()[0],
                row = self.plugin.getSelectedRow()[0],
                cell = self.plugin.getSelectedCell()[0],
                rowIndex = row.rowIndex, // 当前行的index
                nextRowIndex = rowIndex + cell.rowSpan, // 下一行的index
                nextRow = table.rows[nextRowIndex]; // 下一行
            // 最后一行不能合并
            if (table.rows.length <= nextRowIndex) {
                return;
            }
            var cellIndex = cell.cellIndex; // 下一行单元格的index
            if (nextRow.cells.length <= cellIndex) {
                return;
            }
            var nextCell = nextRow.cells[cellIndex]; // 下一行单元格
            // 上下行的colspan不一致时不能合并
            if (cell.colSpan !== nextCell.colSpan) {
                return;
            }
            cell.rowSpan += nextCell.rowSpan;
            nextRow.deleteCell(cellIndex);
            self.cmd.range.selectNodeContents(cell).collapse(true);
            self.cmd.select();
            self.addBookmark();
        },
        colmerge: function () {
            var table = self.plugin.getSelectedTable()[0],
                row = self.plugin.getSelectedRow()[0],
                cell = self.plugin.getSelectedCell()[0],
                rowIndex = row.rowIndex, // 当前行的index
                cellIndex = cell.cellIndex,
                nextCellIndex = cellIndex + 1;
            // 最后一列不能合并
            if (row.cells.length <= nextCellIndex) {
                return;
            }
            var nextCell = row.cells[nextCellIndex];
            // 左右列的rowspan不一致时不能合并
            if (cell.rowSpan !== nextCell.rowSpan) {
                return;
            }
            cell.colSpan += nextCell.colSpan;
            row.deleteCell(nextCellIndex);
            self.cmd.range.selectNodeContents(cell).collapse(true);
            self.cmd.select();
            self.addBookmark();
        },
        rowsplit: function () {
            var table = self.plugin.getSelectedTable()[0],
                row = self.plugin.getSelectedRow()[0],
                cell = self.plugin.getSelectedCell()[0],
                rowIndex = row.rowIndex;
            // 不是可分割单元格
            if (cell.rowSpan === 1) {
                return;
            }
            var cellIndex = _getCellIndex(table, row, cell);
            for (var i = 1, len = cell.rowSpan; i < len; i++) {
                var newRow = table.rows[rowIndex + i],
                    newCell = newRow.insertCell(cellIndex);
                if (cell.colSpan > 1) {
                    newCell.colSpan = cell.colSpan;
                }
                newCell.innerHTML = K.IE ? '' : '<br />';
                // 调整下一行的单元格index
                cellIndex = _getCellIndex(table, newRow, newCell);
            }
            K(cell).removeAttr('rowSpan');
            self.cmd.range.selectNodeContents(cell).collapse(true);
            self.cmd.select();
            self.addBookmark();
        },
        colsplit: function () {
            var table = self.plugin.getSelectedTable()[0],
                row = self.plugin.getSelectedRow()[0],
                cell = self.plugin.getSelectedCell()[0],
                cellIndex = cell.cellIndex;
            // 不是可分割单元格
            if (cell.colSpan === 1) {
                return;
            }
            for (var i = 1, len = cell.colSpan; i < len; i++) {
                var newCell = row.insertCell(cellIndex + i);
                if (cell.rowSpan > 1) {
                    newCell.rowSpan = cell.rowSpan;
                }
                newCell.innerHTML = K.IE ? '' : '<br />';
            }
            K(cell).removeAttr('colSpan');
            self.cmd.range.selectNodeContents(cell).collapse(true);
            self.cmd.select();
            self.addBookmark();
        },
        coldelete: function () {
            var table = self.plugin.getSelectedTable()[0],
                row = self.plugin.getSelectedRow()[0],
                cell = self.plugin.getSelectedCell()[0],
                index = cell.cellIndex;
            for (var i = 0, len = table.rows.length; i < len; i++) {
                var newRow = table.rows[i],
                    newCell = newRow.cells[index];
                if (newCell.colSpan > 1) {
                    newCell.colSpan -= 1;
                    if (newCell.colSpan === 1) {
                        K(newCell).removeAttr('colSpan');
                    }
                } else {
                    newRow.deleteCell(index);
                }
                // 跳过不需要删除的行
                if (newCell.rowSpan > 1) {
                    i += newCell.rowSpan - 1;
                }
            }
            if (row.cells.length === 0) {
                self.cmd.range.setStartBefore(table).collapse(true);
                self.cmd.select();
                K(table).remove();
            } else {
                self.cmd.selection(true);
            }
            self.addBookmark();
        },
        rowdelete: function () {
            var table = self.plugin.getSelectedTable()[0],
                row = self.plugin.getSelectedRow()[0],
                cell = self.plugin.getSelectedCell()[0],
                rowIndex = row.rowIndex;
            // 从下到上删除
            for (var i = cell.rowSpan - 1; i >= 0; i--) {
                table.deleteRow(rowIndex + i);
            }
            if (table.rows.length === 0) {
                self.cmd.range.setStartBefore(table).collapse(true);
                self.cmd.select();
                K(table).remove();
            } else {
                self.cmd.selection(true);
            }
            self.addBookmark();
        }
    };

    self.clickToolbar(name, function () {
        if (self.menu) return;

        var menu = self.createMenu({
            name: name,
            beforeRemove: function () {
                removeEvent();
            }
        });

        var $wrapperDiv = $('<div class="ke-plugin-table"></div>');
        var $header = $('<div class="ke-plugin-table-header" style="padding: 0 5px;">' + lang.xRxC.format(0, 0) + '</div>');
        $wrapperDiv.append($header);
        var $grid = $('<div class="ke-plugin-table-grid clearfix" style="width: 230px; padding: 5px 5px 0 5px"></div>');
        $grid.on('mouseenter.kTable', '.ke-plugin-table-grid-cell', function () {
            var $cell = $(this);
            var row = $cell.data('row');
            var col = $cell.data('col');
            $header.text(lang.xRxC.format(row, col));
            var $cells = $grid.find('.ke-plugin-table-grid-cell');
            $cells.each(function () {
                var $c = $(this);
                var r = $c.data('row');
                var c = $c.data('col');
                if (r <= row && c <= col) {
                    $c.css({
                        border: '1px solid #2286d2',
                        background: '#eff7ff'
                    });
                } else {
                    $c.css({
                        border: '1px solid #ddd',
                        background: '#f1f1f1'
                    });
                }
            });
        }).on('click.kTable', '.ke-plugin-table-grid-cell', function (e) {
            var $cell = $(this);
            var row = $cell.data('row');
            var col = $cell.data('col');
            insertTable(row, col);
            self.hideMenu().focus();
            self.addBookmark();
            e.stopPropagation();
        });
        for (var r = 1; r < 11; r++) {
            for (var c = 1; c < 11; c++) {
                $grid.append('<div class="ke-plugin-table-grid-cell" style="float: left; width: 20px; height: 20px;  margin: 1px; border: 1px solid #ddd; background: #f1f1f1;" data-row="' + r + '" data-col="' + c + '"></div>');
            }
        }
        $elements.push($grid);
        $wrapperDiv.append($grid);
        menu.div.append($wrapperDiv[0]);
    });

    // https://zui.5upm.com/task-view-2.html
    self.afterTab(function() {
        var range = self.cmd.range;
        if (range && range.endContainer) {
            var selectNextCell = function($currentCell) {
                if ($currentCell.length) {
                    var $nextCell = $currentCell.next();
                    if (!$nextCell.is('td,th')) {
                        $nextCell = $currentCell.parent().next('tr').children('th,td').first();
                    }
                    if (!$nextCell.is('td,th')) {
                        $nextCell = $currentCell.closest('tbody,tfoot,thead').next().children('tr').first().children('th,td').first();
                    }
                    if ($nextCell.length) {
                        self.cmd.range.selectNode($nextCell[0]);
                        self.cmd.select();
                        return true;
                    }
                }
                return false;
            };
            var $endContainer = $(range.endContainer).closest('td,th');
            if ($endContainer.length) {
                if (!selectNextCell($endContainer)) {
                    self.plugin.table.rowinsertbelow();
                    selectNextCell($endContainer);
                }
                return true;
            }
        }
        return false;
    });

    var selectRow = function($table, rowIndex) {
        $table.children('thead,tbody,tfoot').children('tr').each(function() {
            if(this.rowIndex === rowIndex) {
                $(this).children('td,th').addClass('ke-select-cell');
            }
        });
    };

    var selectCol = function($table, cellIndex) {
        $table.children('thead,tbody,tfoot').children('tr').children('td,th').each(function() {
            if(this.cellIndex === cellIndex) {
                $(this).addClass('ke-select-cell');
            }
        });
    };

    var selectCellsRange = function($table, startRow, startCol, endRow, endCol) {
        if (startRow === endRow && startCol === endCol) {
            return false;
        }
        if (startRow > endRow) {
            var tmp = startRow;
            startRow = endRow;
            endRow = tmp;
        }
        if (startCol > endCol) {
            var tmp = startCol;
            startCol = endCol;
            endCol = tmp;
        }
        $table.children('thead,tbody,tfoot').children('tr').each(function() {
            var rowIndex = this.rowIndex;
            if (rowIndex >= startRow && rowIndex <= endRow) {
                $(this).children('td,th').each(function() {
                    var colIndex = this.cellIndex;
                    if (colIndex >= startCol && colIndex <= endCol) {
                        $(this).addClass('ke-select-cell');
                    }
                });
            }
        });
        return true;
    };

    self.afterCreate(function() {
        var isMouseDown = false;
        var $mouseDownTable = null;
        var $mouseMoveTable = null;
        var mouseMoveRowIndex = null;
        var mouseMoveCellIndex = null;
        var mouseDownRowIndex = null;
        var mouseDownCellIndex = null;

        var handleMouseUp = function() {
            isMouseDown = false;
            $mouseDownTable = null;
        };

        $(self.edit.doc.body).on('mousedown.ke' + self.uuid, 'table', function(e) {
            var $table = $(e.currentTarget);
            if (!$table.length) return;
            var $cell = $(e.target).closest('td,th');
            if (!$cell.length) return;
            $mouseDownTable = $table;
            isMouseDown = true;
            mouseDownRowIndex = $cell.closest('tr')[0].rowIndex;
            mouseDownCellIndex = $cell[0].cellIndex;
            $(self.edit.doc).find('.ke-select-cell').removeClass('ke-select-cell');
        }).on('mousemove.ke' + self.uuid, function(e) {
            var $cell = $(e.target).closest('td,th');
            if (!$cell.length) return isMouseDown && e.preventDefault();
            var $table = $cell.closest('table');
            if (!$table.length) return isMouseDown && e.preventDefault();
            $table.removeClass('ke-select-row ke-select-col');
            mouseMoveRowIndex = null;
            mouseMoveCellIndex = null;
            if (isMouseDown) {
                if ($table[0] !== $mouseDownTable[0]) return;
                $(self.edit.doc).find('table').find('.ke-select-cell').removeClass('ke-select-cell');
                if (selectCellsRange($table, mouseDownRowIndex, mouseDownCellIndex, $cell.closest('tr')[0].rowIndex, $cell[0].cellIndex)) {
                    e.preventDefault();
                }
            } else {
                $mouseMoveTable = $table;
                var tableOffset = $table.offset();
                var pageX = e.pageX;
                var pageY = e.pageY;
                var moveX = pageX - tableOffset.left;
                var moveY = pageY - tableOffset.top;
                if (moveX < 8) {
                    $table.addClass('ke-select-row');
                    mouseMoveRowIndex = $cell.closest('tr')[0].rowIndex;
                    e.preventDefault();
                    e.stopPropagation();
                } else if (moveY < 8) {
                    $table.addClass('ke-select-col');
                    mouseMoveCellIndex = $cell[0].cellIndex;
                    e.preventDefault();
                    e.stopPropagation();
                }
            }
        }).on('mouseup.ke' + self.uuid, function(e) {
            var $target = $(e.target);
            var $cell = $target.closest('td,th');
            if (!$cell.length) return;
            if (typeof mouseMoveRowIndex === 'number') {
                selectRow($mouseMoveTable, mouseMoveRowIndex);
                e.stopPropagation();
            } else if (typeof mouseMoveCellIndex === 'number') {
                selectCol($mouseMoveTable, mouseMoveCellIndex);
                e.stopPropagation();
            }
            handleMouseUp();
        }).on('paste.ke' + self.uuid + ' keydown.ke' + self.uuid, function() {
            $(self.edit.doc).find('table').removeClass('ke-select-row ke-select-col').find('.ke-select-cell').removeClass('ke-select-cell');
        });
        $(document).on('mouseup.ke' + self.uuid, function() {
            handleMouseUp();
        });

        $(self.edit.doc.head).append([
            '<style>',
            '.ke-select-row {cursor: e-resize; cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAAMFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABaPxwLAAAAD3RSTlMAqiTk590pHjjw0cZyAjPTb5hoAAAARUlEQVQI12MgCnAowJmdbjAW7/rPcOHS/3Bh9vgvCSCaR1BQcP9/IxCT8T8IAIVhTKBGuAK4NrhppUBBTCteGqE6hzAAAHccHSlSjBVHAAAAAElFTkSuQmCC) 10 10, auto}',
            '.ke-select-col {cursor: s-resize; cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAAJ1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADdEvm1AAAADHRSTlMAqiPfH+Q58dPHcgLUxK6wAAAAUklEQVQI12MgCiyUgjNlDuJlcoOYG8DMDAWZgyxtIBZbjYnMQefjCUAmU8zhOSdtjiqAhJ3PAEEQWC2LzZkzIEGwMFgQKgwShApDBUGGKBDlagAGvBgJQ+z5fwAAAABJRU5ErkJggg==) 10 10, auto}',
            '.ke-select-cell {outline: #b3d4fc 2px solid; outline-offset: -1px;}',
            '</style>',
        ].join(''));

        var cmdToggleBack = self.cmd.toggle;
        var cmdToggle = function(wrapper, map, flag) {
            var self = this;
            if (flag === undefined || flag === null) {
                flag = self.commonNode(map);
            }
            if(flag) {
                self.remove(map);
            } else {
                self.wrap(wrapper);
            }
            return self.select();
        };

        var eachSelectCells = function(eachCallback, beforeCallback, afterCallback) {
            var range = self.cmd.range;
            if (range && range.endContainer) {
                var $cell = $(range.endContainer).closest('th,td');
                if (!$cell.length) return;
                var $table = $cell.closest('table');
                if (!$table.length) return;
                var $selectCells = $table.children('thead,tbody,tfoot').children('tr').children('.ke-select-cell');
                if ($selectCells.length) {
                    if (beforeCallback) beforeCallback($cell, $table);
                    $selectCells.each(eachCallback);
                    if (afterCallback) afterCallback($cell, $table);

                    range.selectNodeContents($cell[0]);
                    // range.collapse();
                    self.cmd.select();
                    self.focus();
                    return true;
                }
            }
        };

        self.cmd.toggle = function(wrapper, map) {
            var flag;
            if (eachSelectCells(function() {
                self.cmd.range.selectNodeContents(this);
                self.cmd.select();
                cmdToggle.call(self.cmd, wrapper, map, flag);
            }, function ($cell) {
                self.cmd.range.selectNodeContents($cell[0]);
                self.cmd.select();
                flag = !!self.cmd.commonNode(map);
            })) {
                return;
            }
            return cmdToggleBack.call(self.cmd, wrapper, map);
        };

        var commands = ',justifyleft,justifycenter,justifyright,justifyfull,insertorderedlist,insertunorderedlist,';
        var clickToolbarBack = self.clickToolbar;
        self.clickToolbar = function(name, fn) {
            if (fn === undefined && commands.indexOf(',' + name + ',') > -1) {
                if (eachSelectCells(function() {
                    self.cmd.range.selectNodeContents(this);
                    self.cmd.select();
                    clickToolbarBack.call(self, name, fn);
                })) {
                    return;
                }
            }
            return clickToolbarBack.call(self, name, fn);
        }
    });

    self.beforeRemove(function() {
        $(self.edit.doc.body).off('.ke' + self.uuid);
        $(document).off('.ke' + self.uuid);
    });
});

KindEditor.lang({
    table: KindEditor.lang('table')
});