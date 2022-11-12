$(document).ready(function(){
    
    $('.promo-spesial').slick({
      infinite: true,
        autoplay:true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
        prevArrow:'<span class="slick-arrow slick-prev"><img src="images/button%20left.svg"></span>',
        nextArrow:'<span class="slick-arrow slick-next"><img src="images/button%20right.svg"></span>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            autoplay:true,  
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay:true,  
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true,
          }
        }
      ]
    });

});

$(document).ready(function(){
    
    $('.awards-list').slick({
      infinite: true,
        autoplay:true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
        prevArrow:'<span class="slick-arrow slick-prev"><img src="images/button%20left.svg"></span>',
        nextArrow:'<span class="slick-arrow slick-next"><img src="images/button%20right.svg"></span>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            autoplay:true,  
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay:true,  
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true,
          }
        }
      ]
    });

});