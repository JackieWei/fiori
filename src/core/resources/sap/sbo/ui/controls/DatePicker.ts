/// <reference path="../basecontrol.ts" />
module sap.sbo.ui.controls {

    import BaseControl = sap.sbo.ui.BaseControl;

    export function DatePickerDirective(): Object {
        return {
            restrict: "E",
            priority: 0,
            replace: true,
            scope: true,
            transclude: true,
            templateUrl: 'resources/sap/sbo/ui/controls/DatePicker.html',
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

    export interface DatePickerScope extends ControlScope {
    }

    export interface DatePickerAttributes extends ControlAttributes {
    }

    export class DatePicker extends BaseControl {

        private scope: DatePickerScope;
        private attrs: DatePickerAttributes;

        public constructor($scope: ControlScope, $element: JQuery, $attrs: ControlAttributes) {
            super($scope, $element, $attrs, "sap.sbo.ui.controls.DatePicker");
            this.scope = <DatePickerScope>this.$scope;
            this.attrs = <DatePickerAttributes> $attrs;

            this.buildScope();
        }

        protected buildScope() {
            this.scope.value = this.attrs.ngValue;
        }
    }
}