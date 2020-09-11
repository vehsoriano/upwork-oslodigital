AppName.Modules.ThemeModule = (function () {
  //Dependencies
  var core = AppName.Core;


  var headerActiveNav = function() {
    var navItem = $('.nav-item.language');
    var navBar = $('.navbar-nav');
    var main = $('main');

    if (main.hasClass('no')) {
      navBar.find(navItem[0]).addClass('no')
    } else if(main.hasClass('eng')) {
      navBar.find(navItem[0]).addClass('eng')
    } 
  }
  //////////////////////
  // Private Methods //
  ////////////////////
  var _privateMethod = function () {
    // private stuff
  };

  /////////////////////
  // Public Methods //
  ///////////////////

  
  $(document).ready(function () {
    if($(window).width() > 991) {
      new fullpage("#fullpage", {
        licenseKey: "YOUR KEY HERE",
        // sectionsColor: ["yellow", "orange", "#C0C0C0", "#ADD8E6"],
        anchors:['home', 'about-strategy', 'about-technology', 'about-social', 'clients', 'e-commerce', 'cases', 'newsletter', 'our-team', 'contact-us'],
        // scrollBar:true
        // afterRender: function(){
        //   $('#icon').removeClass('hidden')
        // },
        onLeave: function(origin, destination, direction){
          var leavingSection = this;

          console.log(destination)
      
          //after leaving section 2
          if(origin.index == 0 && direction =='down'){
            $('#icon').removeClass('hidden')
          }

          if(origin.index == 1 && direction =='up'){
            $('#icon').addClass('hidden')
            $('#navbar-nav').removeClass('black-text')
          }

          if(origin.index == 1 && direction =='down'){
            $('#icon').addClass('white-icon')
            $('#navbar-nav').addClass('black-text')
          }

          if(origin.index == 2 && direction =='down'){
            $('#icon').removeClass('white-icon')
            $('#navbar-nav').removeClass('black-text')
          }

          if(origin.index == 2 && direction =='up'){
            $('#icon').removeClass('white-icon')
            $('#navbar-nav').removeClass('black-text')
          }

          if(origin.index == 3 && direction =='up'){
            $('#icon').addClass('white-icon')
            $('#navbar-nav').addClass('black-text')
          }

          if(origin.index == 3 && direction =='down'){
            $('#navbar-nav').addClass('black-text')
          }

          if(origin.index == 4 && direction =='up'){
            $('#icon').removeClass('white-icon')
            $('#navbar-nav').removeClass('black-text')
          }

          if(origin.index == 5 && direction =='up'){
            $('#icon').removeClass('white-icon')
          }

          if(origin.index == 4 && direction =='down'){
            $('#icon').addClass('white-icon')
          }

          if(origin.index == 5 && direction =='down'){
            $('#icon').removeClass('white-icon')
          }

          if(origin.index == 6 && direction =='up'){
            $('#icon').removeClass('white-icon')
          }

          if(origin.index == 6 && direction =='up'){
            $('#icon').addClass('white-icon')
          }

          if(origin.index == 8 && direction =='down'){
            $('#navbar-nav').removeClass('black-text')
          }

          if(origin.index == 9 && direction =='up'){
            $('#navbar-nav').addClass('black-text')
          }
        }
      });
    }
  })
  
  $(document).ready(function () {
    console.log("ready!");
    var swiper = new Swiper(".swiper-container.case-study", {
      navigation: {
        nextEl: ".custom-swiper-next",
        prevEl: ".custom-swiper-prev",
      },
      breakpoints: {
        // when window width is >= 320px
        991: {
          autoHeight: false,
        },
        320: {
          autoHeight: true,
        },
      }
    });
  
    var swiperNewsletter = new Swiper(".swiper-container.newsletter", {
      slidesPerView: 1,
      spaceBetween: 30,
      // autoHeight: true,
      // loop: true,
      breakpoints: {
        // when window width is >= 320px
        991: {
          autoHeight: true,
          slidesPerView: 'auto',
        },
      }
    });
  
    var $videoSrc;
    $(".video-btn").click(function () {
      $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $("#myModal").on("shown.bs.modal", function (e) {
      $("#video").attr(
        "src",
        $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
      );
    });
  
    $("#myModal").on("hide.bs.modal", function (e) {
      $("#video").attr("src", $videoSrc);
    });
  });

  var init = function () {
    _privateMethod();

    $(window).on('resize load', function() {
      headerActiveNav();
    })
  };

  return {
    init: init,
  };
})();
