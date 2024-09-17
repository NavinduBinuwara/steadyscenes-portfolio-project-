const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 1,
    loop: true,
    autoplay: {
        delay: 3000, // Set the delay in milliseconds between slides
        disableOnInteraction: false,
         // Set to false to continue autoplay even when the user interacts with the slider
      },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    //breakpoints: {
      // when window width is <= 767px (mobile)
      //767: {
      //  slidesPerView: 1,
      //},
      // when window width is >= 768px and <= 991px (tablet)
      //991: {
     //   slidesPerView: 2,
     // },
      // when window width is >= 992px (desktop)
     // 992: {
      //  slidesPerView: 3,
     // },
   // },
    
  });

  
//   //testimonial swiper
//   document.addEventListener('DOMContentLoaded', function () {
//     var swiper = new Swiper('.t-swiper', {
//         slidesPerView: 3,
//         spaceBetween: 10,
//         loop: true,
//         autoplay: {
//             delay: 3000, // Set the delay in milliseconds between slides
//             disableOnInteraction: false,
//              // Set to false to continue autoplay even when the user interacts with the slider
//           },
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//         },
//     });   
// });