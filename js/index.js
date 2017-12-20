$(function() {
	$('.xiala').hover(function(){
		$(this).find('ul').stop().slideDown()
	},function(){
		$(this).find('ul').stop().slideUp()
	})
	$('.navList').hover(function() {
		$(this).find('.list').stop().slideDown()
	}, function() {
		$(this).find('.list').stop().slideUp()
	})
})