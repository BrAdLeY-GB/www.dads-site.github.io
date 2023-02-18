
(function($)
 {
	
	"use strict";

jQuery(function() { 


 
	$('.btn-1')
	  .on('mouseenter', function(e) {
			  var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			  $(this).find('span').css({top:relY, left:relX})
	  })
	  .on('mouseout', function(e) {
			  var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
		  $(this).find('span').css({top:relY, left:relX})
	  });
	
});

function headerStyle() {
	if($('.main-header').length){
		var windowpos = $(window).scrollTop();
		var siteHeader = $('.main-header');
		var scrollLink = $('.scroll-to-top');
		var sticky_header = $('.main-header .sticky-header');
		if (windowpos >= 100) {
			siteHeader.addClass('fixed-header');
			sticky_header.addClass("animated slideInDown");
			scrollLink.fadeIn(300);
		} else {
			siteHeader.removeClass('fixed-header');
			sticky_header.removeClass("animated slideInDown");
			scrollLink.fadeOut(300);
		}
	}
}
headerStyle();

if($('.main-header li.dropdown ul').length){
	$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-right"></span></div>');
}

if($('.mobile-menu').length){

	var mobileMenuContent = $('.main-menu').html();
	$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
	$('.sticky-header .main-menu').append(mobileMenuContent);
	
	//Dropdown Button
	$('.dropdown-btn').on('click', function() {
		$(this).toggleClass('open');
		$(this).prev('ul').slideToggle(500);
	});
	//Menu Toggle Btn
	$('.mobile-nav-toggler').on('click', function() {
		$('body').addClass('mobile-menu-visible');
	});

	//Menu Toggle Btn
	$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn,.scroll-nav li a').on('click', function() {
		$('body').removeClass('mobile-menu-visible');
	});
}




if ($('.service-1-carousel').length) {
	var service1Carousel = $('.service-1-carousel');
		service1Carousel.each(function (index) {
		var $owlAttr = {},
		$extraAttr = $(this).data("options");
		$.extend($owlAttr, $extraAttr);
		$(this).owlCarousel($owlAttr);


		var nextBtn = $('.service-1-carousel-btn .service-1-carousel-left-btn');
		var prevBtn = $('.service-1-carousel-btn .service-1-carousel-right-btn');
		nextBtn.on('click', function () {
			service1Carousel.trigger('prev.owl.carousel', [300]);
			return false;
		});
		prevBtn.on('click', function () {
			service1Carousel.trigger('next.owl.carousel', [300]);
			return false;
		});
	});
}

if ($('.theme-carousel').length) {
	var themeCarousel = $('.theme-carousel');
	themeCarousel.each(function (index) {
		var $owlAttr = {},
		$extraAttr = $(this).data("options");
		$.extend($owlAttr, $extraAttr);
		$(this).owlCarousel($owlAttr);
	});
}

// banner-carousel
if ($('.banner-carousel').length) {
	$('.banner-carousel').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		mouseDrag: false,
		active: true,
		smartSpeed: 1000,
		autoplayTimeout: 6000,
		navText: [ '<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>' ],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			800:{
				items:1
			},
			1024:{
				items:1
			}
		}
	});
}

// Scroll to a Specific Div
if($('.scroll-to-target').length){
	$(".scroll-to-target").on('click', function() {
		var target = $(this).attr('data-target');
	   // animate
	   $('html, body').animate({
		   scrollTop: $(target).offset().top
		 }, 1500);
	});
}

$(window).on('scroll', function() {
	headerStyle();
});

//Search Popup
if($('#search-popup').length){
		
	//Show Popup
	$('.header-bottom-search-toggler').on('click', function() {
		$('#search-popup').addClass('popup-visible');
	});
	$(document).keydown(function(e){
		if(e.keyCode === 27) {
			$('#search-popup').removeClass('popup-visible');
		}
	});
	//Hide Popup
	$('.close-search,.search-popup .overlay-layer').on('click', function() {
		$('#search-popup').removeClass('popup-visible');
	});
}

if($('.count-box').length){
	$('.count-box').appear(function(){

		var $t = $(this),
			n = $t.find(".count-text").attr("data-stop"),
			r = parseInt($t.find(".count-text").attr("data-speed"), 10);
			
		if (!$t.hasClass("counted")) {
			$t.addClass("counted");
			$({
				countNum: $t.find(".count-text").text()
			}).animate({
				countNum: n
			}, {
				duration: r,
				easing: "linear",
				step: function() {
					$t.find(".count-text").text(Math.floor(this.countNum));
				},
				complete: function() {
					$t.find(".count-text").text(this.countNum);
				}
			});
		}
		
	},{accY: 0});
}





})(window.jQuery);



