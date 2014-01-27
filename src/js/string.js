/**
 * Format string
 *  
 * @param  object|array args
 * @return string
 */
String.prototype.format = function(args)
{
    var result = this;
    if (arguments.length > 0)
    {
        var reg;
        if (arguments.length == 1 && typeof(args) == "object")
        {
            for (var key in args)
            {
                if (args[key] != undefined)
                {
                    reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
        }
        else
        {
            for (var i = 0; i < arguments.length; i++)
            {
                if (arguments[i] != undefined)
                {
                    reg = new RegExp("({[" + i + "]})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
    }
    return result;
};
