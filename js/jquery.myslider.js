// 2015/12/31 v.1.0 by monad

(function(){

	$.fn.myslider = function(options){

		// 设置默认参数
		var defaults = {
				sliderHeight: 500,
				sliderSpeed: 300
			};
		var options = $.extend(defaults, options);

		// 功能区块
		return this.each(function(){

			var $slider = $(this).children('ul'),
				$item = $slider.find('li'),
				itemWidth = $item.width(),
				len = $item.length;
			
			// 设置图片位置和大小
			$('body').css('overflow-x', 'hidden');
			$slider.width(itemWidth*len);
			$slider.css({'left': -itemWidth*parseInt(len/2)});
			$item.eq(parseInt(len/2)).addClass('active');
			$item.find('img').css({
				width: itemWidth,
				height: options.sliderHeight
			});

			// 动画部分
			$slider.on('click', 'li', function() {
				var activeItem = $('.active').index();
				if ($(this).index() > activeItem) {
					$slider.stop(true, true).animate({
						left:'-='+itemWidth}, options.sliderSpeed,
						function(){
							$slider.css({'margin-left': '+='+itemWidth})
							.children('li').last().after(
								$slider.children('li').first()
							);
						});
				}
				else if ($(this).index() < activeItem) {
					$slider.stop(true, true).animate({
						left:'+='+itemWidth}, options.sliderSpeed,
						function(){
							$slider.css({'margin-left': '-='+itemWidth})
							.children('li').first().after(
								$slider.children('li').last()
							);
						});
				};
				$(this).addClass('active').siblings().removeClass('active');
			});

		});
		
	};

})(jQuery);