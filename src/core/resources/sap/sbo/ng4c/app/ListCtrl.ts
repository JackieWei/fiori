module sap.sbo.ng4c.app {

    export interface ListScope extends ng.IScope{
        action: string;
    }

    export class ListCtrl {

        private scope: ListScope;

        public constructor($scope: ng.IScope, $route: ng.route.IRouteService) {
            console.log($route.current.params.bo_abbr);

            this.scope = <ListScope>$scope;

            this.scope.action = $route.current.params.bo_abbr;
        }
    }
}  