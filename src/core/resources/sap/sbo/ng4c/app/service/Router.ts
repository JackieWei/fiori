module sap.sbo.ng4c.app.service {
    export class Router {
        private static HASH: string = '#';
        private static SLASH: string = '/';
        private static EMPTY: string = '';
        private static DOT: string = '.';

        public static LIST: string = 'list';
        public static DETAIL: string = 'detail';
        public static OVERVIEW: string = 'overview';
        public static CREATE: string = 'create';

        private _hash: string;

        public constructor() {
        }

        private hashTo(fragments: string[]) {
            var hash: string[] = [Router.HASH];
            for (var i = 0, total = fragments.length; i < total; i++) {
                hash.push(fragments[i]);
            }
            location.hash = hash.join(Router.SLASH);
        }

        public hashToList(boAbbr: string) {
            this.hashTo([Router.LIST, boAbbr]);
        }

        public hashToDetail(boAbbr: string, boIdx: string) {
            this.hashTo([Router.DETAIL, boAbbr, boIdx]);
        }

        public hashToDashboard() {
            location.hash = Router.HASH + Router.SLASH;
        }

        public hashToOverview(boAbbr: string) {
            this.hashTo([Router.OVERVIEW, boAbbr]);
        }

        public hashToCreate(boAbbr: string) {
            this.hashTo([Router.CREATE, boAbbr]);
        }

        public get hash(): string {
            return this._hash;
        }

        public set hash(value: string) {
            this._hash = value;
        }
    }
} 