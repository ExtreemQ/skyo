




$(window).scroll(function(){
	var scrolling = $(this).scrollTop();
	if(scrolling > 10){
	  $(".menu_bg").addClass('bg');
	}else{
	  $(".menu_bg").removeClass('bg');
	}
	if(scrolling > 10){
	  $(".back_to_top i").fadeIn(500)
	}else{
	  $(".back_to_top i").fadeOut(500)
	}
  });





$(".header-search").on('click', function () {
	$(".search").slideToggle();
	return false;
});

$(".search-close").on('click',function () {
	$(".search").slideUp(500);
});




var mixer = mixitup('.portfolio_main_items');