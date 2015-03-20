module sap.sbo.ng4c.app {
    export class AppCtrl {
        public constructor($scope: EventRouteScope) {
            $scope.$on("showOrHideMenu", function (event: ng.IAngularEvent, showOrHide: boolean): void {
                $scope.$broadcast("showOrHideMenuBroadcast", showOrHide);
            });
        }
    }
} 