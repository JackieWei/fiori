/// <reference path="../../app/service/layout.ts" />
/// <reference path="../dashboard/tiledata.ts" />
/// <reference path="../dashboard/pagedata.ts" />
/// <reference path="../../app/service/storage.ts" />
/// <reference path="../../basecontroller.ts" />
module sap.sbo.ng4c.launchpad.overview {
    import BaseController = sap.sbo.ng4c.BaseController;
    import Config = sap.sbo.ng4c.app.Config;
    import Storage = sap.sbo.ng4c.app.service.Storage;
    import PageData = sap.sbo.ng4c.launchpad.dashboard.PageData;
    import TileData = sap.sbo.ng4c.launchpad.dashboard.TileData;
    import Layout = sap.sbo.ng4c.app.service.Layout;

    export interface OverviewScope extends Scope {
        Overviews: OverviewData[];
        switchTab: Function;
        showOrHideInfo: Function;
        infoOnTable: boolean;
        currentIndex: number;
        tiles: TileData[];
    }

    export interface OverviewData {
    }

    export class Overview extends BaseController {

        private scope: OverviewScope;
        private config: Config;
        private layout: Layout;
        private storage: Storage;

        private tiles: TileData[];

        private infoOnTab: boolean;

        public constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes, config: Config, storage: Storage, layout:Layout) {
            super($scope, $element, $attrs, "sap.sbo.ng4c.launchpad.overview.Overview");

            this.scope = <OverviewScope>this.$scope;
            this.config = config;
            this.storage = storage;
            this.layout = layout;

            this.buildScope();
            
            this.scope.$on("focusChangeBroadcast", $.proxy(this.onFocusChange, this));
            this.scope.$on("bodyResizeBroadcast", $.proxy(this.onBodyResize, this));

            this.scope.switchTab = $.proxy(this.onSwitchTab, this);
            this.scope.showOrHideInfo = $.proxy(this.showOrHideInfo, this);
        }

        private buildScope(): void {
            this.scope.Overviews = [{}, {}, {}, {}];
            this.scope.currentIndex = 0;
            this.scope.infoOnTable = true;

            $.ajax('resources/sap/sbo/ng4c/launchpad/overview/home.json', {
                success: $.proxy(this.onPageDone, this)
            });
        }

        private onPageDone(page: PageData[]): void {
            this.tiles = page[0].Tiles;
            this.scope.tiles = this.layout.doLayout(this.tiles, document.body, this.config.ui.tileBasicWidth, this.config.ui.tileBasicHeight, this.config.ui.tileBasicGap, this.config.ui.tileBasicGap, false);
            this.scope.$applyAsync();
        }

        private onFocusChange(event: ng.IAngularEvent, elementIndex: number): void {
        }

        private onSwitchTab(index: number): void {
            this.scope.currentIndex = index;
        }

        private showOrHideInfo(): void {
            this.scope.infoOnTable = !this.scope.infoOnTable;
        }

        private onBodyResize(event: ng.IAngularEvent, resizeEvent: JQueryEventObject): void {
            this.scope.tiles = this.layout.doLayout(this.tiles, document.body, this.config.ui.tileBasicWidth, this.config.ui.tileBasicHeight, this.config.ui.tileBasicGap, this.config.ui.tileBasicGap, false);
            this.scope.$broadcast("tileUpdateBroadcast");
        }
    }
} 