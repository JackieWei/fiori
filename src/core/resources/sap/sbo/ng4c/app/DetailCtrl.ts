module sap.sbo.ng4c.app {

    export interface DetailScope extends ng.IScope {
        action: string;
        idx: string;
    }

    export class DetailCtrl {

        private scope: DetailScope;

        public constructor($scope: ng.IScope, $route: ng.route.IRouteService) {
            console.log($route.current.params.bo_abbr + "-" + $route.current.params.bo_idx);

            this.scope = <DetailScope>$scope;

            this.scope.action = $route.current.params.bo_abbr;
            this.scope.idx = $route.current.params.bo_idx;
        }
    }
} 