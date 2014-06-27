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
         },

         getPropertyCount: function(obj)
         {
            if(typeof(obj) != 'object' || obj == null) return 0;
            return Object.getOwnPropertyNames(obj).length;
         }
     });
}(jQuery,window,document,Math);
