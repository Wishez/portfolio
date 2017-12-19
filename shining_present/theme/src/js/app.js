// import {TimelieMax} from 'gsap';
import $ from 'jquery';
import lozad from 'lozad';

(function() {
  const _screwed = (selector, callback, event='click') => {
    $(document).on(event, selector, callback);
  };
  lozad('.lozad', {
    load: function(el) {
      el.src = el.dataset.src;
      el.onload = function() {
        el.classList.add('in');
      };
    }
  }).observe();
  // lozad('' ,function() {});

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

