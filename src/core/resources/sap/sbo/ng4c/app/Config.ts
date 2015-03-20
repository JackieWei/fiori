/// <reference path="config/uiconfig.ts" />
module sap.sbo.ng4c.app {

    import UIConfig = sap.sbo.ng4c.app.config.UIConfig;

    export class Config {
        public ui: UIConfig;

        public constructor() {
            this.ui = new UIConfig();
        }
    }
}