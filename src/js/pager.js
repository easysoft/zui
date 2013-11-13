+function ($) { "user strict";

  var Pager = function (element, options)
  {
    this.init('pager', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')
  if (!$.fn.popover) throw new Error('Popover requires popover.js')

  Pager.prototype.init = function (type, element, options)
  {
      this.type     = type
      this.$element = $(element)
      this.options  = options

      this.computeIndex()
      this.$element
        .popover({container: 'body',trigger: 'manual',html:true,
        template: '<div class="popover pager-popover"><div class="arrow"></div><div class="popover-content"></div></div>'})
        .on('click.'+this.type, false,$.proxy(this.showPopover,this))
  }


  Pager.prototype.hidePopover = function()
  {
      var self = this.$element
      if(self.attr('data-safe-close') == 'true')
      {
          self.popover('hide').attr('data-safe-close',false)
          $(document).unbind('click',this.hidePopover)
      }
      else
      {
          self.attr('data-safe-close',true)
      }

  }

  Pager.prototype.showPopover = function()
  {
      var self = this.$element

      if(!(self.attr('data-content')))
      {
        self.attr('data-content',"<ul class='pager'>"+this.setContent(this.getUrl())+"</ul>")
      }
      self.popover('show')

      $(document).bind('click',$.proxy(this.hidePopover,this))

  }

  Pager.prototype.setContent = function (url)
  {
      var html = ''
      if(this.isRangeIndex)
      {
          for (var i = this.indexStart; i <= this.indexEnd; i++) 
          {
            html += "<li><a href='"+url.replace('%',i)+"'>"+i+"</a></li>"
          }
      }
      else
      {
          for (var i = this.indexs.length - 1; i >= 0; i--)
          {
            var index = this.indexs[i];
            html += "<li><a href='"+url.replace('%',index)+"'>"+index+"</a></li>"
          }
      }
      return html;
  }

  Pager.prototype.getUrl = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-url') || $e.attr('href')
      || (typeof o.url == 'function' ?
            o.url.call($e[0]) :
            o.url) || "?page=%"
  }

  Pager.prototype.computeIndex = function ()
  {
    var $e = this.$element
    var eLi = $e.closest('li')
    var o  = this.options

    var params = $e.attr('data-index')
      || (typeof o.index == 'function' ?
            o.index.call($e[0]) :
            o.index)
      || ((eLi.prev('li').find('a').text() - 0 + 1) + '-' + (eLi.next('li').find('a').text() - 1))

    if(params.indexOf('-')>0)
    {
      this.isRangeIndex = true;
      var ranges = params.split('-')
      this.indexStart = ranges[0] - 0;
      this.indexEnd = ranges[1] - 0;
      this.indexCount = this.indexEnd - this.indexStart
    }
    else
    {
      this.indexs = params.split(',')
      this.indexCount = this.indexs.length
    }
  }

  // PAGER PLUGIN DEFINITION
  // =========================

  var old = $.fn.pager

  $.fn.pager = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.pager')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.pager', (data = new Pager(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.pager.Constructor = Pager


  // pager NO CONFLICT
  // ===================

  $.fn.pager.noConflict = function () {
    $.fn.pager = old
    return this
  }

}(window.jQuery);
