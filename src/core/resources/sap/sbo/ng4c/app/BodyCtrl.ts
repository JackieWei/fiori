﻿/// <reference path="../launchpad/dashboard/dashboard.ts" />
module sap.sbo.ng4c.app {

    import Dashboard = sap.sbo.ng4c.launchpad.dashboard.Dashboard;

    export interface BodyScope extends ng.IScope {
        onBodyKeyDown: Function;
    }

    export class BodyCtrl {

        private scope: BodyScope;
        private router: Router;

        public constructor($scope: ng.IScope, $element: JQuery, router: Router) {
            this.scope = <BodyScope>$scope;
            this.router = router;
            this.scope.$on("focusChange", $.proxy(this.focusChange, this));
            this.scope.$on("readyForChange", $.proxy(this.readyForChange, this));

            this.scope.onBodyKeyDown = $.proxy(this.onBodyKeyDown, this);
        }

        private onBodyKeyDown($event: JQueryEventObject): void {
            //Press s or enter
            if ($event.keyCode === 83 || $event.keyCode === 13) {
                this.scope.$broadcast("messageBroadcast", true);
            } else {
                this.scope.$broadcast("messageBroadcast", false);
            }
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