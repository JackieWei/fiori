/// <reference path="../launchpad/overview/overview.ts" />
module sap.sbo.ng4c.app {

    import Overview = sap.sbo.ng4c.launchpad.overview.Overview;

    export interface OverviewScope extends ng.IScope {
        action: string;
        idx: string;
    }

    export class OverviewCtrl {

        private scope: OverviewScope;

        public constructor($scope: ng.IScope, $route: ng.route.IRouteService) {

            this.scope = <OverviewScope>$scope;

            this.scope.action = $route.current.params.bo_abbr;
            this.scope.idx = $route.current.params.bo_idx;
        }
    }
} 