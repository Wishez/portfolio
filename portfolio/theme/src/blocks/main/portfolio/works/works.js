$('#works').slick({
	centerMode: true,
	centerPadding: '60px',
	slideToShow: 3,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
	responsive: [
    {
      breakpoint: 778,
      settings: {
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        centerPadding: '40px',
        centerMode: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        centerPadding: '40px',
        slidesToShow: 1,
        centerMode: false
      }
    }
  ]
});

$('.elemWork__img').on('click', function(e) {
  e.preventDefault();

  var popupId = $(this).data('id');
  var $popupContainer = $(popupId);
  var $slider = $popupContainer.find('.popupSlider');

  $popupContainer.css({
      zIndex: 10,
      opacity: 1
  });
  $slider.css({
    opacity: 1
  });
});

$('.popupSlider').slick({
    arrows: true,
    autoplay: true, 
    slideToShow: 1,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 778,
        settings: {
          arrows: false
        }
      }
    ]
});

$(document).on('click', '.pupup__close', function() {
  var $this = $($(this).data('id'));
  $this.find('.popupSlider').css({
      opacity: 0
  });
  $this.css({
      opacity: 0,
      zIndex: -10 
  });
});
var $popupLinks = $('.sliderContainer__link');
$popupLinks.magnificPopup({
  delegate: 'a',
  type: 'image'
  // other options
});

$popupLinks.on('click', function(e) {
   e.preventDefault();
 })