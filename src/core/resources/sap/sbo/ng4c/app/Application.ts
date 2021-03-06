﻿/// <reference path="registry.ts" />
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
            var app = angular.module('Application', ['ngRoute', 'ngResource']);

            var modules: IController[] = Registry.controllers;
            var controls: IControl[] = Registry.controls;
            var services: IService[] = Registry.servies;
            var constants: IConstant[] = Registry.constants;
            var factories: IFactory[] = Registry.factories;

            factories.forEach((e) => {
                app.factory(e.name, e.factory);
            });

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
                    controller: 'sap.sbo.ng4c.app.DashboardCtrl'
                });
                $routeProvider.when('/list/:bo_abbr', {
                    templateUrl: 'resources/sap/sbo/ng4c/app/List.html',
                    controller: 'sap.sbo.ng4c.app.ListCtrl'
                });
                $routeProvider.when('/detail/:bo_abbr/:bo_idx', {
                    templateUrl: 'resources/sap/sbo/ng4c/app/Detail.html',
                    controller: 'sap.sbo.ng4c.app.DetailCtrl'
                });
                $routeProvider.when('/create/:bo_abbr', {
                    templateUrl: 'resources/sap/sbo/ng4c/app/Create.html',
                    controller: 'sap.sbo.ng4c.app.CreateCtrl'
                });
                $routeProvider.when('/overview/:bo_abbr', {
                    templateUrl: 'resources/sap/sbo/ng4c/app/Overview.html',
                    controller: 'sap.sbo.ng4c.app.OverviewCtrl'
                });
                $routeProvider.otherwise({
                    redirectTo: '/'
                });
            }])
        }
    }
    Application.main();
}