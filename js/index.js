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
	$("#qiang span").click(function() {
		$(window).scrollTop($(this).parent().parent().parent().parent().offset().top);
		$(this).addClass("select").siblings().removeClass("select");
		if($(this).index() == 0) {
			foo()
		} else {
			$.get("../json/index.json", function(data) {
				var html = "";
				$.each(data, function(key, value) {
					html += '<li><a href=""><img src="' + value.src1 + '"></a><div></div></li>'
				});
				$("#navlist").html(html);
			})
		}
	})
	foo();
	function foo() {
		$.get("../json/index.json", function(data) {
			var html = "";
			$.each(data, function(key, value) {
				html += '<li><a href=""><img src="' + value.src + '"></a><div></div></li>'
			});
			$("#navlist").html(html);
		})
	}
	/*$('.bg').hover(function(){
		$(this).parent().find(".dan").show()
	},function(){
		$(this).parent().find(".dan").hide()
	})*/
})