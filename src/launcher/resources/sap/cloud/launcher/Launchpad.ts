module sap.cloud.launcher {

    export class Launchpad {
        private code: string;
        private key: number;

        public constructor() {
            this.code = 'my launchpad';
            this.key = 3017;
        }

        public show(): void {
            console.log('hello launchpad');
        }
    }
}