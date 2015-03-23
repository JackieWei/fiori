/// <reference path="../../basecontroller.ts" />
module sap.sbo.ng4c.launchpad.notice {
    import BaseController = sap.sbo.ng4c.BaseController;
    import Config = sap.sbo.ng4c.app.Config;
    import Storage = sap.sbo.ng4c.app.Storage;

    export interface NoticeScope extends Scope {
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
        }

        private buildScope(): void {
            this.scope.elementIndex = Notice.ELEMTNT_INDEX;

            this.scope.$on("focusChangeBroadcast", $.proxy(this.onFocusChange, this));
        }

        public onFocusChange(event: ng.IAngularEvent, elementIndex: number): void {
        }
    }
} 