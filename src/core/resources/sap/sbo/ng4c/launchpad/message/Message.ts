/// <reference path="../../basecontroller.ts" />
/// <reference path="../../app/router.ts" />
module sap.sbo.ng4c.launchpad.message {
    import BaseController = sap.sbo.ng4c.BaseController;
    import Config = sap.sbo.ng4c.app.Config;
    import Storage = sap.sbo.ng4c.app.Storage;
    import Router = sap.sbo.ng4c.app.Router;

    export interface MessageScope extends Scope {
        messages: MessageData[];
        messageLeft: number;
        clickHandler: Function;
    }

    export interface MessageData {
    }

    export class Message extends BaseController {

        public static ELEMTNT_INDEX: number = 2;

        private scope: MessageScope;
        private router: Router;
        private config: Config;
        private storage: Storage;

        public constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes, config: Config, storage: Storage, router: Router) {
            super($scope, $element, $attrs, "sap.sbo.ng4c.launchpad.message.Message");

            this.scope = <MessageScope>this.$scope;
            this.config = config;
            this.storage = storage;
            this.router = router;

            this.buildScope();

            this.scope.$on("focusChangeBroadcast", $.proxy(this.onFocusChange, this));
            this.scope.$on("messageBroadcast", $.proxy(this.onMessage, this));
        }

        private buildScope(): void {
            this.scope.messageLeft = 0;
            this.scope.clickHandler = $.proxy(this.clickHandler, this);
        }

        private onFocusChange(event: ng.IAngularEvent, elementIndex: number): void {
        }

        private onMessage(event: ng.IAngularEvent, show: boolean): void {
            this.scope.messageLeft = show ? -100 : 0;
        }

        private clickHandler($event: JQueryEventObject): void {
            this.router.hashToDetail("OCRD", '1');
            this.scope.messageLeft = 0;
        }
    }
} 