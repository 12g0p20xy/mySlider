$(function(){

	var $slider = $('.slider ul'),
		$item = $slider.find('li'),
		itemWidth = $item.width(),
		len = $item.length;
	
	// 设置图片位置和大小
	$slider.width(itemWidth*len);
	$slider.css({'left': -itemWidth*parseInt(len/2)});
	$item.find('img').css({
		width: itemWidth,
		height: 500
	});

	// 动画部分
	$slider.on('click', 'li', function() {
		var activeItem = $('.active').index();
		if ($(this).index() > activeItem) {
			$slider.stop(true, true).animate({
				left:'-='+itemWidth}, 300,
				function(){
					$slider.css({'margin-left': '+='+itemWidth})
					.children('li').last().after(
						$slider.children('li').first()
					);
				});
		}
		else if ($(this).index() < activeItem) {
			$slider.stop(true, true).animate({
				left:'+='+itemWidth}, 300,
				function(){
					$slider.css({'margin-left': '-='+itemWidth})
					.children('li').first().after(
						$slider.children('li').last()
					);
				});
		};
		$(this).addClass('active').siblings().removeClass('active');
	});
})