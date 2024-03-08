AOS.init({
	duration: 800,
	easing: 'slide',
	once: true
});

$(function(){

	'use strict';

	$(".loader").delay(200).fadeOut("slow");
  $("#overlayer").delay(200).fadeOut("slow");	

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$('body').find('.js-menu-toggle').removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$('body').find('.js-menu-toggle').addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
					$('body').find('.js-menu-toggle').removeClass('active');
				}
	    }
		});
	}; 
	siteMenuClone();

	var owlPlugin = function() {
		if ( $('.owl-2-slider').length > 0 ) {
			var owl2 = $('.owl-2-slider').owlCarousel({
		    loop: true,
		    autoHeight: true,
		    margin: 40,
		    autoplay: true,
		    smartSpeed: 700,
		    items: 2,
		    stagePadding: 0,
		    nav: true,
		    dots: true,
		    navText: ['<span class="icon-keyboard_backspace"></span>','<span class="icon-keyboard_backspace"></span>'],
		    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        800: {
							items:2
	        },
	        1000:{
	            items:2
	        },
	        1100:{
	            items:2
	        }
	    	}
			});

			$('.js-custom-next-v2').click(function(e) {
				e.preventDefault();
				owl2.trigger('next.owl.carousel');
			})
			$('.js-custom-prev-v2').click(function(e) {
				e.preventDefault();
				owl2.trigger('prev.owl.carousel');
			})
		}
		if ( $('.owl-3-slider').length > 0 ) {
			var owl3 = $('.owl-3-slider').owlCarousel({
		    loop: true,
		    autoHeight: true,
		    margin: 40,
		    autoplay: true,
		    smartSpeed: 700,
		    items: 4,
		    stagePadding: 0,
		    nav: true,
		    dots: true,
		    navText: ['<span class="icon-keyboard_backspace"></span>','<span class="icon-keyboard_backspace"></span>'],
		    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        800: {
							items:2
	        },
	        1000:{
	            items:2
	        },
	        1100:{
	            items:3
	        }
	    	}
			});
		}
		
		if ( $('.owl-4-slider').length > 0 ) {
			var owl4 = $('.owl-4-slider').owlCarousel({
		    loop: true,
		    autoHeight: true,
		    margin: 10,
		    autoplay: true,
		    smartSpeed: 700,
		    items: 4,
		    nav: false,
		    dots: true,
		    navText: ['<span class="icon-keyboard_backspace"></span>','<span class="icon-keyboard_backspace"></span>'],
		    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        800: {
							items:2
	        },
	        1000:{
	            items:3
	        },
	        1100:{
	            items:4
	        }
	    	}
			});
		}
		

		if ( $('.owl-single-text').length > 0 ) {
			var owlText = $('.owl-single-text').owlCarousel({
		    loop: true,
		    autoHeight: true,
		    margin: 0,
		    autoplay: true,
		    smartSpeed: 1200,
		    items: 1,
		    nav: false,
		    navText: ['<span class="icon-keyboard_backspace"></span>','<span class="icon-keyboard_backspace"></span>']
			});
		}
		if ( $('.owl-single').length > 0 ) {
			var owl = $('.owl-single').owlCarousel({
		    loop: true,
		    autoHeight: true,
		    margin: 0,
		    autoplay: true,
		    smartSpeed: 800,
		    mouseDrag: false,
		    touchDrag: false,
		    items: 1,
		    nav: false,
		    navText: ['<span class="icon-keyboard_backspace"></span>','<span class="icon-keyboard_backspace"></span>'],
		    onChanged: changed,
			});

			function changed(event) {
				var i = event.item.index;
				if ( i == 0 || i == null) {
					i = 1;
				} else {
					i = i - 1;

					$('.js-custom-dots a').removeClass('active');
					$('.js-custom-dots a[data-index="'+i+'"]').addClass('active');
				}				
			}

			$('.js-custom-dots a').each(function(i) {
				var i = i + 1;
				$(this).attr('data-index', i);
			});

			$('.js-custom-dots a').on('click', function(e){
				e.preventDefault();
				owl.trigger('stop.owl.autoplay');
				var k = $(this).data('index');
				k = k - 1;
				owl.trigger('to.owl.carousel', [k, 500]);
			})

		}

	}
	owlPlugin();

	var OnePageNavigation = function() {
    var navToggler = $('.site-menu-toggle');
   	$("body").on("click", ".site-nav .site-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a", function(e) {
      e.preventDefault();
      var hash = this.hash;
      
        $('html, body').animate({

          scrollTop: $(hash).offset().top
        }, 400, 'easeInOutExpo', function(){
          window.location.hash = hash;
        });

    });

    // $("#menu li a[href^='#']").on('click', function(e){
    //   e.preventDefault();
    //   navToggler.trigger('click');
    // });

    $('body').on('activate.bs.scrollspy', function () {
      // console.log('nice');
      // alert('yay');
    })
  };
  OnePageNavigation();

  var scrollWindow = function() {
    $(window).scroll(function(){
      var $w = $(this),
          st = $w.scrollTop(),
          navbar = $('.js-site-navbar'),
          sd = $('.js-scroll-wrap'), 
          toggle = $('.site-menu-toggle');

      // if ( toggle.hasClass('open') ) {
      //   $('.site-menu-toggle').trigger('click');
      // }
      

      if (st > 150) {
        if ( !navbar.hasClass('scrolled') ) {
          navbar.addClass('scrolled');  
        }
      } 
      if (st < 150) {
        if ( navbar.hasClass('scrolled') ) {
          navbar.removeClass('scrolled sleep');
        }
      } 
      if ( st > 350 ) {
        if ( !navbar.hasClass('awake') ) {
          navbar.addClass('awake'); 
        }
        
        if(sd.length > 0) {
          sd.addClass('sleep');
        }
      }
      if ( st < 350 ) {
        if ( navbar.hasClass('awake') ) {
          navbar.removeClass('awake');
          navbar.addClass('sleep');
        }
        if(sd.length > 0) {
          sd.removeClass('sleep');
        }
      }
    });
  };
  scrollWindow();

	var counter = function() {
		
		$('.count-numbers').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ut-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.counter > span').each(function(){
					var $this = $(this),
						num = $this.data('number');
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 5000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();

	// jarallax
	var jarallaxPlugin = function() {
		if ( $('.jarallax').length > 0 ) {
			$('.jarallax').jarallax({
		    speed: 0.2
			});
		}
	};
	jarallaxPlugin();

	

	var accordion = function() {
		$('.btn-link[aria-expanded="true"]').closest('.accordion-item').addClass('active');
	  $('.collapse').on('show.bs.collapse', function () {
		  $(this).closest('.accordion-item').addClass('active');
		});

	  $('.collapse').on('hidden.bs.collapse', function () {
		  $(this).closest('.accordion-item').removeClass('active');
		});
	}
	accordion();

	var links = $('.js-hover-focus-one .service-sm')
		.mouseenter(function(){
			links.addClass('unfocus');
			$(this).removeClass('unfocus');
		}).mouseleave(function(){
			$(this).removeClass('unfocus');
			links.removeClass('unfocus');
		})



})


    // Close all accordion items on page load
    closeAllSections();

    // Burgur (Hamburger) button click event
    $("#slide-open").click(function() {
        if ($("#burgur").hasClass('on')) {
            // Close the menu
            closeMenu();
        } else {
            // Open the menu
            openMenu();
        }
    });

    // Dim (overlay) click event
    $("#dim").click(function() {
        closeMenu();
    });

    // Click event for elements with the class 'has-children' (accordion items)
    $('.has-children').click(function() {
        // Close all other open accordions
        $('.has-children').not(this).removeClass('active');
        $('.nav_2dep').not($(this).find('.nav_2dep')).slideUp();

        // Toggle active class and slide toggle
        $(this).toggleClass('active');
        $(this).find('.nav_2dep').slideToggle();

        // Toggle open class for accordion effect
        $(this).toggleClass('open');
    });

    // Dim (overlay) click event
    $(".drop_2dep").click(function() {
			var clickedClass = $(this).attr('class');
			var spanElement = $(this);

			if (clickedClass.includes("open")) {
				spanElement.removeClass("open")
			} else {
				$(".drop_2dep").not(this).removeClass("open")
				spanElement.addClass("open")
			}
		});

    // Function to close the menu
    function closeMenu() {
        $("#burgur").removeClass('on');
        $("#slide").removeClass('on');
        $("#nav_mo").removeClass('top_h');
        $("#dim").hide();
        closeAllSections();
    }

    // Function to open the menu
    function openMenu() {
        $("#burgur").addClass('on');
        $("#slide").addClass('on');
        $("#nav_mo").addClass('top_h');
        $("#dim").show();
    }

    // Function to close all open sections
    function closeAllSections() {
        $('.has-children').removeClass('open');
        $('.nav_2dep').slideUp();
    }






        
