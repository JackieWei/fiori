/// <reference path="../../basecontroller.ts" />
module sap.sbo.ng4c.launchpad.aside {
    import BaseController = sap.sbo.ng4c.BaseController;

    export interface UserProps extends Scope {
    }

    export class User extends BaseController {
        private scope: UserProps;

        public constructor($scope: UserProps, $element: JQuery, $attrs: ng.IAttributes) {
            super($scope, $element, $attrs, "sap.sbo.ng4c.launchpad.aside.User");
            this.scope = <UserProps>this.$scope;
        }
    }
}