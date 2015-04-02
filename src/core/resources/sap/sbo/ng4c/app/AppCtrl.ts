/// <reference path="../launchpad/dashboard/dashboard.ts" />
module sap.sbo.ng4c.app {

    import Dashboard = sap.sbo.ng4c.launchpad.dashboard.Dashboard;

    export interface AppScope extends ng.IScope {
        onAppKeyDown: Function;
        onAppClick: Function;
    }

    export class AppCtrl {

        private scope: AppScope;

        public constructor($scope: ng.IScope, $element: JQuery) {
            this.scope = <AppScope>$scope;

            this.scope.$on("switchTheme", $.proxy(this.switchTheme, this));
        }

        private switchTheme(event: ng.IAngularEvent, theme: string): void {
            this.scope.$broadcast("switchThemeBroadcast", theme);
        }
    }
}  