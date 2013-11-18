$(function ()
{
  var pathname = window.location.pathname;
  var filename = pathname.substring(pathname.lastIndexOf('/')+1);
  var name = filename.replace('.html','');
  console.log(filename);

  var navLi = $("#navbar li>a[href='"+filename+"']").closest('li');
  navLi.addClass('active');

  $("#navbarCurrent").text(name);

  var next = navLi.next('li');
  if(next.length>0)
  {
    $("#navbarNext").show().find('a').attr('href', next.find('a').attr('href')).html('NEXT: '+next.find('a').text()+'&nbsp;&nbsp;<i class="icon-angle-right icon-large"></i>');
  }
});