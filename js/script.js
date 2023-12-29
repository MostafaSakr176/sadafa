

$(document).ready(function () {

  // user sub menu 

  $(".top-nav-user .has-menu").click(function(){
    $(".top-nav-user .sub-menu").toggleClass("d-flex");
  });
  $(".top-nav-user").mouseover(function(){
    $(".top-nav-user .sub-menu").addClass("d-flex");
  });
  $(".top-nav-user").mouseleave(function(){
    $(".top-nav-user .sub-menu").removeClass("d-flex");
  });


  // notification sub menu 

  $(".top-nav-notification .has-menu").click(function(){
    $(".top-nav-notification .sub-menu").toggleClass("d-flex");
  });
  $(".top-nav-notification").mouseover(function(){
    $(".top-nav-notification .sub-menu").addClass("d-flex");
  });
  $(".top-nav-notification").mouseleave(function(){
    $(".top-nav-notification .sub-menu").removeClass("d-flex");
  });

  // search sub menu
    $(".top-nav-search .open-search").click(function(event){
    event.stopPropagation();
    $(".top-nav-search form").toggleClass("show");
    $(".top-nav-search input").focus();
  });

  $("body").click(function(e){
    let input = document.querySelector(".top-nav-search input")
    if(e.target === input){
      $(".top-nav-search form").addClass("show");
      $(".top-nav-search input").focus();
    }else{
      $(".top-nav-search form").removeClass("show");
    }
  });



  // side menu nav

  $(".toggle-side-menu").click(function(){
    $(".side-menu-nav").addClass("show");
    $(".overlay-sidemenu").addClass("show");
    $("body").css("overflow","hidden");
  })
  $(".close-side-menu").click(function(){
    $(".side-menu-nav").removeClass("show");
    $(".overlay-sidemenu").removeClass("show");
    $("body").css("overflow","unset");
  })
  $(".overlay-sidemenu").click(function(){
    $(".side-menu-nav").removeClass("show");
    $(".classification-shop-section-side-menu").removeClass("show");
    $(".side-menu-classification").removeClass("show");
    $(".overlay-sidemenu").removeClass("show");
	  
    $("body").css("overflow","unset");
  })


  // classification side menu

  $(".toggle-side-menu-classification").click(function(){
    $(".side-menu-classification").toggleClass("show");
    $(".overlay-sidemenu").toggleClass("show");
  })
  $(".close-side-menu-classification").click(function(){
    $(".side-menu-classification").removeClass("show");
    $(".overlay-sidemenu").removeClass("show");
  })
  $(".toggle-classification-shop-section-side-menu").click(function(){
    $(".classification-shop-section-side-menu").toggleClass("show");
    $(".overlay-sidemenu").toggleClass("show");
  })
  $(".close-classification-shop-section-side-menu").click(function(){
    $(".classification-shop-section-side-menu").removeClass("show");
    $(".overlay-sidemenu").removeClass("show");
  })


  $(".product-item .options .fav-item").click(function(){
    if($(this).children("i").hasClass("bi-heart")){
      $(this).children("i").removeClass("bi-heart");
      $(this).children("i").addClass("bi-heart-fill");
    }else{
      $(this).children("i").addClass("bi-heart");
      $(this).children("i").removeClass("bi-heart-fill");
    }
  })

  /* -------------- virification code -------------- */

var verify = $('#verifyCode');
function goToNextInput(e) {
  var key = e.which,
    t = $(e.target),
    sib = t.prev('input');

  if (key != 9 && (key < 48 || key > 57)) {
    e.preventDefault();
    return false;
  }

  if (key === 9) {
    return true;
  }

  if (!sib || !sib.length) {
    sib = verify.find('input').eq(0);
  }
  sib.select().focus();
}
function onKeyDown(e) {
  var key = e.which;

  if (key === 9 || (key >= 48 && key <= 57)) {
    return true;
  }

  e.preventDefault();
  return false;
}
function onFocus(e) {
  $(e.target).select();
}
verify.on('keyup', '#form input', goToNextInput);
verify.on('keydown', '#form input', onKeyDown);
verify.on('click', '#form input', onFocus);

  // qantity product

  $('.quantity.plus').click(function(e) {
    let $input = $(this).next('input.qty');
    let val = parseInt($input.val());
    $input.val( val+1 ).change();
  });
  
  $('.quantity.minus').click(function(e) {
    let $input = $(this).prev('input.qty');
    var val = parseInt($input.val());
    if (val > 1) {
        $input.val( val-1 ).change();
    } 
  });



  // toggle add address section in cart 

  $(".add-new-address").click(function(){
    $(this).css("display" , "none");
    $(".shipping-address").css("display" , "block");
  })
  $(".confirm-address").click(function(){
    $(".shipping-address").css("display" , "none");
    $(".add-new-address").css("display" , "block");
  })



  // custom checkbox

  $('.custom-form-check input[type="checkbox"]').click(function(){
    if($(this).is(":checked")){
      $(this).parents("label").addClass('checked');
    }else{
      $(this).parents("label").removeClass('checked');
    }
  })

  $('.custom-form-check input[type="radio"]').click(function(){
    if($(this).is(":checked")){
      console.log($(this).parents(".custom-radio-container"));
      $(".custom-radio-container .custom-form-check-label").removeClass('checked');
      $(this).parent("label").addClass('checked');
    }
  })



  // ---- range input -------

  var parent = document.querySelector(".classification-shop-section-side .range-price");
	if(!parent) return;

	var
	rangeS = parent.querySelectorAll(".classification-shop-section-side .range-input"),
		numberS = parent.querySelectorAll(".classification-shop-section-side .number-input");

	rangeS.forEach(function(el) {
		el.oninput = function() {
			var slide1 = parseFloat(rangeS[0].value),
				slide2 = parseFloat(rangeS[1].value);

			if (slide1 > slide2) {
				[slide1, slide2] = [slide2, slide1];
			}

			numberS[0].value = slide1;
			numberS[1].value = slide2;
		}
	});

	numberS.forEach(function(el) {
		el.oninput = function() {
			var number1 = parseFloat(numberS[0].value),
				number2 = parseFloat(numberS[1].value);

			if (number1 > number2) {
				var tmp = number1;
				numberS[0].value = number2;
				numberS[1].value = tmp;
			}

			rangeS[0].value = number1;
			rangeS[1].value = number2;

		}
	});



    // ---- side range input -------

    var side_parent = document.querySelector(".classification-shop-section-side-menu .range-price");
    if(!side_parent) return;
  
    var
    side_rangeS = side_parent.querySelectorAll(".classification-shop-section-side-menu .range-input"),
      side_numberS = side_parent.querySelectorAll(".classification-shop-section-side-menu .number-input");
  
    side_rangeS.forEach(function(el) {
      el.oninput = function() {
        var side_slide1 = parseFloat(side_rangeS[0].value),
          side_slide2 = parseFloat(side_rangeS[1].value);
  
        if (side_slide1 > side_slide2) {
          [side_slide1, side_slide2] = [side_slide2, side_slide1];
        }
  
        side_numberS[0].value = side_slide1;
        side_numberS[1].value = side_slide2;
      }
    });
  
    side_numberS.forEach(function(el) {
      el.oninput = function() {
        var side_number1 = parseFloat(side_numberS[0].value),
          side_number2 = parseFloat(side_numberS[1].value);
  
        if (side_number1 > side_number2) {
          var side_tmp = side_number1;
          side_numberS[0].value = side_number2;
          side_numberS[1].value = side_tmp;
        }
  
        side_rangeS[0].value = side_number1;
        side_rangeS[1].value = side_number2;
  
      }
    });



  // ----- scroll top button ------

  var btn = $('#scroll-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});




Fancybox.bind(".gallery", {});



});


// ----- star rate ------

$(function () {

  $(".rateYo").rateYo({
    rating: $(".rateYo").attr("rateYo"),
    starWidth: "15px",
    ratedFill: "#FFC107",
    readOnly: true,
    normalFill: "#eee"
  });

  $(".user-rate").rateYo({
    rating: $(".user-rate").attr("rateYo"),
    starWidth: "12px",
    ratedFill: "#FFC107",
    readOnly: true,
    normalFill: "#eee"
  });

  $(".your-rate").rateYo({
    starWidth: "15px",
    ratedFill: "#FFC107",
    rating: 0,
    halfStar: true,
    normalFill: "#eee"
  });




    // run owl-carousel script

  $('.header-content .owl-carousel').owlCarousel({
      loop:false,
      margin:10,
      nav:false,
      rtl:true,
      items:1
  });
  
  $('.sections-slider .owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    rtl:true,
    responsive: {
      0: {
          items: 2
      },
      600: {
        items: 4
      },
      1000: {
          items: 6
      }
  }
  });
  
  $('.service-providers .owl-carousel').owlCarousel({
    loop:false,
    margin:20,
    nav:false,
    rtl:true,
    responsive: {
      0: {
          items: 1
      },
      600: {
        items: 3
      },
      1000: {
          items: 4
      }
  }
  });
  
  $('.blogs .owl-carousel').owlCarousel({
    loop:false,
    margin:20,
    nav:false,
    rtl:true,
    responsive: {
      0: {
          items: 1
      },
      600: {
        items: 2
      },
      1000: {
          items: 3
      }
  }
  });
  
  $('.all-blogs .owl-carousel').owlCarousel({
    loop:false,
    margin:20,
    nav:false,
    rtl:true,
    dots:true,
    responsive: {
      0: {
          items: 1
      },
      600: {
        items: 1
      },
      1000: {
          items: 2
      }
  }
  });
  $('.service-providers-page .owl-carousel').owlCarousel({
    loop:false,
    margin:20,
    nav:false,
    rtl:true,
    dots:true,
    responsive: {
      0: {
          items: 1
      },
      600: {
        items: 1
      },
      1000: {
          items: 2
      }
  }
  });
  $('.gallery-slider .owl-carousel').owlCarousel({
    loop:false,
    margin:20,
    nav:false,
    dots:false,
    rtl:true,
    responsive: {
      0: {
          items: 2
      },
      600: {
        items: 3
      },
      1000: {
          items: 4
      }
  }
  });
  $('.more-events-slider .owl-carousel').owlCarousel({
    loop:false,
    margin:20,
    nav:false,
    dots:false,
    rtl:true,
    responsive: {
      0: {
          items: 1
      },
      600: {
        items: 2
      },
      1000: {
          items: 3
      }
  }
  });
  $('.shop-section .grid.owl-carousel').owlCarousel({
    loop:false,
    margin:20,
    nav:true,
    dots:false,
    rtl:true,
    responsive: {
      0: {
          items: 1
      },
      600: {
        items: 2
      },
      1000: {
          items: 3
      }
  }
  });
  $('.shop-section .list.owl-carousel').owlCarousel({
    loop:false,
    margin:20,
    nav:true,
    dots:false,
    rtl:true,
    responsive: {
      0: {
          items: 1
      },
      600: {
        items: 1
      },
      1000: {
          items: 1
      }
  }
  });

  $('.related-products.owl-carousel').owlCarousel({
    loop:false,
    margin:20,
    nav:false,
    dots:false,
    rtl:true,
    responsive: {
      0: {
          items: 2
      },
      600: {
        items: 3
      },
      1000: {
          items: 4
      }
  }
  });

  $('.suggested-products.owl-carousel').owlCarousel({
    loop:false,
    margin:20,
    nav:false,
    dots:false,
    rtl:true,
    responsive: {
      0: {
          items: 2
      },
      600: {
        items: 3
      },
      1000: {
          items: 4
      }
  }
  });

  $('.side-order-products.owl-carousel').owlCarousel({
    loop:false,
    margin:20,
    nav:true,
    dots:false,
    rtl:true,
    responsive: {
      0: {
          items: 1
      },
      600: {
        items: 1
      },
      1000: {
          items: 1
      }
  }
  });

  $('.shop-section .recently-arrived.owl-carousel').owlCarousel({
    loop:false,
    margin:20,
    nav:true,
    dots:false,
    rtl:true,
    responsive: {
      0: {
          items: 2
      },
      600: {
        items: 3
      },
      1000: {
          items: 4
      }
  }
  });

  $('.products-types .owl-carousel').owlCarousel({
    loop:false,
    margin:20,
    nav:true,
    dots:false,
    rtl:true,
    responsive: {
      0: {
          items: 1
      },
      600: {
        items: 2
      },
      1000: {
          items: 4
      }
  }
  });


  // nice select init
  $("select").niceSelect();


  // wow.js init
  new WOW().init();

  $( "#datepicker" ).datepicker({
		dateFormat: "dd-mm-yy"
		,	duration: "fast"
	});

  $(".service-rateYo").rateYo({
    rating: 4,
    rtl: true,
    readOnly: true,
    starWidth: "13px",
    ratedFill: "#f1c40f"
  });

});







// -------- make nav bar static on scroll -------

window.onscroll = function() {fixNav()};

var navbar = document.getElementsByClassName("bottom-nav");
var sticky = navbar[0].offsetTop ;

function fixNav() {
  if ($(window).scrollTop() >= sticky) {
    $(navbar).addClass("sticky");
  } else {
    $(navbar).removeClass("sticky")
  }
}

/* -------------- upload profile pic ---------------- */

const imgDiv = document.querySelector('.profile-pic');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');

//if user hover on img div 

imgDiv.addEventListener('mouseenter', function(){
    uploadBtn.style.display = "block";
});

//if we hover out from img div

imgDiv.addEventListener('mouseleave', function(){
    uploadBtn.style.display = "none";
});

//when we choose a pic to upload

file.addEventListener('change', function(){
  const choosedFile = this.files[0];
  if (choosedFile) {
    const reader = new FileReader(); 
    reader.addEventListener('load', function(){
        img.setAttribute('src', reader.result);
    });
    reader.readAsDataURL(choosedFile);
  }
});


/* -------------------------------- jquery -------------------------------- */ 






