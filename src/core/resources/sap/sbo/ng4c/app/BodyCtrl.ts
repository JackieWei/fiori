module sap.sbo.ng4c.app {
    export class BodyCtrl {
        public constructor($scope: ng.IScope) {
            $scope.$on("showOrHideMenu", function (event: ng.IAngularEvent, showOrHide: boolean): void {
                $scope.$broadcast("showOrHideMenuBroadcast", showOrHide);
            });
        }
    }
} 