/// <reference path="../../basecontroller.ts" />
module sap.sbo.ng4c.launchpad.dashboard {
    import BaseController = sap.sbo.ng4c.BaseController;
    import AsideProps = sap.sbo.ng4c.launchpad.aside.AsideProps;

    export interface DashboardScope extends Scope {
        tiles: TileData[];
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

        private scope: DashboardScope;

        public constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes) {
            super($scope, $element, $attrs, "sap.sbo.ng4c.launchpad.dashboard.Dashboard");

            this.scope = <DashboardScope>this.$scope;

            this.buildScope();
        }

        private buildScope():void {
            $.ajax('resources/sap/sbo/ng4c/launchpad/dashboard/Pages.json', {
                async: true,
                success: $.proxy(this.onTilesLoaded, this)
            });
        }

        private onTilesLoaded(data: PageData[]): void {
            this.scope.tiles = data[0].Tiles;
            this.scope.$applyAsync();
        }
    }
} 