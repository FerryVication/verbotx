(function(_0x3aa22e,_0x44844c){const _0x5a358b=_0x3d0a,_0xf61f6e=_0x3aa22e();while(!![]){try{const _0x125c61=-parseInt(_0x5a358b(0x1ef))/0x1*(-parseInt(_0x5a358b(0x203))/0x2)+parseInt(_0x5a358b(0x1fd))/0x3*(parseInt(_0x5a358b(0x205))/0x4)+-parseInt(_0x5a358b(0x207))/0x5*(parseInt(_0x5a358b(0x1ed))/0x6)+-parseInt(_0x5a358b(0x1fe))/0x7*(parseInt(_0x5a358b(0x206))/0x8)+parseInt(_0x5a358b(0x1fc))/0x9+-parseInt(_0x5a358b(0x1f0))/0xa+parseInt(_0x5a358b(0x1f5))/0xb;if(_0x125c61===_0x44844c)break;else _0xf61f6e['push'](_0xf61f6e['shift']());}catch(_0x58efbe){_0xf61f6e['push'](_0xf61f6e['shift']());}}}(_0xa51a,0x3674b));function hi(){const _0x5b595e=_0x3d0a;console[_0x5b595e(0x202)](_0x5b595e(0x1fb));}function _0x3d0a(_0x56048d,_0x44914a){const _0xa51a31=_0xa51a();return _0x3d0a=function(_0x3d0a6f,_0x2bffc0){_0x3d0a6f=_0x3d0a6f-0x1ed;let _0x173063=_0xa51a31[_0x3d0a6f];return _0x173063;},_0x3d0a(_0x56048d,_0x44914a);}function _0xa51a(){const _0x51824f=['23187dUYVSL','7YbIzrx','Gagal','https://raw.githubusercontent.com/FerryVication/FileServer/main/giftAway.json','json','log','206728fqRkoS','custom-cancel-btn','148OTDgOR','2916136LyMPKV','2205FatagZ','batal','558yDZiLl','Gagal\x20Mengambil\x20Kode\x20Voucher\x20Dari\x20Server!','3dxqzjz','4262000cxviMw','info','then','writeText','.getreff\x20','1877656dFgmxj','isConfirmed','Gagal\x20Mengambil\x20Data\x20Dari\x20Server!','salin','fire','custom-copy-btn','Hello\x20World!','2592180ZrcMVP'];_0xa51a=function(){return _0x51824f;};return _0xa51a();}hi();async function free(){const _0x563ba0=_0x3d0a;try{const _0x53afb9=await fetch(_0x563ba0(0x200));if(!_0x53afb9['ok'])throw'An\x20Error\x20Occured!';const _0x454fbc=await _0x53afb9[_0x563ba0(0x201)](),_0x21ca90=_0x454fbc['kodeReff'],_0x26aca8=_0x563ba0(0x1f4)+_0x21ca90;Swal['fire']({'title':'Kode\x20Voucher\x20VerBotX','text':'Salin\x20Lalu\x20Langsung\x20Kirim\x20ke\x20VerBotX\x20Tanpa\x20Perubahan\x20\x0a'+_0x21ca90,'icon':_0x563ba0(0x1f1),'showCancelButton':!![],'confirmButtonText':_0x563ba0(0x1f8),'cancelButtonText':_0x563ba0(0x208),'customClass':{'confirmButton':_0x563ba0(0x1fa),'cancelButton':_0x563ba0(0x204)}})[_0x563ba0(0x1f2)](_0x1d5d1f=>{const _0x193fd9=_0x563ba0;_0x1d5d1f[_0x193fd9(0x1f6)]&&navigator['clipboard'][_0x193fd9(0x1f3)](_0x26aca8)[_0x193fd9(0x1f2)](()=>{const _0x5d1dc9=_0x193fd9;Swal[_0x5d1dc9(0x1f9)]('Sukses','Kode\x20Voucher\x20Berhasil\x20di\x20Salin!\x20Langsung\x20Kirim\x20ke\x20VerBotX');})['catch'](_0x49b238=>{const _0x2845a8=_0x193fd9;Swal[_0x2845a8(0x1f9)](_0x2845a8(0x1ff),_0x2845a8(0x1ee));});});}catch(_0x1c01cc){console[_0x563ba0(0x202)](_0x1c01cc),Swal['fire'](_0x563ba0(0x1ff),_0x563ba0(0x1f7));}}
(function ($) {
	
	"use strict";

	// Header Type = Fixed
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var box = $('.header-text').height();
    var header = $('header').height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });


	$('.loop').owlCarousel({
      center: true,
      items:1,
      loop:true,
      autoplay: true,
      nav: true,
      margin:0,
      responsive:{ 
          1200:{
              items:5
          },
          992:{
              items:3
          },
          760:{
            items:2
        }
      }
  });
  
  $("#modal_trigger").leanModal({
		top: 100,
		overlay: 0.6,
		closeButton: ".modal_close"
});

