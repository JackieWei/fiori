/**
* Control all storage including local storage, memeory storage, backend storage - persistence
*/
module sap.sbo.ng4c.app.service {
    'use strict';

    export class Storage {
        private static VAL_TRUE: string = '1';
        private static VAL_FLASH: string = '0';

        public get(key: string, defaultValue?: string): string {
            return localStorage.getItem(key) || defaultValue;
        }

        public set(key: string, value: string): void {
            localStorage.setItem(key, value);
        }

        public getBoolean(key: string, defaultValue?: boolean): boolean {
            return this.get(key, defaultValue ? Storage.VAL_TRUE : Storage.VAL_FLASH) === Storage.VAL_TRUE;
        }

        public setBoolean(key: string, value: boolean): void {
            return this.set(key, value ? Storage.VAL_TRUE : Storage.VAL_FLASH);
        }
    }
}