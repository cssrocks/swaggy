head.ready(function() {
	var viewport = $('.page')

	viewport.onepage_scroll({
		 sectionContainer: ".section",
		 updateURL: true,
		 loop: false
	});

	$(function(){
		var el = $(".menu li a")
		el.click(function (){
			var page_target = $(this).data("target");
			viewport.moveTo(page_target);
			return false;
		});
	});

	$('.js-movedown').on('click', function() {
		viewport.moveDown();
		return false;
	});

});