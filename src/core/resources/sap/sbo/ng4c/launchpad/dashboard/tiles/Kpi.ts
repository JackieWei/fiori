/// <reference path="../../../basecontroller.ts" />
module sap.sbo.ng4c.launchpad.dashboard.tiles {
    import BaseController = sap.sbo.ng4c.BaseController;

    export interface KpiProps extends Scope {
        rawData: TileData;
    }

    export class Kpi extends BaseController {
        private scope: KpiProps;

        public constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes) {
            super($scope, $element, $attrs, "sap.sbo.ng4c.launchpad.dashboard.tiles.Kpi");
            this.scope = <KpiProps>this.$scope;
            this.scope.rawData = <TileData>this.scope.data;
        }
    }
}