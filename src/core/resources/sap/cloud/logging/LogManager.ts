/// <reference path="../logging/Logger.ts" />
/// <reference path="../logging/SimpleLogger.ts" />

module sap.cloud.logging {

    export class LogManager {
        public static getLogger(name: Function): Logger {
            return new SimpleLogger((<any>name).name);
        }
    }
}