/* DataTable */
+function($, window, document, Math)
{
    "use strict";

    var DataTable = function(element, options)
    {
        this.$         = $(element);
        this.options   = this.getOptions(options);

        this.init();
    };

    DataTable.DEFAULTS = {};

    DataTable.prototype.getOptions = function (options)
    {
        options = $.extend({}, DataTable.DEFAULTS, this.$.data(), options);
        return options;
    };

    DataTable.prototype.init = function()
    {
        this.handleRowClickable();
    }

    DataTable.prototype.handleRowClickable = function()
    {
        var $dataTable = this.$;

        this.$.find('tr[data-url]:not(".app-btn") td:not(".actions")').click(function(event)
        {
            if($(event.target).is('a, .caret')) return;

            var url = $(this).closest('tr').data('url');
            if(url)
            {
                window.location = url;
            }
        });
    }

    $.fn.dataTable = function(option)
    {
        return this.each(function()
        {
            var $this   = $(this);
            var data    = $this.data('zui.dataTable');
            var options = typeof option == 'object' && option;

            if (!data) $this.data('zui.dataTable', (data = new DataTable(this, options)));

            if (typeof option == 'string') data[option]();
        })
    };

    $.fn.dataTable.Constructor = DataTable;

    $(function()
    {
        $('table.table-data').dataTable();
    });
}(jQuery,window,document,Math);
