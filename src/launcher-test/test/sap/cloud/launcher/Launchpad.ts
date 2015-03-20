/// <reference path="../../../../../core-test/test/jasmine.d.ts" />
/// <reference path="../../../../../core/resources/core.d.ts" />
/// <reference path="../../../../../launcher/resources/launcher.d.ts" />
/// <chutzpah_reference path="../../../../../core/resources/core.js" />
/// <chutzpah_reference path="../../../../../launcher/resources/launcher.d.ts" />

describe("sap.cloud.launcher.Launchpad",() => {

    it("show",() => {
        new sap.cloud.launcher.Launchpad().show();
    });

});

