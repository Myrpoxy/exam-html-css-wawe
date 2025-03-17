$(document).ready(function () {
    $('.slider__items').slick({
        arrows: false,
        dots: true,
        appendDots: $('.slider__scroller'),
        slidesToShow: 1,
        slidesToScroll: 1
    });
});