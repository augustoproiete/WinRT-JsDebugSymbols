# JavaScript Debug Symbols for WinRT [![NuGet Version](http://img.shields.io/nuget/v/WinRT-JsDebugSymbols.svg?style=flat)](https://www.nuget.org/packages/WinRT-JsDebugSymbols/)

This module for WinRT JavaScript-based applications adds a property to the `Debug` global object that you can query to detect if the application is running with the Debug build configuration selected, allowing conditional execution of JavaScript code in a Windows Store app.

## Getting Started

The JavaScript Debug Symbols for WinRT module is available on nuget.org via the package [`WinRT-JsDebugSymbols`](https://nuget.org/packages/WinRT-JsDebugSymbols).

To install WinRT-JsDebugSymbols, run the following command in the Package Manager Console:

```
PM> Install-Package WinRT-JsDebugSymbols
```
    
Add a reference to the **debugSymbols.js** script in 
the header section of the **default.html** file:

```html
<script src="/js/debugSymbols.js"></script>
```

Now you can query the `Debug.isDebugBuild` property during the execution of the Windows Store app to determine if the app is running a Debug build or not.

### Example

```javascript
// Example:
//   Show a dialog box with details of any unhandled
//   exceptions occurring in the application, only for
//   Debug builds.
if (Debug.isDebugBuild) {
    WinJS.Application.onerror = function (e) {

        var dialog = new Windows.UI.Popups.MessageDialog(
            e.detail.stack, e.detail.message);

        dialog.showAsync().done();

        return true;
    };
}
```

### More information

* [Detect DEBUG build configuration via JavaScript in Windows Store apps](https://augustoproiete.net/blog/detect-debug-build-configuration-via-javascript-in-windows-store-apps/)

## Release History

Click on the [Releases](https://github.com/augustoproiete/WinRT-JsDebugSymbols/releases) tab on GitHub.

---

_Copyright &copy; 2012 C. Augusto Proiete & Contributors - Provided under the [Apache License, Version 2.0](http://apache.org/licenses/LICENSE-2.0.html)._
