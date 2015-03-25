/// <reference path="../basecontrol.ts" />
module sap.sbo.ui.controls {

    import BaseControl = sap.sbo.ui.BaseControl;

    export function SliderDirective(): Object {
        return BaseControl.makeDirective({
            templateUrl: 'resources/sap/sbo/ui/controls/Slider.html'
        });
    }

    export interface SliderScope extends ControlScope {
        text: string;
        icon: string;
        style: string;
        tabindex: string;//should be int, -1 or >=0
    }

    export interface SliderAttributes extends ng.IAttributes {
        icon: string;
    }

    export class Slider extends BaseControl {

        private scope: SliderScope;
        private attrs: SliderAttributes;

        public constructor($scope: ControlScope, $element: JQuery, $attrs: ng.IAttributes) {
            super($scope, $element, $attrs, "sap.sbo.ui.controls.Slider");

            this.scope = <SliderScope>this.$scope;
            this.attrs = <SliderAttributes> $attrs;

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