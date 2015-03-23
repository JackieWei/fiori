module sap.sbo.ng4c.app {
    export class BodyCtrl {
        public constructor($scope: ng.IScope) {
            $scope.$on("focusChange", function (event: ng.IAngularEvent, elementIndex: number): void {
                $scope.$broadcast("focusChangeBroadcast", elementIndex);
            });
        }
    }
} 