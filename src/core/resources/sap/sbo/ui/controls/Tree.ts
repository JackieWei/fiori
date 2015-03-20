/// <reference path="treenode.ts" />
/// <reference path="../basecontrol.ts" />
module sap.sbo.ui.controls {

    import BaseControl = sap.sbo.ui.BaseControl;

    export function TreeDirective() {
        return BaseControl.makeDirective({
            templateUrl: 'resources/sap/sbo/ui/controls/Tree.html'
        });
    }

    export interface TreeScope extends ControlScope {
        nodes: any[];
    }

    export interface TreeAttributes extends ng.IAttributes {
        ngMenuurl: string;
        ngLeafclick: Function;
    }

    export class Tree extends BaseControl {

        private scope: TreeScope;
        private attrs: TreeAttributes;

        public constructor($scope: ControlScope, $element: JQuery, $attrs: ng.IAttributes) {
            super($scope, $element, $attrs, "sap.sbo.ui.controls.Tree");
            this.scope = <TreeScope>this.$scope;
            this.attrs = <TreeAttributes> $attrs;
            this.buildScope();
        }

        private buildScope(): void {
            this.scope.nodes = [];

            $.ajax(this.attrs.ngMenuurl, {
                async: true,
                dataType: "JSON"
            }).done($.proxy(this.onMenuDataReady, this));
        }

        private onMenuDataReady(data: any) {
            var menuData: any[] = data.menu;
            for (var i: number = 0, total = menuData.length; i < total; i++) {
                this.scope.nodes.push(this.buildNode(menuData[i]));
            }
            this.scope.$applyAsync();
        }

        private buildNode(data: any, parent: any = null): any {
            var node: NodeData = {
                id: data.id,
                level: parent ? parent.level + 1 : 0,
                show: parent ? 'block' : 'none',
                logo: '',
                name: data.name,
                create: data.create,
                showListview: data.showListview,
                action: data.action,
                nodes: null
            };

            if (data.nodes && data.nodes.length > 0) {
                node.nodes = [];
                for (var i: number = 0, total = data.nodes.length; i < total; i++) {
                    node.nodes.push(this.buildNode(data.nodes[i], node));
                }
            }

            return node;
        }
    }
}