/// <reference path="../launchpad/dashboard/dashboard.ts" />
module sap.sbo.ng4c.app {

    import Dashboard = sap.sbo.ng4c.launchpad.dashboard.Dashboard;

    export interface BodyScope extends ng.IScope {
        onBodyKeyDown: Function;
        onBodyClick: Function;
        onBodyResize: Function;
    }

    export class BodyCtrl {

        private scope: BodyScope;

        public constructor($scope: ng.IScope, $element: JQuery) {
            this.scope = <BodyScope>$scope;
            this.scope.$on("focusChange", $.proxy(this.focusChange, this));
            this.scope.$on("readyForChange", $.proxy(this.readyForChange, this));

            this.scope.onBodyKeyDown = $.proxy(this.onBodyKeyDown, this);
            this.scope.onBodyClick = $.proxy(this.onBodyClick, this);

            window.onresize = $.proxy(this.onBodyResize, this);
        }

        private onBodyKeyDown($event: JQueryEventObject): void {
            //Press s or enter
            if ($event.keyCode === 13) {
                this.scope.$broadcast("messageBroadcast", true);
            } else if ($event.keyCode === 27 || $event.keyCode === 32) {
                this.scope.$broadcast("messageBroadcast", false);
            } else if ($event.keyCode === 17 && $event.ctrlKey) {
                this.scope.$emit("switchTheme", "freesky");
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

        private onBodyClick(event: ng.IAngularEvent): void {
            this.scope.$broadcast("bodyClickBroadcast", event);
        }

        private onBodyResize(event: JQueryEventObject): void {
            this.scope.$broadcast("bodyResizeBroadcast", event);
        }
    }
} 