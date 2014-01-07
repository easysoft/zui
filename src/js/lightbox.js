(function($) 
{
    jQuery.fn.lightbox = function()
    {
        var lightboxId = 0;
        $("[data-toggle='lightbox']").each(function(){$(this).attr('data-id',lightboxId++)});

        $(this).click(function()
        {
            // need modal
            if (!$.fn.modal) throw new Error('modal requires for lightbox');

            var $e = $(this);

            // get image
            var imgUrl = $e.attr('data-image') || $e.attr('src') || $e.attr('href')
                || $e.find('img').attr('src');
            if(!imgUrl) return false;

            // get caption
            // var caption = $e.attr('data-caption') || $e.find('img').attr('title') || $e.attr('title');

            // get lightbox modal
            if($('#lightboxModal').size() == 0)
            {
                $('<div id="lightboxModal" class="modal fade modal-lightbox"><div class="modal-dialog"><button class="close" data-dismiss="modal" aria-hidden="true"><i class="icon-remove"></i></button><button class="controller prev"><i class="icon icon-chevron-left"></i></button><button class="controller next"><i class="icon icon-chevron-right"></i></button><img id="lightboxImg" src="#" alt="" data-dismiss="modal" /><div class="caption"></div></div></div>').appendTo('body');
                $('#lightboxModal .controller').click(function()
                {
                    var id = parseInt($('#lightboxModal').attr('data-id')) + ($(this).hasClass('prev') ? -1 : 1);
                    var e = $('[data-toggle="lightbox"][data-id="' + id + '"]');
                    if(e)
                    {
                        var url = e.attr('data-image') || e.attr('src') || e.attr('href') || e.find('img').attr('src');
                        if(url)
                        {
                            $('#lightboxImg').attr('src', url);
                            $('#lightboxModal').attr('data-id', id);

                            $('#lightboxModal .controller').hide();
                            if($('[data-toggle="lightbox"][data-id="' + (id - 1) + '"]').length > 0)
                                $('#lightboxModal .prev').show(); 
                            if($('[data-toggle="lightbox"][data-id="' + (id + 1) + '"]').length > 0)
                                $('#lightboxModal .next').show(); 

                            $('#lightboxModal .modal-dialog').width(e.attr('data-width') || 'auto').height(e.attr('data-height') || 'auto').css('margin-top', Math.max(0, ($(window).height() - e.attr('data-height'))/2));
                        }
                    }
                });
            }

            var id = parseInt($e.attr('data-id'));
            var img = $('#lightboxImg');
            var lightboxModal = $('#lightboxModal');

            // set current id
            lightboxModal.find('.controller').hide();
            lightboxModal.attr('data-id', id);
            if($('[data-toggle="lightbox"][data-id="' + (id - 1) + '"]').length > 0) lightboxModal.find('.prev').show();
            if($('[data-toggle="lightbox"][data-id="' + (id + 1) + '"]').length > 0) lightboxModal.find('.next').show();
            lightboxModal.find('.modal-dialog').width($e.attr('data-width') || 'auto').height($e.attr('data-height') || 'auto').css('margin-top', Math.max(0, ($(window).height() - $e.attr('data-height'))/2));

            // update modal content
            img.attr('src', imgUrl);
            // if(caption && caption.length > 0) lightboxModal.addClass('with-caption').find('.caption').text(caption);
            // else lightboxModal.find('.caption').remove();

            // show modal
            lightboxModal.modal();

            return false;
        });
    };
})(jQuery);
