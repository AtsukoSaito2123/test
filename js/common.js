$(function (){
  $('.slick-area').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    // autoplay: true,
    // autoplaySpeed: 1200,
    dots: true,
    
    responsive: [{
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        speed: 600,
      },
    },
    ]
  });
});