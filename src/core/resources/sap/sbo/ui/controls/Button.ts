﻿/// <reference path="../basecontrol.ts" />
module sap.sbo.ui.controls {

    import BaseControl = sap.sbo.ui.BaseControl;

    export function ButtonDirective(): Object {
        return {
            restrict: "E",
            priority: 0,
            replace: true,
            scope: true,
            transclude: true,
            templateUrl: 'resources/sap/sbo/ui/controls/Button.html',
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

    export interface ButtonScope extends ControlScope {
        text: string;
        icon: string;
        style: string;
        tabindex: string;//should be int, -1 or >=0
    }

    export interface ButtonAttributes extends ng.IAttributes {
        icon: string;
    }

    export class Button extends BaseControl {

        private scope: ButtonScope;
        private attrs: ButtonAttributes;

        public constructor($scope: ControlScope, $element: JQuery, $attrs: ng.IAttributes) {
            super($scope, $element, $attrs, "sap.sbo.ui.controls.Button");

            this.scope = <ButtonScope>this.$scope;
            this.attrs = <ButtonAttributes> $attrs;

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