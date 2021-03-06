//slider SnakeParallax js
$(window, document).SnakeParallax({
  backgroundImage: "url('assets/images/bike.jpg')",
  backgroundPosition:"top top"
  });


//Counting-js

 $('#bar1').barfiller();
$('#bar1').barfiller({

  // color of bar
  barColor: '#000',

  // shows a tooltip
  tooltip: true,

  // duration in ms
  duration: 1000,
  

  // re-animate on resize
  animateOnResize: true,

  // custom symbol
  symbol: "%"
  
});
$('#bar2').barfiller({

  // color of bar
  barColor: '#000',

  // shows a tooltip
  tooltip: true,

  // duration in ms
  duration: 1000,

  // re-animate on resize
  animateOnResize: true,

  // custom symbol
  symbol: "%"
  
});
$('#bar3').barfiller({

  // color of bar
  barColor: '#000',

  // shows a tooltip
  tooltip: true,
  

  // duration in ms
  duration: 1000,

  // re-animate on resize
  animateOnResize: true,

  // custom symbol
  symbol: "%"
  
});
$('#bar4').barfiller({

  // color of bar
  barColor: '#000',

  // shows a tooltip
  tooltip: true,

  // duration in ms
  duration: 1000,

  // re-animate on resize
  animateOnResize: true,

  // custom symbol
  symbol: "%"
  
});







// isotope grid 

var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: '.grid-sizer'
  }
})
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

// our-blog
$('.blog-single').isotope({
  itemSelector: '.blog-content',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: '.blog-sizer'
  }
})
// map 
var map = new GMaps({
  el: '#map',
  lat: -12.043333,
  lng: -77.028333
});

// navber background color change 
   // Collapse Navbar
   var navbarNavDropdown = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-light");
    } else {
      $("#mainNav").removeClass("navbar-light");
    }
  };
  // Collapse now if page is not at top
  navbarNavDropdown();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarNavDropdown);

  //owl-carousel
  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:1,
        dots:true,
        nav:true,
        // autoplay:true,
        autoplaySpeed:1000,
        smartSpeed:1000,
        autoplayHoverPause:true,
        // loop:true,
    });
})


  /*--------------------------------
        03. Scroll To Top
    ---------------------------------*/
    $.scrollUp({
      scrollText: '<i class="fa fa-angle-up"></i>',
      easingType: 'linear',
      scrollSpeed: 900,
      animation: 'fade'
  });