/// <reference path="../launchpad/dashboard/dashboard.ts" />
module sap.sbo.ng4c.app {

    import Dashboard = sap.sbo.ng4c.launchpad.dashboard.Dashboard;

    export class BodyCtrl {

        private scope: ng.IScope;
        private router: Router;

        public constructor($scope: ng.IScope, router:Router) {
            this.scope = $scope;
            this.router = router;
            this.scope.$on("focusChange", $.proxy(this.focusChange, this));
            this.scope.$on("readyForChange", $.proxy(this.readyForChange, this));
        }

        private readyForChange(event: ng.IAngularEvent, elementIndex: number): void {
            if (location.hash.length <= 2 && elementIndex !== 1) {
                this.scope.$broadcast("readyForChangeBroadcast", elementIndex);
            } else {
                this.scope.$broadcast("focusChangeBroadcast", elementIndex);
            }
        }

        private focusChange(event: ng.IAngularEvent, elementIndex: number): void {
            this.scope.$broadcast("focusChangeBroadcast", elementIndex);
        }
    }
} 