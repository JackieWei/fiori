/// <reference path="../../app/service/router.ts" />
/// <reference path="../../basecontroller.ts" />
module sap.sbo.ng4c.launchpad.list {

    import BaseController = sap.sbo.ng4c.BaseController;
    import Router = sap.sbo.ng4c.app.service.Router;

    export interface ListScope extends Scope {
        action: string;
        backToDashboard: Function;
        naviToDetail: Function;
    }

    export class List extends BaseController {

        private scope: ListScope;
        private router: Router;

        public constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes, router: Router) {
            super($scope, $element, $attrs, "sap.sbo.ng4c.launchpad.list.List");

            this.scope = <ListScope>$scope;
            this.router = router;

            this.scope.backToDashboard = $.proxy(this.backToDashboard, this);
            this.scope.naviToDetail = $.proxy(this.naviToDetail, this);
        }

        private backToDashboard() {
            this.router.hashToDashboard();
        }

        private naviToDetail() {
            this.router.hashToDetail(this.scope.action, '1');
        }
    }
} 