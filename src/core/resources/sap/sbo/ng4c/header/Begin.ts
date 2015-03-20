/// <reference path="../app/storage.ts" />
/// <reference path="../basecontroller.ts" />
module sap.sbo.ng4c.header {
    import BaseController = sap.sbo.ng4c.BaseController;
    import Storage = sap.sbo.ng4c.app.Storage;

    export interface BeginScope extends Scope {
        showOrHideMenu: Function;
        showOrHideLogo: boolean;
    }

    export class Begin extends BaseController {
        private scope: BeginScope;
        private storage: Storage;

        public constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes, storage: Storage) {
            super($scope, $element, $attrs, "sap.sbo.ng4c.header.Begin");
            this.scope = <BeginScope>$scope;
            this.storage = storage;

            this.scope.showOrHideLogo = !this.storage.getBoolean("showOrHideMenu", true);
            this.scope.showOrHideMenu = $.proxy(this.showOrHideMenu, this);
        }

        private showOrHideMenu(name): void {
            this.scope.showOrHideLogo = !this.scope.showOrHideLogo;
            this.$scope.$emit("showOrHideMenu", this.scope.showOrHideLogo);
        }
    }
}