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
        degree: number;
        percent: string;
        text: string;
        label: string;
        suffix: string;
    }

    export interface CircleProgressAttributes extends ng.IAttributes {
        percent: string;
        label: string;
        suffix: string;
        text: string;
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
            this.scope.percent = this.attrs.percent;
            this.scope.degree = parseInt(String(parseFloat(this.attrs.percent) * 360), 10) / 100 ;
            this.scope.text = this.attrs.text;
            this.scope.label = this.attrs.label;
            this.scope.suffix = this.attrs.suffix;
        }
    }
}