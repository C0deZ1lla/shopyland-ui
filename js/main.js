function openNav() {
    $("#leftSidenav").removeClass('sidenav-close');
    $("#leftSidenav").addClass('sidenav-open');

    $("#main").removeClass('main-close');
    $("#main").addClass('main-open');
}

function closeNav() {
    $("#leftSidenav").removeClass('sidenav-open');
    $("#leftSidenav").addClass('sidenav-close');

    $("#main").removeClass('main-open');
    $("#main").addClass('main-close');
}

var swiper = new Swiper(".slide-container", {
    slidesPerView: 4,
    spaceBetween: 20,
    sliderPerGroup: 4,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
    },
  });