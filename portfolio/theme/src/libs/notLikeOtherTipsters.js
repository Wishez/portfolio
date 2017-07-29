(function(factory, jQuery) {
	if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
})(function($) {
	$.notLikeOtherTipsters =  function(className) {
		var $tips = $(className);
		$tips.css('position', 'relative');
		$(window).on('resize', function() {
			console.log($.contains($(className), $('.supertipInfo')), _checkMobileWidth());
			if (!$('.supertipInfo').length && _checkMobileWidth())
				$tips.append('<i class="fa fa-info-circle supertipInfo" aria-hidden="true"></i>');
			else if (!_checkMobileWidth())
				$('.supertipInfo').remove();

		});

		if (_checkMobileWidth()) 
			$tips.append('<i class="fa fa-info-circle supertipInfo" aria-hidden="true"></i>');
	
		$(document)
			.on('mouseover', className,  function() {
				_showTip(this);
			})
			.on('mouseout', function() {
				_hideTip('.supertip');	
			});

		function _checkMobileWidth() {
			return window.innerWidth < 800;
		}
		function _showTip(that) {
			var $element = $(that);
			var textTip = $element.data('supertip');
			var tip = $('<span class="supertip">' + textTip + '</span>');
			$element.append(tip);
			var $tip = $element.find('.supertip');
			$tip.animate({
				'opacity': 1
			}, 100);

			var tipHeight = $tip.innerHeight();				
			$tip.css('top', -tipHeight);
		}

		function _hideTip(classTip) {
			var $tip = $(classTip);
			$tip.animate({
				'opacity': 0
			}, 1000, function() {
				$tip.remove()
			});
		}
	};
}, jQuery);
