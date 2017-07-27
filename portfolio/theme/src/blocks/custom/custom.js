obj.showLoading = function(selector, action) {
  var preloader = '<img class="center-block" src="/media/portfolio/img/ajax-loader.gif" alt="Prealoader." style="padding: 5% 0;"/>';
  if (action === 'html')
    $(selector).html(preloader);
  else
    $(selector).append(preloader);
}