'use strict';  
              
$(document).ready(function() {
	
	configureMenus();
	onScrollEvents();

	 /*==========  Smooth Scroll  ==========*/
	 $('.main_nav > li > a , #scroll_top , .scroll_down').click(function() {
	     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	         var target = $(this.hash);
	         target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	         if (target.length) {
	             $('html,body').animate({
	                 scrollTop: (target.offset().top )
	                 }, 1000);
	             return false;
	         }
	     }
	 });       	

	/* ========== mini menu ===================*/
	var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
	if (windowPos>=600) {
		$('.codenegar_main_header').addClass('small_header');
	} else if (windowPos<600) {
		$('.codenegar_main_header').removeClass('small_header');
	}

	/* drop down ===========================================*/
    $('.dropdown').hover(function(){
    	$(this).addClass('open_dropdown').find('.dropdown_inner').stop().fadeIn();
    },function(){
    	$(this).removeClass('open_dropdown').find('.dropdown_inner').stop().fadeOut();
    }); 

 	/*open panel slide down ===========================================*/
 	$('.open_panel').click(function(event) {
 		var panel = $(this).data('panel');
 		$('#'+panel).slideToggle();
 	});

 	/*  tooltip ==============================================*/
 	$('.tooltip_trigger').hover(function() {
 		$(this).find('.tooltip').fadeIn();
 	}, function() {
 		$(this).find('.tooltip').fadeOut();
 	});

    /*==========  FlexSlider  ==========*/
 	// $('.flexslider').flexslider({
  //       animation: "slide",
  //       animationLoop: false,
  //       directionNav: true,
  //       controlNav: true,
  //       prevText: "", 
		// nextText: "", 
  //   });
	$('#carousel').flexslider({
	    animation: "slide",
	    controlNav: false,
	    animationLoop: false,
	    slideshow: false,
	    itemWidth: 100,
	    asNavFor: '#slider'
	  });
	$('#popular_slider').flexslider({
	    animation: "slide",
	    controlNav: false,
	    directionNav: true,
	    animationLoop: false,
	    slideshow: true,
	    // itemWidth: 300,
        itemWidth: 250,
	    minItems: 1,
        maxItems: 4
	  });
	 
	  $('#slider').flexslider({
	    animation: "slide",
	    controlNav: false,
	    animationLoop: false,
	    slideshow: false,
	    sync: "#carousel"
	  });
	  $('#ingredients_slider, #home_slider .flexslider').flexslider({
	    animation: "slide",
	    controlNav: true,
	    directionNav: false,
	    animationLoop: true,
	    slideshow: true
	  });

    /* salamat develop sidebar */
    $('.tab_head div').on('click', function() {
    	var target = $(this).data('tab');
    	$('.tab_head div').removeClass('active');
    	$(this).addClass('active');
    	$('#most_articles section').removeClass('active');
    	$('#'+target).addClass('active');
    	
    });

    /* sabade kharid page */
    // adding food
    peyment();

    $('.add').on('click', function() {
    	var parent = $(this).parent().parent();
    	var count = $(this).siblings('.count');
    	var number = parseInt(count.text()) + 1;
    	var price = parseInt(parent.find('.price').text());
    	count.text(number);
    	parent.find('.full_price').text(price * number);
    	peyment();
    });	
    $('.remove').on('click', function() {
    	var count = $(this).siblings('.count');
    	var number = parseInt(count.text()) - 1;
    	if (number >= 0) {
	    	var parent = $(this).parent().parent();
	    	var price = parseInt(parent.find('.price').text());
	    	count.text(number);
	    	parent.find('.full_price').text(price * number);
	    }
    	peyment();

    });		

});	

function peyment () {
	var all = 0;
	$.each($('.full_price'), function(index, val) {
		var h = parseInt($(this).text());
		all = all + h;
		 /* iterate through array or object */
	});
	$('#price_wrap .green').text(all);	
}

function onScrollEvents () {
	//establish the default window state
	var windowState = 'large';
	
	//check to see if the screen is smaller than 769 pixels
	$(document).ready(function() {
		var sw = document.body.clientWidth;
		if (sw < 769) {
		   smScreen();
		}
	})
	// take care of resizing the window
	$(window).resize(function() {
		var sw = document.body.clientWidth;
		if (sw < 769 && windowState == 'large') {
		   smScreen();
		} 
		if (sw > 768 && windowState == 'small') {
			lgScreen();
		}
	});

	function smScreen (argument) {
		// body...
	}

	function lgScreen () {
		$(window).scroll(function(){
		    var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
		    var windowHeight = $(window).height(); // get the height of the window
		    var docHeight = $(document).height();
			
			/* ========== parallax ===================*/		    
		    // parallex images
		    var but = $(document).height() - $(window).height() - top;
		    var yPos = (windowPos / 3.5) + 100;
		    var coords = '0 ' + (yPos) + 'px';
		    // Move the background
		    $(".parallax").css({ backgroundPosition: coords });
			
			/* ========== mini menu ===================*/
			var header = $('.codenegar_main_header');
			var scroll_top_link = $('#scroll_top');
			if (windowPos>=windowHeight) {
				header.addClass('small_header');
				scroll_top_link.removeClass('wow');
			} else if (windowPos<windowHeight) {
				header.removeClass('small_header');
				scroll_top_link.addClass('wow')	
			}

			/* ============== animate wow ===============*/
			$('.animated').each(function(index, el) {
				var position = $(this).offset().top;
				var top = windowPos + windowHeight - 150;
				if (position < top) {
					$(this).removeClass('wow');
				};				
			});
		});
	}

}

