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

        public constructor($scope: ControlScope, $element: JQuery, $attrs: ng.IAttributes, $package: string) {
            super($scope, $element, $attrs, $package);
        }
    }
}