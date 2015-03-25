/// <reference path="../../thirdparty/resources/thirdparty.d/tsd.d.ts" />
declare module sap.cloud.logging {
    interface Logger {
        info(msg: string): void;
    }
}
declare module sap.cloud.logging {
    class SimpleLogger implements Logger {
        private name;
        constructor(name: string);
        info(msg: string): void;
    }
}
declare module sap.cloud.logging {
    class LogManager {
        static getLogger(name: Function): Logger;
    }
}
declare module sap.cloud.core {
    class TemplateEngine {
        private static log;
        render(): void;
        dummy(): number;
        process<T>(num: T): T;
    }
}
declare module sap.cloud.core.util {
    class NamingUtil {
        private static DOT_REG;
        private static SLASH;
        private static DOT;
        private static HYPHEN;
        private static EMPTY;
        static toCssName(packageName: string): string;
        static toPath(packageName: string): string;
        static toDirective(packageName: string): string;
        static uppercaseFirstChar(str: string): string;
    }
}
declare module sap.sbo.ng4c {
    interface CssProps {
        name: string;
    }
    interface Scope extends ng.IScope {
        template: string;
        className: string;
        width: number;
        height: number;
        left: number;
        top: number;
        $index: number;
        css: CssProps;
        data: any;
        elementIndex: number;
    }
}
declare module sap.sbo.ng4c {
    class BaseController {
        private static DOT_REG;
        private static HYPHEN;
        private static SLASH;
        private static DOT;
        protected $scope: Scope;
        protected $element: JQuery;
        protected $attrs: ng.IAttributes;
        protected $package: string;
        protected klass: string;
        protected module: string;
        constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes, $package: string);
        protected registerTemplate(templatePackage: string): void;
        protected registerCssName(packageName: any): void;
    }
}
declare module sap.sbo.ui {
    import BaseController = sap.sbo.ng4c.BaseController;
    import Scope = sap.sbo.ng4c.Scope;
    interface DirectiveConfig {
        restrict?: string;
        priority?: number;
        replace?: boolean;
        scope?: boolean;
        transclude?: boolean;
        templateUrl: string;
        compile?: Function;
        link?: Function;
    }
    interface ControlScope extends Scope {
        value: string;
    }
    interface ControlAttributes extends ng.IAttributes {
        ngValue: string;
    }
    class BaseControl extends BaseController {
        private static DIRECTIVE;
        static makeDirective(directive: DirectiveConfig): any;
        constructor($scope: ControlScope, $element: JQuery, $attrs: ng.IAttributes, $package: string);
    }
}
declare module sap.sbo.ui.controls {
    import BaseControl = sap.sbo.ui.BaseControl;
    function CheckboxDirective(): Object;
    interface CheckboxScope extends ControlScope {
        text: string;
        icon: string;
        style: string;
        tabindex: string;
    }
    interface CheckboxAttributes extends ng.IAttributes {
        icon: string;
    }
    class Checkbox extends BaseControl {
        private scope;
        private attrs;
        constructor($scope: ControlScope, $element: JQuery, $attrs: ng.IAttributes);
        private buildScope();
        private getIconContent(icon);
    }
}
declare module sap.sbo.ui.controls {
    import BaseControl = sap.sbo.ui.BaseControl;
    function CircleProgressDirective(): Object;
    interface CircleProgressScope extends ControlScope {
        progress: number;
        imgIndex: number;
    }
    interface CircleProgressAttributes extends ng.IAttributes {
        progress: string;
    }
    class CircleProgress extends BaseControl {
        private scope;
        private attrs;
        constructor($scope: ControlScope, $element: JQuery, $attrs: ng.IAttributes);
        private buildScope();
    }
}
declare module sap.sbo.ng4c.launchpad.create {
    import BaseController = sap.sbo.ng4c.BaseController;
    import Config = sap.sbo.ng4c.app.Config;
    import Storage = sap.sbo.ng4c.app.Storage;
    interface CreateScope extends Scope {
        drafts: DraftData[];
        switchTab: Function;
        currentIndex: number;
    }
    interface DraftData {
        salesOrderName: string;
        total: string;
        shipping: string;
        tax: string;
        grand: string;
    }
    class Create extends BaseController {
        private scope;
        private config;
        private storage;
        constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes, config: Config, storage: Storage);
        private buildScope();
        private onFocusChange(event, elementIndex);
        private onSwitchTab(index);
    }
}
declare module sap.sbo.ng4c.launchpad.dashboard {
    interface TileData {
        TileId: string;
        Index: string;
        Size: string;
        Type: string;
        WidgetEntry: string;
    }
}
declare module sap.sbo.ng4c.launchpad.dashboard {
    interface PageData {
        PageId: string;
        Name: string;
        Tiles: TileData[];
    }
}
declare module sap.sbo.ng4c.launchpad.overview {
    import BaseController = sap.sbo.ng4c.BaseController;
    import Config = sap.sbo.ng4c.app.Config;
    import Storage = sap.sbo.ng4c.app.Storage;
    import TileData = sap.sbo.ng4c.launchpad.dashboard.TileData;
    interface OverviewScope extends Scope {
        Overviews: OverviewData[];
        switchTab: Function;
        showOrHideInfo: Function;
        infoOnTable: boolean;
        currentIndex: number;
        tiles: TileData[];
    }
    interface OverviewData {
    }
    class Overview extends BaseController {
        private scope;
        private config;
        private storage;
        private infoOnTab;
        constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes, config: Config, storage: Storage);
        private buildScope();
        private onPageDone(page);
        private onFocusChange(event, elementIndex);
        private onSwitchTab(index);
        private showOrHideInfo();
    }
}
declare module sap.sbo.ng4c.app {
    interface OverviewScope extends ng.IScope {
        action: string;
        idx: string;
    }
    class OverviewCtrl {
        private scope;
        constructor($scope: ng.IScope, $route: ng.route.IRouteService);
    }
}
declare module sap.sbo.ng4c.app {
    class Router {
        private static HASH;
        private static SLASH;
        private static EMPTY;
        private static DOT;
        static LIST: string;
        static DETAIL: string;
        static OVERVIEW: string;
        static CREATE: string;
        private _hash;
        constructor();
        private hashTo(fragments);
        hashToList(boAbbr: string): void;
        hashToDetail(boAbbr: string, boIdx: string): void;
        hashToDashboard(): void;
        hashToOverview(boAbbr: string): void;
        hashToCreate(boAbbr: string): void;
        hash: string;
    }
}
declare module sap.sbo.ng4c.app {
    interface CreateScope extends ng.IScope {
        action: string;
        idx: string;
    }
    class CreateCtrl {
        private scope;
        constructor($scope: ng.IScope, $route: ng.route.IRouteService);
    }
}
declare module sap.sbo.ng4c.app.config {
    class UIConfig {
        menuFullWidth: number;
        menuLightWidth: number;
        tileBasicWidth: number;
        tileBasicHeight: number;
        tileBasicGap: number;
    }
}
declare module sap.sbo.ng4c.app.config {
    class TileConfig {
        getTileTemplateByName(name: string): string;
    }
}
declare module sap.sbo.ng4c.app {
    import UIConfig = sap.sbo.ng4c.app.config.UIConfig;
    import TileConfig = sap.sbo.ng4c.app.config.TileConfig;
    class Config {
        ui: UIConfig;
        tile: TileConfig;
        constructor();
    }
}
declare module sap.sbo.ng4c.launchpad.dashboard {
    import BaseController = sap.sbo.ng4c.BaseController;
    import Config = sap.sbo.ng4c.app.Config;
    interface NoticeScope extends Scope {
        sizeW: number;
        sizeH: number;
        url: string;
    }
    class Notice extends BaseController {
        private static SPLIT;
        private scope;
        private config;
        constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes, config: Config);
    }
}
declare module sap.sbo.ng4c.launchpad.dashboard.tiles {
    import BaseController = sap.sbo.ng4c.BaseController;
    import Scope = sap.sbo.ng4c.Scope;
    interface DynamicProps extends Scope {
        rawData: TileData;
        url: string;
    }
    class Dynamic extends BaseController {
        private scope;
        constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes);
    }
}
declare module sap.sbo.ng4c.launchpad.notice {
    import BaseController = sap.sbo.ng4c.BaseController;
    import Config = sap.sbo.ng4c.app.Config;
    import Storage = sap.sbo.ng4c.app.Storage;
    interface NoticeScope extends Scope {
        notices: NoticeData[];
        switchTab: Function;
        currentIndex: number;
    }
    interface NoticeData {
    }
    class Notice extends BaseController {
        static ELEMTNT_INDEX: number;
        private scope;
        private config;
        private storage;
        constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes, config: Config, storage: Storage);
        private buildScope();
        private onFocusChange(event, elementIndex);
        private onSwitchTab(index);
    }
}
declare module sap.sbo.ng4c.app {
    import Router = sap.sbo.ng4c.app.Router;
    class DashboardCtrl {
        static elementIndex: number;
        constructor($scope: EventRouteScope, router: Router);
    }
}
declare module sap.sbo.ng4c.app {
    import Router = sap.sbo.ng4c.app.Router;
    interface ListScope extends ng.IScope {
        action: string;
    }
    class ListCtrl {
        private scope;
        constructor($scope: ng.IScope, $route: ng.route.IRouteService, router: Router);
    }
}
declare module sap.sbo.ng4c.app {
    interface EventRouteScope extends ng.IScope {
        greeting: string;
        changeName(name: any): void;
    }
    class EventRoute {
        constructor($scope: EventRouteScope, $element: JQuery);
    }
}
declare module sap.sbo.ng4c.launchpad.dashboard {
    import BaseController = sap.sbo.ng4c.BaseController;
    import Config = sap.sbo.ng4c.app.Config;
    import Router = sap.sbo.ng4c.app.Router;
    interface TileScope extends Scope {
        rawData: TileData;
        sizeW: number;
        sizeH: number;
        innerTemplate: string;
        onTap: Function;
    }
    class Tile extends BaseController {
        private static SPLIT;
        private scope;
        private config;
        private router;
        constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes, config: Config, router: Router);
        private onTap();
    }
}
declare module sap.sbo.ng4c.header {
    import BaseController = sap.sbo.ng4c.BaseController;
    interface EndScope extends Scope {
        focusOnNotice: Function;
    }
    class End extends BaseController {
        private scope;
        constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes);
        private focusOnNotice();
    }
}
declare module sap.sbo.ng4c.header {
    import BaseController = sap.sbo.ng4c.BaseController;
    class Header extends BaseController {
        constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes);
    }
}
declare module sap.sbo.ng4c.header {
    import BaseController = sap.sbo.ng4c.BaseController;
    class Center extends BaseController {
        constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes);
    }
}
declare module sap.sbo.ng4c.app {
    import Router = sap.sbo.ng4c.app.Router;
    interface DetailScope extends ng.IScope {
        action: string;
        idx: string;
    }
    class DetailCtrl {
        private scope;
        constructor($scope: ng.IScope, $route: ng.route.IRouteService, router: Router);
    }
}
declare module sap.sbo.ng4c.app {
    class Storage {
        private static VAL_TRUE;
        private static VAL_FLASH;
        get(key: string, defaultValue?: string): string;
        set(key: string, value: string): void;
        getBoolean(key: string, defaultValue?: boolean): boolean;
        setBoolean(key: string, value: boolean): void;
    }
}
declare module sap.sbo.ng4c.header {
    import BaseController = sap.sbo.ng4c.BaseController;
    import Storage = sap.sbo.ng4c.app.Storage;
    import Router = sap.sbo.ng4c.app.Router;
    interface BeginScope extends Scope {
        focusOnHome: Function;
        focusOnPersonal: boolean;
    }
    class Begin extends BaseController {
        private scope;
        private storage;
        private router;
        constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes, storage: Storage, router: Router);
        focusOnHome(): void;
        focusOnPersonal(): void;
    }
}
declare module sap.sbo.ng4c.footer {
    import BaseController = sap.sbo.ng4c.BaseController;
    class Footer extends BaseController {
        constructor($scope: any, $element: JQuery, $attrs: ng.IAttributes);
    }
}
declare module sap.sbo.ng4c.launchpad.aside {
    import BaseController = sap.sbo.ng4c.BaseController;
    import Storage = sap.sbo.ng4c.app.Storage;
    interface IAsideScope extends Scope {
        liteMode: boolean;
    }
    class AsideProps {
        static HIDE_WIDTH: number;
        static SHOW_WIDTH: number;
    }
    class Aside extends BaseController {
        static ELEMTNT_INDEX: number;
        private scope;
        private storage;
        constructor($scope: IAsideScope, $element: JQuery, $attrs: ng.IAttributes, storage: Storage);
        private onShowOrHideMenuBroadcast(event, showOrHide);
    }
}
declare module sap.sbo.ng4c.launchpad.aside {
    import BaseController = sap.sbo.ng4c.BaseController;
    interface UserProps extends Scope {
    }
    class User extends BaseController {
        private scope;
        constructor($scope: UserProps, $element: JQuery, $attrs: ng.IAttributes);
    }
}
declare module sap.sbo.ui.controls {
    import BaseControl = sap.sbo.ui.BaseControl;
    interface NodeData {
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
    interface TreeNodeScope extends ControlScope {
        name: string;
        isFolder: boolean;
        expand: boolean;
        nodes: NodeData[];
        logoClickHandler: Function;
    }
    class TreeNode extends BaseControl {
        private scope;
        private parent;
        constructor($scope: TreeNodeScope, $element: JQuery, $attrs: ng.IAttributes);
        buildScope(): void;
        logoClickHandler(e: any): void;
    }
}
declare module sap.sbo.ng4c.launchpad.aside {
    import BaseController = sap.sbo.ng4c.BaseController;
    import Router = sap.sbo.ng4c.app.Router;
    import NodeData = sap.sbo.ui.controls.NodeData;
    interface ModulesProps extends Scope {
        menuItemClick: Function;
    }
    class Modules extends BaseController {
        private scope;
        private router;
        constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes, router: Router);
        menuItemClick(menuData: NodeData): void;
    }
}
declare module sap.sbo.ng4c.launchpad.aside {
    import BaseController = sap.sbo.ng4c.BaseController;
    interface MenuScope extends Scope {
    }
    class Menu extends BaseController {
        private scope;
        constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes);
    }
}
declare module sap.sbo.ng4c.launchpad.dashboard {
    import BaseController = sap.sbo.ng4c.BaseController;
    interface DashboardScope extends Scope {
        homeTiles: TileData[];
        salesTiles: TileData[];
        notices: NoticeData[];
        dashboardWidth: number;
        noticeWidth: number;
        noticeVisual: string;
        noticeLeft: string;
        noticeOpacity: number;
    }
    interface NoticeData {
        entry: number;
    }
    class Dashboard extends BaseController {
        private token;
        private scope;
        private homePage;
        private salesPage;
        constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes);
        private buildScope();
        private onHomeTilesLoaded(data);
        private onSalesTilesLoaded(data);
        private onShowOrHideMenuBroadcast(event, elementIndex);
        private focusOnElement(elementIndex);
        private showNotice();
        private hideNotice();
        private onNoticeHide();
        private onQuickNoticeBroadcast(event, elementIndex);
        private onHideNoticeDone(elementIndex);
    }
}
declare module sap.sbo.ng4c.app {
    class BodyCtrl {
        private scope;
        private router;
        constructor($scope: ng.IScope, router: Router);
        private readyForChange(event, elementIndex);
        private focusChange(event, elementIndex);
    }
}
declare module sap.sbo.ng4c.launchpad {
    import BaseController = sap.sbo.ng4c.BaseController;
    import Config = sap.sbo.ng4c.app.Config;
    import Storage = sap.sbo.ng4c.app.Storage;
    interface LaunchpadScope extends Scope {
        asideLeft: number;
        asideRight: number;
        asideWidth: number;
        contentLeft: number;
        contentRight: number;
        contentWidth: number;
        noticeLeft: number;
        noticeRight: number;
        noticeWidth: number;
        asideScaleX: number;
        asideScaleY: number;
        contentScaleX: number;
        contentScaleY: number;
        noticeScaleX: number;
        noticeScaleY: number;
    }
    class Launchpad extends BaseController {
        private scope;
        private config;
        private storage;
        constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes, config: Config, storage: Storage);
        private onShowOrHideMenuBroadcast(event, elementIndex);
        private focusOnElement(elementIndex);
    }
}
declare module sap.sbo.ng4c.launchpad.dashboard.tiles {
    import BaseController = sap.sbo.ng4c.BaseController;
    interface KpiProps extends Scope {
        rawData: TileData;
    }
    class Kpi extends BaseController {
        private scope;
        constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes);
    }
}
declare module sap.sbo.ng4c.launchpad.aside {
    import BaseController = sap.sbo.ng4c.BaseController;
    interface SearchBarProps extends Scope {
    }
    class SearchBar extends BaseController {
        private scope;
        constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes);
    }
}
declare module sap.sbo.ng4c.launchpad.aside {
    import BaseController = sap.sbo.ng4c.BaseController;
    interface TabProps extends Scope {
        currentIndex: number;
        showTab: Function;
    }
    class Tab extends BaseController {
        private scope;
        constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes);
        showTab(index: number): void;
    }
}
declare module sap.sbo.ui.controls {
    import BaseControl = sap.sbo.ui.BaseControl;
    function TreeDirective(): any;
    interface TreeScope extends ControlScope {
        nodes: any[];
    }
    interface TreeAttributes extends ng.IAttributes {
        ngMenuurl: string;
        ngLeafclick: Function;
    }
    class Tree extends BaseControl {
        private scope;
        private attrs;
        constructor($scope: ControlScope, $element: JQuery, $attrs: ng.IAttributes);
        private buildScope();
        private onMenuDataReady(data);
        private buildNode(data, parent?);
    }
}
declare module sap.sbo.ui.controls {
    import BaseControl = sap.sbo.ui.BaseControl;
    function SliderDirective(): Object;
    interface SliderScope extends ControlScope {
        text: string;
        icon: string;
        style: string;
        tabindex: string;
    }
    interface SliderAttributes extends ng.IAttributes {
        icon: string;
    }
    class Slider extends BaseControl {
        private scope;
        private attrs;
        constructor($scope: ControlScope, $element: JQuery, $attrs: ng.IAttributes);
        private buildScope();
        private getIconContent(icon);
    }
}
declare module sap.sbo.ng4c.app {
    class Backend {
    }
}
declare module sap.sbo.ng4c.launchpad.list {
    import BaseController = sap.sbo.ng4c.BaseController;
    import Router = sap.sbo.ng4c.app.Router;
    interface ListScope extends Scope {
        action: string;
        backToDashboard: Function;
        naviToDetail: Function;
    }
    class List extends BaseController {
        private scope;
        private router;
        constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes, router: Router);
        private backToDashboard();
        private naviToDetail();
    }
}
declare module sap.sbo.ng4c.launchpad.aside {
    import BaseController = sap.sbo.ng4c.BaseController;
    interface MyMenuProps extends Scope {
    }
    class MyMenu extends BaseController {
        private scope;
        constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes);
    }
}
declare module sap.sbo.ng4c.launchpad.detail {
    import BaseController = sap.sbo.ng4c.BaseController;
    interface DetailScope extends Scope {
        currentHash: number;
        scrollTop: number;
        switchHash: Function;
        onContentScroll: Function;
    }
    class Detail extends BaseController {
        private scope;
        constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes);
        private switchHash(hash);
        private onContentScroll();
    }
}
declare module sap.sbo.ui.controls {
    import BaseControl = sap.sbo.ui.BaseControl;
    function ButtonDirective(): Object;
    interface ButtonScope extends ControlScope {
        text: string;
        icon: string;
        style: string;
        tabindex: string;
    }
    interface ButtonAttributes extends ng.IAttributes {
        icon: string;
    }
    class Button extends BaseControl {
        private scope;
        private attrs;
        constructor($scope: ControlScope, $element: JQuery, $attrs: ng.IAttributes);
        private buildScope();
        private getIconContent(icon);
    }
}
declare module sap.sbo.ui.controls {
    import BaseControl = sap.sbo.ui.BaseControl;
    function DatePickerDirective(): Object;
    interface DatePickerScope extends ControlScope {
    }
    interface DatePickerAttributes extends ControlAttributes {
    }
    class DatePicker extends BaseControl {
        private scope;
        private attrs;
        constructor($scope: ControlScope, $element: JQuery, $attrs: ControlAttributes);
        protected buildScope(): void;
    }
}
declare module sap.sbo.ng4c.launchpad.notice {
    import BaseController = sap.sbo.ng4c.BaseController;
    import Config = sap.sbo.ng4c.app.Config;
    import Storage = sap.sbo.ng4c.app.Storage;
    interface ItemScope extends Scope {
        url: string;
    }
    class Item extends BaseController {
        static ELEMTNT_INDEX: number;
        private scope;
        private config;
        private storage;
        constructor($scope: Scope, $element: JQuery, $attrs: ng.IAttributes, config: Config, storage: Storage);
        private buildScope();
        onFocusChange(event: ng.IAngularEvent, elementIndex: number): void;
    }
}
declare module sap.sbo.ui.controls {
    import BaseControl = sap.sbo.ui.BaseControl;
    function DecimalInputDirective(): Object;
    interface DecimalInputScope extends ControlScope {
    }
    interface DecimalInputAttributes extends ControlAttributes {
    }
    class DecimalInput extends BaseControl {
        private scope;
        private attrs;
        constructor($scope: ControlScope, $element: JQuery, $attrs: ControlAttributes);
        private buildScope();
    }
}
declare module sap.sbo.ui.controls {
    import BaseControl = sap.sbo.ui.BaseControl;
    function InputDirective(): Object;
    interface InputScope extends ControlScope {
    }
    interface InputAttributes extends ControlAttributes {
    }
    class Input extends BaseControl {
        private scope;
        private attrs;
        constructor($scope: ControlScope, $element: JQuery, $attrs: ControlAttributes);
        private buildScope();
    }
}
declare module sap.sbo.ui.controls {
    import BaseControl = sap.sbo.ui.BaseControl;
    function LabelDirective(): Object;
    interface LabelScope extends ControlScope {
        text: string;
    }
    interface LabelAttributes extends ControlAttributes {
        text: string;
    }
    class Label extends BaseControl {
        private scope;
        private attrs;
        constructor($scope: LabelScope, $element: JQuery, $attrs: ng.IAttributes);
        buildScope(): void;
    }
}
declare module sap.sbo.ui.controls {
    import BaseControl = sap.sbo.ui.BaseControl;
    function LinkedInputDirective(): Object;
    interface LinkedInputScope extends ControlScope {
    }
    interface LinkedInputAttributes extends ControlAttributes {
    }
    class LinkedInput extends BaseControl {
        private scope;
        private attrs;
        constructor($scope: ControlScope, $element: JQuery, $attrs: ControlAttributes);
        private buildScope();
    }
}
declare module sap.sbo.ui.controls {
    import BaseControl = sap.sbo.ui.BaseControl;
    function NumberInputDirective(): Object;
    interface NumberInputScope extends ControlScope {
    }
    interface NumberInputAttributes extends ControlAttributes {
    }
    class NumberInput extends BaseControl {
        private scope;
        private attrs;
        constructor($scope: ControlScope, $element: JQuery, $attrs: ControlAttributes);
        private buildScope();
    }
}
declare module sap.sbo.ui.controls {
    import BaseControl = sap.sbo.ui.BaseControl;
    function SelectDirective(): Object;
    interface SelectScope extends ControlScope {
    }
    interface SelectAttributes extends ControlAttributes {
        index: number;
        options: string;
    }
    class Select extends BaseControl {
        private scope;
        private attrs;
        constructor($scope: ControlScope, $element: JQuery, $attrs: ControlAttributes);
        private buildScope();
    }
}
declare module sap.sbo.ui.controls {
    import BaseControl = sap.sbo.ui.BaseControl;
    function TextAreaDirective(): Object;
    interface TextAreaScope extends ControlScope {
    }
    interface TextAreaAttributes extends ControlAttributes {
    }
    class TextArea extends BaseControl {
        private scope;
        private attrs;
        constructor($scope: ControlScope, $element: JQuery, $attrs: ControlAttributes);
        private buildScope();
    }
}
declare module sap.sbo.ui.controls {
    import BaseControl = sap.sbo.ui.BaseControl;
    function RateStarDirective(): Object;
    interface RateStarScope extends ControlScope {
        progress: number;
        imgIndex: number;
    }
    interface RateStarAttributes extends ng.IAttributes {
        progress: number;
        score: number;
    }
    class RateStar extends BaseControl {
        private scope;
        private attrs;
        constructor($scope: ControlScope, $element: JQuery, $attrs: ng.IAttributes);
        private buildScope();
    }
}
declare module sap.sbo.ui.controls {
    import BaseControl = sap.sbo.ui.BaseControl;
    function DaysInfoDirective(): Object;
    interface DaysInfoScope extends ControlScope {
        progress: number;
        imgIndex: number;
    }
    interface DaysInfoAttributes extends ng.IAttributes {
        progress: number;
        score: number;
    }
    class DaysInfo extends BaseControl {
        private scope;
        private attrs;
        constructor($scope: ControlScope, $element: JQuery, $attrs: ng.IAttributes);
        private buildScope();
    }
}
declare module sap.sbo.ng4c.app {
    interface IController {
        name: string;
        controller: Function;
    }
    interface IControl {
        name: string;
        directive: ng.IDirectiveFactory;
    }
    interface IService {
        name: string;
        service: Function;
    }
    interface IConstant {
        name: string;
        constant: Object;
    }
    class Registry {
        private static _controllers;
        private static _controls;
        private static _services;
        private static _constants;
        static constants: IConstant[];
        static servies: IService[];
        static controllers: IController[];
        static controls: IControl[];
    }
}
declare module sap.sbo.ng4c.app {
    class Application {
        static main(): void;
    }
}
