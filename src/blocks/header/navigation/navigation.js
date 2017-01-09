$('.anchor').on('click', function(evt) {
    var url = $(this).attr('href');
    window.open(url);
    evt.preventDefault();
  });// End click
  $('body').on('click', 'a.item__text, #btnUp', function(event) {
      var $this = $(this);
      $('html, body').stop().animate({scrollTop: $($this.attr('href')).offset().top},1500,'easeInOutExpo');
      event.preventDefault();
  });// end click
  $('body').scrollspy('.navbar-fixed-top'); // end scrollspy