﻿/// <reference path="../basecontrol.ts" />
module sap.sbo.ui.controls {

    import BaseControl = sap.sbo.ui.BaseControl;

    export function SelectDirective(): Object {
        return {
            restrict: "E",
            priority: 0,
            replace: true,
            scope: true,
            transclude: true,
            templateUrl: 'resources/sap/sbo/ui/controls/Select.html',
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

    export interface SelectScope extends ControlScope {
        
    }

    export interface SelectAttributes extends ControlAttributes {
        index: number;
        options: string;
    }

    export class Select extends BaseControl {

        private scope: SelectScope;
        private attrs: SelectAttributes;

        public constructor($scope: ControlScope, $element: JQuery, $attrs: ControlAttributes) {
            super($scope, $element, $attrs, "sap.sbo.ui.controls.Select");

            this.scope = <SelectScope>this.$scope;
            this.attrs = <SelectAttributes> $attrs;

            this.buildScope();
        }

        private buildScope() {
            this.scope.value = this.attrs.ngValue;
        }
    }
}