/// <reference path="../../basecontroller.ts" />
/// <reference path="../../app/config.ts" />
module sap.sbo.ng4c.launchpad.dashboard {
    import BaseController = sap.sbo.ng4c.BaseController;
    import Config = sap.sbo.ng4c.app.Config;

    export interface TileScope extends Scope {
        rawData: TileData;
        sizeW: number;
        sizeH: number;
        innerTemplate: string;
    }

    export class Tile extends BaseController {

        private static SPLIT: string = 'x';

        private scope: TileScope;
        private config: Config;

        public constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes, config: Config) {
            super($scope, $element, $attrs, "sap.sbo.ng4c.launchpad.dashboard.Tile");

            this.scope = <TileScope>this.$scope;
            this.config = config;

            this.scope.rawData = this.scope.data;

            var size: string[] = this.scope.rawData.Size.split(Tile.SPLIT);

            this.scope.sizeW = parseInt(size[0], 10);
            this.scope.sizeH = parseInt(size[1], 10);

            this.scope.width = this.scope.sizeW * this.config.ui.tileBasicWidth;
            this.scope.height = this.scope.sizeH * this.config.ui.tileBasicHeight;

            this.scope.innerTemplate = 'resources/sap/sbo/ng4c/launchpad/dashboard/tiles/' + this.config.tile.getTileTemplateByName(this.scope.rawData.Type) + '.html';
        }
    }
} 