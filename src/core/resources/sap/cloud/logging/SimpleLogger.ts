/// <reference path="../logging/Logger.ts" />

module sap.cloud.logging {

    export class SimpleLogger implements Logger {
        private name: string;

        public constructor(name: string) {
            this.name = name;
        }

        public info(msg: string): void {

            //var rectangle = { height: 20, width: 10 };
            //var areaMessage = `Rectangle area is ${rectangle.height * rectangle.width}`;

            console.log(`[INFO] ${this.name} --> ${msg}`);
        }
    }
}