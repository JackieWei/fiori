﻿/// <reference path="../basecontrol.ts" />
module sap.sbo.ui.controls {

    import BaseControl = sap.sbo.ui.BaseControl;

    export function StatusSelectDirective(): Object {
        return {
            restrict: "E",
            priority: 0,
            replace: true,
            scope: true,
            transclude: true,
            templateUrl: 'resources/sap/sbo/ui/controls/StatusSelect.html',
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

    export interface StatusSelectScope extends ControlScope {
    }

    export interface StatusSelectAttributes extends ControlAttributes {
        index: number;
        options: string;
    }

    export class StatusSelect extends BaseControl {

        private scope: StatusSelectScope;
        private attrs: StatusSelectAttributes;

        public constructor($scope: ControlScope, $element: JQuery, $attrs: ControlAttributes) {
            super($scope, $element, $attrs, "sap.sbo.ui.controls.StatusSelect");

            this.scope = <StatusSelectScope>this.$scope;
            this.attrs = <StatusSelectAttributes> $attrs;

            this.buildScope();
        }

        private buildScope() {
            this.scope.value = this.attrs.ngValue;
        }
    }
}