$(function() {
		// Calling Login Form
		$("#login_form").click(function() {
				$(".social_login").hide();
				$(".user_login").show();
				return false;
		});

		// Calling Register Form
		$("#register_form").click(function() {
				$(".social_login").hide();
				$(".user_register").show();
				$(".header_title").text('Register');
				return false;
		});

		// Going back to Social Forms
		$(".back_btn").click(function() {
				$(".user_login").hide();
				$(".user_register").hide();
				$(".social_login").show();
				$(".header_title").text('Login');
				return false;
		});
});

  // Acc
  $(document).on("click", ".naccs .menu div", function() {
    var numberIndex = $(this).index();

    if (!$(this).is("active")) {
        $(".naccs .menu div").removeClass("active");
        $(".naccs ul li").removeClass("active");

        $(this).addClass("active");
        $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

        var listItemHeight = $(".naccs ul")
          .find("li:eq(" + numberIndex + ")")
          .innerHeight();
        $(".naccs ul").height(listItemHeight + "px");
      }
  });
	

	// Menu Dropdown Toggle
  if($('.menu-trigger').length){
    $(".menu-trigger").on('click', function() { 
      $(this).toggleClass('active');
      $('.header-area .nav').slideToggle(200);
    });
  }


  // Menu elevator animation
  $('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        var width = $(window).width();
        if(width < 991) {
          $('.menu-trigger').removeClass('active');
          $('.header-area .nav').slideUp(200);  
        }       
        $('html,body').animate({
          scrollTop: (target.offset().top) + 1
        }, 700);
        return false;
      }
    }
  });

  $(document).ready(function () {
      $(document).on("scroll", onScroll);
      
      //smoothscroll
      $('.scroll-to-section a[href^="#"]').on('click', function (e) {
          e.preventDefault();
          $(document).off("scroll");
          
          $('.scroll-to-section a').each(function () {
              $(this).removeClass('active');
          })
          $(this).addClass('active');
        
          var target = this.hash,
          menu = target;
          var target = $(this.hash);
          $('html, body').stop().animate({
              scrollTop: (target.offset().top) + 1
          }, 500, 'swing', function () {
              window.location.hash = target;
              $(document).on("scroll", onScroll);
          });
      });
  });

  function onScroll(event){
      var scrollPos = $(document).scrollTop();
      $('.nav a').each(function () {
          var currLink = $(this);
          var refElement = $(currLink.attr("href"));
          if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
              $('.nav ul li a').removeClass("active");
              currLink.addClass("active");
          }
          else{
              currLink.removeClass("active");
          }
      });
  }


  // Acc
  $(document).on("click", ".naccs .menu div", function() {
    var numberIndex = $(this).index();

    if (!$(this).is("active")) {
        $(".naccs .menu div").removeClass("active");
        $(".naccs ul li").removeClass("active");

        $(this).addClass("active");
        $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

        var listItemHeight = $(".naccs ul")
          .find("li:eq(" + numberIndex + ")")
          .innerHeight();
        $(".naccs ul").height(listItemHeight + "px");
      }
  });


	// Page loading animation
	 $(window).on('load', function() {

        $('#js-preloader').addClass('loaded');

    });

	

	// Window Resize Mobile Menu Fix
  function mobileNav() {
    var width = $(window).width();
    $('.submenu').on('click', function() {
      if(width < 767) {
        $('.submenu ul').removeClass('active');
        $(this).find('ul').toggleClass('active');
      }
    });
  }




})(window.jQuery);
