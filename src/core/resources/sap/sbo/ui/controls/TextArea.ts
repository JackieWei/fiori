/// <reference path="../basecontrol.ts" />
module sap.sbo.ui.controls {

    import BaseControl = sap.sbo.ui.BaseControl;

    export function TextAreaDirective(): Object {
        return BaseControl.makeDirective({
            templateUrl: 'resources/sap/sbo/ui/controls/TextArea.html'
        });
    }

    export interface TextAreaScope extends ControlScope {
    }

    export interface TextAreaAttributes extends ControlAttributes {
    }

    export class TextArea extends BaseControl {

        private scope: TextAreaScope;
        private attrs: TextAreaAttributes;

        public constructor($scope: ControlScope, $element: JQuery, $attrs: ControlAttributes) {
            super($scope, $element, $attrs, "sap.sbo.ui.controls.TextArea");

            this.scope = <TextAreaScope>this.$scope;
            this.attrs = <TextAreaAttributes> $attrs;

            this.buildScope();
        }

        private buildScope():void {
            this.scope.value = this.attrs.ngValue;
        }
    }
}