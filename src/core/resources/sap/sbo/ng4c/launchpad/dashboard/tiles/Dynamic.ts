/// <reference path="../../../scope.ts" />
/// <reference path="../../../basecontroller.ts" />
module sap.sbo.ng4c.launchpad.dashboard.tiles {
    import BaseController = sap.sbo.ng4c.BaseController;
    import Scope = sap.sbo.ng4c.Scope;

    export interface DynamicProps extends Scope {
        rawData: TileData;
        url: string;
    }

    export class Dynamic extends BaseController {
        private scope: DynamicProps;

        public constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes) {
            super($scope, $element, $attrs, "sap.sbo.ng4c.launchpad.dashboard.tiles.Dynamic");
            this.scope = <DynamicProps>this.$scope;
            this.scope.rawData = <TileData>this.scope.data;
            this.scope.url = 'resources/sap/sbo/ng4c/launchpad/dashboard/tiles/' + this.scope.rawData.Type + '.png';
        }
    }
}