/// <reference path="../../../../../thirdparty/resources/thirdparty.d/tsd.d.ts" />
/// <reference path="../logging/Logger.ts" />
/// <reference path="../logging/LogManager.ts" />

module sap.cloud.core {

    import Logger = sap.cloud.logging.Logger;
    import LogManager = sap.cloud.logging.LogManager;

    export class TemplateEngine {
        private static log: Logger = LogManager.getLogger(TemplateEngine);

        public render(): void {
            TemplateEngine.log.info("render()"); 
        }

        public dummy(): number {
            return 123;
        }

        public process<T>(num: T): T {
            //new dummy.Dummy10().foo0(0); 
            return null;
        }
    }
}