$(function() {
	$('.xiala').hover(function() {
		$(this).find('ul').stop().slideDown()
	}, function() {
		$(this).find('ul').stop().slideUp()
	})
	$('.navList').hover(function() {
		$(this).find('.list').stop().slideDown();
	}, function() {
		$(this).find('.list').stop().slideUp();
	})
	$("#xuan li:not(:first-child)").click(function() {
		$(this).addClass("hover").siblings().removeClass("hover")
		if(("#xuan li").eq(2).has(".hover")) {
			$(this).find("i").css("background-image", "url(../images/p_s_hover.png)")
		} else {
			$(this).find("i").css("background-image", "url(images/price_sort_default_2)")
		}
	})
})