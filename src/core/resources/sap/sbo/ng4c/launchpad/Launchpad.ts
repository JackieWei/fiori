/// <reference path="../app/service/storage.ts" />
/// <reference path="../basecontroller.ts" />
/// <reference path="../app/bodyctrl.ts" />
module sap.sbo.ng4c.launchpad {
    import BaseController = sap.sbo.ng4c.BaseController;
    import Config = sap.sbo.ng4c.app.Config;
    import Storage = sap.sbo.ng4c.app.service.Storage;
    import BodyCtrl = sap.sbo.ng4c.app.BodyCtrl;

    export interface LaunchpadScope extends Scope{
        asideLeft: number;
        asideRight: number;
        asideWidth: number;
        contentLeft: number;
        contentRight: number;
        contentWidth: number;
        noticeLeft: number;
        noticeRight: number;
        noticeWidth: number;

        asideScaleX: number;
        asideScaleY: number;
        contentScaleX: number;
        contentScaleY: number;
        noticeScaleX: number;
        noticeScaleY: number;

        elementIndex: number;
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

            this.scope.$on("focusChangeBroadcast", $.proxy(this.onShowOrHideMenuBroadcast, this));

            //this.lalala(1,3,4);

            this.focusOnElement(1);
        }

        private onShowOrHideMenuBroadcast(event: ng.IAngularEvent, elementIndex: number): void {
            this.focusOnElement(elementIndex);
        }

        private lalala():void {
            alert(arguments.length);
        }

        private focusOnElement(elementIndex: number): void {
            this.scope.elementIndex = elementIndex;
            this.scope.$applyAsync();
            return;
            if (elementIndex === 0) {
                this.scope.asideLeft = 0;
                this.scope.asideRight = 50;
                this.scope.asideScaleX = 1;
                this.scope.asideScaleY = 1;
                this.scope.asideWidth = 50;

                this.scope.contentLeft = 50;
                this.scope.contentScaleX = 0.8;
                this.scope.contentScaleY = 0.8;
                this.scope.contentWidth = 100;

                this.scope.noticeRight = 100;
                this.scope.noticeScaleX = 0.8;
                this.scope.noticeScaleY = 0.8;
                this.scope.noticeWidth = 50;
            } else if (elementIndex === 2) {
                this.scope.asideLeft = -50;
                this.scope.asideRight = 100;
                this.scope.asideScaleX = 0.8;
                this.scope.asideScaleY = 0.8;
                this.scope.asideWidth = 50;

                this.scope.contentLeft = -50;
                this.scope.contentRight = 30;
                this.scope.contentScaleX = 0.8;
                this.scope.contentScaleY = 0.8;
                this.scope.contentWidth = 100;

                this.scope.noticeLeft = 30;
                this.scope.noticeRight = 0;
                this.scope.noticeScaleX = 1;
                this.scope.noticeScaleY = 1;
                this.scope.noticeWidth = 70;
            } else {
                this.scope.asideLeft = -50;
                this.scope.asideRight = 100;
                this.scope.asideScaleX = 0.8;
                this.scope.asideScaleY = 0.8;
                this.scope.asideWidth = 50;

                this.scope.contentLeft = 0;
                this.scope.contentRight = 0;
                this.scope.contentScaleX = 1;
                this.scope.contentScaleY = 1;
                this.scope.contentWidth = 100;

                this.scope.noticeLeft = 100;
                this.scope.noticeRight = -50;
                this.scope.noticeScaleX = 0.8;
                this.scope.noticeScaleY = 0.8;
                this.scope.noticeWidth = 50;
            }

            this.scope.$applyAsync();
        }
    }
} 