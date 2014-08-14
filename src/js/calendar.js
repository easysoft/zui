/* Calendar */
+function($, window, document, Math)
{
    "use strict";
    var name = 'zui.calendar';

    var getNearbyLastWeekDay = function(date, lastWeek)
        {
            lastWeek = lastWeek || 1;

            var d = date.clone();
            while(d.getDay() != lastWeek)
            {
                d.addDays(-1);
            }
            return d;
        },

        getFirstDayOfMonth = function(date)
        {
            var d = date.clone();
            d.setDate(1);
            return d;
        },

        getLastDayOfMonth = function(date)
        {
            var d = date.clone();
            var month = d.getMonth();
            d.setDate(28);

            while(d.getMonth() == month)
            {
                d.addDays(1);
            }

            d.addDays(-1);

            return d;
        };

    var Calendar = function(element, options)
    {
        this.name      = name;
        this.$         = $(element);
        this.id        = this.$.attr('id') || (name + $.uuid());
        this.storeName = name + '.' + this.id;

        this.getOptions(options);
        this.getLang();

        this.storeData = window.store.pageGet(this.storeName, {date: 'today', view: 'month'});

        this.date = this.options.startDate || (this.options.storage ? this.storeData.date : 'today');
        this.view = this.options.startView || (this.options.storage ? this.storeData.view : 'month');

        var $header = this.$.children('.calender-header');
        if(!$header.length)
        {
            $header = $('<header><div class="btn-toolbar"><div class="btn-group"><button type="button" class="btn btn-today">{today}</button></div><div class="btn-group"><button type="button" class="btn btn-prev"><i class="icon-chevron-left"></i></button><button type="button" class="btn btn-next"><i class="icon-chevron-right"></i></button></div><div class="btn-group"><span class="date-caption"></span></div></div></header>'.format(this.lang));
            this.$.append($header);
        }
        this.$header = $header;

        var $views = this.$.children('.calendar-views');
        if(!$views.length)
        {
            $views = $('<div class="calendar-views"></div>');
            this.$.append($views);
        }
        this.$views = $views;
        this.$monthView = $views.children('.calendar-view.month');

        this.display();

        this.bindEvents();
    };

    // default options
    Calendar.DEFAULTS =
    {
        langs:
        {
            zh_cn:
            {
                weekNames: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                today: '今天',
                year: '{0} 年'
            }
        },
        // startView: "month",  // default view when load complete
        // startDate: 'today',  // default date when load complete
        storage: true,
        dragThenDrop: true   // drag an event and drop at another day
    };

    Calendar.prototype.bindEvents = function ()
    {
        var $e = this.$,
            self = this;

        $e.on('click', '.btn-today', function()
        {
            self.date = new Date();
            self.display();
        }).on('click', '.btn-next', function()
        {
            if(self.view === 'month')
            {
                self.date.addMonths(1);
            }
            self.display();
        }).on('click', '.btn-prev', function()
        {
            if(self.view === 'month')
            {
                self.date.addMonths(-1);
            }
            self.display();
        });
    };

    Calendar.prototype.getOptions = function (options)
    {
        this.options = $.extend({}, Calendar.DEFAULTS, this.$.data(), options);
    };

    Calendar.prototype.getLang = function ()
    {
        this.lang = this.options.langs[this.options.lang || $.clientLang()];
    };

    Calendar.prototype.display = function(view, date)
    {
        if(typeof view === 'undefined')
        {
            view = this.view;
        }
        else
        {
            this.view = view;
        }

        if(typeof date === 'undefined')
        {
            date = this.date;
        }
        else
        {
            this.date = date;
        }

        if(date === 'today')
        {
            date = new Date();
            this.date = date;
        }
        else if(typeof date === 'string')
        {
            date = new Date(date);
            this.date = date;
        }

        if(this.options.storage)
        {
            window.store.pageSet(this.storeName, {date: date, view: view});
        }

        switch(view)
        {
            case 'month':
                this.displayMonth(date);
                break;
        }
    };

    Calendar.prototype.displayMonth = function()
    {
        var options = this.options,
            self = this,
            lang = this.lang,
            date = this.date,
            $views = this.$views,
            $e = this.$;

        var $view = self.$monthView;
        if(!$view.length)
        {
            $view = $('<div class="calendar-view month"><table class="table table-bordered"><thead><tr class="week-head"></tr></thead><tbody class="month-days"></tbody></table></div>');

            var $weekHead = $view.find('.week-head'),
                $monthDays = $view.find('.month-days'),
                $tr;

            for (var i = 0; i < 7; i++)
            {
                $weekHead.append('<th>' + lang.weekNames[i] + '</th>');
            }

            for (var i = 0; i < 6; i++)
            {
                $tr = $('<tr class="week-days"></tr>');
                for (var j = 0; j < 7; j++)
                {
                    $tr.append('<td><div class="day"><div class="heading"><span class="month"></span> <span class="number"></span></div><div class="content"></div></div></td>');
                }
                $monthDays.append($tr);
            }

            $views.append($view);
            self.$monthView = $view;
        }

        var $weeks = $view.find('.week-days'),
            $days  = $view.find('.day'),
            firstDayOfMonth = getFirstDayOfMonth(date),
            lastDayOfMonth = getLastDayOfMonth(date),
            $week,
            $day,
            year,
            day,
            month,
            today = new Date();
        var firstDay = getNearbyLastWeekDay(firstDayOfMonth),
            thisMonth = date.getMonth(),
            thisDay   = date.getDate(),
            todayMonth = today.getMonth(),
            todayYear = today.getFullYear(),
            todayDate = today.getDate();

        var printDate = firstDay.clone();
        $weeks.each(function(weekIdx)
        {
            $week = $(this);
            $week.find('.day').each(function(dayIndex)
            {
                $day = $(this);
                year = printDate.getFullYear();
                day = printDate.getDate();
                month = printDate.getMonth();
                $day.find('.heading > .number').text(day);

                $day.find('.heading > .month')
                    .toggle((weekIdx === 0 && dayIndex === 0) || day === 1)
                    .text(((month === 0 && day === 1) ? (lang.year.format(year) + ' ') : '') + lang.monthNames[month]);
                $day.toggleClass('current-month', month === thisMonth);
                $day.toggleClass('current', (day === todayDate && month === todayMonth && year === todayYear));
                $day.toggleClass('past', printDate < date);
                $day.toggleClass('future', printDate > date);

                printDate.addDays(1);
            });
        });
    };

    Calendar.prototype.callEvent = function(name, params)
    {
        var result = this.$.callEvent(name + '.' + this.name, params, this);
        return !(result.result != undefined && (!result.result));
    };

    $.fn.calendar = function(option)
    {
        return this.each(function()
        {
            var $this   = $(this);
            var data    = $this.data(name);
            var options = typeof option == 'object' && option;

            if (!data) $this.data(name, (data = new Calendar(this, options)));

            if (typeof option == 'string') data[option]();
        });
    };

    $.fn.calendar.Constructor = Calendar;
}(jQuery,window,document,Math);
