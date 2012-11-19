  var tbb = require("toolbarbutton").ToolbarButton({
    id: "preferences-button",
    label: "Prefences Button",
    image: require("self").data.url("gear.png"),
    onCommand: function () {
      require("window/utils").getMostRecentBrowserWindow().openPreferences()
    }
  });
 
  if (require("self").loadReason == "startup") {
    tbb.moveTo({
      toolbarID: "nav-bar",
      forceMove: false // only move from palette
    });
  }