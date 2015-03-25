/// <reference path="../launchpad/notice/notice.ts" />
/// <reference path="../basecontroller.ts" />
module sap.sbo.ng4c.header {
    import BaseController = sap.sbo.ng4c.BaseController;
    import Notice = sap.sbo.ng4c.launchpad.notice.Notice;

    export interface EndScope extends Scope {
        focusOnNotice: Function;
    }

    export class End extends BaseController {

        private scope: EndScope;

        public constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes) {
            super($scope, $element, $attrs, "sap.sbo.ng4c.header.End");

            this.scope = <EndScope>this.$scope;

            this.scope.focusOnNotice = $.proxy(this.focusOnNotice, this);
        }

        private focusOnNotice(): void {
            if (location.hash.length <= 2) {
                this.$scope.$emit("readyForChange", 2);
            } else {
                this.$scope.$emit("focusChange", 2);
            }
        }
    }
}