/// <reference path="../../basecontroller.ts" />
module sap.sbo.ng4c.launchpad.aside {
    import BaseController = sap.sbo.ng4c.BaseController;

    export interface MenuScope extends Scope {
    }

    export class Menu extends BaseController {
        private scope: MenuScope;

        public constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes) {
            super($scope, $element, $attrs, "sap.sbo.ng4c.launchpad.aside.Menu");

            this.scope = <MenuScope> this.$scope;
        }
    }
}