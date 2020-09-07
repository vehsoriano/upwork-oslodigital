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
  sectionsColor: ["yellow", "orange", "#C0C0C0", "#ADD8E6"],
});
