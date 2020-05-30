$(document).ready(function(){
  $('.studio-slider').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    prevArrow: '<div class="prev"></div>',
    nextArrow: '<div class="next"></div>',
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
          arrows: true,
          prevArrow: '<div class="prev"></div>',
          nextArrow: '<div class="next"></div>'
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
          arrows: true,
          prevArrow: '<div class="prev"></div>',
          nextArrow: '<div class="next"></div>'
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          arrows: false
        }
      }
    ]
  });
});

$(document).ready(function(){
  $('.choose-slider__first').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    prevArrow: '<div class="prev-1"></div>',
    nextArrow: '<div class="next-1"></div>',
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
          arrows: true,
          prevArrow: '<div class="prev-1"></div>',
          nextArrow: '<div class="next-1"></div>'
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
          arrows: true,
          prevArrow: '<div class="prev-1"></div>',
          nextArrow: '<div class="next-1"></div>'
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          arrows: false
        }
      }
    ]
  });
});

$(document).ready(function(){
  $('.choose-slider__second').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    prevArrow: '<div class="prev-2"></div>',
    nextArrow: '<div class="next-2"></div>',
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
          arrows: true,
          prevArrow: '<div class="prev-2"></div>',
          nextArrow: '<div class="next-2"></div>'
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
          arrows: true,
          prevArrow: '<div class="prev-2"></div>',
          nextArrow: '<div class="next-2"></div>'
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          arrows: false
        }
      }
    ]
  });
});

$(document).ready(function(){
  $('.choose-slider__third').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    prevArrow: '<div class="prev-3"></div>',
    nextArrow: '<div class="next-3"></div>',
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
          arrows: true,
          prevArrow: '<div class="prev-3"></div>',
          nextArrow: '<div class="next-3"></div>'
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
          arrows: true,
          prevArrow: '<div class="prev-3"></div>',
          nextArrow: '<div class="next-3"></div>'
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          arrows: false
        }
      }
    ]
  });
});

$(document).ready(function(){
  $('.series').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    prevArrow: $('.series-prev'),
    nextArrow: $('.series-next'),
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
          arrows: true,
          prevArrow: $('.series-prev'),
          nextArrow: $('.series-next'),
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
          arrows: true,
          prevArrow: $('.series-prev'),
          nextArrow: $('.series-next'),
        }
      }
    ]
  });
});

var menuOpener = document.querySelector('.header-nav__toggle');
var menu = document.querySelector('.nav-list');

menuOpener.addEventListener('click', function () {
  menu.classList.toggle('active');
  menuOpener.classList.toggle('open');

  return false;
});

var searchOpener = document.querySelector('.header-nav__search');
var search = document.querySelector('.header-nav__form');

searchOpener.addEventListener('click', function () {
  search.classList.toggle('active');
  searchOpener.classList.toggle('active');
});
