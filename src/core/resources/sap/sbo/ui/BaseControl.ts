/// <reference path="../ng4c/scope.ts" />
/// <reference path="../ng4c/basecontroller.ts" />
module sap.sbo.ui {

    import BaseController = sap.sbo.ng4c.BaseController;
    import Scope = sap.sbo.ng4c.Scope;

    export interface DirectiveConfig {
        restrict?: string;
        priority?: number;
        replace?: boolean;
        scope?: boolean;
        transclude?: boolean;
        templateUrl: string;
        compile?: Function;
        link?: Function;
    }

    export interface ControlScope extends Scope {
        value: string;
    }

    export interface ControlAttributes extends ng.IAttributes {
        ngValue: string;
    }

    export class BaseControl extends BaseController {

        private static DIRECTIVE: DirectiveConfig = {
            restrict: "E",
            priority: 0,
            replace: true,
            scope: true,
            transclude: true,
            templateUrl: '',
            compile: function ($element, $attrs, $transclude) {
                return {
                    pre: function ($scope, $element, $attrs, $controller) {
                        console.log("Control Pre");
                    },
                    post: function ($scope, $element, $attrs, $controller) {
                        console.log("Control Post");
                    }

                }
            },
            link: function ($scope, $element, $attrs, $controller): void {
                console.log("Control Linked!");
            }
        }

        public static makeDirective(directive: DirectiveConfig): any {
            return $.extend(BaseControl.DIRECTIVE, directive);
        }

        public constructor($scope: ControlScope, $element: JQuery, $attrs: ng.IAttributes, $package: string) {
            super($scope, $element, $attrs, $package);
        }
    }
}