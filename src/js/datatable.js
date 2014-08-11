/* DataTable */
+function($, window, document, Math)
{
    "use strict";

    var DataTable = function(element, options)
    {
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
        fixedHeader : true,
        // fixedHeaderOffset: 41, // set top offset of header when fixed
        checkable : true,
        checkByClickRow: true,
        checkSingleByClickRow: true,
        sortable : true,
        fixedLeftWidth: '30%',
        fixedRightWidth: '30%',
        flexWidth: 'auto',
        flexHeadDrag: true,
        rowHover: true,
        colHover: true,
        checkedClass: 'active'
    };

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
                        type: 'string'
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
                        id: $tr.attr('id'),
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
        data.fixedRight = data.flexEnd >= 0 && data.flexEnd < cols.length;
        data.fixedLeft  = data.flexStart > 0;
        if(data.flexStart < 0 && data.flexEnd < 0)
        {
            data.fixedLeft = true;
            data.flexStart = cols.length;
            data.flexEnd = cols.length;
        }

        if(data.flexArea && (typeof(options.flexWidth) == undefined || options.flexWidth == 'auto'))
        {
            var flexWidth = 0;
            for(var i = data.flexStart; i <= data.flexEnd; ++i)
            {
                cols[i].flex = true;
                flexWidth += cols[i].width;
            }
            options.flexWidth = flexWidth;
        }

        this.data = data;
    };

    DataTable.prototype.html = function()
    {
        var init = !$('#' + this.id).empty().length,
            html = '',
            options = this.options,
            data = this.data,
            cols = this.data.cols,
            leftHtml = '', rightHtml = '', flexHtml = '',
            rows = this.data.rows;
        var dataRowSpan = '<div class="datatable-rows-span datatable-span {0}"><table class="table' + options.tableClass + '"><tbody>{1}</tbody></table>{2}</div>',
            dataHeadSpan = '<div class="datatable-head-span datatable-span {0}"><table class="table' + options.tableClass + '"><thead><tr>{1}</tr></thead></table>{2}</div>';

        if(init) html += '<div class="datatable" id="' + this.id + '">';

        // head
        html += '<div class="datatable-head">';
        var th, col;
        for(var i = 0; i < cols.length; ++i)
        {
            col = cols[i];
            th = '<th class="' + (col.cssClass || '') + ' ' + ((col.colClass || '')) + '" data-index="' + i + '" data-type="' + col.type + '" style="' + col.css + '">' + col.text + '</th>';
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
            html += dataHeadSpan.format('fixed-left', leftHtml, '');
        }
        if(data.flexArea)
        {
            html += dataHeadSpan.format('flexarea', flexHtml, '<div class="scrolled-shadow scrolled-in-shadow"></div><div class="scrolled-shadow scrolled-out-shadow"></div>');
        }
        if(data.fixedRight)
        {
            html += dataHeadSpan.format('fixed-right', rightHtml, '');
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

            tr =  '<tr class="' + cssClass + '" data-index="' + r + '" data-id="' + row.id + '">';
            leftHtml += tr;
            rightHtml += tr;
            flexHtml += tr;

            for(i = 0; i < row.data.length; ++i)
            {

                rowCol = row.data[i];
                if(!$.isPlainObject(rowCol))
                {
                    rowCol = {text: rowCol};
                }

                td = '<td data-index="' + i + '" data-flex="false" data-type="' + cols[i].type + '" class="' + (rowCol.cssClass || '') + ' ' + (cols[i].colClass || '') + '" style="' + (rowCol.css || '') + '">' + rowCol.text + '</td>';
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
        this.$rows      = this.$datatable.children('.datatable-rows').find('.datatable-span > .table > tbody > tr');

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
                $flexArea  = $datatable.find('.datatable-span.flexarea > .table'),
                $flexTable = $datatable.find('.datatable-rows-span.flexarea > .table');
            var $bar = $scrollbar.children('.bar'),
                flexWidth,
                scrollWidth,
                tableWidth,
                lastBarLeft,
                barLeft,
                scrollOffsetStoreName = self.id + '_' + 'scrollOffset',
                firtScroll,
                left;
            var srollTable = function(offset, silence)
                {
                    barLeft = Math.max(0, Math.min(flexWidth - scrollWidth, offset));
                    if(lastBarLeft !== barLeft)
                    {
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
                    }
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
                scrollTop = $(window).scrollTop();
                offsetTop = $datatable.offset().top;
                height = $datatable.height();
                $datatable.toggleClass('head-fixed', scrollTop > offsetTop && scrollTop < (offsetTop + height));
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

        this.refresh();
    };

    DataTable.prototype.refresh = function()
    {
        var $datatable = this.$datatable,
            options = this.options,
            cols = this.data.cols;

        $datatable.find('.datatable-span.fixed-left').css('width', options.fixedLeftWidth);
        $datatable.find('.datatable-span.fixed-right').css('width', options.fixedRightWidth);

        var $cells = this.$cells;
        for(var i = 0; i < cols.length; ++i)
        {
            $cells.filter('[data-index="' + i + '"]').css('width', cols[i].width);
        }
    }

    $.fn.datatable = function(option)
    {
        return this.each(function()
        {
            var $this   = $(this);
            var data    = $this.data('zui.datatable');
            var options = typeof option == 'object' && option;

            if (!data) $this.data('zui.datatable', (data = new DataTable(this, options)));

            if (typeof option == 'string') data[option]();
        });
    };

    $.fn.datatable.Constructor = DataTable;
}(jQuery,window,document,Math);
