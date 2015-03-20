/// <reference path="../../basecontroller.ts" />
module sap.sbo.ng4c.launchpad.aside {
    import BaseController = sap.sbo.ng4c.BaseController;

    export interface LightAccessProps extends Scope {
    }

    export class LightAccess extends BaseController {
        private scope: LightAccessProps;

        public constructor($scope: LightAccessProps, $element: JQuery, $attrs: ng.IAttributes) {
            super($scope, $element, $attrs, "sap.sbo.ng4c.launchpad.aside.LightAccess");
            this.scope = <LightAccessProps>this.$scope;
        }
    }
}