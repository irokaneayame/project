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

	$.get("json/data.json", function(data) {
		var html = "";
		$.each(data, function(key, value) {
			html += '<li><div><a href="particulars.html?=' + key + '"><img src="' + value.deal_img + '" /></a><p><a href="particulars.html?=' + key + '">' + value.deal_tit + '</a></p><p><span>￥' + value.deal_group.price_home + '</span><span>￥' + value.deal_group.price_ref + '</span></p><b>月销' + value.deal_pid + '笔</b><em></em></div></li>';
		});
		$("#list").html(html);
	})
	$.get("json/data.json", function(data) {
		var str = "";
		$.each(data, function(key, value) {
			str += '<li><a href="particulars.html?=' + key + '"><img src="' + value.deal_img + '" /></a><a href="particulars.html?=' + key + '">' + value.deal_tit + '</a><p>￥' + value.deal_group.price_home + '</p><span>' + value.deal_group.price_ref + '篇评价</span></li>';
		})
		$("#lunb").html(str);
		$("#lunb").width($("#lunb").children("li").length * $("#lunb").children("li").outerWidth(true));
		var perWidth = $("#lunb").children("li").outerWidth(true) * 4;
		var len = Math.ceil($("#lunb").children("li").length / 4);
		$(".next").click(function() {
			lunbo()
		})
		$(".prev").click(function() {
			index = index - 2
			lunbo()
		})
		var index = 0;

		function lunbo() {
			index++;
			if(index == len) {
				index = len - 2
			}
			if(index == -1) {
				index = 1
			}
			$("#lunb").stop().animate({
				left: -perWidth * index
			}, 500)
		}
	});
})