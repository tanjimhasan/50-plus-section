// --------------------------------------

// Fashion Psd Jquery

// ======================================

jQuery(document).ready(function($){
	$('.product-list').masonry({

	});

	$('.homepage-slides').owlCarousel({
		items : 1,
		loop:true,
		nav:true,
		navText: ["<i class='fas fa-long-arrow-alt-left'></i>" , "<i class='fas fa-long-arrow-alt-right'></i>"],
	});
	$('.product-promotion').owlCarousel({
		items : 1,
		loop:true,
		autoplay: true,
		autoplayTimeout: 3000,
		smartSpeed: 1000,
		dots:true,
		nav:false,
	});


	$('.search-trigger').on('click',function(){
		$('input[type=text], .offcanvas-overlay').addClass('active');
		return false;
	});
	$('.menu-trigger').on('click',function(){
		$('.offcanvas-menu, .offcanvas-overlay').addClass('active');
	});
	
	$('.menu-close, .offcanvas-overlay').on('click',function(){
		$('.offcanvas-menu, .offcanvas-overlay, input[type=text]').removeClass('active');
	});
});









