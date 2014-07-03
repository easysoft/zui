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

     jQuery.fn.selectText = function()
     {
         var doc = document;
         var element = this[0];
         if (doc.body.createTextRange) {
             var range = document.body.createTextRange();
             range.moveToElementText(element);
             range.select();
         } else if (window.getSelection) {
             var selection = window.getSelection();        
             var range = document.createRange();
             range.selectNodeContents(element);
             selection.removeAllRanges();
             selection.addRange(range);
         }
    };
}(jQuery,window,document,Math);
