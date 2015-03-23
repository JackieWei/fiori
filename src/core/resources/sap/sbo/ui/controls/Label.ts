/// <reference path="../basecontrol.ts" />
module sap.sbo.ui.controls {

    import BaseControl = sap.sbo.ui.BaseControl;

    export function LabelDirective(): Object {
        return {
            restrict: "E",
            priority: 0,
            replace: true,
            scope: true,
            transclude: true,
            templateUrl: 'resources/sap/sbo/ui/controls/Label.html',
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

    export interface LabelScope extends ControlScope {
        text: string;
    }

    export interface LabelAttributes extends ControlAttributes {
        text: string;
    }

    export class Label extends BaseControl {
        private scope: LabelScope;
        private attrs: LabelAttributes;

        public constructor($scope: LabelScope, $element: JQuery, $attrs: ng.IAttributes) {
            super($scope, $element, $attrs, "sap.sbo.ui.controls.Label");
            this.scope = <LabelScope>this.$scope;
            this.attrs = <LabelAttributes>this.$attrs;
            this.buildScope();
        }

        public buildScope(): void {
            this.scope.text = this.attrs.text;
        }
    }
} 