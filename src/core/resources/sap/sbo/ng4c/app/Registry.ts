/// <reference path="../launchpad/dashboard/notice.ts" />
/// <reference path="../launchpad/dashboard/tiles/dynamic.ts" />
/// <reference path="../launchpad/notice/notice.ts" />
/// <reference path="config.ts" />
/// <reference path="appctrl.ts" />
/// <reference path="listctrl.ts" />
/// <reference path="eventroute.ts" />
/// <reference path="../launchpad/dashboard/Tile.ts" />
/// <reference path="../header/end.ts" />
/// <reference path="../header/header.ts" />
/// <reference path="../header/center.ts" />
/// <reference path="detailctrl.ts" />
/// <reference path="../header/begin.ts" />
/// <reference path="../footer/footer.ts" />
/// <reference path="../launchpad/aside/aside.ts" />
/// <reference path="../launchpad/aside/User.ts" />
/// <reference path="../launchpad/aside/modules.ts" />
/// <reference path="../launchpad/aside/menu.ts" />
/// <reference path="../launchpad/launchpad.ts" />
/// <reference path="../launchpad/dashboard/tiles/kpi.ts" />
/// <reference path="../launchpad/aside/searchbar.ts" />
/// <reference path="../../../cloud/core/util/namingutil.ts" />
/// <reference path="../launchpad/aside/tab.ts" />
/// <reference path="../../ui/controls/tree.ts" />
/// <reference path="../launchpad/dashboard/dashboard.ts" />
/// <reference path="../../ui/controls/TreeNode.ts" />
/// <reference path="BodyCtrl.ts" />
/// <reference path="storage.ts" />
/// <reference path="backend.ts" />
/// <reference path="Router.ts" />
/// <reference path="../launchpad/list/List.ts" />
/// <reference path="../launchpad/aside/MyMenu.ts" />
/// <reference path="../launchpad/detail/detail.ts" />
/// <reference path="../../ui/controls/button.ts" />
/// <reference path="../../ui/controls/datepicker.ts" />
/// <reference path="../../ui/controls/decimalinput.ts" />
/// <reference path="../../ui/controls/input.ts" />
/// <reference path="../../ui/controls/label.ts" />
/// <reference path="../../ui/controls/linkedinput.ts" />
/// <reference path="../../ui/controls/numberinput.ts" />
/// <reference path="../../ui/controls/select.ts" />
/// <reference path="../../ui/controls/textarea.ts" />

module sap.sbo.ng4c.app {

    import NamingUtil = sap.cloud.core.util.NamingUtil;

    export interface IController {
        name: string;
        controller: Function;
    }

    export interface IControl {
        name: string;
        directive: ng.IDirectiveFactory;
    }

    export interface IService {
        name: string;
        service: Function;
    }

    export interface IConstant {
        name: string;
        constant: Object;
    }

    export class Registry {

        private static _controllers: IController[] = [];
        private static _controls: IControl[] = [];
        private static _services: IService[] = [];
        private static _constants: IConstant[] = [];

        public static get constants(): IConstant[] {
            if (Registry._constants.length > 0) return Registry._constants;
            var constants: IConstant[] = Registry._constants;

            /* Registry begins */
            //never name a service or any directive like route/router
            //It will cause angular confuse and everything will be a mess.
            //Registry one constant as config for now
            constants.push({ name: "config", constant: new sap.sbo.ng4c.app.Config() });
            
            /* Registry ends */

            return constants;
        }

        public static get servies(): IService[] {
            if (Registry._services.length > 0) return Registry._services;
            var services: IService[] = Registry._services;

            /* Registry begins */
            //never name a service or any directive like route/router
            //It will cause angular confuse and everything will be a mess.
            services.push({ name: "storage", service: sap.sbo.ng4c.app.Storage });
            services.push({ name: "router", service: sap.sbo.ng4c.app.Router });
            services.push({ name: "backend", service: sap.sbo.ng4c.app.Backend });
            
            /* Registry ends */

            return services;
        }

