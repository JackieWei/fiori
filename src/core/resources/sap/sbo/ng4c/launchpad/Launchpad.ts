/// <reference path="../app/storage.ts" />
/// <reference path="../basecontroller.ts" />
module sap.sbo.ng4c.launchpad {
    import BaseController = sap.sbo.ng4c.BaseController;
    import Config = sap.sbo.ng4c.app.Config;
    import Storage = sap.sbo.ng4c.app.Storage;

    export interface LaunchpadScope extends Scope {
        asideWidth: number;
    }

    export class Launchpad extends BaseController {

        private scope: LaunchpadScope;
        private config: Config;
        private storage: Storage;

        public constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes, config: Config, storage: Storage) {
            super($scope, $element, $attrs, "sap.sbo.ng4c.launchpad.Launchpad");

            this.scope = <LaunchpadScope>this.$scope;
            this.config = config;
            this.storage = storage;

            var showOrHide: boolean = this.storage.getBoolean("showOrHideMenu", true);
            this.scope.asideWidth = !showOrHide ? this.config.ui.menuFullWidth : this.config.ui.menuLightWidth;

            this.scope.$on("showOrHideMenuBroadcast", $.proxy(this.onShowOrHideMenuBroadcast, this));
        }

        public onShowOrHideMenuBroadcast(event: ng.IAngularEvent, showOrHide: boolean) {
            if (showOrHide) {
                this.scope.asideWidth = this.config.ui.menuFullWidth;
            } else {
                this.scope.asideWidth = this.config.ui.menuLightWidth;
            }
        }
    }
} 