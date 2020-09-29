$('.reload').click(function(e) {
  $(this).parents('.col').find('iframe').get(0).contentWindow.location.reload();
  e.preventDefault();
  return false;
})