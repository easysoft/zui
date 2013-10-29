var Zepto = (function(){
    var $, emptyArray = [], slice = emptyArray.slice, filter = emptyArray.filter,
    fragmentRE       = /^\s*<(\w+|!)[^>]*>/,
    tagExpanderRE    = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
    methodAttributes = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'], // special attributes that should be get/set via method calls
    table            = document.createElement('table'),
    tableRow         = document.createElement('tr'),
    containers       = 
    { 
        'tr'   : document.createElement('tbody'), 
        'tbody': table,
        'thead': table, 
        'tfoot': table,
        'td'   : tableRow,
        'th'   : tableRow, 
        '*'    : document.createElement('div') 
    },

    readyRE         = /complete|loaded|interactive/,
    classSelectorRE = /^\.([\w-]+)$/,
    idSelectorRE    = /^#([\w-]*)$/,
    tagSelectorRE   = /^[\w-]+$/,
    class2type      = {},
    toString        = class2type.toString,
    zepto           = {},
    tempParent      = document.createElement('div')

    zepto.matches = function(element, selector) 
    {
      if (!element || element.nodeType !== 1) return false
      var matchesSelector = element.webkitMatchesSelector || element.mozMatchesSelector || element.oMatchesSelector || element.matchesSelector
      if (matchesSelector) return matchesSelector.call(element, selector)

      // fall back to performing a selector:
      var match, parent = element.parentNode, temp = !parent
      if (temp) (parent = tempParent).appendChild(element)
      match = ~zepto.qsa(parent, selector).indexOf(element)
      temp && tempParent.removeChild(element)
      return match
    }

    function type(obj)          { return obj == null ? String(obj) : class2type[toString.call(obj)] || "object" }
    function isFunction(value)  { return type(value) == "function" }
    function isWindow(obj)      { return obj != null && obj == obj.window }
    function isDocument(obj)    { return obj != null && obj.nodeType == obj.DOCUMENT_NODE }
    function isObject(obj)      { return type(obj) == "object" }
    //$.isPlainObject({}) => true $.isPlainObject(new Object)  => true
    function isPlainObject(obj) { return isObject(obj) && !isWindow(obj) && obj.__proto__ == Object.prototype }
    function isArray(value)     { return value instanceof Array }
    function likeArray(obj)     { return typeof obj.length == 'number' }
    function compact(array)     { return filter.call(array, function(item){ return item != null }) } // ['a',null,'bb'] => ['a','bb']

    // `$.zepto.fragment` takes a html string and an optional tag name
    // to generate DOM nodes nodes from the given html string.
    // The generated DOM nodes are returned as an array.
    // This function can be overriden in plugins for example to make
    // it compatible with browsers that don't support the DOM fully.
    zepto.fragment = function(html, name, properties) 
    {
        if (html.replace)          html = html.replace(tagExpanderRE, "<$1></$2>") // <a/> => <a></a>
        if (name === undefined)    name = fragmentRE.test(html) && RegExp.$1
        if (!(name in containers)) name = '*'

        var nodes, dom, container = containers[name]
        container.innerHTML = '' + html
        dom = $.each(slice.call(container.childNodes), function(){ container.removeChild(this) })
        if (isPlainObject(properties)) 
        {
            nodes = $(dom)
            $.each(properties, function(key, value) 
            {
                if (methodAttributes.indexOf(key) > -1) nodes[key](value)
                else nodes.attr(key, value)
            })
        }
        return dom
    }

    // Explorer. This method can be overriden in plugins.
    zepto.Z = function(dom, selector) 
    {
      dom = dom || []
      dom.__proto__ = $.fn
      dom.selector = selector || ''
      return dom
    }

    // `$.zepto.isZ` should return `true` if the given object is a Zepto
    // collection. This method can be overriden in plugins.
    zepto.isZ = function(object) { return object instanceof zepto.Z }

    zepto.init = function(selector, context) 
    {
        // If nothing given, return an empty Zepto collection
        if (!selector) return zepto.Z()

        // If a function is given, call it when the DOM is ready
        else if (isFunction(selector)) return $(document).ready(selector)

        // If a Zepto collection is given, juts return it
        else if (zepto.isZ(selector)) return selector 
        else 
        {
            var dom

            // normalize array if an array of nodes is given
            if (isArray(selector))  dom = compact(selector)

            // Wrap DOM nodes. If a plain object is given, duplicate it.
            else if (isObject(selector)) dom = [isPlainObject(selector) ? $.extend({}, selector) : selector], selector = null

            // If it's a html fragment(eg:"<div id='haha'><p></p></div>"), create nodes from it
            // selector: <div id='haha'><p></p></div>
            // RegExp:   div
            // dom:      [object HTMLDivElement]
            else if (fragmentRE.test(selector)) dom = zepto.fragment(selector.trim(), RegExp.$1, context), selector = null

            // If there's a context, create a collection on that context first, and select nodes from there
            else if (context !== undefined) return $(context).find(selector)

            // And last but no least, if it's a CSS selector, use it to select nodes.
            else dom = zepto.qsa(document, selector)

           // create a new Zepto collection from the nodes found
            return zepto.Z(dom, selector)
        }
    }

    $ = function(selector, context){ return zepto.init(selector, context) }

    // Copy all but undefined properties from one or more
    // objects to the `target` object.
    $.extend = function(target)
    {
      var deep, args = slice.call(arguments, 1);
      if (typeof target == 'boolean') { deep = target; target = args.shift() }
      args.forEach(function(arg){ extend(target, arg, deep) });
      return target;
    }

    // `$.zepto.qsa` is Zepto's CSS selector implementation which
    // uses `document.querySelectorAll` and optimizes for some special cases, like `#id`.
    // This method can be overriden in plugins.
    zepto.qsa = function(element, selector)
    {
        var found
        return (isDocument(element) && idSelectorRE.test(selector)) ?
        ( (found = element.getElementById(RegExp.$1)) ? [found] : [] ) :
        (element.nodeType !== 1 && element.nodeType !== 9) ? [] :
        slice.call(
          classSelectorRE.test(selector) ? element.getElementsByClassName(RegExp.$1) :
          tagSelectorRE.test(selector) ? element.getElementsByTagName(selector) :
          element.querySelectorAll(selector)
        )
    }

    $.each = function(elements, callback)
    {
        var i, key
        if (likeArray(elements)) 
        {
          for (i = 0; i < elements.length; i++) if (callback.call(elements[i], i, elements[i]) === false) return elements
        } 
        else
        {
          for (key in elements) if (callback.call(elements[key], key, elements[key]) === false) return elements
        }

        return elements
    }

    // Populate the class2type map
    $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) { class2type[ "[object " + name + "]" ] = name.toLowerCase() })

    $.fn = 
    {
        forEach: emptyArray.forEach,
        indexOf: emptyArray.indexOf,
        each: function(callback)
        {
            emptyArray.every.call(this, function(el, idx){ return callback.call(el, idx, el) !== false })
            return this
        },
        filter: function(selector)
        {
            if (isFunction(selector)) return this.not(this.not(selector))
            return $(filter.call(this, function(element){ return zepto.matches(element, selector) }))
        },
        not: function(selector)
        {
            var nodes=[]
            if (isFunction(selector) && selector.call !== undefined)
            {
                this.each(function(idx){ if (!selector.call(this,idx)) nodes.push(this) })
            }
            else 
            {
                var excludes = typeof selector == 'string' ? this.filter(selector) : (likeArray(selector) && isFunction(selector.item)) ? slice.call(selector) : $(selector)
                this.forEach(function(el){ if (excludes.indexOf(el) < 0) nodes.push(el)})
            }
            return $(nodes)
        },
        ready: function(callback)
        {
            if (readyRE.test(document.readyState)) callback($)
            else document.addEventListener('DOMContentLoaded', function(){ callback($) }, false)
            return this
        },
        find: function(selector)
        {
            var result, $this = this
            if (typeof selector == 'object') result = $(selector).filter(function(){ var node = this; return emptyArray.some.call($this, function(parent){ return $.contains(parent, node); }) })
            else if (this.length == 1)       result = $(zepto.qsa(this[0], selector))
            else                             result = this.map(function(){ return zepto.qsa(this, selector) })
            return result
        }
    }
    zepto.Z.prototype = $.fn
    $.zepto = zepto
    return $
})()
window.Zepto = Zepto
'$' in window || (window.$ = Zepto)
