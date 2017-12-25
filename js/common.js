$(function(){
	$("#navright").height($(window).height());
	$("#navright").next().height($(window).height());
	$(window).resize(function() {
		$("#navright").height($(window).height());
		$("#navright").next().height($(window).height());
	})
	$(".lan .close").click(function() {
		$(this).parent().animate({
			right: -360
		}, 500)
	})

	$("#navright .close").click(function() {
		$(this).parent().hide()
	})
	$("#navright ul li").each(function(index) {
		if(index == 0 || index == 5) {
			$(this).hover(function() {
				$(this).find("div").show()
			}, function() {
				$(this).find("div").hide()
			})
		}
		if(index == 1) {
			$(this).click(function() {
				$(this).parent().parent().next().show().animate({
					right: 40
				})
			})
		}
		if(index != 0 && index != 1 && index != 5) {
			$(this).hover(function() {
				$(this).find("div").show().animate({
					left: -92,
					opacity: 1
				}, 300);
			}, function() {
				$(this).find("div").animate({
					left: -120,
					opacity: 0
				}, 300).hide()
			})
		}
		if(index == 7) {
			$(this).click(function() {
				$(window).scrollTop(0)
			})
		}
	})
})
