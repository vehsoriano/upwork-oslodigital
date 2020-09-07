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
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
  });
});
