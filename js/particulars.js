$(function() {
	var d = location.search.substring(2)
	$.get("json/data.json", function(data) {
		var html = "";
		html += '<figcaption><p><span class="shou">首页</span>><span class="xiang">详情页</span>><span class="title">' + data[d].deal_tit + '</span></p></figcaption><div><h4 class="title">' + data[d].deal_tit + '</h4><div class="zuob"><div id="zhong"><img src="' + data[d].deal_img + '" /><div id="fdj"></div></div><div id="da"><img src="' + data[d].deal_img + '" /></div></div><div class="youb"><h2><i>￥</i><span>' + data[d].deal_group.price_home + '</span>聚美价</h2><div class="kou"><span>口碑</span><ul><li></li><li></li><li></li><li></li><li></li></ul><p><span>4.7</span>分 (共<span>19</span>篇口碑<span>13678</span>篇短评)</p></div><div class="buy"><p><i>数量</i><span class="shao">-</span><input type="text" value="1" id="goub"/><span class="duo">+</span></p><em id="mai" data-id="'+d+'"></em></div><div class="xiao"><i></i>月销<span>' + data[d].deal_group.price_ref + '</span></div><div class="fuwu"><p>服务</p><ul><li><a href="">正品保证</a></li><li><a href="">质量保险</a></li><li><a href="">本商品支持30天拆封无条件退货</a></li><li><a href="">官方授权</a></li><li><a href="">闪电发货</a></li><li><a href="">本商品满299天或2件包邮</a></li></ul><span><i>聚美自营</i><b>本商品由 聚美优品 拥有和销售</b></span></div></div></div>';
		$("#fang").html(html)
var zhong = document.getElementById("zhong");
	var fdj = zhong.children[1];
	var da = document.getElementById("da").children[0];
	$("#zhong").mousemove(function(e) {
		$("#fdj").show();
		$("#da").show();
		var evt = e || event;
		var pix = evt.pageX - zhong.offsetLeft - fdj.offsetWidth / 2;
		var piy = evt.pageY - zhong.offsetTop - fdj.offsetHeight / 2;
		if(pix <= 0) {
			pix = 0
		}
		if(piy <= 0) {
			piy = 0
		}
		if(pix >= zhong.offsetWidth - fdj.offsetWidth - 2) {
			pix = zhong.offsetWidth - fdj.offsetWidth - 2
		}
		if(piy >= zhong.offsetHeight - fdj.offsetHeight - 2) {
			piy = zhong.offsetHeight - fdj.offsetHeight - 2
		}
		$("#fdj").css({
			"left": pix,
			"top": piy
		})
		$("#da img").css({
			"left": -fdj.offsetLeft / zhong.offsetWidth * da.offsetWidth,
			"top": -fdj.offsetTop / zhong.offsetHeight * da.offsetHeight
		})
	})
	$("#zhong").mouseout(function() {
		$("#fdj").hide();
		$("#da").hide()
	})
	})
	$("section").on("click",".shou",function(){
		window.location.href="index.html"
	})
	$("section").on("click",".xiang",function(){
		window.location.href="list.html"
	})
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
	
	$("section").on("click", ".buy span", function() {
		var val = parseInt($(this).parent().find("#goub").val());
		if($(this).hasClass("shao")) {
			val--;
			if(val <= 1) {
				val = 1;
			}
		} else {
			val++;
		}
		$(this).parent().find("#goub").val(val)
	})
	if($.cookie("cart")) {
		var cookieObj = JSON.parse($.cookie("cart"));
	} else {
		var cookieObj = {};
	}
	$("section").on("click", "#mai", function() {
		var id = $(this).attr("data-id");
		if(!cookieObj[id]) {
			cookieObj[id] = 1;
		} else {
			cookieObj[id]++;
		}
		var strCookie = JSON.stringify(cookieObj);
		$.cookie("cart", strCookie, {
			expires: 7,
			path: "/"
		});
	})
})