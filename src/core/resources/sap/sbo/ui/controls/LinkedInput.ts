/// <reference path="../basecontrol.ts" />
module sap.sbo.ui.controls {

    import BaseControl = sap.sbo.ui.BaseControl;

    export function LinkedInputDirective(): Object {
        return BaseControl.makeDirective({
            templateUrl: 'resources/sap/sbo/ui/controls/LinkedInput.html'
        });
    }

    export interface LinkedInputScope extends ControlScope {
    }

    export interface LinkedInputAttributes extends ControlAttributes {
    }

    export class LinkedInput extends BaseControl {

        private scope: LinkedInputScope;
        private attrs: LinkedInputAttributes;

        public constructor($scope: ControlScope, $element: JQuery, $attrs: ControlAttributes) {
            super($scope, $element, $attrs, "sap.sbo.ui.controls.LinkedInput");

            this.scope = <LinkedInputScope>this.$scope;
            this.attrs = <LinkedInputAttributes> $attrs;

            this.buildScope();
        }

        private buildScope(): void {
            this.scope.value = this.attrs.ngValue;
        }
    }
}