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

var $btnUp = $('#btnUp');

$btnUp.hide();

$(window).scroll(function() {
  
  if ($(this).scrollTop() > 150) {
    $btnUp.fadeIn(700);
  } else {
    $btnUp.fadeOut(1000);
  }
});// end scroll

$('body').scrollspy({target: ".navbar-fixed-top", offset: 50}); // end scrollspy

$('#navbarToggle').blur(function(e) {
  var screenWidth = window.innerWidth; 
  if (screenWidth < 768)
    $("#collapsable").collapse('hide');
  
});