// $(document).ready(function() {
	

 //function to control menu behavior based on screen size
function configureMenus() {
	// variable to hold current window state - small, medium, or large
	var windowState = 'large';

	// check intital width of the screen, respond with appropriate menu
	// $(document).ready(function() {
	var sw = window.innerWidth;
	if (sw < 769) {
		smMenu();
	} else {
		lgMenu();
	};
		 
	// take care of resizing the window
	$(window).resize(function() {
		var sw = window.innerWidth;

		// var sw = document.body.clientWidth;
		if (sw < 769 && windowState != 'small') {
			smMenu();
		}
		if (sw > 769 && windowState != 'large') {
			lgMenu();
		} 
		// console.log(windowState);
	});

	function smMenu() {
		// since we may be switching from another menu, reset the menu first
		//unbind click and touch events    
		// $('.toggle_nav').off('click');
		// $('.main_nav a').off('click touchstart');
		// $('html').off('touchstart');
		// $('#main_nav').off('touchstart');
		//reset the menu in case it's being resized from a medium screen    
		// remove any expanded menus
		$('.expand').removeClass('expand');
		// $('.menuToggle').remove();
		//now that the menu is reset, add the toggle and reinitialize the indicator
		 // $('.topMenu').before('<div class="menuToggle"><a href="#">menu<span class="indicator">+</span></a></div>');
		// append the + indicator
		 // $('.topMenu h3').append('<span class="indicator">+</span>');

		// wire up clicks and changing the various menu states
		//we'll use clicks instead of touch in case a smaller screen has a pointer device
		//first, let's deal with the menu toggle
		
		$('.toggle_nav').click(function(e) {
			e.preventDefault();
			$('body').toggleClass('expand');
			//expand the menu
			$('#main_nav ul').toggleClass('expand');
			$(this).find('i').toggleClass('fa-times').toggleClass('fa-bars');
			// figure out whether the indicator should be changed to + or -
			// var newValue = $(this).find('span.indicator').text() == '+' ? '-' : '+';
			// set the new value of the indicator
			// $(this).find('span.indicator').text(newValue);
		});
 			
 			//now we'll wire up the submenus
 	// 	$(".topMenu h3").click(function() {
		// 	//find the current submenu
		// 	var currentItem = $(this).siblings('.submenu');
		// 	//remove the expand class from other submenus to close any currently open submenus
		// 	$('ul.submenu').not(currentItem).removeClass('expand');
		// 	//change the indicator of any closed submenus 
		// 	$('.topMenu h3').not(this).find('span.indicator:contains("-")').text('+');
		// 	//open the selected submenu
		// 	$(this).siblings('.submenu').toggleClass('expand');
		// 	//change the selected submenu indicator
		// 	var newValue = $(this).find('span.indicator').text() == '+' ? '-' : '+';
		// 	$(this).find('span.indicator').text(newValue);
		// });
		//indicate current window state
		windowState = 'small';
	}
 		
	function medMenu() {

		//reset the menu in case it's being resized from a small screen
		// unbind click events    
		// $('.menuToggle a').off('click');
		// $('.topMenu h3').off('click');
		// // remove any expanded menus
		// $('.expand').removeClass('expand');
		// // remove the span tags inside the menu
		// $('.topMenu h3').find('span.indicator').remove();
		// // remove the "menu" element
		// $('.menuToggle').remove();

		
		// //check to see if the device supports touch
		// //we'll use touch events instead of click as it will allow us
		// //to support both a CSS-driven hover and touch enabled
		// //menu for this screen range
		// if ('ontouchstart' in document.documentElement)
		// {
		// 	//find all 'hover' class and strip them
		// 	 $('.topMenu').find('li.hover').removeClass('hover');
		// 	 //add touch events to submenu headings
		// 	 $(".topMenu h3").bind('touchstart', function(e){
		// 		//find the current submenu
		// 		var currentItem = $(this).siblings('.submenu');
		// 		//remove the expand class from other submenus to close any currently open submenus
		// 		$('ul.submenu').not(currentItem).removeClass('expand');
		// 		//open the selected submenu
		// 		$(this).siblings('.submenu').toggleClass('expand');
		// 	});
		// 	//close submenus if users click outside the menu
		// 	$('html').bind('touchstart', function(e) {
		// 		$('.topMenu').find('ul.submenu').removeClass('expand');
		// 	});
		// 	//stop clicks on the menu from bubbling up
		// 	$('#mainNav').bind('touchstart', function(e){
		// 		e.stopPropagation();
		//    });
		// }
		//indicate current window state
		windowState = 'medium';
	}
 		
	function lgMenu() {
		//largely what we'll do here is simple remove functionality that
		//may be left behind by other screen sizes
		//at this size the menu will function as a pure-css driven dropdown
		//advances in touch screen are beginning to make us re-think
		//this approach
		// unbind click and touch events    
		// $('.menuToggle a').off('click');
		// $('.topMenu h3').off('click touchstart');
		// $('html').off('touchstart');
		// $('#mainNav').off('touchstart');
		
		// // remove any expanded submenus
		// $('.topMenu').find('ul.submenu').removeClass('expand');
		
		// // remove the span tags inside the menu
		// $('.topMenu h3').find('span.indicator').remove();
		
		// // remove the "menu" element
		// $('.menuToggle').remove();
		
		//indicate current window state
		windowState = 'large';
	}
 }