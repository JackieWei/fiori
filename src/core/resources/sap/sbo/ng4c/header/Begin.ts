/// <reference path="../app/storage.ts" />
/// <reference path="../basecontroller.ts" />
module sap.sbo.ng4c.header {
    import BaseController = sap.sbo.ng4c.BaseController;
    import Storage = sap.sbo.ng4c.app.Storage;
    import Router = sap.sbo.ng4c.app.Router;

    export interface BeginScope extends Scope {
        focusOnHome: Function;
        focusOnPersonal: boolean;
    }

    export class Begin extends BaseController {
        private scope: BeginScope;
        private storage: Storage;
        private router: Router;

        public constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes, storage: Storage, router:Router) {
            super($scope, $element, $attrs, "sap.sbo.ng4c.header.Begin");
            this.scope = <BeginScope>$scope;
            this.storage = storage;
            this.router = router;

            this.scope.focusOnHome = $.proxy(this.focusOnHome, this);
            this.scope.focusOnPersonal = $.proxy(this.focusOnPersonal, this);
        }

        public focusOnHome(): void {
            this.$scope.$emit("focusChange", 1); 
        }

        public focusOnPersonal(): void {
            if (location.hash.length <= 2) {
                this.$scope.$emit("readyForChange", 0);
            } else {
                this.$scope.$emit("focusChange", 0);
            }
        }
    }
}