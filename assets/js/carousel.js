
console.log("hello world");


$(document).ready(function(){
    $('.slick-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });
  });
