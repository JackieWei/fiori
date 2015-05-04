/// <reference path="../basecontrol.ts" />
module sap.sbo.ui.controls {

    import BaseControl = sap.sbo.ui.BaseControl;

    export function NumberInputDirective(): Object {
        return {
            restrict: "E",
            priority: 0,
            replace: true,
            scope: true,
            transclude: true,
            templateUrl: 'resources/sap/sbo/ui/controls/NumberInput.html',
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

    export interface NumberInputScope extends ControlScope {
    }

    export interface NumberInputAttributes extends ControlAttributes {
    }

    export class NumberInput extends BaseControl {

        private scope: NumberInputScope;
        private attrs: NumberInputAttributes;

        public constructor($scope: ControlScope, $element: JQuery, $attrs: ControlAttributes) {
            super($scope, $element, $attrs, "sap.sbo.ui.controls.NumberInput");

            this.scope = <NumberInputScope>this.$scope;
            this.attrs = <NumberInputAttributes> $attrs;

            this.buildScope();
        }

        private buildScope() {
            this.scope.value = this.attrs.ngValue;
        }
    }
}