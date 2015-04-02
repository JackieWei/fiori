/// <reference path="../../app/service/storage.ts" />
/// <reference path="../../basecontroller.ts" />
module sap.sbo.ng4c.launchpad.aside {
    import BaseController = sap.sbo.ng4c.BaseController;
    import Storage = sap.sbo.ng4c.app.service.Storage;

    export interface IAsideScope extends Scope {
        liteMode: boolean;
    }

    export class AsideProps {
        public static HIDE_WIDTH: number = 50;
        public static SHOW_WIDTH: number = 1000;
    }

    export class Aside extends BaseController {

        public static ELEMTNT_INDEX: number = 0;

        private scope: IAsideScope;
        private storage: Storage;

        public constructor($scope: IAsideScope, $element: JQuery, $attrs: ng.IAttributes, storage: Storage) {
            super($scope, $element, $attrs, "sap.sbo.ng4c.launchpad.aside.Aside");
            $scope.$on("showOrHideMenuBroadcast", $.proxy(this.onShowOrHideMenuBroadcast, this));
            this.scope = <IAsideScope>this.$scope;
            this.storage = storage;
            this.scope.liteMode = this.storage.getBoolean("showOrHideMenu", true);
            this.scope.width = AsideProps.SHOW_WIDTH;
        }

        private onShowOrHideMenuBroadcast(event: ng.IAngularEvent, showOrHide: boolean) {
            if (showOrHide) {
                this.scope.width = AsideProps.SHOW_WIDTH;
            } else {
                this.scope.width = AsideProps.HIDE_WIDTH;
            }
            this.scope.liteMode = !showOrHide;

            this.storage.setBoolean("showOrHideMenu", this.scope.liteMode);
        }
    }
}