/// <reference path="config/uiconfig.ts" />
/// <reference path="config/tileconfig.ts" />
module sap.sbo.ng4c.app {

    import UIConfig = sap.sbo.ng4c.app.config.UIConfig;
    import TileConfig = sap.sbo.ng4c.app.config.TileConfig;

    export class Config {
        public ui: UIConfig;
        public tile: TileConfig;

        public constructor() {
            this.ui = new UIConfig();
            this.tile = new TileConfig();
        }
    }
}