$(document).ready(function(){
    $('#productsContainer').slick({
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 4000,
        lazyLoad: 'ondemand',
    });
    $(".carousel.lazy-load").on('slide.bs.carousel', function(ev){
        var lazy;
        
        lazy = $(ev.relatedTarget).find("img[data-src]");
        lazy.attr("src", lazy.data('src'));
        lazy.removeAttr("data-src");
      });
});

