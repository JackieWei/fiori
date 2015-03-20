module sap.cloud.core.util {
    export class NamingUtil {
        private static DOT_REG: RegExp = /\./gi;
        private static SLASH: string = '/';
        private static DOT: string = '.';
        private static HYPHEN: string = '-';
        private static EMPTY: string = '';

        public static toCssName(packageName: string): string {
            return packageName.replace(NamingUtil.DOT_REG, NamingUtil.HYPHEN);
        }

        public static toPath(packageName: string): string {
            return packageName.replace(NamingUtil.DOT_REG, NamingUtil.SLASH);
        }

        public static toDirective(packageName: string): string {
            var names: string[] = packageName.split(NamingUtil.DOT);
            for (var i: number = 1, total = names.length; i < total; i++) {
                names[i] = NamingUtil.uppercaseFirstChar(names[i]);
            }
            return names.join(NamingUtil.EMPTY);
        }

        public static uppercaseFirstChar(str: string): string {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
    }
}