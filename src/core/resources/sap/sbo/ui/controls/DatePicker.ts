/// <reference path="../basecontrol.ts" />
module sap.sbo.ui.controls {

    import BaseControl = sap.sbo.ui.BaseControl;

    export function DatePickerDirective(): Object {
        return BaseControl.makeDirective({
            templateUrl: 'resources/sap/sbo/ui/controls/DatePicker.html'
        });
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