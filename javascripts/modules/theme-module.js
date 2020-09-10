AppName.Modules.ThemeModule = (function () {
  //Dependencies
  var core = AppName.Core;


  var headerActiveNav = function() {
    var navItem = $('.nav-item.language');
    var navBar = $('.navbar-nav');
    var main = $('main');

    if (main.hasClass('no')) {
      console.log(navBar.find(navItem[0]).addClass('no'))
    } else if(main.hasClass('eng')) {
      console.log(navBar.find(navItem[0]).addClass('eng'))
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
      slidesPerView: 'auto',
      spaceBetween: 30,
      // autoHeight: true,
      // loop: true,
      breakpoints: {
        // when window width is >= 320px
        991: {
          autoHeight: true,
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
