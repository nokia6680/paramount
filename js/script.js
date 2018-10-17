$(document).ready(function(){
  $('.studio-slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<div class="prev"></div>',
    nextArrow: '<div class="next"></div>',
  });
});

$(document).ready(function(){
  $('.choose-slider__first').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<div class="prev-1"></div>',
    nextArrow: '<div class="next-1"></div>',
  });
});

$(document).ready(function(){
  $('.choose-slider__second').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<div class="prev-2"></div>',
    nextArrow: '<div class="next-2"></div>',
  });
});

$(document).ready(function(){
  $('.choose-slider__third').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<div class="prev-3"></div>',
    nextArrow: '<div class="next-3"></div>',
  });
});

var modalSearch = document.querySelector(".top-panel");
var closeButton = document.querySelector(".top-panel__close");
var openButton = document.querySelectorAll(".open-btn");

if (modalSearch) {
  for (var i = 0; i < openButton.length; i++) openButton[i].addEventListener("click", function(event) {
    event.preventDefault();
    modalSearch.classList.add("top-panel--on");
  });

  modalSearch.addEventListener("click", function() {
    modalSearch.classList.remove("top-panel--on");
  });

  modalSearch.addEventListener("click", function(event) {
    event.stopPropagation();
  });

  closeButton.addEventListener("click", function() {
    modalSearch.classList.remove("top-panel--on");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      modalSearch.classList.remove("top-panel--on");
    }
  });
}