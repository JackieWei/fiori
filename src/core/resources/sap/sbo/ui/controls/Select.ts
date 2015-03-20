/// <reference path="../basecontrol.ts" />
module sap.sbo.ui.controls {

    import BaseControl = sap.sbo.ui.BaseControl;

    export function SelectDirective(): Object {
        return BaseControl.makeDirective({
            templateUrl: 'resources/sap/sbo/ui/controls/Select.html'
        });
    }

    export interface SelectScope extends ControlScope {
    }

    export interface SelectAttributes extends ControlAttributes {
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