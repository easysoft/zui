(function($) 
{
    jQuery.fn.lightbox = function()
    {
        $(document).on('click', '[data-toggle="lightbox"]', function(){

            // need modal
            if (!$.fn.modal) throw new Error('modal requires for lightbox');

            var $e = $(this);

            // get image
            var imgUrl = $e.attr('data-image') || $e.attr('src') || $e.attr('href')
                || $e.find('img').attr('src');
            if(!imgUrl) return false;

            // get caption
            var caption = $e.attr('data-caption') || $e.find('img').attr('title') || $e.attr('title');

            // get lightbox modal
            if($('#lightboxModal').size() == 0)
                $('<div id="lightboxModal" class="modal fade modal-lightbox"><img class="modal-dialog" id="lightboxImg" src="#" alt="" data-dismiss="modal" /><div class="caption"></div></div>').appendTo('body');
            var img = $('#lightboxImg');
            var lightboxModal = $('#lightboxModal');

            // update modal content
            img.attr('alt', caption).attr('src', imgUrl);
            if(caption && caption.length > 0) lightboxModal.addClass('with-caption').find('.caption').text(caption);
            else lightboxModal.find('.caption').remove();

            // show modal
            lightboxModal.modal();

            return false;
        });
    };
})(jQuery);
