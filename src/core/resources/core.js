var sap;
(function (sap) {
    var cloud;
    (function (cloud) {
        var logging;
        (function (logging) {
            var SimpleLogger = (function () {
                function SimpleLogger(name) {
                    this.name = name;
                }
                SimpleLogger.prototype.info = function (msg) {
                    console.log("[INFO] " + this.name + " --> " + msg);
                };
                return SimpleLogger;
            })();
            logging.SimpleLogger = SimpleLogger;
        })(logging = cloud.logging || (cloud.logging = {}));
    })(cloud = sap.cloud || (sap.cloud = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var cloud;
    (function (cloud) {
        var logging;
        (function (logging) {
            var LogManager = (function () {
                function LogManager() {
                }
                LogManager.getLogger = function (name) {
                    return new logging.SimpleLogger(name.name);
                };
                return LogManager;
            })();
            logging.LogManager = LogManager;
        })(logging = cloud.logging || (cloud.logging = {}));
    })(cloud = sap.cloud || (sap.cloud = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var cloud;
    (function (cloud) {
        var core;
        (function (core) {
            var LogManager = sap.cloud.logging.LogManager;
            var TemplateEngine = (function () {
                function TemplateEngine() {
                }
                TemplateEngine.prototype.render = function () {
                    TemplateEngine.log.info("render()");
                };
                TemplateEngine.prototype.dummy = function () {
                    return 123;
                };
                TemplateEngine.prototype.process = function (num) {
                    return null;
                };
                TemplateEngine.log = LogManager.getLogger(TemplateEngine);
                return TemplateEngine;
            })();
            core.TemplateEngine = TemplateEngine;
        })(core = cloud.core || (cloud.core = {}));
    })(cloud = sap.cloud || (sap.cloud = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var cloud;
    (function (cloud) {
        var core;
        (function (core) {
            var util;
            (function (util) {
                var NamingUtil = (function () {
                    function NamingUtil() {
                    }
                    NamingUtil.toCssName = function (packageName) {
                        return packageName.replace(NamingUtil.DOT_REG, NamingUtil.HYPHEN);
                    };
                    NamingUtil.toPath = function (packageName) {
                        return packageName.replace(NamingUtil.DOT_REG, NamingUtil.SLASH);
                    };
                    NamingUtil.toDirective = function (packageName) {
                        var names = packageName.split(NamingUtil.DOT);
                        for (var i = 1, total = names.length; i < total; i++) {
                            names[i] = NamingUtil.uppercaseFirstChar(names[i]);
                        }
                        return names.join(NamingUtil.EMPTY);
                    };
                    NamingUtil.uppercaseFirstChar = function (str) {
                        return str.charAt(0).toUpperCase() + str.slice(1);
                    };
                    NamingUtil.DOT_REG = /\./gi;
                    NamingUtil.SLASH = '/';
                    NamingUtil.DOT = '.';
                    NamingUtil.HYPHEN = '-';
                    NamingUtil.EMPTY = '';
                    return NamingUtil;
                })();
                util.NamingUtil = NamingUtil;
            })(util = core.util || (core.util = {}));
        })(core = cloud.core || (cloud.core = {}));
    })(cloud = sap.cloud || (sap.cloud = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var NamingUtil = sap.cloud.core.util.NamingUtil;
            var BaseController = (function () {
                function BaseController($scope, $element, $attrs, $package) {
                    this.$scope = $scope;
                    this.$element = $element;
                    this.$attrs = $attrs;
                    var lastIndex = $package.lastIndexOf(BaseController.DOT);
                    var moduleStr = lastIndex < 0 ? "" : $package.slice(0, lastIndex);
                    var klassName = lastIndex < 0 ? $package : $package.slice(lastIndex + 1);
                    this.$package = $package;
                    this.klass = klassName;
                    this.module = moduleStr;
                    this.registerTemplate($package);
                    this.registerCssName($package);
                    console.log(this.$package + " initialize!");
                }
                BaseController.prototype.registerTemplate = function (templatePackage) {
                    this.$scope.template = "resources/" + NamingUtil.toPath(templatePackage) + ".html";
                };
                BaseController.prototype.registerCssName = function (packageName) {
                    this.$scope.className = NamingUtil.toCssName(packageName);
                };
                BaseController.DOT_REG = /\./gi;
                BaseController.HYPHEN = "-";
                BaseController.SLASH = "/";
                BaseController.DOT = ".";
                return BaseController;
            })();
            ng4c.BaseController = BaseController;
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ui;
        (function (ui) {
            var BaseController = sap.sbo.ng4c.BaseController;
            var BaseControl = (function (_super) {
                __extends(BaseControl, _super);
                function BaseControl($scope, $element, $attrs, $package) {
                    _super.call(this, $scope, $element, $attrs, $package);
                }
                BaseControl.makeDirective = function (directive) {
                    return $.extend(BaseControl.DIRECTIVE, directive);
                };
                BaseControl.DIRECTIVE = {
                    restrict: "E",
                    priority: 0,
                    replace: true,
                    scope: true,
                    transclude: true,
                    templateUrl: '',
                    compile: function ($element, $attrs, $transclude) {
                        return {
                            pre: function ($scope, $element, $attrs, $controller) {
                                console.log("Control Pre");
                            },
                            post: function ($scope, $element, $attrs, $controller) {
                                console.log("Control Post");
                            }
                        };
                    },
                    link: function ($scope, $element, $attrs, $controller) {
                        console.log("Control Linked!");
                    }
                };
                return BaseControl;
            })(BaseController);
            ui.BaseControl = BaseControl;
        })(ui = sbo.ui || (sbo.ui = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ui;
        (function (ui) {
            var controls;
            (function (controls) {
                var BaseControl = sap.sbo.ui.BaseControl;
                function CheckboxDirective() {
                    return {
                        restrict: "E",
                        priority: 0,
                        replace: true,
                        scope: true,
                        transclude: true,
                        templateUrl: 'resources/sap/sbo/ui/controls/Checkbox.html',
                        compile: function ($element, $attrs, $transclude) {
                            return {
                                pre: function ($scope, $element, $attrs, $controller) {
                                    console.log("Control Pre");
                                },
                                post: function ($scope, $element, $attrs, $controller) {
                                    console.log("Control Post");
                                }
                            };
                        },
                        link: function ($scope, $element, $attrs, $controller) {
                            console.log("Control Linked!");
                        }
                    };
                }
                controls.CheckboxDirective = CheckboxDirective;
                var Checkbox = (function (_super) {
                    __extends(Checkbox, _super);
                    function Checkbox($scope, $element, $attrs) {
                        _super.call(this, $scope, $element, $attrs, "sap.sbo.ui.controls.Checkbox");
                        this.scope = this.$scope;
                        this.attrs = $attrs;
                        this.buildScope();
                    }
                    Checkbox.prototype.buildScope = function () {
                        this.scope.icon = this.getIconContent(this.attrs.icon);
                    };
                    Checkbox.prototype.getIconContent = function (icon) {
                        return '';
                    };
                    return Checkbox;
                })(BaseControl);
                controls.Checkbox = Checkbox;
            })(controls = ui.controls || (ui.controls = {}));
        })(ui = sbo.ui || (sbo.ui = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ui;
        (function (ui) {
            var controls;
            (function (controls) {
                var BaseControl = sap.sbo.ui.BaseControl;
                function CircleProgressDirective() {
                    return {
                        restrict: "E",
                        priority: 0,
                        replace: true,
                        scope: true,
                        transclude: true,
                        templateUrl: 'resources/sap/sbo/ui/controls/CircleProgress.html',
                        compile: function ($element, $attrs, $transclude) {
                            return {
                                pre: function ($scope, $element, $attrs, $controller) {
                                    console.log("Control Pre");
                                },
                                post: function ($scope, $element, $attrs, $controller) {
                                    console.log("Control Post");
                                }
                            };
                        },
                        link: function ($scope, $element, $attrs, $controller) {
                            console.log("Control Linked!");
                        }
                    };
                }
                controls.CircleProgressDirective = CircleProgressDirective;
                var CircleProgress = (function (_super) {
                    __extends(CircleProgress, _super);
                    function CircleProgress($scope, $element, $attrs) {
                        _super.call(this, $scope, $element, $attrs, "sap.sbo.ui.controls.CircleProgress");
                        this.scope = this.$scope;
                        this.attrs = $attrs;
                        this.buildScope();
                    }
                    CircleProgress.prototype.buildScope = function () {
                        this.scope.progress = parseFloat(this.attrs.progress);
                        if (this.scope.progress === 84) {
                            this.scope.imgIndex = 1;
                        }
                        else if (this.scope.progress === 62) {
                            this.scope.imgIndex = 2;
                        }
                    };
                    return CircleProgress;
                })(BaseControl);
                controls.CircleProgress = CircleProgress;
            })(controls = ui.controls || (ui.controls = {}));
        })(ui = sbo.ui || (sbo.ui = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var launchpad;
            (function (launchpad) {
                var create;
                (function (create) {
                    var BaseController = sap.sbo.ng4c.BaseController;
                    var Create = (function (_super) {
                        __extends(Create, _super);
                        function Create($scope, $element, $attrs, config, storage) {
                            _super.call(this, $scope, $element, $attrs, "sap.sbo.ng4c.launchpad.create.Create");
                            this.scope = this.$scope;
                            this.config = config;
                            this.storage = storage;
                            this.buildScope();
                            this.scope.$on("focusChangeBroadcast", $.proxy(this.onFocusChange, this));
                            this.scope.switchTab = $.proxy(this.onSwitchTab, this);
                        }
                        Create.prototype.buildScope = function () {
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
                            this.scope.currentIndex = 0;
                        };
                        Create.prototype.onFocusChange = function (event, elementIndex) {
                        };
                        Create.prototype.onSwitchTab = function (index) {
                            this.scope.currentIndex = index;
                        };
                        return Create;
                    })(BaseController);
                    create.Create = Create;
                })(create = launchpad.create || (launchpad.create = {}));
            })(launchpad = ng4c.launchpad || (ng4c.launchpad = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var launchpad;
            (function (launchpad) {
                var overview;
                (function (overview) {
                    var BaseController = sap.sbo.ng4c.BaseController;
                    var Overview = (function (_super) {
                        __extends(Overview, _super);
                        function Overview($scope, $element, $attrs, config, storage) {
                            _super.call(this, $scope, $element, $attrs, "sap.sbo.ng4c.launchpad.overview.Overview");
                            this.scope = this.$scope;
                            this.config = config;
                            this.storage = storage;
                            this.buildScope();
                            this.scope.$on("focusChangeBroadcast", $.proxy(this.onFocusChange, this));
                            this.scope.switchTab = $.proxy(this.onSwitchTab, this);
                            this.scope.showOrHideInfo = $.proxy(this.showOrHideInfo, this);
                        }
                        Overview.prototype.buildScope = function () {
                            this.scope.Overviews = [{}, {}, {}, {}];
                            this.scope.currentIndex = 0;
                            this.scope.infoOnTable = true;
                            $.ajax('resources/sap/sbo/ng4c/launchpad/overview/home.json', {
                                success: $.proxy(this.onPageDone, this)
                            });
                        };
                        Overview.prototype.onPageDone = function (page) {
                            this.scope.tiles = page[0].Tiles;
                            this.scope.$applyAsync();
                        };
                        Overview.prototype.onFocusChange = function (event, elementIndex) {
                        };
                        Overview.prototype.onSwitchTab = function (index) {
                            this.scope.currentIndex = index;
                        };
                        Overview.prototype.showOrHideInfo = function () {
                            this.scope.infoOnTable = !this.scope.infoOnTable;
                        };
                        return Overview;
                    })(BaseController);
                    overview.Overview = Overview;
                })(overview = launchpad.overview || (launchpad.overview = {}));
            })(launchpad = ng4c.launchpad || (ng4c.launchpad = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var app;
            (function (app) {
                var OverviewCtrl = (function () {
                    function OverviewCtrl($scope, $route) {
                        this.scope = $scope;
                        this.scope.action = $route.current.params.bo_abbr;
                        this.scope.idx = $route.current.params.bo_idx;
                    }
                    return OverviewCtrl;
                })();
                app.OverviewCtrl = OverviewCtrl;
            })(app = ng4c.app || (ng4c.app = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var app;
            (function (app) {
                var Router = (function () {
                    function Router() {
                    }
                    Router.prototype.hashTo = function (fragments) {
                        var hash = [Router.HASH];
                        for (var i = 0, total = fragments.length; i < total; i++) {
                            hash.push(fragments[i]);
                        }
                        location.hash = hash.join(Router.SLASH);
                    };
                    Router.prototype.hashToList = function (boAbbr) {
                        this.hashTo([Router.LIST, boAbbr]);
                    };
                    Router.prototype.hashToDetail = function (boAbbr, boIdx) {
                        this.hashTo([Router.DETAIL, boAbbr, boIdx]);
                    };
                    Router.prototype.hashToDashboard = function () {
                        location.hash = Router.HASH + Router.SLASH;
                    };
                    Router.prototype.hashToOverview = function (boAbbr) {
                        this.hashTo([Router.OVERVIEW, boAbbr]);
                    };
                    Router.prototype.hashToCreate = function (boAbbr) {
                        this.hashTo([Router.CREATE, boAbbr]);
                    };
                    Object.defineProperty(Router.prototype, "hash", {
                        get: function () {
                            return this._hash;
                        },
                        set: function (value) {
                            this._hash = value;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Router.HASH = '#';
                    Router.SLASH = '/';
                    Router.EMPTY = '';
                    Router.DOT = '.';
                    Router.LIST = 'list';
                    Router.DETAIL = 'detail';
                    Router.OVERVIEW = 'overview';
                    Router.CREATE = 'create';
                    return Router;
                })();
                app.Router = Router;
            })(app = ng4c.app || (ng4c.app = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var app;
            (function (app) {
                var CreateCtrl = (function () {
                    function CreateCtrl($scope, $route) {
                        this.scope = $scope;
                        this.scope.action = $route.current.params.bo_abbr;
                        this.scope.idx = $route.current.params.bo_idx;
                    }
                    return CreateCtrl;
                })();
                app.CreateCtrl = CreateCtrl;
            })(app = ng4c.app || (ng4c.app = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var app;
            (function (app) {
                var config;
                (function (config) {
                    var UIConfig = (function () {
                        function UIConfig() {
                            this.menuFullWidth = 60;
                            this.menuLightWidth = 0;
                            this.tileBasicWidth = 15;
                            this.tileBasicHeight = 14;
                            this.tileBasicGap = 0.6;
                        }
                        return UIConfig;
                    })();
                    config.UIConfig = UIConfig;
                })(config = app.config || (app.config = {}));
            })(app = ng4c.app || (ng4c.app = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var app;
            (function (app) {
                var config;
                (function (config) {
                    var TileConfig = (function () {
                        function TileConfig() {
                        }
                        TileConfig.prototype.getTileTemplateByName = function (name) {
                            var name = name.toLowerCase();
                            if (name === "kpi") {
                                return "Kpi";
                            }
                            else {
                                return "Dynamic";
                            }
                        };
                        return TileConfig;
                    })();
                    config.TileConfig = TileConfig;
                })(config = app.config || (app.config = {}));
            })(app = ng4c.app || (ng4c.app = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var app;
            (function (app) {
                var UIConfig = sap.sbo.ng4c.app.config.UIConfig;
                var TileConfig = sap.sbo.ng4c.app.config.TileConfig;
                var Config = (function () {
                    function Config() {
                        this.ui = new UIConfig();
                        this.tile = new TileConfig();
                    }
                    return Config;
                })();
                app.Config = Config;
            })(app = ng4c.app || (ng4c.app = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var launchpad;
            (function (launchpad) {
                var dashboard;
                (function (dashboard) {
                    var BaseController = sap.sbo.ng4c.BaseController;
                    var Notice = (function (_super) {
                        __extends(Notice, _super);
                        function Notice($scope, $element, $attrs, config) {
                            _super.call(this, $scope, $element, $attrs, "sap.sbo.ng4c.launchpad.dashboard.Notice");
                            this.scope = this.$scope;
                            this.config = config;
                            this.scope.url = "resources/sap/sbo/ng4c/launchpad/dashboard/notice_1.png";
                        }
                        Notice.SPLIT = 'x';
                        return Notice;
                    })(BaseController);
                    dashboard.Notice = Notice;
                })(dashboard = launchpad.dashboard || (launchpad.dashboard = {}));
            })(launchpad = ng4c.launchpad || (ng4c.launchpad = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var launchpad;
            (function (launchpad) {
                var dashboard;
                (function (dashboard) {
                    var tiles;
                    (function (tiles) {
                        var BaseController = sap.sbo.ng4c.BaseController;
                        var Dynamic = (function (_super) {
                            __extends(Dynamic, _super);
                            function Dynamic($scope, $element, $attrs) {
                                _super.call(this, $scope, $element, $attrs, "sap.sbo.ng4c.launchpad.dashboard.tiles.Dynamic");
                                this.scope = this.$scope;
                                this.scope.rawData = this.scope.data;
                                this.scope.url = 'resources/sap/sbo/ng4c/launchpad/dashboard/tiles/' + this.scope.rawData.Type + '.png';
                            }
                            return Dynamic;
                        })(BaseController);
                        tiles.Dynamic = Dynamic;
                    })(tiles = dashboard.tiles || (dashboard.tiles = {}));
                })(dashboard = launchpad.dashboard || (launchpad.dashboard = {}));
            })(launchpad = ng4c.launchpad || (ng4c.launchpad = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var launchpad;
            (function (launchpad) {
                var notice;
                (function (notice) {
                    var BaseController = sap.sbo.ng4c.BaseController;
                    var Notice = (function (_super) {
                        __extends(Notice, _super);
                        function Notice($scope, $element, $attrs, config, storage) {
                            _super.call(this, $scope, $element, $attrs, "sap.sbo.ng4c.launchpad.notice.Notice");
                            this.scope = this.$scope;
                            this.config = config;
                            this.storage = storage;
                            this.buildScope();
                            this.scope.$on("focusChangeBroadcast", $.proxy(this.onFocusChange, this));
                            this.scope.switchTab = $.proxy(this.onSwitchTab, this);
                        }
                        Notice.prototype.buildScope = function () {
                            this.scope.elementIndex = Notice.ELEMTNT_INDEX;
                            this.scope.notices = [{}, {}, {}, {}];
                            this.scope.currentIndex = 0;
                        };
                        Notice.prototype.onFocusChange = function (event, elementIndex) {
                        };
                        Notice.prototype.onSwitchTab = function (index) {
                            this.scope.currentIndex = index;
                        };
                        Notice.ELEMTNT_INDEX = 2;
                        return Notice;
                    })(BaseController);
                    notice.Notice = Notice;
                })(notice = launchpad.notice || (launchpad.notice = {}));
            })(launchpad = ng4c.launchpad || (ng4c.launchpad = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var app;
            (function (app) {
                var DashboardCtrl = (function () {
                    function DashboardCtrl($scope, router) {
                    }
                    return DashboardCtrl;
                })();
                app.DashboardCtrl = DashboardCtrl;
            })(app = ng4c.app || (ng4c.app = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var app;
            (function (app) {
                var ListCtrl = (function () {
                    function ListCtrl($scope, $route, router) {
                        this.scope = $scope;
                        this.scope.action = $route.current.params.bo_abbr;
                    }
                    return ListCtrl;
                })();
                app.ListCtrl = ListCtrl;
            })(app = ng4c.app || (ng4c.app = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var app;
            (function (app) {
                'use strict';
                var EventRoute = (function () {
                    function EventRoute($scope, $element) {
                        $scope.$on("showOrHideMenu", function (event, showOrHide) {
                            $scope.$broadcast("showOrHideMenuBroadcast", showOrHide);
                        });
                    }
                    return EventRoute;
                })();
                app.EventRoute = EventRoute;
            })(app = ng4c.app || (ng4c.app = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var launchpad;
            (function (launchpad) {
                var dashboard;
                (function (dashboard) {
                    var BaseController = sap.sbo.ng4c.BaseController;
                    var Tile = (function (_super) {
                        __extends(Tile, _super);
                        function Tile($scope, $element, $attrs, config, router) {
                            _super.call(this, $scope, $element, $attrs, "sap.sbo.ng4c.launchpad.dashboard.Tile");
                            this.scope = this.$scope;
                            this.config = config;
                            this.router = router;
                            this.scope.rawData = this.scope.data;
                            var size = this.scope.rawData.Size.split(Tile.SPLIT);
                            this.scope.sizeW = parseInt(size[0], 10);
                            this.scope.sizeH = parseInt(size[1], 10);
                            this.scope.width = this.scope.sizeW * this.config.ui.tileBasicWidth + (this.scope.sizeW - 1) * this.config.ui.tileBasicGap;
                            this.scope.height = this.scope.sizeH * this.config.ui.tileBasicHeight + (this.scope.sizeH - 1) * this.config.ui.tileBasicGap;
                            this.scope.innerTemplate = 'resources/sap/sbo/ng4c/launchpad/dashboard/tiles/' + this.config.tile.getTileTemplateByName(this.scope.rawData.Type) + '.html';
                            this.scope.onTap = $.proxy(this.onTap, this);
                        }
                        Tile.prototype.onTap = function () {
                            switch (this.scope.rawData.Type) {
                                case 'overview':
                                    this.router.hashToOverview("ORDR");
                                    break;
                                case 'creates':
                                case 'createq':
                                case 'creater':
                                case 'createa':
                                    this.router.hashToCreate("ORDR");
                                    break;
                                case 'recenta':
                                    this.router.hashToList("OCRD");
                                    break;
                                default: break;
                            }
                        };
                        Tile.SPLIT = 'x';
                        return Tile;
                    })(BaseController);
                    dashboard.Tile = Tile;
                })(dashboard = launchpad.dashboard || (launchpad.dashboard = {}));
            })(launchpad = ng4c.launchpad || (ng4c.launchpad = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var header;
            (function (header) {
                var BaseController = sap.sbo.ng4c.BaseController;
                var End = (function (_super) {
                    __extends(End, _super);
                    function End($scope, $element, $attrs) {
                        _super.call(this, $scope, $element, $attrs, "sap.sbo.ng4c.header.End");
                        this.scope = this.$scope;
                        this.scope.focusOnNotice = $.proxy(this.focusOnNotice, this);
                    }
                    End.prototype.focusOnNotice = function () {
                        if (location.hash.length <= 2) {
                            this.$scope.$emit("readyForChange", 2);
                        }
                        else {
                            this.$scope.$emit("focusChange", 2);
                        }
                    };
                    return End;
                })(BaseController);
                header.End = End;
            })(header = ng4c.header || (ng4c.header = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var header;
            (function (header) {
                var BaseController = sap.sbo.ng4c.BaseController;
                var Header = (function (_super) {
                    __extends(Header, _super);
                    function Header($scope, $element, $attrs) {
                        _super.call(this, $scope, $element, $attrs, "sap.sbo.ng4c.header.Header");
                    }
                    return Header;
                })(BaseController);
                header.Header = Header;
            })(header = ng4c.header || (ng4c.header = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var header;
            (function (header) {
                var BaseController = sap.sbo.ng4c.BaseController;
                var Center = (function (_super) {
                    __extends(Center, _super);
                    function Center($scope, $element, $attrs) {
                        _super.call(this, $scope, $element, $attrs, "sap.sbo.ng4c.header.Center");
                    }
                    return Center;
                })(BaseController);
                header.Center = Center;
            })(header = ng4c.header || (ng4c.header = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var app;
            (function (app) {
                var DetailCtrl = (function () {
                    function DetailCtrl($scope, $route, router) {
                        this.scope = $scope;
                        this.scope.action = $route.current.params.bo_abbr;
                        this.scope.idx = $route.current.params.bo_idx;
                    }
                    return DetailCtrl;
                })();
                app.DetailCtrl = DetailCtrl;
            })(app = ng4c.app || (ng4c.app = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var app;
            (function (app) {
                'use strict';
                var Storage = (function () {
                    function Storage() {
                    }
                    Storage.prototype.get = function (key, defaultValue) {
                        return localStorage.getItem(key) || defaultValue;
                    };
                    Storage.prototype.set = function (key, value) {
                        localStorage.setItem(key, value);
                    };
                    Storage.prototype.getBoolean = function (key, defaultValue) {
                        return this.get(key, defaultValue ? Storage.VAL_TRUE : Storage.VAL_FLASH) === Storage.VAL_TRUE;
                    };
                    Storage.prototype.setBoolean = function (key, value) {
                        return this.set(key, value ? Storage.VAL_TRUE : Storage.VAL_FLASH);
                    };
                    Storage.VAL_TRUE = '1';
                    Storage.VAL_FLASH = '0';
                    return Storage;
                })();
                app.Storage = Storage;
            })(app = ng4c.app || (ng4c.app = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var header;
            (function (header) {
                var BaseController = sap.sbo.ng4c.BaseController;
                var Begin = (function (_super) {
                    __extends(Begin, _super);
                    function Begin($scope, $element, $attrs, storage, router) {
                        _super.call(this, $scope, $element, $attrs, "sap.sbo.ng4c.header.Begin");
                        this.scope = $scope;
                        this.storage = storage;
                        this.router = router;
                        this.scope.focusOnHome = $.proxy(this.focusOnHome, this);
                        this.scope.focusOnPersonal = $.proxy(this.focusOnPersonal, this);
                    }
                    Begin.prototype.focusOnHome = function () {
                        this.$scope.$emit("focusChange", 1);
                    };
                    Begin.prototype.focusOnPersonal = function () {
                        if (location.hash.length <= 2) {
                            this.$scope.$emit("readyForChange", 0);
                        }
                        else {
                            this.$scope.$emit("focusChange", 0);
                        }
                    };
                    return Begin;
                })(BaseController);
                header.Begin = Begin;
            })(header = ng4c.header || (ng4c.header = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var footer;
            (function (footer) {
                var BaseController = sap.sbo.ng4c.BaseController;
                var Footer = (function (_super) {
                    __extends(Footer, _super);
                    function Footer($scope, $element, $attrs) {
                        _super.call(this, $scope, $element, $attrs, "sap.sbo.ng4c.footer.Footer");
                    }
                    return Footer;
                })(BaseController);
                footer.Footer = Footer;
            })(footer = ng4c.footer || (ng4c.footer = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var launchpad;
            (function (launchpad) {
                var aside;
                (function (aside) {
                    var BaseController = sap.sbo.ng4c.BaseController;
                    var AsideProps = (function () {
                        function AsideProps() {
                        }
                        AsideProps.HIDE_WIDTH = 50;
                        AsideProps.SHOW_WIDTH = 1000;
                        return AsideProps;
                    })();
                    aside.AsideProps = AsideProps;
                    var Aside = (function (_super) {
                        __extends(Aside, _super);
                        function Aside($scope, $element, $attrs, storage) {
                            _super.call(this, $scope, $element, $attrs, "sap.sbo.ng4c.launchpad.aside.Aside");
                            $scope.$on("showOrHideMenuBroadcast", $.proxy(this.onShowOrHideMenuBroadcast, this));
                            this.scope = this.$scope;
                            this.storage = storage;
                            this.scope.liteMode = this.storage.getBoolean("showOrHideMenu", true);
                            this.scope.width = AsideProps.SHOW_WIDTH;
                        }
                        Aside.prototype.onShowOrHideMenuBroadcast = function (event, showOrHide) {
                            if (showOrHide) {
                                this.scope.width = AsideProps.SHOW_WIDTH;
                            }
                            else {
                                this.scope.width = AsideProps.HIDE_WIDTH;
                            }
                            this.scope.liteMode = !showOrHide;
                            this.storage.setBoolean("showOrHideMenu", this.scope.liteMode);
                        };
                        Aside.ELEMTNT_INDEX = 0;
                        return Aside;
                    })(BaseController);
                    aside.Aside = Aside;
                })(aside = launchpad.aside || (launchpad.aside = {}));
            })(launchpad = ng4c.launchpad || (ng4c.launchpad = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var launchpad;
            (function (launchpad) {
                var aside;
                (function (aside) {
                    var BaseController = sap.sbo.ng4c.BaseController;
                    var User = (function (_super) {
                        __extends(User, _super);
                        function User($scope, $element, $attrs) {
                            _super.call(this, $scope, $element, $attrs, "sap.sbo.ng4c.launchpad.aside.User");
                            this.scope = this.$scope;
                        }
                        return User;
                    })(BaseController);
                    aside.User = User;
                })(aside = launchpad.aside || (launchpad.aside = {}));
            })(launchpad = ng4c.launchpad || (ng4c.launchpad = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ui;
        (function (ui) {
            var controls;
            (function (controls) {
                var BaseControl = sap.sbo.ui.BaseControl;
                var TreeNode = (function (_super) {
                    __extends(TreeNode, _super);
                    function TreeNode($scope, $element, $attrs) {
                        _super.call(this, $scope, $element, $attrs, "sap.sbo.ui.controls.TreeNode");
                        this.scope = this.$scope;
                        this.parent = this.scope.$parent;
                        this.buildScope();
                    }
                    TreeNode.prototype.buildScope = function () {
                        this.scope.name = this.scope.data.name;
                        this.scope.expand = false;
                        this.scope.nodes = this.scope.data.nodes ? this.scope.data.nodes : [];
                        this.scope.isFolder = this.scope.nodes.length > 0;
                        this.scope.logoClickHandler = $.proxy(this.logoClickHandler, this);
                    };
                    TreeNode.prototype.logoClickHandler = function (e) {
                        if (this.scope.nodes.length <= 0) {
                            var parent = this.scope.$parent;
                            while (parent && parent.data.level > 0) {
                                parent = parent.$parent;
                            }
                            if (parent && parent.$parent && $.isFunction(parent.$parent.menuItemClick)) {
                                parent.$parent.menuItemClick(this.scope.data);
                            }
                        }
                        else {
                            this.scope.expand = !this.scope.expand;
                        }
                    };
                    return TreeNode;
                })(BaseControl);
                controls.TreeNode = TreeNode;
            })(controls = ui.controls || (ui.controls = {}));
        })(ui = sbo.ui || (sbo.ui = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var launchpad;
            (function (launchpad) {
                var aside;
                (function (aside) {
                    var BaseController = sap.sbo.ng4c.BaseController;
                    var Modules = (function (_super) {
                        __extends(Modules, _super);
                        function Modules($scope, $element, $attrs, router) {
                            _super.call(this, $scope, $element, $attrs, "sap.sbo.ng4c.launchpad.aside.Modules");
                            this.scope = this.$scope;
                            this.router = router;
                            this.scope.menuItemClick = $.proxy(this.menuItemClick, this);
                        }
                        Modules.prototype.menuItemClick = function (menuData) {
                            if (menuData.showListview) {
                                this.router.hashToList(menuData.action);
                            }
                            else {
                                this.router.hashToDetail(menuData.action, '0');
                            }
                        };
                        return Modules;
                    })(BaseController);
                    aside.Modules = Modules;
                })(aside = launchpad.aside || (launchpad.aside = {}));
            })(launchpad = ng4c.launchpad || (ng4c.launchpad = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var launchpad;
            (function (launchpad) {
                var aside;
                (function (aside) {
                    var BaseController = sap.sbo.ng4c.BaseController;
                    var Menu = (function (_super) {
                        __extends(Menu, _super);
                        function Menu($scope, $element, $attrs) {
                            _super.call(this, $scope, $element, $attrs, "sap.sbo.ng4c.launchpad.aside.Menu");
                            this.scope = this.$scope;
                        }
                        return Menu;
                    })(BaseController);
                    aside.Menu = Menu;
                })(aside = launchpad.aside || (launchpad.aside = {}));
            })(launchpad = ng4c.launchpad || (ng4c.launchpad = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var launchpad;
            (function (launchpad) {
                var dashboard;
                (function (dashboard) {
                    var BaseController = sap.sbo.ng4c.BaseController;
                    var Dashboard = (function (_super) {
                        __extends(Dashboard, _super);
                        function Dashboard($scope, $element, $attrs) {
                            _super.call(this, $scope, $element, $attrs, "sap.sbo.ng4c.launchpad.dashboard.Dashboard");
                            this.scope = this.$scope;
                            this.buildScope();
                            this.scope.$on("focusChangeBroadcast", $.proxy(this.onShowOrHideMenuBroadcast, this));
                            this.scope.$on("readyForChangeBroadcast", $.proxy(this.onQuickNoticeBroadcast, this));
                        }
                        Dashboard.prototype.buildScope = function () {
                            if (this.homePage) {
                                this.onHomeTilesLoaded(this.homePage);
                            }
                            else {
                                $.ajax('resources/sap/sbo/ng4c/launchpad/dashboard/home.json', {
                                    success: $.proxy(this.onHomeTilesLoaded, this)
                                });
                            }
                        };
                        Dashboard.prototype.onHomeTilesLoaded = function (data) {
                            this.homePage = data;
                            this.scope.homeTiles = data[0].Tiles;
                            if (this.salesPage) {
                                this.onSalesTilesLoaded(this.salesPage);
                            }
                            else {
                                $.ajax('resources/sap/sbo/ng4c/launchpad/dashboard/sales.json', {
                                    async: true,
                                    success: $.proxy(this.onSalesTilesLoaded, this)
                                });
                            }
                        };
                        Dashboard.prototype.onSalesTilesLoaded = function (data) {
                            this.salesPage = data;
                            this.scope.salesTiles = data[0].Tiles;
                            this.scope.notices = [{ entry: 1 }, { entry: 2 }, { entry: 3 }, { entry: 4 }];
                            this.scope.noticeLeft = "100%";
                            this.scope.noticeOpacity = 0;
                            this.focusOnElement(1);
                        };
                        Dashboard.prototype.onShowOrHideMenuBroadcast = function (event, elementIndex) {
                            this.focusOnElement(elementIndex);
                        };
                        Dashboard.prototype.focusOnElement = function (elementIndex) {
                            if (elementIndex === 1) {
                                this.token = setTimeout($.proxy(this.showNotice, this), 100);
                            }
                        };
                        Dashboard.prototype.showNotice = function () {
                            clearTimeout(this.token);
                            this.scope.noticeLeft = '0';
                            this.scope.noticeOpacity = 1;
                            this.scope.$applyAsync();
                        };
                        Dashboard.prototype.hideNotice = function () {
                            clearTimeout(this.token);
                            this.scope.noticeLeft = '100%';
                            this.scope.noticeOpacity = 0;
                            this.scope.$applyAsync();
                            setTimeout($.proxy(this.onNoticeHide, this), 600);
                        };
                        Dashboard.prototype.onNoticeHide = function () {
                        };
                        Dashboard.prototype.onQuickNoticeBroadcast = function (event, elementIndex) {
                            this.hideNotice();
                            this.token = setTimeout($.proxy(this.onHideNoticeDone, this), 500, elementIndex);
                        };
                        Dashboard.prototype.onHideNoticeDone = function (elementIndex) {
                            this.scope.$emit("focusChange", elementIndex);
                        };
                        return Dashboard;
                    })(BaseController);
                    dashboard.Dashboard = Dashboard;
                })(dashboard = launchpad.dashboard || (launchpad.dashboard = {}));
            })(launchpad = ng4c.launchpad || (ng4c.launchpad = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var app;
            (function (app) {
                var BodyCtrl = (function () {
                    function BodyCtrl($scope, router) {
                        this.scope = $scope;
                        this.router = router;
                        this.scope.$on("focusChange", $.proxy(this.focusChange, this));
                        this.scope.$on("readyForChange", $.proxy(this.readyForChange, this));
                    }
                    BodyCtrl.prototype.readyForChange = function (event, elementIndex) {
                        if (location.hash.length <= 2 && elementIndex !== 1) {
                            this.scope.$broadcast("readyForChangeBroadcast", elementIndex);
                        }
                        else {
                            this.scope.$broadcast("focusChangeBroadcast", elementIndex);
                        }
                    };
                    BodyCtrl.prototype.focusChange = function (event, elementIndex) {
                        this.scope.$broadcast("focusChangeBroadcast", elementIndex);
                    };
                    return BodyCtrl;
                })();
                app.BodyCtrl = BodyCtrl;
            })(app = ng4c.app || (ng4c.app = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var launchpad;
            (function (launchpad) {
                var BaseController = sap.sbo.ng4c.BaseController;
                var Launchpad = (function (_super) {
                    __extends(Launchpad, _super);
                    function Launchpad($scope, $element, $attrs, config, storage) {
                        _super.call(this, $scope, $element, $attrs, "sap.sbo.ng4c.launchpad.Launchpad");
                        this.scope = this.$scope;
                        this.config = config;
                        this.storage = storage;
                        this.scope.$on("focusChangeBroadcast", $.proxy(this.onShowOrHideMenuBroadcast, this));
                        this.focusOnElement(1);
                    }
                    Launchpad.prototype.onShowOrHideMenuBroadcast = function (event, elementIndex) {
                        this.focusOnElement(elementIndex);
                    };
                    Launchpad.prototype.focusOnElement = function (elementIndex) {
                        if (elementIndex === 0) {
                            this.scope.asideLeft = 0;
                            this.scope.asideRight = 50;
                            this.scope.asideScaleX = 1;
                            this.scope.asideScaleY = 1;
                            this.scope.asideWidth = 50;
                            this.scope.contentLeft = 50;
                            this.scope.contentScaleX = 0.8;
                            this.scope.contentScaleY = 0.8;
                            this.scope.contentWidth = 100;
                            this.scope.noticeRight = 100;
                            this.scope.noticeScaleX = 0.8;
                            this.scope.noticeScaleY = 0.8;
                            this.scope.noticeWidth = 50;
                        }
                        else if (elementIndex === 2) {
                            this.scope.asideLeft = -50;
                            this.scope.asideRight = 100;
                            this.scope.asideScaleX = 0.8;
                            this.scope.asideScaleY = 0.8;
                            this.scope.asideWidth = 50;
                            this.scope.contentLeft = -50;
                            this.scope.contentRight = 30;
                            this.scope.contentScaleX = 0.8;
                            this.scope.contentScaleY = 0.8;
                            this.scope.contentWidth = 100;
                            this.scope.noticeLeft = 30;
                            this.scope.noticeRight = 0;
                            this.scope.noticeScaleX = 1;
                            this.scope.noticeScaleY = 1;
                            this.scope.noticeWidth = 70;
                        }
                        else {
                            this.scope.asideLeft = -50;
                            this.scope.asideRight = 100;
                            this.scope.asideScaleX = 0.8;
                            this.scope.asideScaleY = 0.8;
                            this.scope.asideWidth = 50;
                            this.scope.contentLeft = 0;
                            this.scope.contentRight = 0;
                            this.scope.contentScaleX = 1;
                            this.scope.contentScaleY = 1;
                            this.scope.contentWidth = 100;
                            this.scope.noticeLeft = 100;
                            this.scope.noticeRight = -50;
                            this.scope.noticeScaleX = 0.8;
                            this.scope.noticeScaleY = 0.8;
                            this.scope.noticeWidth = 50;
                        }
                        this.scope.$applyAsync();
                    };
                    return Launchpad;
                })(BaseController);
                launchpad.Launchpad = Launchpad;
            })(launchpad = ng4c.launchpad || (ng4c.launchpad = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var launchpad;
            (function (launchpad) {
                var dashboard;
                (function (dashboard) {
                    var tiles;
                    (function (tiles) {
                        var BaseController = sap.sbo.ng4c.BaseController;
                        var Kpi = (function (_super) {
                            __extends(Kpi, _super);
                            function Kpi($scope, $element, $attrs) {
                                _super.call(this, $scope, $element, $attrs, "sap.sbo.ng4c.launchpad.dashboard.tiles.Kpi");
                                this.scope = this.$scope;
                                this.scope.rawData = this.scope.data;
                            }
                            return Kpi;
                        })(BaseController);
                        tiles.Kpi = Kpi;
                    })(tiles = dashboard.tiles || (dashboard.tiles = {}));
                })(dashboard = launchpad.dashboard || (launchpad.dashboard = {}));
            })(launchpad = ng4c.launchpad || (ng4c.launchpad = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var launchpad;
            (function (launchpad) {
                var aside;
                (function (aside) {
                    var BaseController = sap.sbo.ng4c.BaseController;
                    var SearchBar = (function (_super) {
                        __extends(SearchBar, _super);
                        function SearchBar($scope, $element, $attrs) {
                            _super.call(this, $scope, $element, $attrs, "sap.sbo.ng4c.launchpad.aside.SearchBar");
                            this.scope = this.$scope;
                        }
                        return SearchBar;
                    })(BaseController);
                    aside.SearchBar = SearchBar;
                })(aside = launchpad.aside || (launchpad.aside = {}));
            })(launchpad = ng4c.launchpad || (ng4c.launchpad = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var launchpad;
            (function (launchpad) {
                var aside;
                (function (aside) {
                    var BaseController = sap.sbo.ng4c.BaseController;
                    var Tab = (function (_super) {
                        __extends(Tab, _super);
                        function Tab($scope, $element, $attrs) {
                            _super.call(this, $scope, $element, $attrs, "sap.sbo.ng4c.launchpad.aside.Tab");
                            this.scope = this.$scope;
                            this.scope.currentIndex = 0;
                            this.scope.showTab = $.proxy(this.showTab, this);
                        }
                        Tab.prototype.showTab = function (index) {
                            if (index === this.scope.currentIndex)
                                return;
                            this.scope.currentIndex = index;
                        };
                        return Tab;
                    })(BaseController);
                    aside.Tab = Tab;
                })(aside = launchpad.aside || (launchpad.aside = {}));
            })(launchpad = ng4c.launchpad || (ng4c.launchpad = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ui;
        (function (ui) {
            var controls;
            (function (controls) {
                var BaseControl = sap.sbo.ui.BaseControl;
                function TreeDirective() {
                    return BaseControl.makeDirective({
                        templateUrl: 'resources/sap/sbo/ui/controls/Tree.html'
                    });
                }
                controls.TreeDirective = TreeDirective;
                var Tree = (function (_super) {
                    __extends(Tree, _super);
                    function Tree($scope, $element, $attrs) {
                        _super.call(this, $scope, $element, $attrs, "sap.sbo.ui.controls.Tree");
                        this.scope = this.$scope;
                        this.attrs = $attrs;
                        this.buildScope();
                    }
                    Tree.prototype.buildScope = function () {
                        this.scope.nodes = [];
                        $.ajax(this.attrs.ngMenuurl, {
                            async: true,
                            dataType: "JSON"
                        }).done($.proxy(this.onMenuDataReady, this));
                    };
                    Tree.prototype.onMenuDataReady = function (data) {
                        var menuData = data.menu;
                        for (var i = 0, total = menuData.length; i < total; i++) {
                            this.scope.nodes.push(this.buildNode(menuData[i]));
                        }
                        this.scope.$applyAsync();
                    };
                    Tree.prototype.buildNode = function (data, parent) {
                        if (parent === void 0) { parent = null; }
                        var node = {
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
                            for (var i = 0, total = data.nodes.length; i < total; i++) {
                                node.nodes.push(this.buildNode(data.nodes[i], node));
                            }
                        }
                        return node;
                    };
                    return Tree;
                })(BaseControl);
                controls.Tree = Tree;
            })(controls = ui.controls || (ui.controls = {}));
        })(ui = sbo.ui || (sbo.ui = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ui;
        (function (ui) {
            var controls;
            (function (controls) {
                var BaseControl = sap.sbo.ui.BaseControl;
                function SliderDirective() {
                    return BaseControl.makeDirective({
                        templateUrl: 'resources/sap/sbo/ui/controls/Slider.html'
                    });
                }
                controls.SliderDirective = SliderDirective;
                var Slider = (function (_super) {
                    __extends(Slider, _super);
                    function Slider($scope, $element, $attrs) {
                        _super.call(this, $scope, $element, $attrs, "sap.sbo.ui.controls.Slider");
                        this.scope = this.$scope;
                        this.attrs = $attrs;
                        this.buildScope();
                    }
                    Slider.prototype.buildScope = function () {
                        this.scope.icon = this.getIconContent(this.attrs.icon);
                    };
                    Slider.prototype.getIconContent = function (icon) {
                        return '';
                    };
                    return Slider;
                })(BaseControl);
                controls.Slider = Slider;
            })(controls = ui.controls || (ui.controls = {}));
        })(ui = sbo.ui || (sbo.ui = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var app;
            (function (app) {
                var Backend = (function () {
                    function Backend() {
                    }
                    return Backend;
                })();
                app.Backend = Backend;
            })(app = ng4c.app || (ng4c.app = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var launchpad;
            (function (launchpad) {
                var list;
                (function (list) {
                    var BaseController = sap.sbo.ng4c.BaseController;
                    var List = (function (_super) {
                        __extends(List, _super);
                        function List($scope, $element, $attrs, router) {
                            _super.call(this, $scope, $element, $attrs, "sap.sbo.ng4c.launchpad.list.List");
                            this.scope = $scope;
                            this.router = router;
                            this.scope.backToDashboard = $.proxy(this.backToDashboard, this);
                            this.scope.naviToDetail = $.proxy(this.naviToDetail, this);
                        }
                        List.prototype.backToDashboard = function () {
                            this.router.hashToDashboard();
                        };
                        List.prototype.naviToDetail = function () {
                            this.router.hashToDetail(this.scope.action, '1');
                        };
                        return List;
                    })(BaseController);
                    list.List = List;
                })(list = launchpad.list || (launchpad.list = {}));
            })(launchpad = ng4c.launchpad || (ng4c.launchpad = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var launchpad;
            (function (launchpad) {
                var aside;
                (function (aside) {
                    var BaseController = sap.sbo.ng4c.BaseController;
                    var MyMenu = (function (_super) {
                        __extends(MyMenu, _super);
                        function MyMenu($scope, $element, $attrs) {
                            _super.call(this, $scope, $element, $attrs, "sap.sbo.ng4c.launchpad.aside.MyMenu");
                            this.scope = this.$scope;
                        }
                        return MyMenu;
                    })(BaseController);
                    aside.MyMenu = MyMenu;
                })(aside = launchpad.aside || (launchpad.aside = {}));
            })(launchpad = ng4c.launchpad || (ng4c.launchpad = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var launchpad;
            (function (launchpad) {
                var detail;
                (function (detail) {
                    var BaseController = sap.sbo.ng4c.BaseController;
                    var Detail = (function (_super) {
                        __extends(Detail, _super);
                        function Detail($scope, $element, $attrs) {
                            _super.call(this, $scope, $element, $attrs, "sap.sbo.ng4c.launchpad.detail.Detail");
                            this.scope = this.$scope;
                        }
                        return Detail;
                    })(BaseController);
                    detail.Detail = Detail;
                })(detail = launchpad.detail || (launchpad.detail = {}));
            })(launchpad = ng4c.launchpad || (ng4c.launchpad = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ui;
        (function (ui) {
            var controls;
            (function (controls) {
                var BaseControl = sap.sbo.ui.BaseControl;
                function ButtonDirective() {
                    return {
                        restrict: "E",
                        priority: 0,
                        replace: true,
                        scope: true,
                        transclude: true,
                        templateUrl: 'resources/sap/sbo/ui/controls/Button.html',
                        compile: function ($element, $attrs, $transclude) {
                            return {
                                pre: function ($scope, $element, $attrs, $controller) {
                                    console.log("Control Pre");
                                },
                                post: function ($scope, $element, $attrs, $controller) {
                                    console.log("Control Post");
                                }
                            };
                        },
                        link: function ($scope, $element, $attrs, $controller) {
                            console.log("Control Linked!");
                        }
                    };
                }
                controls.ButtonDirective = ButtonDirective;
                var Button = (function (_super) {
                    __extends(Button, _super);
                    function Button($scope, $element, $attrs) {
                        _super.call(this, $scope, $element, $attrs, "sap.sbo.ui.controls.Button");
                        this.scope = this.$scope;
                        this.attrs = $attrs;
                        this.buildScope();
                    }
                    Button.prototype.buildScope = function () {
                        this.scope.icon = this.getIconContent(this.attrs.icon);
                    };
                    Button.prototype.getIconContent = function (icon) {
                        return '';
                    };
                    return Button;
                })(BaseControl);
                controls.Button = Button;
            })(controls = ui.controls || (ui.controls = {}));
        })(ui = sbo.ui || (sbo.ui = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ui;
        (function (ui) {
            var controls;
            (function (controls) {
                var BaseControl = sap.sbo.ui.BaseControl;
                function DatePickerDirective() {
                    return BaseControl.makeDirective({
                        templateUrl: 'resources/sap/sbo/ui/controls/DatePicker.html'
                    });
                }
                controls.DatePickerDirective = DatePickerDirective;
                var DatePicker = (function (_super) {
                    __extends(DatePicker, _super);
                    function DatePicker($scope, $element, $attrs) {
                        _super.call(this, $scope, $element, $attrs, "sap.sbo.ui.controls.DatePicker");
                        this.scope = this.$scope;
                        this.attrs = $attrs;
                        this.buildScope();
                    }
                    DatePicker.prototype.buildScope = function () {
                        this.scope.value = this.attrs.ngValue;
                    };
                    return DatePicker;
                })(BaseControl);
                controls.DatePicker = DatePicker;
            })(controls = ui.controls || (ui.controls = {}));
        })(ui = sbo.ui || (sbo.ui = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var launchpad;
            (function (launchpad) {
                var notice;
                (function (notice) {
                    var BaseController = sap.sbo.ng4c.BaseController;
                    var Item = (function (_super) {
                        __extends(Item, _super);
                        function Item($scope, $element, $attrs, config, storage) {
                            _super.call(this, $scope, $element, $attrs, "sap.sbo.ng4c.launchpad.notice.Item");
                            this.scope = this.$scope;
                            this.config = config;
                            this.storage = storage;
                            this.buildScope();
                            this.scope.$on("focusChangeBroadcast", $.proxy(this.onFocusChange, this));
                        }
                        Item.prototype.buildScope = function () {
                            this.scope.url = "resources/sap/sbo/ng4c/launchpad/notice/item_" + (this.scope.$index + 1) + ".png";
                        };
                        Item.prototype.onFocusChange = function (event, elementIndex) {
                        };
                        Item.ELEMTNT_INDEX = 2;
                        return Item;
                    })(BaseController);
                    notice.Item = Item;
                })(notice = launchpad.notice || (launchpad.notice = {}));
            })(launchpad = ng4c.launchpad || (ng4c.launchpad = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ui;
        (function (ui) {
            var controls;
            (function (controls) {
                var BaseControl = sap.sbo.ui.BaseControl;
                function DecimalInputDirective() {
                    return {
                        restrict: "E",
                        priority: 0,
                        replace: true,
                        scope: true,
                        transclude: true,
                        templateUrl: 'resources/sap/sbo/ui/controls/DecimalInput.html',
                        compile: function ($element, $attrs, $transclude) {
                            return {
                                pre: function ($scope, $element, $attrs, $controller) {
                                    console.log("Control Pre");
                                },
                                post: function ($scope, $element, $attrs, $controller) {
                                    console.log("Control Post");
                                }
                            };
                        },
                        link: function ($scope, $element, $attrs, $controller) {
                            console.log("Control Linked!");
                        }
                    };
                }
                controls.DecimalInputDirective = DecimalInputDirective;
                var DecimalInput = (function (_super) {
                    __extends(DecimalInput, _super);
                    function DecimalInput($scope, $element, $attrs) {
                        _super.call(this, $scope, $element, $attrs, "sap.sbo.ui.controls.DecimalInput");
                        this.scope = this.$scope;
                        this.attrs = $attrs;
                        this.buildScope();
                    }
                    DecimalInput.prototype.buildScope = function () {
                        this.scope.value = this.attrs.ngValue;
                    };
                    return DecimalInput;
                })(BaseControl);
                controls.DecimalInput = DecimalInput;
            })(controls = ui.controls || (ui.controls = {}));
        })(ui = sbo.ui || (sbo.ui = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ui;
        (function (ui) {
            var controls;
            (function (controls) {
                var BaseControl = sap.sbo.ui.BaseControl;
                function InputDirective() {
                    return BaseControl.makeDirective({
                        templateUrl: 'resources/sap/sbo/ui/controls/Input.html'
                    });
                }
                controls.InputDirective = InputDirective;
                var Input = (function (_super) {
                    __extends(Input, _super);
                    function Input($scope, $element, $attrs) {
                        _super.call(this, $scope, $element, $attrs, "sap.sbo.ui.controls.Input");
                        this.scope = this.$scope;
                        this.attrs = $attrs;
                        this.buildScope();
                    }
                    Input.prototype.buildScope = function () {
                        this.scope.value = this.attrs.ngValue;
                    };
                    return Input;
                })(BaseControl);
                controls.Input = Input;
            })(controls = ui.controls || (ui.controls = {}));
        })(ui = sbo.ui || (sbo.ui = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ui;
        (function (ui) {
            var controls;
            (function (controls) {
                var BaseControl = sap.sbo.ui.BaseControl;
                function LabelDirective() {
                    return {
                        restrict: "E",
                        priority: 0,
                        replace: true,
                        scope: true,
                        transclude: true,
                        templateUrl: 'resources/sap/sbo/ui/controls/Label.html',
                        compile: function ($element, $attrs, $transclude) {
                            return {
                                pre: function ($scope, $element, $attrs, $controller) {
                                    console.log("Control Pre");
                                },
                                post: function ($scope, $element, $attrs, $controller) {
                                    console.log("Control Post");
                                }
                            };
                        },
                        link: function ($scope, $element, $attrs, $controller) {
                            console.log("Control Linked!");
                        }
                    };
                }
                controls.LabelDirective = LabelDirective;
                var Label = (function (_super) {
                    __extends(Label, _super);
                    function Label($scope, $element, $attrs) {
                        _super.call(this, $scope, $element, $attrs, "sap.sbo.ui.controls.Label");
                        this.scope = this.$scope;
                        this.attrs = this.$attrs;
                        this.buildScope();
                    }
                    Label.prototype.buildScope = function () {
                        this.scope.text = this.attrs.text;
                    };
                    return Label;
                })(BaseControl);
                controls.Label = Label;
            })(controls = ui.controls || (ui.controls = {}));
        })(ui = sbo.ui || (sbo.ui = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ui;
        (function (ui) {
            var controls;
            (function (controls) {
                var BaseControl = sap.sbo.ui.BaseControl;
                function LinkedInputDirective() {
                    return {
                        restrict: "E",
                        priority: 0,
                        replace: true,
                        scope: true,
                        transclude: true,
                        templateUrl: 'resources/sap/sbo/ui/controls/LinkedInput.html',
                        compile: function ($element, $attrs, $transclude) {
                            return {
                                pre: function ($scope, $element, $attrs, $controller) {
                                    console.log("Control Pre");
                                },
                                post: function ($scope, $element, $attrs, $controller) {
                                    console.log("Control Post");
                                }
                            };
                        },
                        link: function ($scope, $element, $attrs, $controller) {
                            console.log("Control Linked!");
                        }
                    };
                }
                controls.LinkedInputDirective = LinkedInputDirective;
                var LinkedInput = (function (_super) {
                    __extends(LinkedInput, _super);
                    function LinkedInput($scope, $element, $attrs) {
                        _super.call(this, $scope, $element, $attrs, "sap.sbo.ui.controls.LinkedInput");
                        this.scope = this.$scope;
                        this.attrs = $attrs;
                        this.buildScope();
                    }
                    LinkedInput.prototype.buildScope = function () {
                        this.scope.value = this.attrs.ngValue;
                    };
                    return LinkedInput;
                })(BaseControl);
                controls.LinkedInput = LinkedInput;
            })(controls = ui.controls || (ui.controls = {}));
        })(ui = sbo.ui || (sbo.ui = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ui;
        (function (ui) {
            var controls;
            (function (controls) {
                var BaseControl = sap.sbo.ui.BaseControl;
                function NumberInputDirective() {
                    return BaseControl.makeDirective({
                        templateUrl: 'resources/sap/sbo/ui/controls/NumberInput.html'
                    });
                }
                controls.NumberInputDirective = NumberInputDirective;
                var NumberInput = (function (_super) {
                    __extends(NumberInput, _super);
                    function NumberInput($scope, $element, $attrs) {
                        _super.call(this, $scope, $element, $attrs, "sap.sbo.ui.controls.NumberInput");
                        this.scope = this.$scope;
                        this.attrs = $attrs;
                        this.buildScope();
                    }
                    NumberInput.prototype.buildScope = function () {
                        this.scope.value = this.attrs.ngValue;
                    };
                    return NumberInput;
                })(BaseControl);
                controls.NumberInput = NumberInput;
            })(controls = ui.controls || (ui.controls = {}));
        })(ui = sbo.ui || (sbo.ui = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ui;
        (function (ui) {
            var controls;
            (function (controls) {
                var BaseControl = sap.sbo.ui.BaseControl;
                function SelectDirective() {
                    return BaseControl.makeDirective({
                        templateUrl: 'resources/sap/sbo/ui/controls/Select.html'
                    });
                }
                controls.SelectDirective = SelectDirective;
                var Select = (function (_super) {
                    __extends(Select, _super);
                    function Select($scope, $element, $attrs) {
                        _super.call(this, $scope, $element, $attrs, "sap.sbo.ui.controls.Select");
                        this.scope = this.$scope;
                        this.attrs = $attrs;
                        this.buildScope();
                    }
                    Select.prototype.buildScope = function () {
                        this.scope.value = this.attrs.ngValue;
                    };
                    return Select;
                })(BaseControl);
                controls.Select = Select;
            })(controls = ui.controls || (ui.controls = {}));
        })(ui = sbo.ui || (sbo.ui = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ui;
        (function (ui) {
            var controls;
            (function (controls) {
                var BaseControl = sap.sbo.ui.BaseControl;
                function TextAreaDirective() {
                    return BaseControl.makeDirective({
                        templateUrl: 'resources/sap/sbo/ui/controls/TextArea.html'
                    });
                }
                controls.TextAreaDirective = TextAreaDirective;
                var TextArea = (function (_super) {
                    __extends(TextArea, _super);
                    function TextArea($scope, $element, $attrs) {
                        _super.call(this, $scope, $element, $attrs, "sap.sbo.ui.controls.TextArea");
                        this.scope = this.$scope;
                        this.attrs = $attrs;
                        this.buildScope();
                    }
                    TextArea.prototype.buildScope = function () {
                        this.scope.value = this.attrs.ngValue;
                    };
                    return TextArea;
                })(BaseControl);
                controls.TextArea = TextArea;
            })(controls = ui.controls || (ui.controls = {}));
        })(ui = sbo.ui || (sbo.ui = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ui;
        (function (ui) {
            var controls;
            (function (controls) {
                var BaseControl = sap.sbo.ui.BaseControl;
                function RateStarDirective() {
                    return {
                        restrict: "E",
                        priority: 0,
                        replace: true,
                        scope: true,
                        transclude: true,
                        templateUrl: 'resources/sap/sbo/ui/controls/RateStar.html',
                        compile: function ($element, $attrs, $transclude) {
                            return {
                                pre: function ($scope, $element, $attrs, $controller) {
                                    console.log("Control Pre");
                                },
                                post: function ($scope, $element, $attrs, $controller) {
                                    console.log("Control Post");
                                }
                            };
                        },
                        link: function ($scope, $element, $attrs, $controller) {
                            console.log("Control Linked!");
                        }
                    };
                }
                controls.RateStarDirective = RateStarDirective;
                var RateStar = (function (_super) {
                    __extends(RateStar, _super);
                    function RateStar($scope, $element, $attrs) {
                        _super.call(this, $scope, $element, $attrs, "sap.sbo.ui.controls.RateStar");
                        this.scope = this.$scope;
                        this.attrs = $attrs;
                        this.buildScope();
                    }
                    RateStar.prototype.buildScope = function () {
                        this.scope.progress = this.attrs.progress;
                        this.scope.imgIndex = 3;
                    };
                    return RateStar;
                })(BaseControl);
                controls.RateStar = RateStar;
            })(controls = ui.controls || (ui.controls = {}));
        })(ui = sbo.ui || (sbo.ui = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ui;
        (function (ui) {
            var controls;
            (function (controls) {
                var BaseControl = sap.sbo.ui.BaseControl;
                function DaysInfoDirective() {
                    return {
                        restrict: "E",
                        priority: 0,
                        replace: true,
                        scope: true,
                        transclude: true,
                        templateUrl: 'resources/sap/sbo/ui/controls/DaysInfo.html',
                        compile: function ($element, $attrs, $transclude) {
                            return {
                                pre: function ($scope, $element, $attrs, $controller) {
                                    console.log("Control Pre");
                                },
                                post: function ($scope, $element, $attrs, $controller) {
                                    console.log("Control Post");
                                }
                            };
                        },
                        link: function ($scope, $element, $attrs, $controller) {
                            console.log("Control Linked!");
                        }
                    };
                }
                controls.DaysInfoDirective = DaysInfoDirective;
                var DaysInfo = (function (_super) {
                    __extends(DaysInfo, _super);
                    function DaysInfo($scope, $element, $attrs) {
                        _super.call(this, $scope, $element, $attrs, "sap.sbo.ui.controls.DaysInfo");
                        this.scope = this.$scope;
                        this.attrs = $attrs;
                        this.buildScope();
                    }
                    DaysInfo.prototype.buildScope = function () {
                        this.scope.imgIndex = 4;
                    };
                    return DaysInfo;
                })(BaseControl);
                controls.DaysInfo = DaysInfo;
            })(controls = ui.controls || (ui.controls = {}));
        })(ui = sbo.ui || (sbo.ui = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var app;
            (function (app) {
                var Registry = (function () {
                    function Registry() {
                    }
                    Object.defineProperty(Registry, "constants", {
                        get: function () {
                            if (Registry._constants.length > 0)
                                return Registry._constants;
                            var constants = Registry._constants;
                            constants.push({ name: "config", constant: new sap.sbo.ng4c.app.Config() });
                            return constants;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(Registry, "servies", {
                        get: function () {
                            if (Registry._services.length > 0)
                                return Registry._services;
                            var services = Registry._services;
                            services.push({ name: "storage", service: sap.sbo.ng4c.app.Storage });
                            services.push({ name: "router", service: sap.sbo.ng4c.app.Router });
                            services.push({ name: "backend", service: sap.sbo.ng4c.app.Backend });
                            return services;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(Registry, "controllers", {
                        get: function () {
                            if (Registry._controllers.length > 0)
                                return Registry._controllers;
                            var collection = Registry._controllers;
                            collection.push({ name: "sap.sbo.ng4c.app.BodyCtrl", controller: sap.sbo.ng4c.app.BodyCtrl });
                            collection.push({ name: "sap.sbo.ng4c.app.DashboardCtrl", controller: sap.sbo.ng4c.app.DashboardCtrl });
                            collection.push({ name: "sap.sbo.ng4c.app.ListCtrl", controller: sap.sbo.ng4c.app.ListCtrl });
                            collection.push({ name: "sap.sbo.ng4c.app.DetailCtrl", controller: sap.sbo.ng4c.app.DetailCtrl });
                            collection.push({ name: "sap.sbo.ng4c.app.ListCtrl", controller: sap.sbo.ng4c.app.ListCtrl });
                            collection.push({ name: "sap.sbo.ng4c.app.CreateCtrl", controller: sap.sbo.ng4c.app.CreateCtrl });
                            collection.push({ name: "sap.sbo.ng4c.app.OverviewCtrl", controller: sap.sbo.ng4c.app.OverviewCtrl });
                            collection.push({ name: "sap.sbo.ng4c.launchpad.Launchpad", controller: sap.sbo.ng4c.launchpad.Launchpad });
                            collection.push({ name: "sap.sbo.ng4c.launchpad.dashboard.Dashboard", controller: sap.sbo.ng4c.launchpad.dashboard.Dashboard });
                            collection.push({ name: "sap.sbo.ng4c.launchpad.dashboard.Tile", controller: sap.sbo.ng4c.launchpad.dashboard.Tile });
                            collection.push({ name: "sap.sbo.ng4c.launchpad.dashboard.Notice", controller: sap.sbo.ng4c.launchpad.dashboard.Notice });
                            collection.push({ name: "sap.sbo.ng4c.launchpad.dashboard.tiles.Kpi", controller: sap.sbo.ng4c.launchpad.dashboard.tiles.Kpi });
                            collection.push({ name: "sap.sbo.ng4c.launchpad.dashboard.tiles.Dynamic", controller: sap.sbo.ng4c.launchpad.dashboard.tiles.Dynamic });
                            collection.push({ name: "sap.sbo.ng4c.launchpad.aside.Aside", controller: sap.sbo.ng4c.launchpad.aside.Aside });
                            collection.push({ name: "sap.sbo.ng4c.launchpad.aside.User", controller: sap.sbo.ng4c.launchpad.aside.User });
                            collection.push({ name: "sap.sbo.ng4c.launchpad.aside.Menu", controller: sap.sbo.ng4c.launchpad.aside.Menu });
                            collection.push({ name: "sap.sbo.ng4c.launchpad.aside.Modules", controller: sap.sbo.ng4c.launchpad.aside.Modules });
                            collection.push({ name: "sap.sbo.ng4c.launchpad.aside.MyMenu", controller: sap.sbo.ng4c.launchpad.aside.MyMenu });
                            collection.push({ name: "sap.sbo.ng4c.launchpad.aside.Tab", controller: sap.sbo.ng4c.launchpad.aside.Tab });
                            collection.push({ name: "sap.sbo.ng4c.launchpad.aside.SearchBar", controller: sap.sbo.ng4c.launchpad.aside.SearchBar });
                            collection.push({ name: "sap.sbo.ng4c.launchpad.notice.Notice", controller: sap.sbo.ng4c.launchpad.notice.Notice });
                            collection.push({ name: "sap.sbo.ng4c.launchpad.notice.Item", controller: sap.sbo.ng4c.launchpad.notice.Item });
                            collection.push({ name: "sap.sbo.ng4c.launchpad.list.List", controller: sap.sbo.ng4c.launchpad.list.List });
                            collection.push({ name: "sap.sbo.ng4c.launchpad.detail.Detail", controller: sap.sbo.ng4c.launchpad.detail.Detail });
                            collection.push({ name: "sap.sbo.ng4c.launchpad.create.Create", controller: sap.sbo.ng4c.launchpad.create.Create });
                            collection.push({ name: "sap.sbo.ng4c.launchpad.overview.Overview", controller: sap.sbo.ng4c.launchpad.overview.Overview });
                            collection.push({ name: "sap.sbo.ng4c.header.Begin", controller: sap.sbo.ng4c.header.Begin });
                            collection.push({ name: "sap.sbo.ng4c.header.End", controller: sap.sbo.ng4c.header.End });
                            collection.push({ name: "sap.sbo.ng4c.header.Center", controller: sap.sbo.ng4c.header.Center });
                            collection.push({ name: "sap.sbo.ng4c.header.Header", controller: sap.sbo.ng4c.header.Header });
                            collection.push({ name: "sap.sbo.ng4c.footer.Footer", controller: sap.sbo.ng4c.footer.Footer });
                            collection.push({ name: "sap.sbo.ui.controls.Tree", controller: sap.sbo.ui.controls.Tree });
                            collection.push({ name: "sap.sbo.ui.controls.TreeNode", controller: sap.sbo.ui.controls.TreeNode });
                            collection.push({ name: "sap.sbo.ui.controls.Button", controller: sap.sbo.ui.controls.Button });
                            collection.push({ name: "sap.sbo.ui.controls.Checkbox", controller: sap.sbo.ui.controls.Checkbox });
                            collection.push({ name: "sap.sbo.ui.controls.CircleProgress", controller: sap.sbo.ui.controls.CircleProgress });
                            collection.push({ name: "sap.sbo.ui.controls.DatePicker", controller: sap.sbo.ui.controls.DatePicker });
                            collection.push({ name: "sap.sbo.ui.controls.DaysInfo", controller: sap.sbo.ui.controls.DaysInfo });
                            collection.push({ name: "sap.sbo.ui.controls.DecimalInput", controller: sap.sbo.ui.controls.DecimalInput });
                            collection.push({ name: "sap.sbo.ui.controls.Input", controller: sap.sbo.ui.controls.Input });
                            collection.push({ name: "sap.sbo.ui.controls.Label", controller: sap.sbo.ui.controls.Label });
                            collection.push({ name: "sap.sbo.ui.controls.LinkedInput", controller: sap.sbo.ui.controls.LinkedInput });
                            collection.push({ name: "sap.sbo.ui.controls.NumberInput", controller: sap.sbo.ui.controls.NumberInput });
                            collection.push({ name: "sap.sbo.ui.controls.RateStar", controller: sap.sbo.ui.controls.RateStar });
                            collection.push({ name: "sap.sbo.ui.controls.Select", controller: sap.sbo.ui.controls.Select });
                            collection.push({ name: "sap.sbo.ui.controls.Slider", controller: sap.sbo.ui.controls.Slider });
                            collection.push({ name: "sap.sbo.ui.controls.TextArea", controller: sap.sbo.ui.controls.TextArea });
                            return collection;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(Registry, "controls", {
                        get: function () {
                            if (Registry._controls.length > 0)
                                return Registry._controls;
                            var collection = [];
                            collection.push({ name: "ng4cTree", directive: sap.sbo.ui.controls.TreeDirective });
                            collection.push({ name: "ng4cButton", directive: sap.sbo.ui.controls.ButtonDirective });
                            collection.push({ name: "ng4cCheckbox", directive: sap.sbo.ui.controls.CheckboxDirective });
                            collection.push({ name: "ng4cCircleProgress", directive: sap.sbo.ui.controls.CircleProgressDirective });
                            collection.push({ name: "ng4cDatePicker", directive: sap.sbo.ui.controls.DatePickerDirective });
                            collection.push({ name: "ng4cDaysInfo", directive: sap.sbo.ui.controls.DaysInfoDirective });
                            collection.push({ name: "ng4cDecimalInput", directive: sap.sbo.ui.controls.DecimalInputDirective });
                            collection.push({ name: "ng4cInput", directive: sap.sbo.ui.controls.InputDirective });
                            collection.push({ name: "ng4cLabel", directive: sap.sbo.ui.controls.LabelDirective });
                            collection.push({ name: "ng4cLinkedInput", directive: sap.sbo.ui.controls.LinkedInputDirective });
                            collection.push({ name: "ng4cNumberInput", directive: sap.sbo.ui.controls.NumberInputDirective });
                            collection.push({ name: "ng4cRateStar", directive: sap.sbo.ui.controls.RateStarDirective });
                            collection.push({ name: "ng4cSelect", directive: sap.sbo.ui.controls.SelectDirective });
                            collection.push({ name: "ng4cSlider", directive: sap.sbo.ui.controls.SliderDirective });
                            collection.push({ name: "ng4cTextArea", directive: sap.sbo.ui.controls.TextAreaDirective });
                            return collection;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Registry._controllers = [];
                    Registry._controls = [];
                    Registry._services = [];
                    Registry._constants = [];
                    return Registry;
                })();
                app.Registry = Registry;
            })(app = ng4c.app || (ng4c.app = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
var sap;
(function (sap) {
    var sbo;
    (function (sbo) {
        var ng4c;
        (function (ng4c) {
            var app;
            (function (_app) {
                'use strict';
                var Application = (function () {
                    function Application() {
                    }
                    Application.main = function () {
                        var app = angular.module('Application', ['ngRoute']);
                        var modules = _app.Registry.controllers;
                        var controls = _app.Registry.controls;
                        var services = _app.Registry.servies;
                        var constants = _app.Registry.constants;
                        modules.forEach(function (e) {
                            app.controller(e.name, e.controller);
                        });
                        controls.forEach(function (e) {
                            app.directive(e.name, e.directive);
                        });
                        services.forEach(function (e) {
                            app.service(e.name, e.service);
                        });
                        constants.forEach(function (e) {
                            app.constant(e.name, e.constant);
                        });
                        app.config(['$routeProvider', function ($routeProvider) {
                            $routeProvider.when('/', {
                                templateUrl: 'resources/sap/sbo/ng4c/app/Dashboard.html',
                                controller: 'sap.sbo.ng4c.app.DashboardCtrl'
                            });
                            $routeProvider.when('/list/:bo_abbr', {
                                templateUrl: 'resources/sap/sbo/ng4c/app/List.html',
                                controller: 'sap.sbo.ng4c.app.ListCtrl'
                            });
                            $routeProvider.when('/detail/:bo_abbr/:bo_idx', {
                                templateUrl: 'resources/sap/sbo/ng4c/app/Detail.html',
                                controller: 'sap.sbo.ng4c.app.DetailCtrl'
                            });
                            $routeProvider.when('/create/:bo_abbr', {
                                templateUrl: 'resources/sap/sbo/ng4c/app/Create.html',
                                controller: 'sap.sbo.ng4c.app.CreateCtrl'
                            });
                            $routeProvider.when('/overview/:bo_abbr', {
                                templateUrl: 'resources/sap/sbo/ng4c/app/Overview.html',
                                controller: 'sap.sbo.ng4c.app.OverviewCtrl'
                            });
                            $routeProvider.otherwise({
                                redirectTo: '/'
                            });
                        }]);
                    };
                    return Application;
                })();
                _app.Application = Application;
                Application.main();
            })(app = ng4c.app || (ng4c.app = {}));
        })(ng4c = sbo.ng4c || (sbo.ng4c = {}));
    })(sbo = sap.sbo || (sap.sbo = {}));
})(sap || (sap = {}));
//# sourceMappingURL=core.js.map