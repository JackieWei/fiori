/**
* Event router dispatchs all events from child controllers and re-dispatch to whoever needs.
* Just like Robotleg.
*/
module sap.sbo.ng4c.app {
    'use strict';

    export interface EventRouteScope extends ng.IScope {
        greeting: string;
        changeName(name): void;
    }

    export class EventRoute{
        public constructor($scope: EventRouteScope, $element:JQuery) {
            $scope.$on("showOrHideMenu", function (event:ng.IAngularEvent, showOrHide:boolean):void {
                $scope.$broadcast("showOrHideMenuBroadcast", showOrHide);
            });
        }
    }
}