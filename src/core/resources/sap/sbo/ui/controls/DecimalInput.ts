/// <reference path="../basecontrol.ts" />
module sap.sbo.ui.controls {

    import BaseControl = sap.sbo.ui.BaseControl;

    export function DecimalInputDirective(): Object {
        return BaseControl.makeDirective({
            templateUrl: 'resources/sap/sbo/ui/controls/DecimalInput.html'
        });
    }

    export interface DecimalInputScope extends ControlScope {
    }

    export interface DecimalInputAttributes extends ControlAttributes {
    }

    export class DecimalInput extends BaseControl {

        private scope: DecimalInputScope;
        private attrs: DecimalInputAttributes;

        public constructor($scope: ControlScope, $element: JQuery, $attrs: ControlAttributes) {
            super($scope, $element, $attrs, "sap.sbo.ui.controls.DecimalInput");

            this.scope = <DecimalInputScope>this.$scope;
            this.attrs = <DecimalInputAttributes> $attrs;
            
            this.buildScope();   
        }

        private buildScope(): void {
            this.scope.value = this.attrs.ngValue;
        }
    }
}