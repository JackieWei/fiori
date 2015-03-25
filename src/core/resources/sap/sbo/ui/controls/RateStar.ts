/// <reference path="../basecontrol.ts" />
module sap.sbo.ui.controls {

    import BaseControl = sap.sbo.ui.BaseControl;

    export function RateStarDirective(): Object {
        return {
            restrict: "E",
            priority: 0,
            replace: true,
            scope: true,
            transclude: true,
            templateUrl: 'resources/sap/sbo/ui/controls/RateStar.html',
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

    export interface RateStarScope extends ControlScope {
        progress: number;
        imgIndex: number;
    }

    export interface RateStarAttributes extends ng.IAttributes {
        progress: number;
        score: number;
    }

    export class RateStar extends BaseControl {

        private scope: RateStarScope;
        private attrs: RateStarAttributes;

        public constructor($scope: ControlScope, $element: JQuery, $attrs: ng.IAttributes) {
            super($scope, $element, $attrs, "sap.sbo.ui.controls.RateStar");

            this.scope = <RateStarScope>this.$scope;
            this.attrs = <RateStarAttributes> $attrs;

            this.buildScope();
        }

        private buildScope() {
            this.scope.progress = this.attrs.progress;
            this.scope.imgIndex = 3;
        }
    }
}