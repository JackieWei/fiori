/// <reference path="../../basecontroller.ts" />
module sap.sbo.ng4c.launchpad.notice {
    import BaseController = sap.sbo.ng4c.BaseController;
    import Config = sap.sbo.ng4c.app.Config;
    import Storage = sap.sbo.ng4c.app.Storage;

    export interface ItemScope extends Scope {
        url: string;
    }

    export class Item extends BaseController {

        public static ELEMTNT_INDEX: number = 2;

        private scope: ItemScope;
        private config: Config;
        private storage: Storage;

        public constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes, config: Config, storage: Storage) {
            super($scope, $element, $attrs, "sap.sbo.ng4c.launchpad.notice.Item");

            this.scope = <ItemScope>this.$scope;
            this.config = config;
            this.storage = storage;

            this.buildScope();

            this.scope.$on("focusChangeBroadcast", $.proxy(this.onFocusChange, this));
        }

        private buildScope(): void {
            this.scope.url = "resources/sap/sbo/ng4c/launchpad/notice/item_" + (this.scope.$index + 1) + ".png";
        }

        public onFocusChange(event: ng.IAngularEvent, elementIndex: number): void {
        }
    }
} 