/// <reference path="../basecontrol.ts" />
module sap.sbo.ui.controls {

    import BaseControl = sap.sbo.ui.BaseControl;

    export function DaysInfoDirective(): Object {
        return {
            restrict: "E",
            priority: 0,
            replace: true,
            scope: true,
            transclude: true,
            templateUrl: 'resources/sap/sbo/ui/controls/DaysInfo.html',
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
        };

    }

    export interface DaysInfoScope extends ControlScope {
        progress: number;
        imgIndex: number;
    }

    export interface DaysInfoAttributes extends ng.IAttributes {
        progress: number;
        score: number;
    }

    export class DaysInfo extends BaseControl {

        private scope: DaysInfoScope;
        private attrs: DaysInfoAttributes;

        public constructor($scope: ControlScope, $element: JQuery, $attrs: ng.IAttributes) {
            super($scope, $element, $attrs, "sap.sbo.ui.controls.DaysInfo");

            this.scope = <DaysInfoScope>this.$scope;
            this.attrs = <DaysInfoAttributes> $attrs;

            this.buildScope();
        }

        private buildScope() {
            this.scope.imgIndex = 4;
        }
    }
}