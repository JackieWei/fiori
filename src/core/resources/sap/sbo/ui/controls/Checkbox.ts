/// <reference path="../basecontrol.ts" />
module sap.sbo.ui.controls {

    import BaseControl = sap.sbo.ui.BaseControl;

    export function CheckboxDirective(): Object {
        return {
            restrict: "E",
            priority: 0,
            replace: true,
            scope: true,
            transclude: true,
            templateUrl: 'resources/sap/sbo/ui/controls/Checkbox.html',
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

    export interface CheckboxScope extends ControlScope {
        text: string;
        icon: string;
        style: string;
        tabindex: string;//should be int, -1 or >=0
    }

    export interface CheckboxAttributes extends ng.IAttributes {
        icon: string;
    }

    export class Checkbox extends BaseControl {

        private scope: CheckboxScope;
        private attrs: CheckboxAttributes;

        public constructor($scope: ControlScope, $element: JQuery, $attrs: ng.IAttributes) {
            super($scope, $element, $attrs, "sap.sbo.ui.controls.Checkbox");

            this.scope = <CheckboxScope>this.$scope;
            this.attrs = <CheckboxAttributes> $attrs;

            this.buildScope();
        }

        private buildScope() {
            this.scope.icon = this.getIconContent(this.attrs.icon);
        }

        private getIconContent(icon: string): string {
            return '';
        }
    }
}