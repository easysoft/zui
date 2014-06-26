/* $ComponentName$ */
+function($, window, document, Math)
{
    "use strict";

     $.extend(
     {
         uuid: function()
         {
             var d = (new Date).getTime();
             while(d < 10000000000000000)
             {
                d *= 10;
             }
             return  d + Math.floor(Math.random() * 9999);
         }
     });

}(jQuery,window,document,Math);
