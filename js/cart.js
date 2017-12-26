$(function() {
	console.log($.cookie("cart"))
	if($.cookie("cart")) {
		var obj = JSON.parse($.cookie("cart"))
	} else {
		var obj = {}
	}

	$.get("json/data.json", function(data) {
		var html = "";
		var mon = 0;
		$.each(obj, function(key, value) {
			html += '<li><p><input type="checkbox"><img src="' + data[key].deal_img + '"/><a href="">' + data[key].deal_tit + '</a></p><p><span>' + data[key].deal_group.price_home + '</span><span>' + data[key].deal_group.price_ref + '</span></p><p><span class="jian">-</span><input type="text" class="txt" value="' + value + '"><span class="jia">+</span></p><p><span>' + data[key].deal_group.price_home + '</span><span>省' + (data[key].deal_group.price_ref - data[key].deal_group.price_home) + '元</span></p><p><i data-id="' + key + '"></i></p></li>';
			mon += parseInt(data[key].deal_group.price_home) * value;
		})
		$("#buylist").html(html);
		$(".money").html("￥" + mon)
	})
})