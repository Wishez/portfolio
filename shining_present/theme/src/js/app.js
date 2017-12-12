// import {TimelieMax} from 'gsap';
import $ from 'jquery';

(function() {
  const _screwed = (selector, callback, event='click') => {
    $(document).on(event, selector, callback);
  };

  $(function() {
    // let tl = new TimelieMax();

    const $centeredMenuButton = $('#centeredMenuButton');
    let lastShadow  = '';

    _screwed('.navListItem', function() {
      const $this = $(this);
      const shadowPosition = `shadow_position-${$this.data('position')}`;

      $centeredMenuButton.addClass(shadowPosition);

      lastShadow = shadowPosition;
    }, 'mouseover');

    _screwed('.navListItem', function() {
      $centeredMenuButton.removeClass(lastShadow);
    }, 'mouseout');

  }());	

}());

