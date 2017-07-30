$('#works').slick({
	centerMode: true,
	centerPadding: '60px',
	slideToShow: 3,
  autoplay: true,
  autoplaySpeed: 2000,
	responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        centerPadding: '20px',
        slidesToShow: 1
      }
    }
  ]
})