        public static get controllers(): IController[] {
            if (Registry._controllers.length > 0) return Registry._controllers;

            var collection: IController[] = Registry._controllers;
            /* Registry begins */

            //system level
            collection.push({ name: "sap.sbo.ng4c.app.BodyCtrl", controller: sap.sbo.ng4c.app.BodyCtrl });
            collection.push({ name: "sap.sbo.ng4c.app.AppCtrl", controller: sap.sbo.ng4c.app.AppCtrl });
            collection.push({ name: "sap.sbo.ng4c.app.ListCtrl", controller: sap.sbo.ng4c.app.ListCtrl });
            collection.push({ name: "sap.sbo.ng4c.app.DetailCtrl", controller: sap.sbo.ng4c.app.DetailCtrl });
            collection.push({ name: "sap.sbo.ng4c.app.EventRoute", controller: sap.sbo.ng4c.app.EventRoute });

            //launchpad
            collection.push({ name: "sap.sbo.ng4c.launchpad.Launchpad", controller: sap.sbo.ng4c.launchpad.Launchpad });
            //----dashboard
            collection.push({ name: "sap.sbo.ng4c.launchpad.dashboard.Dashboard", controller: sap.sbo.ng4c.launchpad.dashboard.Dashboard });
            collection.push({ name: "sap.sbo.ng4c.launchpad.dashboard.Tile", controller: sap.sbo.ng4c.launchpad.dashboard.Tile });
            collection.push({ name: "sap.sbo.ng4c.launchpad.dashboard.Notice", controller: sap.sbo.ng4c.launchpad.dashboard.Notice });
            //--------tiles
            collection.push({ name: "sap.sbo.ng4c.launchpad.dashboard.tiles.Kpi", controller: sap.sbo.ng4c.launchpad.dashboard.tiles.Kpi });
            collection.push({ name: "sap.sbo.ng4c.launchpad.dashboard.tiles.Dynamic", controller: sap.sbo.ng4c.launchpad.dashboard.tiles.Dynamic });
            //----aside
            collection.push({ name: "sap.sbo.ng4c.launchpad.aside.Aside", controller: sap.sbo.ng4c.launchpad.aside.Aside });
            collection.push({ name: "sap.sbo.ng4c.launchpad.aside.User", controller: sap.sbo.ng4c.launchpad.aside.User });
            collection.push({ name: "sap.sbo.ng4c.launchpad.aside.Menu", controller: sap.sbo.ng4c.launchpad.aside.Menu });
            collection.push({ name: "sap.sbo.ng4c.launchpad.aside.Modules", controller: sap.sbo.ng4c.launchpad.aside.Modules });
            collection.push({ name: "sap.sbo.ng4c.launchpad.aside.MyMenu", controller: sap.sbo.ng4c.launchpad.aside.MyMenu });
            collection.push({ name: "sap.sbo.ng4c.launchpad.aside.Tab", controller: sap.sbo.ng4c.launchpad.aside.Tab });
            collection.push({ name: "sap.sbo.ng4c.launchpad.aside.SearchBar", controller: sap.sbo.ng4c.launchpad.aside.SearchBar });
            //--------notice
            collection.push({ name: "sap.sbo.ng4c.launchpad.notice.Notice", controller: sap.sbo.ng4c.launchpad.notice.Notice });
            //list
            collection.push({ name: "sap.sbo.ng4c.launchpad.list.List", controller: sap.sbo.ng4c.launchpad.list.List });
            //detail
            collection.push({ name: "sap.sbo.ng4c.launchpad.detail.Detail", controller: sap.sbo.ng4c.launchpad.detail.Detail });

            //header
            collection.push({ name: "sap.sbo.ng4c.header.Begin", controller: sap.sbo.ng4c.header.Begin });
            collection.push({ name: "sap.sbo.ng4c.header.End", controller: sap.sbo.ng4c.header.End });
            collection.push({ name: "sap.sbo.ng4c.header.Center", controller: sap.sbo.ng4c.header.Center });
            collection.push({ name: "sap.sbo.ng4c.header.Header", controller: sap.sbo.ng4c.header.Header });

            //footer
            collection.push({ name: "sap.sbo.ng4c.footer.Footer", controller: sap.sbo.ng4c.footer.Footer });

            //controls
            //-- tree
            collection.push({ name: "sap.sbo.ui.controls.Tree", controller: sap.sbo.ui.controls.Tree });
            collection.push({ name: "sap.sbo.ui.controls.TreeNode", controller: sap.sbo.ui.controls.TreeNode });
            //-- other controls
            
            collection.push({ name: "sap.sbo.ui.controls.Button", controller: sap.sbo.ui.controls.Button });
            collection.push({ name: "sap.sbo.ui.controls.DatePicker", controller: sap.sbo.ui.controls.DatePicker });
            collection.push({ name: "sap.sbo.ui.controls.DecimalInput", controller: sap.sbo.ui.controls.DecimalInput });
            collection.push({ name: "sap.sbo.ui.controls.Input", controller: sap.sbo.ui.controls.Input });
            collection.push({ name: "sap.sbo.ui.controls.Label", controller: sap.sbo.ui.controls.Label });
            collection.push({ name: "sap.sbo.ui.controls.LinkedInput", controller: sap.sbo.ui.controls.LinkedInput });
            collection.push({ name: "sap.sbo.ui.controls.NumberInput", controller: sap.sbo.ui.controls.NumberInput });
            collection.push({ name: "sap.sbo.ui.controls.Select", controller: sap.sbo.ui.controls.Select });
            collection.push({ name: "sap.sbo.ui.controls.TextArea", controller: sap.sbo.ui.controls.TextArea });

            /* Registry Ends */
            return collection;
        }

        public static get controls(): IControl[] {
            if (Registry._controls.length > 0) return Registry._controls;

            var collection: IControl[] = [];
            /* Registry begins. Onlt register directive, no controller here. Controller in in controllers*/

            collection.push({ name: "ng4cTree", directive: sap.sbo.ui.controls.TreeDirective });
            collection.push({ name: "ng4cButton", directive: sap.sbo.ui.controls.ButtonDirective });
            collection.push({ name: "ng4cDatePicker", directive: sap.sbo.ui.controls.DatePickerDirective });
            collection.push({ name: "ng4cDecimalInput", directive: sap.sbo.ui.controls.DecimalInputDirective });
            collection.push({ name: "ng4cInput", directive: sap.sbo.ui.controls.InputDirective });
            collection.push({ name: "ng4cLabel", directive: sap.sbo.ui.controls.LabelDirective });
            collection.push({ name: "ng4cLinkedInput", directive: sap.sbo.ui.controls.LinkedInputDirective });
            collection.push({ name: "ng4cNumberInput", directive: sap.sbo.ui.controls.NumberInputDirective });
            collection.push({ name: "ng4cSelect", directive: sap.sbo.ui.controls.SelectDirective });
            collection.push({ name: "ng4cTextArea", directive: sap.sbo.ui.controls.TextAreaDirective });

            /* Registry Ends */
            return collection;
        }
    }
} 