$('#reload1').click(function(e) {
  $('#ex1').get(0).contentWindow.location.reload();
  e.preventDefault();
  return false;
})