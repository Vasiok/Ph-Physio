function cycleImages()
{
	var $active = $('#cycler .active');
	var $next = ($active.next().length > 0) ? $active.next() : $('#cycler img:first');
	$next.css('z-index', 2); //Move the next image up the pile
	$active.fadeOut(1500, function () {
		$active.css('z-index', 1).show().removeClass('active');//reset the z-index and unhide the image
		$next.css('z-index', 4).addClass('active');
	});
}

$(document).ready(function () {
	setInterval('cycleImages()', 5000);
})
