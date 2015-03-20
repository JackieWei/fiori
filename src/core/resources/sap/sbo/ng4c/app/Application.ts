/// <reference path="registry.ts" />
/**
* Application definition
*/
module sap.sbo.ng4c.app {
    'use strict';

    export class Application {
        /**
            public static $inject = [
                '$scope',
                'storage'
            ];
        */
        public static main(): void {
            var app = angular.module('Application', ['ngRoute']);

            var modules: IController[] = Registry.controllers;
            var controls: IControl[] = Registry.controls;
            var services: IService[] = Registry.servies;
            var constants: IConstant[] = Registry.constants;

            modules.forEach((e) => {
                app.controller(e.name, e.controller);
            });

            controls.forEach((e) => {
                app.directive(e.name, e.directive);
            });
                
            services.forEach((e) => {
                app.service(e.name, e.service);
            });

            constants.forEach((e) => {
                app.constant(e.name, e.constant);
            });

            app.config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/', {
                    templateUrl: 'resources/sap/sbo/ng4c/app/Dashboard.html',
                    controller: 'sap.sbo.ng4c.app.AppCtrl'
                });
                $routeProvider.when('/list/:bo_abbr', {
                    templateUrl: 'resources/sap/sbo/ng4c/app/List.html',
                    controller: 'sap.sbo.ng4c.app.ListCtrl'
                });
                $routeProvider.when('/detail/:bo_abbr/:bo_idx', {
                    templateUrl: 'resources/sap/sbo/ng4c/app/Detail.html',
                    controller: 'sap.sbo.ng4c.app.DetailCtrl'
                });
                $routeProvider.otherwise({
                    redirectTo: '/'
                });
            }])
        }
    }
    Application.main();



}