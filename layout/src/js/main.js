/**********

  THIRD PARTY

***********/
//= ../../bower_components/jquery/dist/jquery.min.js
//= ../../bower_components/jquery.easing/js/jquery.easing.min.js
//= ../../bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js
//= ../../bower_components/typed.js/dist/typed.min.js
//= ../../bower_components/jquery-mask-plugin/dist/jquery.mask.min.js
//= ../../bower_components/tooltipster/dist/js/tooltipster.bundle.min.js
//= ../../bower_components/js-cookie/src/js.cookie.js
/**********

  CUSTOM

***********/
(function( global ) {
  var obj = {};
  //= ../blocks/custom/custom.js
  
  global.$present = obj;
})( window );

$(document).on('ready', function() {
  //= ../blocks/custom/custom-controller.js
  //= ../blocks/header/header.js
  //= ../blocks-ru/main/main.js
});//end ready