AppName.Modules.ThemeModule = (function () {
  //Dependencies
  var core = AppName.Core;

  //////////////////////
  // Private Methods //
  ////////////////////
  var _privateMethod = function () {
    // private stuff
  };

  /////////////////////
  // Public Methods //
  ///////////////////
  var init = function () {
    _privateMethod();
  };

  return {
    init: init,
  };
})();

new fullpage("#fullpage", {
  licenseKey: "YOUR KEY HERE",
  // sectionsColor: ["yellow", "orange", "#C0C0C0", "#ADD8E6"],
  anchors:['home', 'about', 'services', 'clients', 'cases', 'virtual-reality', 'newsletter', 'our-team', 'contact-us']
});

$(document).ready(function () {
  console.log("ready!");
  var swiper = new Swiper(".swiper-container.case-study", {
    navigation: {
      nextEl: ".custom-swiper-next",
      prevEl: ".custom-swiper-prev",
    },
  });

  var swiperNewsletter = new Swiper(".swiper-container.newsletter", {
    slidesPerView: 'auto',
    spaceBetween: 30,
    // loop: true,
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
