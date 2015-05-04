/// <reference path="../basecontrol.ts" />
module sap.sbo.ui.controls {

    import BaseControl = sap.sbo.ui.BaseControl;

    export function InputDirective(): Object {
        return {
            restrict: "E",
            priority: 0,
            replace: true,
            scope: true,
            transclude: true,
            templateUrl: 'resources/sap/sbo/ui/controls/Input.html',
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

    export interface InputScope extends ControlScope {
    }

    export interface InputAttributes extends ControlAttributes {
    }

    export class Input extends BaseControl {

        private scope: InputScope;
        private attrs: InputAttributes;

        public constructor($scope: ControlScope, $element: JQuery, $attrs: ControlAttributes) {
            super($scope, $element, $attrs, "sap.sbo.ui.controls.Input");
            this.scope = <InputScope>this.$scope;
            this.attrs = <InputAttributes> $attrs;

            this.buildScope();
        }

        private buildScope(): void {
            this.scope.value = this.attrs.ngValue;
        }
    }
}