/// <reference path="changename.ts" />
/// <reference path="appstorage.ts" />
/// <reference path="appctrl.ts" />
module sap.sbo.ng4c.app {
    'use strict';

    class Application {
        public static main() {
            angular.module('sap.sbo.ng4c.app.Application', ['ngRoute'])
                .service('storage', AppStorage)
                .controller('controller', AppCtrl)
                .directive('changeName', changeName)
                .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/', {
                    templateUrl: 'resources/sap/sbo/ng4c/app/Application.html',
                    controller: 'controller'
                })
                    .otherwise({
                    redirectTo: '/'
                });
            }]);
        }
    }
    Application.main();
}