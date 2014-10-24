/*!
 * ZUI - v1.2.0-beta - 2014-10-24
 * http://zui.sexy
 * GitHub: https://github.com/easysoft/zui.git 
 * Copyright (c) 2014 cnezsoft.com; Licensed MIT
 */

/* DataTable */
+function($, window, document, Math)
{
    "use strict";

    var name = 'zui.datatable';

    var DataTable = function(element, options)
    {
        this.name = name;
        this.$  = $(element);
        this.isTable = (this.$[0].tagName === 'TABLE');
        if(this.isTable)
        {
            this.id = 'datatable-' + (this.$.attr('id') || $.uuid());
        }
        else
        {
            this.$datatable = this.$.addClass('datatable');
            if(this.$.attr('id'))
            {
                this.id = this.$.attr('id');
            }
            else
            {
                this.id = 'datatable-' + $.uuid();
                this.$.attr('id', this.id);
            }
        }
        this.getOptions(options);
        this.load();

        this.render();
    };

    // default options
    DataTable.DEFAULTS =
    {
        // Check options
        checkable : false,               // added check icon to the head of rows
        checkByClickRow: true,          // change check status by click anywhere on a row
        checkedClass: 'active',         // apply CSS class to an checked row

        // Sort options
        sortable : false,                // enable sorter

        // fixed header of columns
        fixedHeader : true,             // fixed header
        fixedHeaderOffset: 0,           // set top offset of header when fixed
        fixedLeftWidth: '30%',          // set left width after first render
        fixedRightWidth: '30%',         // set right width after first render
        flexHeadDrag: true,             // scroll flexarea by drag header

        // hover effection
        rowHover: true,                 // apply hover effection to row
        colHover: true,                 // apply hover effection to head

        // custom columns size
        customizable: false,             // enable customizable
        minColWidth: 20,                // min width of columns
        minFixedLeftWidth: 200,         // min left width
        minFixedRightWidth: 200,        // min right width
        minFlexAreaWidth: 200           // min flexarea width
    };

    // Get options
    DataTable.prototype.getOptions = function (options)
    {
        var $e = this.$,
            options = $.extend({}, DataTable.DEFAULTS, this.$.data(), options);

        if(!options.tableClass)
        {
            options.tableClass = '';
            if($e.hasClass('table-bordered'))
            {
                options.tableClass += ' table-bordered';
            }

            if($e.hasClass('table-hover') || options.rowHover)
            {
                options.tableClass += ' table-hover';
            }

            if($e.hasClass('table-striped'))
            {
                options.tableClass += ' table-striped';
            }
        }

        this.options = options;
    };

    // Load data form options or table dom
    DataTable.prototype.load = function()
    {
        var data    = this.options.data,
            options = this.options,
            $t      = this.$;

        if(!data)
        {
            if(this.isTable)
            {
                data = {cols: [], rows: []};
                var cols = data.cols, rows = data.rows, $th, $tr, $td, row;
                $t.find('thead > tr:first').children('th').each(function()
                {
                    $th = $(this);
                    cols.push($.extend(
                    {
                        text: $th.html(),
                        flex: false || $th.hasClass('flex-col'),
                        width: 'auto',
                        cssClass: $th.attr('class'),
                        css: $th.attr('style'),
                        type: 'string',
                        sort: !$th.hasClass('sort-disabled')
                    }, $th.data()));
                });

                $t.find('tbody > tr').each(function()
                {
                    $tr = $(this);
                    row = $.extend(
                    {
                        data: [],
                        checked: false,
                        cssClass: $tr.attr('class'),
                        css: $tr.attr('style'),
                        id: $tr.attr('id')
                    }, $tr.data());

                    $tr.children('td').each(function()
                    {
                        $td = $(this);
                        row.data.push($.extend(
                        {
                            cssClass: $td.attr('class'),
                            css: $td.attr('style'),
                            text: $td.html()
                        }, $td.data()));
                    });

                    rows.push(row);
                });
            }
            else
            {
                throw new Error('No data avaliable!');
            }
        }

        data.flexStart = -1;
        data.flexEnd = -1;

        var cols = data.cols;
        data.colsLength = cols.length;
        for(var i = 0; i < cols.length; ++i)
        {
            var col = cols[i];
            if(col.flex)
            {
                if(data.flexStart < 0)
                {
                    data.flexStart = i;
                }

                data.flexEnd = i;
            }
        }

        if(data.flexStart === 0 && data.flexEnd === cols.length)
        {
            data.flexStart = -1;
            data.flexEnd   = -1;
        }

        data.flexArea   = data.flexStart >= 0;
        data.fixedRight = data.flexEnd >= 0 && data.flexEnd < (cols.length-1);
        data.fixedLeft  = data.flexStart > 0;
        if(data.flexStart < 0 && data.flexEnd < 0)
        {
            data.fixedLeft = true;
            data.flexStart = cols.length;
            data.flexEnd = cols.length;
        }

        this.data = data;

        this.callEvent('afterLoad', {data: data});
    };

    // Generage html
    DataTable.prototype.html = function()
    {
        var init = !$('#' + this.id).empty().length,
            html = '',
            options = this.options,
            data = this.data,
            cols = this.data.cols,
            leftHtml = '', rightHtml = '', flexHtml = '',
            rows = this.data.rows;
            var dataRowSpan = '<div class="datatable-rows-span datatable-span {0}"><div class="datatable-wrapper"><table class="table' + options.tableClass + '"><tbody>{1}</tbody></table>{2}</div></div>',
            dataHeadSpan = '<div class="datatable-head-span datatable-span {0}"><div class="datatable-wrapper"><table class="table' + options.tableClass + '"><thead><tr>{1}</tr></thead></table>{2}</div></div>';

        if(init)
        {
            html += '<div class="datatable' + (options.sortable ? ' sortable' : '') + ' ' + (options.customizable ? ' customizable' : '') + '" id="' + this.id + '">';
        }
        else
        {
            this.$datatable.toggleClass('sortable', options.sortable)
                .toggleClass('customizable', options.customizable);
        }

        // head
        html += '<div class="datatable-head">';
        var th, col, sortClass;
        for(var i = 0; i < cols.length; i++)
        {
            col = cols[i];
            sortClass = '';
            if(typeof col.customizable === 'undefined')
            {
                col.customizable = true;
            }
            if(typeof col.sort === 'undefined')
            {
                col.sort = true;
            }
            else if(col.sort === 'down')
            {
                sortClass = 'sort-down';
            }
            else if(col.sort === 'up')
            {
                sortClass = 'sort-up';
            }
            else if(col.sort === false)
            {
                sortClass = 'sort-disabled';
            }
            th = '<th class="' + (col.cssClass || '')
                + ' ' + ((col.colClass || '')) + ' ' + sortClass
                + '" data-index="' + i + '" data-type="' + col.type + '" style="' + col.css + '">'
                + col.text + ((col.customizable && i != (data.flexStart - 1) && i != data.flexEnd && i < (cols.length - 1)) ? '<div class="size-handle"></div>' : '') + '</th>';

            if(i == 0 && options.checkable)
            {
                th = '<th data-index="check" class="check-all check-btn"><i class="icon-check-empty"></i></th>' + th;
            }
            if(i < data.flexStart) leftHtml += th;
            else if(i >= data.flexStart && i <= data.flexEnd) flexHtml += th;
            else if(i > data.flexEnd) rightHtml += th;
        }

        if(data.fixedLeft)
        {
            html += dataHeadSpan.format('fixed-left', leftHtml, '<div class="size-handle size-handle-head size-handle-left"></div>');
        }
        if(data.flexArea)
        {
            html += dataHeadSpan.format('flexarea', flexHtml, '<div class="scrolled-shadow scrolled-in-shadow"></div><div class="scrolled-shadow scrolled-out-shadow"></div>');
        }
        if(data.fixedRight)
        {
            html += dataHeadSpan.format('fixed-right', rightHtml, '<div class="size-handle size-handle-head size-handle-right"></div>');
        }

        html += '</div>';

        // cols
        html += '<div class="datatable-rows">';
        var tr, row, i, td, cssClass, rowCol;
        leftHtml = ''; rightHtml = ''; flexHtml = '';
        for(var r = 0; r < rows.length; ++r)
        {
            row = rows[r];
            cssClass = row.cssClass || '';
            if(row.checked) cssClass += ' ' + (options.checkedClass || '');
            if(typeof row.id === 'undefined')
            {
                row.id = r;
            }

            row.index = r;

            tr =  '<tr class="' + cssClass + '" data-index="' + r + '" data-id="' + row.id + '">';
            leftHtml += tr;
            rightHtml += tr;
            flexHtml += tr;

            for(i = 0; i < row.data.length; ++i)
            {

                rowCol = row.data[i];
                if(!$.isPlainObject(rowCol))
                {
                    rowCol = {text: rowCol, row: r, index: i};
                    row.data[i] = rowCol;
                }

                td = '<td data-row="' + r + '" data-index="' + i + '" data-flex="false" data-type="' + cols[i].type + '" class="' + (rowCol.cssClass || '') + ' ' + (cols[i].colClass || '') + '" style="' + (rowCol.css || '') + '">' + rowCol.text + '</td>';
                if(i == 0 && options.checkable)
                {
                    td = '<td data-index="check" class="check-row check-btn"><i class="icon-check-empty"></i></td>' + td;
                }

                if(i < data.flexStart) leftHtml += td;
                else if(i >= data.flexStart && i <= data.flexEnd) flexHtml += td;
                else if(i > data.flexEnd) rightHtml += td;
            }

            leftHtml += '</tr>';
            rightHtml += '</tr>';
            flexHtml += '</tr>';
        }

        if(data.fixedLeft)
        {
            html += dataRowSpan.format('fixed-left', leftHtml, '');
        }
        if(data.flexArea)
        {
            html += dataRowSpan.format('flexarea', flexHtml, '<div class="scrolled-shadow scrolled-in-shadow"></div><div class="scrolled-shadow scrolled-out-shadow"></div><div class="scroll-slide"><div class="bar"></div></div>');
        }
        if(data.fixedRight)
        {
            html += dataRowSpan.format('fixed-right', rightHtml, '');
        }

        html += '</div>';

        if(init) html += '</div>';
        return html;
    };

    // Render datatable
    DataTable.prototype.render = function()
    {
        if(this.isTable)
        {
            this.$.attr('data-datatable-id', this.id).hide();
            this.$.after(this.html());
            this.$datatable = $('#' + this.id);
        }
        else
        {
            this.$.html(this.html());
        }

        this.$dataSpans = this.$datatable.children('.datatable-head, .datatable-rows').find('.datatable-span');
        this.$rowsSpans = this.$datatable.children('.datatable-rows').children('.datatable-rows-span');
        this.$headSpans = this.$datatable.children('.datatable-head').children('.datatable-head-span');
        this.$cells     = this.$dataSpans.find('td, th');
        this.$dataCells = this.$cells.filter('td');
        this.$headCells = this.$cells.filter('th');
        this.$rows      = this.$rowsSpans.find('.table > tbody > tr');

        // bind events
        var options    = this.options,
            self       = this,
            data       = this.data,
            $cells     = this.$cells,
            $dataCells = this.$dataCells,
            $headCells = this.$headCells,
            $datatable = this.$datatable;

        // row hover
        if(options.rowHover)
        {
            var hoverClass = 'hover';
            this.$rowsSpans.on('mouseenter', 'td', function()
            {
                $dataCells.filter('.' + hoverClass).removeClass(hoverClass);
                self.$rows.filter('.' + hoverClass).removeClass(hoverClass);

                self.$rows.filter('[data-index="' + $(this).addClass(hoverClass).closest('tr').data('index') + '"]').addClass(hoverClass);
            }).on('mouseleave', 'td', function()
            {
                $dataCells.filter('.' + hoverClass).removeClass(hoverClass);
                self.$rows.filter('.' + hoverClass).removeClass(hoverClass);
            });
        }

        // col hover
        if(options.colHover)
        {
            var colHoverClass = 'col-hover';
            this.$headSpans.on('mouseenter', 'th', function()
            {
                $cells.filter('.' + colHoverClass).removeClass(colHoverClass);
                $cells.filter('[data-index="' + $(this).data('index') + '"]').addClass(colHoverClass);
            }).on('mouseleave', 'th', function()
            {
                $cells.filter('.' + colHoverClass).removeClass(colHoverClass);
            });
        }

        // scroll event
        if(this.data.flexArea)
        {
            var $scrollbar = $datatable.find('.scroll-slide'),
                $flexArea  = $datatable.find('.datatable-span.flexarea .table'),
                $flexTable = $datatable.find('.datatable-rows-span.flexarea .table');
            var $bar = $scrollbar.children('.bar'),
                flexWidth,
                scrollWidth,
                tableWidth,
                lastBarLeft,
                barLeft,
                scrollOffsetStoreName = self.id + '_' + 'scrollOffset',
                firtScroll,
                left;

            this.width = $datatable.width();
            $datatable.resize(function(){self.width = $datatable.width();});

            var srollTable = function(offset, silence)
                {
                    barLeft = Math.max(0, Math.min(flexWidth - scrollWidth, offset));
                    if(!silence)
                    {
                        $datatable.addClass('scrolling');
                    }
                    $bar.css('left', barLeft);
                    left = 0 - Math.floor((tableWidth - flexWidth) * barLeft / (flexWidth - scrollWidth));
                    $flexArea.css('left', left);
                    lastBarLeft = barLeft;

                    $datatable.toggleClass('scrolled-in', barLeft > 2)
                              .toggleClass('scrolled-out', barLeft < flexWidth - scrollWidth - 2);

                    store.pageSet(scrollOffsetStoreName, barLeft);
                };
            var resizeScrollbar = function()
                {
                    flexWidth = $scrollbar.width();
                    tableWidth = $flexTable.width();
                    scrollWidth = Math.floor((flexWidth * flexWidth) / tableWidth);
                    $bar.css('width', scrollWidth);
                    $flexTable.css('min-width', flexWidth);
                    $datatable.toggleClass('show-scroll-slide', tableWidth > flexWidth);

                    if(!firtScroll && flexWidth !== scrollWidth)
                    {
                        firtScroll = true;
                        srollTable(store.pageGet(scrollOffsetStoreName, 0), true);
                    }

                    if($datatable.hasClass('size-changing'))
                    {
                        srollTable(barLeft, true);
                    }
                };
            $scrollbar.resize(resizeScrollbar);
            $flexTable.resize(resizeScrollbar);
            resizeScrollbar();

            var dragOptions =
            {
                move: false,
                stopPropagation: true,
                drag: function(e)
                {
                    srollTable($bar.position().left + e.smallOffset.x * (e.element.hasClass('bar') ? 1 : -1));
                },
                finish: function()
                {
                    $datatable.removeClass('scrolling');
                }
            };

            $bar.draggable(dragOptions);
            if(options.flexHeadDrag)
            {
                $datatable.find('.datatable-head-span.flexarea').draggable(dragOptions);
            }

            $scrollbar.mousedown(function(event)
            {
                var x = event.pageX - $scrollbar.offset().left;
                srollTable(x - (scrollWidth / 2));
            });
        }

        // row check
        if(options.checkable)
        {
            var checkedStatusStoreName = self.id + '_' + checkedStatus,
                checkedClass = options.checkedClass,
                rowId;
            var syncChecks = function()
            {
                var $rows = self.$rowsSpans.first().find('.table > tbody > tr');
                var $checkedRows = $rows.filter('.' + checkedClass);
                var checkedStatus =
                {
                    checkedAll: $rows.length === $checkedRows.length && $checkedRows.length > 0,
                    checks: $checkedRows.map(function()
                    {
                        rowId = $(this).data('id');
                        return rowId;
                    }).toArray()
                };
                $.each(data.rows, function(index, value)
                {
                    value.checked = ($.inArray(value.id, checkedStatus.checks) > -1);
                });
                self.$headSpans.find('.check-all').toggleClass('checked', checkedStatus.checkedAll);

                store.pageSet(checkedStatusStoreName, checkedStatus);

                self.callEvent('checksChanged', {checks: checkedStatus});
            };

            this.$rowsSpans.on('click', options.checkByClickRow ? 'tr' : '.check-row', function()
            {
                self.$rows.filter('[data-index="' + $(this).closest('tr').data('index') + '"]').toggleClass(checkedClass);
                syncChecks();
            });

            this.$headSpans.find('.check-all').click(function()
            {
                self.$rows.toggleClass(checkedClass, $(this).toggleClass('checked').hasClass('checked'));
                syncChecks();
            });

            var checkedStatus = store.pageGet(checkedStatusStoreName);
            if(checkedStatus)
            {
                this.$headSpans.find('.check-all').toggleClass('checked', checkedStatus.checkedAll);
                if(checkedStatus.checkedAll)
                {
                    self.$rows.addClass(checkedClass);
                }
                else
                {
                    self.$rows.removeClass(checkedClass);
                    $.each(checkedStatus.checks, function(index, ele)
                    {
                        self.$rows.filter('[data-id="' + ele + '"]').addClass(checkedClass);
                    });
                }
            }
        }

        // fix header
        if(options.fixedHeader)
        {
            var offsetTop,
                height,
                scrollTop,
                $dataTableHead = $datatable.children('.datatable-head'),
                navbarHeight = options.fixedHeaderOffset || $('.navbar.navbar-fixed-top').height() || 0;
            var handleScroll = function()
            {
                offsetTop = $datatable.offset().top;
                scrollTop = $(window).scrollTop();
                height = $datatable.height();
                $datatable.toggleClass('head-fixed', (scrollTop + navbarHeight) > offsetTop && (scrollTop + navbarHeight) < (offsetTop + height));
                if($datatable.hasClass('head-fixed'))
                {
                    $dataTableHead.css(
                    {
                        width: $datatable.width(),
                        top: navbarHeight
                    });
                }
                else
                {
                    $dataTableHead.attr('style', '');
                }
            };

            $(window).scroll(handleScroll);
            handleScroll();
        }

        // make sortable
        if(options.sortable)
        {
            var $th, sortdown;
            this.$headSpans.on('click', 'th:not(.sort-disabled, .check-btn)', function()
            {
                if($datatable.hasClass('size-changing')) return;
                self.sortTable($(this));
            });
        }

        // custom column width
        if(options.customizable)
        {
            var oldWidth, $th, col, dragDirection, $span;
            var $sizeHandles = this.$headSpans.find('.size-handle'),
                refreshSize = function($handle, delta)
                {
                    var eventParams = {};
                    if($handle.hasClass('size-handle-head'))
                    {
                        oldWidth = $handle.closest('.datatable-head-span').width();
                        if($handle.hasClass('size-handle-left'))
                        {
                            eventParams.change = 'fixedLeftWidth';
                            eventParams.oldWidth = self.fixedLeftWidth;
                            self.fixedLeftWidth = Math.min(self.width - (self.fixedRightWidth || self.$headSpans.filter('.fixed-right').width()) - options.minFlexAreaWidth,
                                                  Math.max(options.minFixedLeftWidth, oldWidth + delta));
                            eventParams.newWidth = self.fixedLeftWidth;
                        }
                        else
                        {
                            eventParams.change = 'fixedRightWidth';
                            eventParams.oldWidth = self.fixedRightWidth;
                            self.fixedRightWidth = Math.min(self.width - (self.fixedLeftWidth || self.$headSpans.filter('.fixed-left').width()) - options.minFlexAreaWidth,
                                                   Math.max(options.minFixedRightWidth, oldWidth - delta));
                            eventParams.newWidth = self.fixedRightWidth;
                        }
                    }
                    else
                    {
                        $th = $handle.closest('th');
                        col = data.cols[$th.data('index')];
                        oldWidth = col.width;
                        if(oldWidth === 'auto')
                        {
                            $handle = $th.closest('.datatable-head-span');
                            oldWidth = $handle.width();
                            if($handle.hasClass('fixed-left'))
                            {
                                eventParams.change = 'fixedLeftWidth';
                                eventParams.oldWidth = self.fixedLeftWidth;
                                self.fixedLeftWidth = Math.min(self.width - (self.fixedRightWidth || self.$headSpans.filter('.fixed-right').width()) - options.minFlexAreaWidth,
                                                      Math.max(options.minFixedLeftWidth, oldWidth + delta));
                                eventParams.newWidth = self.fixedLeftWidth;
                            }
                            else if($handle.hasClass('fixed-right'))
                            {
                                eventParams.change = 'fixedRightWidth';
                                eventParams.oldWidth = self.fixedRightWidth;
                                self.fixedRightWidth = Math.min(self.width - (self.fixedLeftWidth || self.$headSpans.filter('.fixed-left').width()) - options.minFlexAreaWidth,
                                                       Math.max(options.minFixedRightWidth, oldWidth - delta));
                                eventParams.newWidth = self.fixedRightWidth;
                            }
                        }
                        else
                        {
                            eventParams.change = 'colWidth';
                            eventParams.oldWidth = col.width;
                            eventParams.colIndex = col.index;
                            col.width = Math.max(options.minColWidth, oldWidth + delta);
                            eventParams.newWidth = col.width;
                        }
                    }

                    self.refreshSize();
                    self.callEvent('sizeChanged', {changes: eventParams});
                };

            $sizeHandles.draggable(
            {
                move: false,
                stopPropagation: true,
                before: function()
                {
                    dragDirection = null;
                    $datatable.addClass('size-changing');
                },
                drag: function(e)
                {
                    refreshSize(e.element, e.smallOffset.x);
                },
                finish: function()
                {
                    $datatable.removeClass('size-changing');
                }
            });
        }

        this.refresh();

        this.callEvent('ready');
    };

    // Sort table
    DataTable.prototype.sortTable = function($th)
    {
        var sorterStoreName = self.id + '_' + 'datatableSorter';
        var sorter = store.pageGet(sorterStoreName);

        if(!$th)
        {
            if(sorter)
            {
                $th = this.$headCells.filter('[data-index="' + sorter.index + '"]').addClass('sort-' + sorter.type);
            }
            else
            {
                $th = this.$headCells.filter('.sort-up, .sort-down').first();
            }
        }

        if(!$th.length)
        {
            return;
        }


        var data = this.data;
        var cols = data.cols,
            rows = data.rows,
            $headCells = this.$headCells,
            sortUp,
            type,
            sortCol,
            index;

        sortUp = !$th.hasClass('sort-up');
        $headCells.removeClass('sort-up sort-down');
        $th.addClass(sortUp ? 'sort-up' : 'sort-down');

        index = $th.data('index');
        sortUp = $th.hasClass('sort-up');

        $.each(cols, function(idx, col)
        {
            if(idx != index && (col.sort === 'up' || col.sort === 'down'))
            {
                col.sort = true;
            }
            else if(idx == index)
            {
                col.sort = sortUp ? 'up' : 'down';
                type = col.type;
            }
        });

        var valA, valB, result, $dataRows = this.$dataCells.filter('[data-index="' + index + '"]');
        rows.sort(function(cellA, cellB)
        {
            cellA = cellA.data[index];
            cellB = cellB.data[index];
            valA = $dataRows.filter('[data-row="' + cellA.row + '"]').text();
            valB = $dataRows.filter('[data-row="' + cellB.row + '"]').text();
            if(type === 'number')
            {
                valA = parseFloat(valA);
                valB = parseFloat(valB);
            }
            else if(type === 'date')
            {
                valA = Date.parse(valA);
                valB = Date.parse(valB);
            }
            else
            {
                valA = valA.toLowerCase();
                valB = valB.toLowerCase();
            }
            result = valA > valB ? 1 : (valA < valB ? -1 : 0);
            if(sortUp)
            {
                result = result * (-1);
            }
            return result;
        });

        var $rows = this.$rows, lastRows = [], $row, $lastRow, $r;
        $.each(rows, function(idx, row)
        {
            $row = $rows.filter('[data-index="' + row.index + '"]');
            $row.each(function(rIdx)
            {
                $r = $(this);
                $lastRow = lastRows[rIdx];
                if($lastRow)
                {
                    $lastRow.after($r);
                }
                else
                {
                    $r.parent().prepend($r);
                }
                lastRows[rIdx] = $r;
            });
        });

        var sorter = {index: index, type: sortUp ? 'up' : 'down'};

        // save sort with local storage
        store.pageSet(sorterStoreName, sorter);

        this.callEvent('sort', {sorter: sorter});
    };

    DataTable.prototype.callEvent = function(name, params)
    {
        var result = this.$.callEvent(name + '.' + this.name, params, this).result;
        return !(result != undefined && (!result));
    };

    // Refresh size
    DataTable.prototype.refreshSize = function()
    {
        var $datatable = this.$datatable,
            options = this.options,
            rows = this.data.rows,
            cols = this.data.cols;

        $datatable.find('.datatable-span.fixed-left').css('width', this.fixedLeftWidth || options.fixedLeftWidth);
        $datatable.find('.datatable-span.fixed-right').css('width', this.fixedRightWidth || options.fixedRightWidth);

        var findMaxHeight = function($cells)
            {
                var mx = 0;
                $cells.css('height', 'auto');
                $cells.each(function()
                {
                    mx = Math.max(mx, $(this).height());
                });
                return mx;
            },
            $dataCells = this.$dataCells,
            $cells     = this.$cells,
            $headCells = this.$headCells;
        // set width of data cells
        for(var i = 0; i < cols.length; ++i)
        {
            $cells.filter('[data-index="' + i + '"]').css('width', cols[i].width);
        }

        // set height of head cells
        $headCells.height(findMaxHeight($headCells));

        // set height of data cells
        var $rowCells;
        for(var i = 0; i < rows.length; ++i)
        {
            $rowCells = $dataCells.filter('[data-row="' + i + '"]');
            $rowCells.height(findMaxHeight($rowCells));
        }
    };

    // Refresh changes of ui
    DataTable.prototype.refresh = function()
    {
        this.refreshSize();
        this.sortTable();
    };

    $.fn.datatable = function(option)
    {
        return this.each(function()
        {
            var $this   = $(this);
            var data    = $this.data(name);
            var options = typeof option == 'object' && option;

            if (!data) $this.data(name, (data = new DataTable(this, options)));

            if (typeof option == 'string') data[option]();
        });
    };

    $.fn.datatable.Constructor = DataTable;
}(jQuery,window,document,Math);
