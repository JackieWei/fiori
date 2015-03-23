/// <reference path="../../basecontroller.ts" />
/// <reference path="../../app/config.ts" />
module sap.sbo.ng4c.launchpad.dashboard {
    import BaseController = sap.sbo.ng4c.BaseController;
    import Config = sap.sbo.ng4c.app.Config;

    export interface NoticeScope extends Scope {
        sizeW: number;
        sizeH: number;
        url: string;
    }

    export class Notice extends BaseController {

        private static SPLIT: string = 'x';

        private scope: NoticeScope;
        private config: Config;

        public constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes, config: Config) {
            super($scope, $element, $attrs, "sap.sbo.ng4c.launchpad.dashboard.Notice");

            this.scope = <NoticeScope>this.$scope;
            this.config = config;

            this.scope.url = "resources/sap/sbo/ng4c/launchpad/dashboard/notice_1.png";
        }
    }
} 