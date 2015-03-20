/// <reference path="scope.ts" />
/// <reference path="../../cloud/core/util/namingutil.ts" />
module sap.sbo.ng4c {
    import NamingUtil = sap.cloud.core.util.NamingUtil;

    export class BaseController {
        private static DOT_REG = /\./gi;
        private static HYPHEN = "-";
        private static SLASH = "/";
        private static DOT = ".";

        protected $scope: Scope;
        protected $element: JQuery;
        protected $attrs: ng.IAttributes;
        protected $package: string;

        protected klass: string;
        protected module: string;

        public constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes, $package: string) {
            this.$scope = $scope;
            this.$element = $element;
            this.$attrs = $attrs;

            var lastIndex: number = $package.lastIndexOf(BaseController.DOT);
            var moduleStr = lastIndex < 0 ? "" : $package.slice(0, lastIndex);
            var klassName = lastIndex < 0 ? $package : $package.slice(lastIndex + 1);

            this.$package = $package;
            this.klass = klassName;
            this.module = moduleStr;

            this.registerTemplate($package);
            this.registerCssName($package);

            console.log(this.$package + " initialize!");
        }

        protected registerTemplate(templatePackage: string): void {
            this.$scope.template = "resources/" + NamingUtil.toPath(templatePackage) + ".html";
        }

        protected registerCssName(packageName): void {
            this.$scope.className = NamingUtil.toCssName(packageName);
        }
    }
}