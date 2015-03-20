var sap;
(function (sap) {
    var cloud;
    (function (cloud) {
        var launcher;
        (function (launcher) {
            var Launchpad = (function () {
                function Launchpad() {
                    this.code = 'my launchpad';
                    this.key = 3017;
                }
                Launchpad.prototype.show = function () {
                    console.log('hello launchpad');
                };
                return Launchpad;
            })();
            launcher.Launchpad = Launchpad;
        })(launcher = cloud.launcher || (cloud.launcher = {}));
    })(cloud = sap.cloud || (sap.cloud = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var cloud;
    (function (cloud) {
        var launcher;
        (function (launcher) {
            var App = (function () {
                function App() {
                }
                App.main = function () {
                    new launcher.Launchpad().show();
                };
                return App;
            })();
        })(launcher = cloud.launcher || (cloud.launcher = {}));
    })(cloud = sap.cloud || (sap.cloud = {}));
})(sap || (sap = {}));
//# sourceMappingURL=launcher.js.map