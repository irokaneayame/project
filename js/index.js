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
			$.get("json/index.json", function(data) {
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
		$.get("json/index.json", function(data) {
			var html = "";
			$.each(data, function(key, value) {
				html += '<li><a href=""><img src="' + value.src + '"></a><div></div></li>'
			});
			$("#navlist").html(html);
		})
	}
	$.get("json/index1.json", function(data) {
		var html = "";
		$.each(data, function(key, value) {
			html += '<figure><div class="bg" style="background: url(' + value.imgsrc + ')no-repeat -210px/cover;"><div class="dan"><p><span>海外直采</span><span>海外价格</span><span>闪电发货</span></p></div></div><div class="tan"><h6>距特卖结束<i>00:17:02:42</i></h6><p class="lj"><span>' + value.authority + '</span>' + value.title + '</p><div class="buy"><p class="new">￥<span>' + value.price + '</span></p><p class="old">' + value.discount + '</p><input type="button" value="加入购物车" class="btn" data-id="' + value.id + '"></div><div class="per"><span>' + value.people + '</span><i>人已经购买</i></div></div></figure>'
		});
		html = '<img src="images/old_top_tit.jpg">' + html
		$('#center').html(html)
	})
	$.get("json/data.json", function(data) {
		var html = "";
		$.each(data, function(key, value) {
			html += '<li><a href=""><div style="background-image: url(' + value.deal_img + ')"></div><p>' + value.deal_tit + '</p><p><span>￥' + value.deal_group.price_home + '</span><span>￥' + value.deal_group.price_ref + '</span></p><div><input type="button" class="cartbuy" value="加入购物车"><div>海外直采 海外价格 闪电发货</div></div></a></li>'
		});
		$("#new ul").html(html)
	})
	$.get("json/index2.json", function(data) {
		var html = "";
		var str = "";
		str = '<a href=""><img src="' + data.left + '"><div></div></a>';
		$.each(data.right, function(key, value) {
			html += '<li><a href=""><img src="' + value.img + '"><div><p>' + value.title1 + '</p><p>' + value.title2 + '</p><p>满<span>' + value.price.price1 + '</span>减<span>' + value.price.price2 + '</span>不封顶</p><i>01天17时03分42秒</i></div></a></li>'
		})
		$('#bottom .left').html(str);
		$('#bottom .right ul').html(html);
	})
	$("#navleft dl").on("click","dd",function(){
		$(this).addClass("select").siblings().removeClass("select")
	})
})