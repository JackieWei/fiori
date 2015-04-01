/// <reference path="../launchpad/notice/notice.ts" />
/// <reference path="../basecontroller.ts" />
module sap.sbo.ng4c.header {
    import BaseController = sap.sbo.ng4c.BaseController;
    import Notice = sap.sbo.ng4c.launchpad.notice.Notice;

    export interface SearchbarScope extends Scope {
        meta: SearchbarMeta;
        extendSearch: Function;
    }

    export interface SearchbarMeta {
        placeholder: string;
        search: boolean;
    }

    export class Searchbar extends BaseController {

        private scope: SearchbarScope;

        public constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes) {
            super($scope, $element, $attrs, "sap.sbo.ng4c.header.Searchbar");

            this.scope = <SearchbarScope>this.$scope;

            this.scope.meta = { placeholder: "Look up data", search: false };

            this.scope.extendSearch = $.proxy(this.extendSearch, this);
            this.scope.$on("bodyClickBroadcast", $.proxy(this.onClickOutside, this));
        }

        private extendSearch(event: ng.IAngularEvent): void {
            this.scope.meta.search = true;
        }

        private onClickOutside(event: ng.IAngularEvent, clickEvent: JQueryEventObject): void {
            var target: JQuery = $(clickEvent.target);
            if (target.parents("." + this.scope.className).length === 0) {
                this.scope.meta.search = false;
            }
        }
    }
}