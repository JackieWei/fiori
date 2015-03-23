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

    export interface PageData {
        PageId: string;
        Name: string;
        Tiles: TileData[];
    }

    export interface TileData {
        TileId: string;
        Index: string;
        Size: string;
        Type: string;
        WidgetEntry: string;
    }

    export class Dashboard extends BaseController {

        public static ELEMTNT_INDEX: number = 1;

        private token: number;
        private scope: DashboardScope;

        public constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes) {
            super($scope, $element, $attrs, "sap.sbo.ng4c.launchpad.dashboard.Dashboard");

            this.scope = <DashboardScope>this.$scope;

            this.buildScope();

            this.scope.$on("focusChangeBroadcast", $.proxy(this.onShowOrHideMenuBroadcast, this));
        }

        private buildScope(): void {
            $.ajax('resources/sap/sbo/ng4c/launchpad/dashboard/home.json', {
                async: true,
                success: $.proxy(this.onHomeTilesLoaded, this)
            });
        }

        private onHomeTilesLoaded(data: PageData[]): void {
            this.scope.homeTiles = data[0].Tiles;

            $.ajax('resources/sap/sbo/ng4c/launchpad/dashboard/sales.json', {
                async: true,
                success: $.proxy(this.onSalesTilesLoaded, this)
            });
        }

        private onSalesTilesLoaded(data: PageData[]): void {
            this.scope.salesTiles = data[0].Tiles;

            this.scope.notices = [{ entry: 1 }, { entry: 2 }, { entry: 3 }, { entry: 4 }];
            this.scope.noticeLeft = "100%";
            this.scope.noticeOpacity = 0;
            this.focusOnElement(Dashboard.ELEMTNT_INDEX);

            this.scope.$applyAsync();


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
        }

        private onShowOrHideMenuBroadcast(event: ng.IAngularEvent, elementIndex: number): void {
            this.focusOnElement(elementIndex);
        }

        private focusOnElement(elementIndex: number): void {
            if (elementIndex === Dashboard.ELEMTNT_INDEX) {
                this.scope.dashboardWidth = 70;
                this.scope.noticeWidth = 25;
                this.token = setTimeout($.proxy(this.showNotice, this), 100);
            } else {
                this.scope.dashboardWidth = 100;
                this.scope.noticeWidth = 0;
                this.token = setTimeout($.proxy(this.hideNotice, this), 100);
            }
        }
    }
} 