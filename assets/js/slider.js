
let navbarToggle = document.querySelector('.navbar-toggler');
navbarToggle.addEventListener("click", () => {
  document.querySelector('.collapse-content').classList.toggle('active')
})

let closeNav = document.querySelector('.close_nav');
closeNav.addEventListener("click", () => {
  document.querySelector('.collapse-content').classList.remove('active')
})

$('.cart_box').fadeOut(0)
$('.cart_link').click(function (e) {
  e.preventDefault()
  $('.notify_box').fadeOut(0)
  $('.cart_box').fadeToggle(200)
})
$('.close_popup_cart').click(function (e) {
  e.preventDefault()
  $('.cart_box').fadeOut(200)

})

$('.notify_box').fadeOut(0)
$('.notification_link').click(function (e) {
  e.preventDefault()
  $('.notify_box').fadeToggle(200)
  $('.cart_box').fadeOut(0)

})
$('.close_popup_notify').click(function (e) {
  e.preventDefault()
  $('.notify_box').fadeOut(200)
})


$( document ).ready(function() {
  var swiper1 = new Swiper(".cources_section .swiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button1",
      prevEl: ".swiper-button2",
    },
    breakpoints: {
      1100: {
        slidesPerGroup: 3,
        slidesPerView: 3,
      },
      992: {
        slidesPerGroup: 3,
        slidesPerView: 3,
      },
     768: {
        slidesPerGroup: 2,
        slidesPerView: 2,
      },
      360: {
        slidesPerGroup: 1,
        slidesPerView: 1,
      },
    },
  });

      var swiper2 = new Swiper(".feedback_section .swiper", {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 3,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button1",
          prevEl: ".swiper-button2",
        },
        breakpoints: {
          1100: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 3,
          },
         768: {
            slidesPerGroup: 2,
            slidesPerView: 2,
          },
          360: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
        },
      
      });  
      
      var swiper3 = new Swiper(".cources .swiper", {
        slidesPerView: 3,
        spaceBetween: 10,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button1",
          prevEl: ".swiper-button2",
        },
        breakpoints: {
          1100: {
            slidesPerGroup: 3,
            slidesPerView: 3,
          },
          992: {
            slidesPerGroup: 3,
            slidesPerView: 3,
          },
         768: {
            slidesPerGroup: 2,
            slidesPerView: 2,
          },
          360: {
            slidesPerGroup: 1,
            slidesPerView: 1,
          },
        },
      }); 
});




// My Rating...............//

$(".my-rating.editable").starRating({
    starSize: 15,
    readOnly: false,
    initialRating: 4,
    emptyColor: '#D6D2D2',
    ratedColor: '#FFD072',
    useGradient: false,
    disableAfterRate: false,
    callback: function (currentRating, $el) {
        // make a server call here
    }
});

$(".my-rating.lg").starRating({
    starSize: 30,
    readOnly: false,
    initialRating: 4.5,
    emptyColor: '#D6D2D2',
    ratedColor: '#FFD072',
    useGradient: false,
    disableAfterRate: false,
    callback: function (currentRating, $el) {
        // make a server call here
}
});

$(".my-rating.readOnly").starRating({
    starSize: 15,
    readOnly: true,
    useGradient: false,
    ratedColor: '#FBB039',
    initialRating: 4.6,
    callback: function (currentRating, $el) {
        // make a server call here
}
});
