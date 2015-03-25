/// <reference path="../basecontrol.ts" />
module sap.sbo.ui.controls {

    import BaseControl = sap.sbo.ui.BaseControl;

    export function CircleProgressDirective(): Object {
        return {
            restrict: "E",
            priority: 0,
            replace: true,
            scope: true,
            transclude: true,
            templateUrl: 'resources/sap/sbo/ui/controls/CircleProgress.html',
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

    export interface CircleProgressScope extends ControlScope {
        progress: number;
        imgIndex: number;
    }

    export interface CircleProgressAttributes extends ng.IAttributes {
        progress: string;
    }

    export class CircleProgress extends BaseControl {

        private scope: CircleProgressScope;
        private attrs: CircleProgressAttributes;

        public constructor($scope: ControlScope, $element: JQuery, $attrs: ng.IAttributes) {
            super($scope, $element, $attrs, "sap.sbo.ui.controls.CircleProgress");

            this.scope = <CircleProgressScope>this.$scope;
            this.attrs = <CircleProgressAttributes> $attrs;

            this.buildScope();
        }

        private buildScope() {
            this.scope.progress = parseFloat(this.attrs.progress);
            if (this.scope.progress === 84) {
                this.scope.imgIndex = 1;
            } else if (this.scope.progress === 62) {
                this.scope.imgIndex = 2;
            }
        }
    }
}