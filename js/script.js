$(document).ready(function(){
  $('.studio-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
});

$(document).ready(function(){
  $('.choose-first').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
});

$(document).ready(function(){
  $('.choose-second').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
});

$(document).ready(function(){
  $('.choose-third').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
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
