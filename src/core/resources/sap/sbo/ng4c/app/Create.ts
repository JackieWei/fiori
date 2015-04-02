/// <reference path="service/router.ts" />
module sap.sbo.ng4c.app {

    import Router = sap.sbo.ng4c.app.service.Router;

    export interface CreateScope extends ng.IScope {
        action: string;
        idx: string;
    }

    export class CreateCtrl {

        private scope: CreateScope;

        public constructor($scope: ng.IScope, $route: ng.route.IRouteService) {

            this.scope = <CreateScope>$scope;

            this.scope.action = $route.current.params.bo_abbr;
            this.scope.idx = $route.current.params.bo_idx;
        }
    }
} 