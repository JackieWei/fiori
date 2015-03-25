/// <reference path="../../basecontroller.ts" />
module sap.sbo.ng4c.launchpad.dashboard {
    import BaseController = sap.sbo.ng4c.BaseController;
    import AsideProps = sap.sbo.ng4c.launchpad.aside.AsideProps;

    export interface DashboardScope extends Scope {
        homeTiles: TileData[];
        salesTiles: TileData[];
        notices: NoticeData[];

        dashboardWidth: number;
        noticeWidth: number;

        noticeVisual: string;
        noticeLeft: string;
        noticeOpacity: number;
    }

    export interface NoticeData {
        entry: number;
    }

    export class Dashboard extends BaseController {

        private token: number;
        private scope: DashboardScope;

        private homePage: PageData[];
        private salesPage: PageData[];

        public constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes) {
            super($scope, $element, $attrs, "sap.sbo.ng4c.launchpad.dashboard.Dashboard");

            this.scope = <DashboardScope>this.$scope;

            this.buildScope();

            this.scope.$on("focusChangeBroadcast", $.proxy(this.onShowOrHideMenuBroadcast, this));
            this.scope.$on("readyForChangeBroadcast", $.proxy(this.onQuickNoticeBroadcast, this));
        }

        private buildScope(): void {
            if (this.homePage) {
                this.onHomeTilesLoaded(this.homePage);
            } else {
                $.ajax('resources/sap/sbo/ng4c/launchpad/dashboard/home.json', {
                    success: $.proxy(this.onHomeTilesLoaded, this)
                });
            }
        }

        private onHomeTilesLoaded(data: PageData[]): void {
            this.homePage = data;
            this.scope.homeTiles = data[0].Tiles;

            if (this.salesPage) {
                this.onSalesTilesLoaded(this.salesPage);
            } else {
                $.ajax('resources/sap/sbo/ng4c/launchpad/dashboard/sales.json', {
                    async: true,
                    success: $.proxy(this.onSalesTilesLoaded, this)
                });
            }
        }

        private onSalesTilesLoaded(data: PageData[]): void {
            this.salesPage = data;
            this.scope.salesTiles = data[0].Tiles;

            this.scope.notices = [{ entry: 1 }, { entry: 2 }, { entry: 3 }, { entry: 4 }];
            this.scope.noticeLeft = "100%";
            this.scope.noticeOpacity = 0;
            this.focusOnElement(1);
        }

        private onShowOrHideMenuBroadcast(event: ng.IAngularEvent, elementIndex: number): void {
            this.focusOnElement(elementIndex);
        }

        private focusOnElement(elementIndex: number): void {
            if (elementIndex === 1) {
                this.token = setTimeout($.proxy(this.showNotice, this), 100);
            }
        }

        private showNotice(): void {
            clearTimeout(this.token);

            this.scope.noticeLeft = '0';
            this.scope.noticeOpacity = 1;
            this.scope.$applyAsync();
        }

        private hideNotice(): void {
            clearTimeout(this.token);

            this.scope.noticeLeft = '100%';
            this.scope.noticeOpacity = 0;
            this.scope.$applyAsync();

            setTimeout($.proxy(this.onNoticeHide, this), 600);
        }

        private onNoticeHide(): void {
        }

        private onQuickNoticeBroadcast(event: ng.IAngularEvent, elementIndex: number): void {
            this.hideNotice();

            this.token = setTimeout($.proxy(this.onHideNoticeDone, this), 500, elementIndex);
        }

        private onHideNoticeDone(elementIndex: number): void {
            this.scope.$emit("focusChange", elementIndex);
        }
    }
} 