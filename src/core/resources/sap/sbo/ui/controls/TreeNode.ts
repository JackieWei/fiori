/// <reference path="../basecontrol.ts" />
module sap.sbo.ui.controls {

    import BaseControl = sap.sbo.ui.BaseControl;

    export interface NodeData {
        id: string;
        name: string;
        create: boolean;
        showListview: boolean;
        action: string;
        level: number;
        logo: string;
        show: string;
        nodes: NodeData[];
    }

    export interface TreeNodeScope extends ControlScope {
        name: string;
        isFolder: boolean;
        expand: boolean;
        nodes: NodeData[];
        logoClickHandler: Function;
    }

    export class TreeNode extends BaseControl {
        private scope: TreeNodeScope;
        private parent: ControlScope;

        public constructor($scope: TreeNodeScope, $element: JQuery, $attrs: ng.IAttributes) {
            super($scope, $element, $attrs, "sap.sbo.ui.controls.TreeNode");
            this.scope = <TreeNodeScope>this.$scope;
            this.parent = <ControlScope>this.scope.$parent;
            this.buildScope();
        }

        public buildScope(): void {
            this.scope.name = this.scope.data.name;
            this.scope.expand = false;
            this.scope.nodes = this.scope.data.nodes ? this.scope.data.nodes : [];
            this.scope.isFolder = this.scope.nodes.length > 0;

            this.scope.logoClickHandler = $.proxy(this.logoClickHandler, this);
        }

        public logoClickHandler(e): void {
            if (this.scope.nodes.length <= 0) {
                var parent:any = <any>this.scope.$parent;
                while (parent && parent.data.level > 0) {
                    parent = parent.$parent;
                }
                if (parent && parent.$parent && $.isFunction(parent.$parent.menuItemClick)) {
                    parent.$parent.menuItemClick(this.scope.data);
                }
            } else {
                this.scope.expand = !this.scope.expand;
            }
        }
    }
} 