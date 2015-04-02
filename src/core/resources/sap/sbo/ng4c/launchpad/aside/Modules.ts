/// <reference path="../../../ui/controls/treenode.ts" />
/// <reference path="../../app/service/Router.ts" />
/// <reference path="../../basecontroller.ts" />
module sap.sbo.ng4c.launchpad.aside {
    import BaseController = sap.sbo.ng4c.BaseController;
    import Router = sap.sbo.ng4c.app.service.Router;
    import NodeData = sap.sbo.ui.controls.NodeData;

    export interface ModulesProps extends Scope {
        menuItemClick: Function;
    }

    export class Modules extends BaseController {
        private scope: ModulesProps;
        private router: Router;

        public constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes, router: Router) {
            super($scope, $element, $attrs, "sap.sbo.ng4c.launchpad.aside.Modules");
            this.scope = <ModulesProps>this.$scope;
            this.router = router;
            this.scope.menuItemClick = $.proxy(this.menuItemClick, this);
        }

        public menuItemClick(menuData: NodeData): void {
            if (menuData.showListview) {
                this.router.hashToList(menuData.action);
            } else {
                this.router.hashToDetail(menuData.action, '0');
            }
        }
    }
}