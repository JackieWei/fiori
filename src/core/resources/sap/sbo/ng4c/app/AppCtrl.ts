module sap.sbo.ng4c.app {
    export class AppCtrl {
        public constructor($scope: EventRouteScope) {
            $scope.$on("focusChange", function (event: ng.IAngularEvent, elementIndex: number): void {
                $scope.$broadcast("focusChangeBroadcast", elementIndex);
            });
        }
    }
} 