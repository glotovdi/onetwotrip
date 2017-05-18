$(function() {
 $("ul.tabs").tabs("div.panes > div");
  });



jQuery(document).ready(function($){
$('.menu').hide();
$('.menu__img').click(function(){$(this).next().toggle()});
});


$(document).ready(function(){
	$('.menu__img').click(function () {
		$(".header__menu ").toggleClass('header__menu-active');
		});
	});