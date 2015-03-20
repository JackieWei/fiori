module sap.sbo.ng4c.app {
    export class Router {
        private static HASH: string = '#';
        private static SLASH: string = '/';
        private static EMPTY: string = '';
        private static DOT: string = '.';

        private static LIST: string = 'list';
        private static DETAIL: string = 'detail';

        public constructor() {
        }

        private hashTo(fragments:string[]) {
            var hash: string[] = [Router.HASH];
            for (var i = 0, total = fragments.length; i < total; i++) {
                hash.push(fragments[i]);
            }
            location.hash = hash.join(Router.SLASH);
        }

        public hashToList(boAbbr:string) {
            this.hashTo([Router.LIST, boAbbr]);
        }

        public hashToDetail(boAbbr: string, boIdx:string) {
            this.hashTo([Router.DETAIL, boAbbr, boIdx]);
        }

        public hashToDashboard() {
            location.hash = Router.HASH + Router.SLASH;
        }
    }
} 