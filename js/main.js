document.addEventListener("DOMContentLoaded", () => {

    const swiper = new Swiper('.swiper', {
        spaceBetween: 40,
        slidesPerView: 1.2,
        centeredSlides: true,
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });

});