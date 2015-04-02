/// <reference path="../../app/service/storage.ts" />
/// <reference path="../../basecontroller.ts" />
module sap.sbo.ng4c.launchpad.notice {
    import BaseController = sap.sbo.ng4c.BaseController;
    import Config = sap.sbo.ng4c.app.Config;
    import Storage = sap.sbo.ng4c.app.service.Storage;

    export interface NoticeScope extends Scope {
        notices: NoticeData[];
        switchTab: Function;
        currentIndex: number;
    }

    export interface NoticeData {
    }

    export class Notice extends BaseController {

        public static ELEMTNT_INDEX: number = 2;

        private scope: NoticeScope;
        private config: Config;
        private storage: Storage;

        public constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes, config: Config, storage: Storage) {
            super($scope, $element, $attrs, "sap.sbo.ng4c.launchpad.notice.Notice");

            this.scope = <NoticeScope>this.$scope;
            this.config = config;
            this.storage = storage;

            this.buildScope();

            this.scope.$on("focusChangeBroadcast", $.proxy(this.onFocusChange, this));
            this.scope.switchTab = $.proxy(this.onSwitchTab, this);
        }

        private buildScope(): void {
            this.scope.elementIndex = Notice.ELEMTNT_INDEX;

            this.scope.notices = [{}, {}, {}, {}];
            this.scope.currentIndex = 0;
        }

        private onFocusChange(event: ng.IAngularEvent, elementIndex: number): void {
        }

        private onSwitchTab(index: number): void {
            this.scope.currentIndex = index;
        }

    }
} 