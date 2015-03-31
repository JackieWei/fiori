/// <reference path="../../ng4c/scope.ts" />
module sap.sbo.ui.attrs {

    import Scope = sap.sbo.ng4c.Scope;

    export function ScrollDirective(): Object {
        return {
            restrict: "A",
            priority: 0,
            //replace: true,
            scope: true,
            transclude: true,
            //templateUrl: 'resources/sap/sbo/ui/controls/Button.html',
            compile: function ($element, $attrs, $transclude) {
                return {
                    pre: function ($scope, $element, $attrs, $controller) {
                        console.log("Directive Pre");
                    },
                    post: function ($scope, $element, $attrs, $controller) {
                        console.log("Directive Post");
                    }

                }
            },
            link: function ($scope, $element, $attrs, $controller): void {
                angular.element(window).bind("scroll", function () {
                    $scope.scroll();
                    $scope.$applyAsync();
                });
            }
        };
    }
}