// Each link is opened in a new window.
$('.anchor').on('click', function(evt) {
  var url = $(this).attr('href');
  window.open(url);
  evt.preventDefault();
});// end click
// Transition to a section.
$('body').on('click', 'a.item__text, #btnUp', function(event) {
  var $this = $(this);
  $('html, body').stop().animate({scrollTop: $($this.attr('href')).offset().top},1500,'easeInOutExpo');
  event.preventDefault();
});// end click

$('body').scrollspy({target: ".navbar-fixed-top", offset: 50}); // end scrollspy