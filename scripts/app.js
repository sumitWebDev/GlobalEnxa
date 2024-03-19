$(document).ready(function(){
    $('#productsContainer').slick({
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 4000,
        lazyLoad: 'ondemand',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });
    $(".carousel.lazy-load").on('slide.bs.carousel', function(ev){
        var lazy;
        
        lazy = $(ev.relatedTarget).find("img[data-src]");
        lazy.attr("src", lazy.data('src'));
        lazy.removeAttr("data-src");
      });
});

