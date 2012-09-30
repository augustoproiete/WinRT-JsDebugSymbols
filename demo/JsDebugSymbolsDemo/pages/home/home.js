(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {

            if (!Debug.isDebugBuild) {
                // The cmdDebug button is visible only on Debug builds
                var cmdDebug = element.querySelector("#cmdDebug");
                cmdDebug.style.display = "none";
            }

            // The sentence shows if we are on a Debug build or not
            var sentence = element.querySelector("#sentence");
            var template = element.querySelector("#template").winControl;
            template.render({ isDebugBuild: Debug.isDebugBuild || false }, sentence);

            element.querySelector("#cmdBuildConfig").addEventListener("click", function () {

                var content;

                if (Debug.isDebugBuild) {
                    content = "You are running a Debug build of this app!";
                }
                else {
                    content = "You are *NOT* running a Debug build of this app!";
                }

                var dialog = new Windows.UI.Popups.MessageDialog(content);
                dialog.showAsync().done();
            });
        }
    });
    
})();
