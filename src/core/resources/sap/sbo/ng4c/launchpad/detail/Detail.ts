/// <reference path="../../basecontroller.ts" />
module sap.sbo.ng4c.launchpad.detail {

    import BaseController = sap.sbo.ng4c.BaseController;

    export interface DetailScope extends Scope {
        currentHash: number;
        scrollTop: number;
        switchHash: Function;
        onContentScroll: Function;
    }

    export class Detail extends BaseController {

        private scope: DetailScope;

        public constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes) {
            super($scope, $element, $attrs, "sap.sbo.ng4c.launchpad.detail.Detail");
            this.scope = <DetailScope>this.$scope;

            this.scope.currentHash = 0;
            this.scope.switchHash = $.proxy(this.switchHash, this);
            this.scope.onContentScroll = $.proxy(this.onContentScroll, this);
        }

        private switchHash(hash: number): void {
            this.scope.currentHash = hash;

            var content: JQuery = this.$element.next().find(".content");
            var children: JQuery = content.children();
            var currentChild: HTMLElement = children.get(hash);
            content.animate({
                scrollTop: currentChild.offsetTop - currentChild.parentElement.offsetTop,
                duration: 0.05
            });
        }

        private onContentScroll(): void {
            var content: JQuery = this.$element.next().find(".content");
            var children: JQuery = content.children();
            var total: number = children.length;

            var top = content[0].scrollTop, child: HTMLElement, next: HTMLElement, curTop: number;

            for (var i: number = 0; i < total; i++) {
                child = children.get(i);
                curTop = child.offsetTop - child.parentElement.offsetTop;

                if (top <= curTop) {
                    break;
                }
            }

            console.log(i);
        }
    }
}