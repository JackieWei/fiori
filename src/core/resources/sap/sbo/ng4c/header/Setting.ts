/// <reference path="../app/service/router.ts" />
/// <reference path="../app/service/storage.ts" />
/// <reference path="../basecontroller.ts" />
module sap.sbo.ng4c.header {
    import BaseController = sap.sbo.ng4c.BaseController;
    import Storage = sap.sbo.ng4c.app.service.Storage;
    import Router = sap.sbo.ng4c.app.service.Router;

    export interface SettingScope extends Scope {
        onThemeChange: Function;
        settingPress: Function;
        meta: SettingMeta;
        select: string;
    }

    export interface SettingMeta {
        setting: boolean;
    }

    export class Setting extends BaseController {
        private scope: SettingScope;
        private storage: Storage;
        private router: Router;

        public constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes, storage: Storage, router: Router) {
            super($scope, $element, $attrs, "sap.sbo.ng4c.header.Setting");
            this.scope = <SettingScope>$scope;
            this.storage = storage;
            this.router = router;

            this.scope.onThemeChange = $.proxy(this.onThemeChange, this);

            this.scope.meta = { setting: false };
            this.scope.settingPress = $.proxy(this.settingPress, this);
            this.scope.$on("bodyClickBroadcast", $.proxy(this.onPressOutside, this));
        }

        public onThemeChange($event: JQueryEventObject): void {
            this.scope.$emit("switchTheme", this.scope.select);
        }

        private settingPress($event: JQueryEventObject): void {
            this.scope.meta.setting = true;
        }

        private onPressOutside(event: ng.IAngularEvent): void {
            
        }
    }
}