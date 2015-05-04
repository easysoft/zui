$(function ()
{
    $.get('partial/navbar.html', function(data)
    {
        $('body').prepend(data);
    });
});
