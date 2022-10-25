import $ from 'jquery';

export const CORKCREW  = (function() {
  const that = {};

  that.screwed = (selector, callback, event='click') => $(document).on(event, selector, callback);

  return that;
}());
