/// <reference path="service/router.ts" />
module sap.sbo.ng4c.app {

    import Router = sap.sbo.ng4c.app.service.Router;

    export interface DetailScope extends ng.IScope {
        action: string;
        idx: string;
    }

    export class DetailCtrl {

        private scope: DetailScope;

        public constructor($scope: ng.IScope, $route: ng.route.IRouteService, router:Router) {
            this.scope = <DetailScope>$scope;

            this.scope.action = $route.current.params.bo_abbr;
            this.scope.idx = $route.current.params.bo_idx;
        }
    }
}