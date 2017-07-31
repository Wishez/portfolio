obj.showLoading = function(selector, action) {
  var preloader = '<img class="center-block" id="preloader" src="/static/portfolio/img/ajax-loader.gif" alt="Prealoader." style="padding: 5% 0;"/>';
  switch (action) {
  	case 'html':
    	$(selector).html(preloader);
    	break;
    case 'prepend':
    	$(selector).prepend(preloader);
    	break;
    default:
    	$(selector).append(preloader);	
    	break;
  }
}