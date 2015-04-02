/// <reference path="service/router.ts" />
module sap.sbo.ng4c.app {

    import Router = sap.sbo.ng4c.app.service.Router;

    export interface ListScope extends ng.IScope{
        action: string;
    }

    export class ListCtrl {

        private scope: ListScope;

        public constructor($scope: ng.IScope, $route: ng.route.IRouteService, router:Router) {

            this.scope = <ListScope>$scope;

            this.scope.action = $route.current.params.bo_abbr;
        }
    }
}  