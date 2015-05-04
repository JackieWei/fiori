/// <reference path="../launchpad/dashboard/dashboard.ts" />
module sap.sbo.ng4c.app {

    import Dashboard = sap.sbo.ng4c.launchpad.dashboard.Dashboard;

    export interface HeadScope extends ng.IScope {
        theme: string;
    }

    export class HeadCtrl {

        private scope: HeadScope;

        private dracula: boolean;
        private theme: HTMLLinkElement;

        public constructor($scope: ng.IScope, $element: JQuery) {
            this.scope = <HeadScope>$scope;

            this.dracula = true;
            this.theme = <HTMLLinkElement> document.getElementById("theme");
            this.scope.$on("switchThemeBroadcast", $.proxy(this.switchTheme, this));
        }

        private switchTheme(event: ng.IAngularEvent, theme: string): void {

            this.dracula = !this.dracula;

            this.theme.href = "resources/themes/" + (!this.dracula ? theme : '1') + "/library.css"
        }
    }
}  