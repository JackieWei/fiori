/// <reference path="../../basecontroller.ts" />
/// <reference path="../../app/config.ts" />
/// <reference path="../../app/router.ts" />
module sap.sbo.ng4c.launchpad.dashboard {
    import BaseController = sap.sbo.ng4c.BaseController;
    import Config = sap.sbo.ng4c.app.Config;
    import Router = sap.sbo.ng4c.app.Router;

    export interface TileScope extends Scope {
        rawData: TileData;
        sizeW: number;
        sizeH: number;
        innerTemplate: string;
        onTap: Function;
    }

    export class Tile extends BaseController {

        private static SPLIT: string = 'x';

        private scope: TileScope;
        private config: Config;
        private router: Router;

        public constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes, config: Config, router: Router) {
            super($scope, $element, $attrs, "sap.sbo.ng4c.launchpad.dashboard.Tile");

            this.scope = <TileScope>this.$scope;
            this.config = config;
            this.router = router;

            this.scope.rawData = this.scope.data;

            var size: string[] = this.scope.rawData.Size.split(Tile.SPLIT);

            this.scope.sizeW = parseInt(size[0], 10);
            this.scope.sizeH = parseInt(size[1], 10);

            this.scope.width = this.scope.sizeW * this.config.ui.tileBasicWidth + (this.scope.sizeW - 1) * this.config.ui.tileBasicGap;
            this.scope.height = this.scope.sizeH * this.config.ui.tileBasicHeight + (this.scope.sizeH - 1) * this.config.ui.tileBasicGap;

            this.scope.innerTemplate = 'resources/sap/sbo/ng4c/launchpad/dashboard/tiles/' + this.config.tile.getTileTemplateByName(this.scope.rawData.Type) + '.html';
            this.scope.onTap = $.proxy(this.onTap, this);
        }

        private onTap(): void {
            switch (this.scope.rawData.Type) {
                case 'overview':
                    this.router.hashToOverview("ORDR");
                    break;
                case 'creates':
                case 'createq':
                case 'creater':
                case 'createa':
                    this.router.hashToCreate("ORDR");
                    break;
                case 'recenta':
                    this.router.hashToList("OCRD");
                    break;
                default: break;
            }
        }
    }
} 