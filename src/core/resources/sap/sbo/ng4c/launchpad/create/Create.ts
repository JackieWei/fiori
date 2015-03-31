/// <reference path="../../basecontroller.ts" />
module sap.sbo.ng4c.launchpad.create {
    import BaseController = sap.sbo.ng4c.BaseController;
    import Config = sap.sbo.ng4c.app.Config;
    import Storage = sap.sbo.ng4c.app.Storage;

    export interface CreateScope extends Scope {
        drafts: DraftData[];
        switchTab: Function;
        currentIndex: number;
        products: Object[];
    }

    export interface DraftData {
        salesOrderName: string;
        total: string;
        shipping: string;
        tax: string;
        grand: string;
    }

    export class Create extends BaseController {

        private scope: CreateScope;
        private config: Config;
        private storage: Storage;

        public constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes, config: Config, storage: Storage) {
            super($scope, $element, $attrs, "sap.sbo.ng4c.launchpad.create.Create");

            this.scope = <CreateScope>this.$scope;
            this.config = config;
            this.storage = storage;

            this.buildScope();

            this.scope.$on("focusChangeBroadcast", $.proxy(this.onFocusChange, this));
            this.scope.switchTab = $.proxy(this.onSwitchTab, this);
        }

        private buildScope(): void {
            this.scope.drafts = [{
                salesOrderName: "New Sales Order",
                total: '0.00',
                shipping: '0.00',
                tax: '0.00',
                grand: '0.00'
            }, {
                    salesOrderName: "SO501 - Draft",
                    total: '2.50',
                    shipping: '1.50',
                    tax: '1.00',
                    grand: '0.00'
                }, {
                    salesOrderName: "SO493 - Draft",
                    total: '0.00',
                    shipping: '0.00',
                    tax: '0.00',
                    grand: '0.00'
                }, {
                    salesOrderName: "SO489 - Draft",
                    total: '0.00',
                    shipping: '0.00',
                    tax: '0.00',
                    grand: '0.00'
                }];
            this.scope.products = [{}, {}, {}];
            this.scope.currentIndex = 0;

            this.scope.$applyAsync();
        }

        private onFocusChange(event: ng.IAngularEvent, elementIndex: number): void {
        }

        private onSwitchTab(index: number): void {
            this.scope.currentIndex = index;
        }

    }
} 