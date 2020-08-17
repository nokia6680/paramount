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
