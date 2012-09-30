(function (global) {
    "use strict";

    if (global.Debug.hasOwnProperty("isDebugBuild")) {
        return;
    }

    var thisPackage = Windows.ApplicationModel.Package.current,
        installedPath = thisPackage.installedLocation.path;

    if (typeof installedPath === "string") {

        if (installedPath.match(/\\debug\\appx$/i)) {

            Object.defineProperty(global.Debug, "isDebugBuild", {
                get: function () {
                    return true;
                }
            });

            //
            // Here you can define your own symbols, if you want.
            // E.g.:
            // 
            // Object.defineProperty(global.Debug, "isFoo", {
            //     get: function () {
            //         return "Bar"; // read-only property
            //     }
            // });
            //
            // global.Debug.isBar = "Foo"; // read-write property
            //
        }
    }

})(this);