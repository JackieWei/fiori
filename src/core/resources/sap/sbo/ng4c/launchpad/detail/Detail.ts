/// <reference path="../../basecontroller.ts" />
module sap.sbo.ng4c.launchpad.detail {

    import BaseController = sap.sbo.ng4c.BaseController;

    export interface DetailScope extends Scope {
    }

    export class Detail extends BaseController {

        private scope: DetailScope;

        public constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes) {
            super($scope, $element, $attrs, "sap.sbo.ng4c.launchpad.detail.Detail");
            this.scope = <DetailScope>this.$scope;
        }
    }
}