/// <reference path="../app/storage.ts" />
/// <reference path="../launchpad/dashboard/dashboard.ts" />
/// <reference path="../launchpad/aside/aside.ts" />
/// <reference path="../basecontroller.ts" />
module sap.sbo.ng4c.header {
    import BaseController = sap.sbo.ng4c.BaseController;
    import Storage = sap.sbo.ng4c.app.Storage;
    import Aside = sap.sbo.ng4c.launchpad.aside.Aside;
    import Dashboard = sap.sbo.ng4c.launchpad.dashboard.Dashboard;

    export interface BeginScope extends Scope {
        focusOnHome: Function;
        focusOnPersonal: boolean;
    }

    export class Begin extends BaseController {
        private scope: BeginScope;
        private storage: Storage;

        public constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes, storage: Storage) {
            super($scope, $element, $attrs, "sap.sbo.ng4c.header.Begin");
            this.scope = <BeginScope>$scope;
            this.storage = storage;

            this.scope.focusOnHome = $.proxy(this.focusOnHome, this);
            this.scope.focusOnPersonal = $.proxy(this.focusOnPersonal, this);
        }

        public focusOnHome(): void {
            this.$scope.$emit("focusChange", Dashboard.ELEMTNT_INDEX);
        }

        public focusOnPersonal(): void {
            this.$scope.$emit("focusChange", Aside.ELEMTNT_INDEX);
        }
    }
}