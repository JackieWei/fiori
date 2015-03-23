/// <reference path="../app/storage.ts" />
/// <reference path="../basecontroller.ts" />
module sap.sbo.ng4c.launchpad {
    import BaseController = sap.sbo.ng4c.BaseController;
    import Config = sap.sbo.ng4c.app.Config;
    import Storage = sap.sbo.ng4c.app.Storage;

    export interface LaunchpadScope extends Scope {
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
    }

    export class Launchpad extends BaseController {

        private currentIndex: number = -1;
        private scope: LaunchpadScope;
        private config: Config;
        private storage: Storage;

        public constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes, config: Config, storage: Storage) {
            super($scope, $element, $attrs, "sap.sbo.ng4c.launchpad.Launchpad");

            this.scope = <LaunchpadScope>this.$scope;
            this.config = config;
            this.storage = storage;

            this.scope.$on("focusChangeBroadcast", $.proxy(this.onShowOrHideMenuBroadcast, this));

            this.focusOnElement(1);
        }

        private onShowOrHideMenuBroadcast(event: ng.IAngularEvent, elementIndex: number): void {
            this.focusOnElement(elementIndex);
        }

        private focusOnElement(elementIndex: number): void {
            if (this.currentIndex === elementIndex) return;
            this.currentIndex = elementIndex;

            switch (this.currentIndex) {
                case 0: {
                    this.scope.asideLeft = 0;
                    this.scope.asideRight = 50;
                    this.scope.asideScaleX = 1;
                    this.scope.asideScaleY = 1;
                    this.scope.asideWidth = 50;

                    this.scope.contentLeft = 50;
                    this.scope.contentScaleX = 0.8;
                    this.scope.contentScaleY = 0.8;
                    this.scope.contentWidth = 50;

                    this.scope.noticeRight = 100;
                    this.scope.noticeScaleX = 0.8;
                    this.scope.noticeScaleY = 0.8;
                    this.scope.noticeWidth = 50;
                    break;
                }
                case 1: {
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
                    break;
                }
                case 2: {
                    this.scope.asideLeft = -50;
                    this.scope.asideRight = 100;
                    this.scope.asideScaleX = 0.8;
                    this.scope.asideScaleY = 0.8;
                    this.scope.asideWidth = 50;

                    this.scope.contentLeft = 0;
                    this.scope.contentRight = 50;
                    this.scope.contentScaleX = 0.8;
                    this.scope.contentScaleY = 0.8;
                    this.scope.contentWidth = 50;

                    this.scope.noticeLeft = 50;
                    this.scope.noticeRight = 0;
                    this.scope.noticeScaleX = 1;
                    this.scope.noticeScaleY = 1;
                    this.scope.noticeWidth = 50;
                    break;
                }
                default: break;
            }
        }
    }
} 