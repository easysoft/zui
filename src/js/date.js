/* ========================================================================
 * ZUI: date.js
 * Date polyfills
 * http://openzui.com
 * ========================================================================
 * Copyright 2014-2020 cnezsoft.com; Licensed MIT
 * ======================================================================== */
(function(window) {
    'use strict';

    /**
     * Ticks of a whole day
     * @type {number}
     */
    const ONEDAY_TICKS = 24 * 3600 * 1000;

    /**
     * Create a Date instance
     * @param {Date|String|Number} date Date expression
     * @return {Date}
     */
    const createDate = function(date) {
        if (!(date instanceof Date)) {
            if (typeof date === 'number' && date < 10000000000) {
                date *= 1000;
            }
            date = new Date(date);
        }
        return date;
    };

    /**
     * Get timestamp of a Date
     * @param {Date|String|Number} date Date expression
     * @return {number}
     */
    const getTimestamp = function(date) {
        return createDate(date).getTime();
    };

    /**
     * Format date to a string
     *
     * @param  {Date|String|Number} Date date expression
     * @param  {string}             [format='yyyy-MM-dd hh:mm:ss'] Date format string
     * @return {string}
     */
    const formatDate = function(date, format) {
        date = createDate(date);
        if (format === undefined) {
            format = 'yyyy-MM-dd hh:mm:ss';
        }
        var map = {
            'M+': date.getMonth() + 1,
            'd+': date.getDate(),
            'h+': date.getHours(),
            'm+': date.getMinutes(),
            's+': date.getSeconds(),
            'q+': Math.floor((date.getMonth() + 3) / 3),
            'S+': date.getMilliseconds()
        };
        if(/(y+)/i.test(format)) {
            format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        for(var k in map) {
            if(new RegExp('(' + k + ')').test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? map[k] : ('00' + map[k]).substr(('' + map[k]).length));
            }
        }
        return format;
    };

    /**
     * Add milliseconds to the date
     * @param {Date}   Date         date
     * @param {number} milliseconds milliseconds value
     * @return {Date}
     */
    const addMilliseconds = function(date, milliseconds) {
        date.setTime(date.getTime() + milliseconds);
        return date;
    };

    /**
     * Add milliseconds to the date
     * @param {Date}   date date
     * @param {number} days days value
     * @return {Date}
     */
    const addDays = function(date, days) {
        return addMilliseconds(date, days * ONEDAY_TICKS);
    };

    /**
     * Clone date to a new instance
     * @param {Date|String|Number} date date expression
     */
    const cloneDate = function(date) {
        return new Date(createDate(date).getTime());
    };

    /**
     * Judge the year is in a leap year
     * @param {number} year
     * @return {boolean}
     */
    const isLeapYear = function(year) {
        return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
    };

    /**
     * Get days number of the date
     * @param  {number} year
     * @param  {number} month
     * @return {number}
     */
    const getDaysInMonth = function(year, month) {
        return [31, (isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
    };

    /**
     * Get days number of the date
     * @param {Date}   date date
     * @return {number}
     */
    const getDaysOfThisMonth = function(date) {
        return getDaysInMonth(date.getFullYear(), date.getMonth());
    };

    /**
     * Clear time part of the date
     * @param {Date}   date date
     * @return {Date}
     */
    const clearTime = function(date) {
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date;
    };

    /**
     * Add months to the date
     * @param {Date}   date date
     * @param {number} monthsCount
     * @return {Date}
     */
    const addMonths = function(date, monthsCount) {
        var n = date.getDate();
        date.setDate(1);
        date.setMonth(date.getMonth() + monthsCount);
        date.setDate(Math.min(n, getDaysOfThisMonth(date)));
        return date;
    };

    /**
     * Get last week day of the date
     * @param {Date}   date date
     * @param  {number} [day=1] 1 ~ 7
     * @return {Date}
     */
    const getLastWeekday = function(date, day) {
        day = day || 1;

        var d = new Date(date.getTime());
        while(d.getDay() != day) {
            d = addDays(d, -1);
        }
        return clearTime(d);
    };

    /**
     * Judge the date is same day with another date
     * @param {Date} date1
     * @param {Date} date2
     * @return {boolean}
     */
    const isSameDay = function(date1, date2) {
        return date1.toDateString() === date2.toDateString();
    };

    /**
     * Judge the date is in same week with another date
     * @param {Date} date1
     * @param {Date} date2
     * @return {boolean}
     */
    const isSameWeek = function(date1, date2) {
        var weekStart = getLastWeekday(date1);
        var weekEnd = addDays(cloneDate(weekStart), 7);
        return date2 >= weekStart && date2 < weekEnd;
    };

    /**
     * Judge the date is in same year with another date
     * @param {Date} date1
     * @param {Date} date2
     * @return {boolean}
     */
    const isSameYear = function(date1, date2) {
        return date1.getFullYear() === date2.getFullYear();
    };

    const exports = {
        formatDate: formatDate,
        createDate: createDate,
        date: {
            ONEDAY_TICKS: ONEDAY_TICKS,
            create: createDate,
            getTimestamp: getTimestamp,
            format: formatDate,
            addMilliseconds: addMilliseconds,
            addDays: addDays,
            cloneDate: cloneDate,
            isLeapYear: isLeapYear,
            getDaysInMonth: getDaysInMonth,
            getDaysOfThisMonth: getDaysOfThisMonth,
            clearTime: clearTime,
            addMonths: addMonths,
            getLastWeekday: getLastWeekday,
            isSameDay: isSameDay,
            isSameWeek: isSameWeek,
            isSameYear: isSameYear,
        }
    };

    if (window.$ && window.$.zui) {
        $.zui(exports);
    } else {
        window.dateHelper = exports.date;
    }

    if (!window.noDatePrototypeHelper) {
        /**
         * Ticks of a whole day
         * @type {number}
         */
        Date.ONEDAY_TICKS = ONEDAY_TICKS;

        /**
         * Format date to a string
         *
         * @param  string   format
         * @return string
         */
        if(!Date.prototype.format) {
            Date.prototype.format = function(format) {
                return formatDate(this, format);
            };
        }

        /**
         * Add milliseconds to the date
         * @param {number} value
         */
        if(!Date.prototype.addMilliseconds) {
            Date.prototype.addMilliseconds = function(value) {
                return addMilliseconds(this, value);
            };
        }

        /**
         * Add days to the date
         * @param {number} days
         */
        if(!Date.prototype.addDays) {
            Date.prototype.addDays = function(days) {
                return addDays(this, days);
            };
        }

        /**
         * Clone a new date instane from the date
         * @return {Date}
         */
        if(!Date.prototype.clone) {
            Date.prototype.clone = function() {
                return cloneDate(this);
            };
        }

        /**
         * Judge the year is in a leap year
         * @param  {integer}  year
         * @return {Boolean}
         */
        if(!Date.isLeapYear) {
            Date.isLeapYear = function(year) {
                return isLeapYear(year);
            };
        }

        if(!Date.getDaysInMonth) {
            /**
             * Get days number of the date
             * @param  {integer} year
             * @param  {integer} month
             * @return {integer}
             */
            Date.getDaysInMonth = function(year, month) {
                return getDaysInMonth(year, month);
            };
        }


        /**
         * Judge the date is in a leap year
         * @return {Boolean}
         */
        if(!Date.prototype.isLeapYear) {
            Date.prototype.isLeapYear = function() {
                return isLeapYear(this.getFullYear());
            };
        }


        /**
         * Clear time part of the date
         * @return {date}
         */
        if(!Date.prototype.clearTime) {
            Date.prototype.clearTime = function() {
                return clearTime(this);
            };
        }


        /**
         * Get days of this month of the date
         * @return {integer}
         */
        if(!Date.prototype.getDaysInMonth) {
            Date.prototype.getDaysInMonth = function() {
                return getDaysOfThisMonth(this);
            };
        }


        /**
         * Add months to the date
         * @param {number} monthsCount
         */
        if(!Date.prototype.addMonths) {
            Date.prototype.addMonths = function(monthsCount) {
                return addMonths(this, monthsCount);
            };
        }


        /**
         * Get last week day of the date
         * @param  {integer} day
         * @return {date}
         */
        if(!Date.prototype.getLastWeekday) {
            Date.prototype.getLastWeekday = function(day) {
                return getLastWeekday(this, day);
            };
        }


        /**
         * Judge the date is same day as another date
         * @param  {Date}  date
         * @return {Boolean}
         */
        if(!Date.prototype.isSameDay) {
            Date.prototype.isSameDay = function(date) {
                return isSameDay(date, this);
            };
        }


        /**
         * Judge the date is in same week as another date
         * @param  {Date}  date
         * @return {Boolean}
         */
        if(!Date.prototype.isSameWeek) {
            Date.prototype.isSameWeek = function(date) {
                return isSameWeek(date, this);
            };
        }


        /**
         * Judge the date is in same year as another date
         * @param  {Date}  date
         * @return {Boolean}
         */
        if(!Date.prototype.isSameYear) {
            Date.prototype.isSameYear = function(date) {
                return isSameYear(this, date);
            };
        }

        /**
         * Create an date instance with string, timestamp or date instance
         * @param  {Date|String|Number}  date
         * @return {Date}
         */
        if (!Date.create) {
            Date.create = function(date) {
                return createDate(date);
            };
        }

        if (!Date.timestamp) {
            Date.timestamp = function(date) {
                return getTimestamp(date);
            };
        }
    }
}(window));
