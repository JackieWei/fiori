/// <reference path="../../../jasmine.d.ts" />
/// <reference path="../../../../../core/resources/core.d.ts" />
/// <chutzpah_reference path="../../../../../core/resources/core.js" />

describe("sap.cloud.core.TemplateEngine",() => {

    it("dummy",() => {

        var ss = new sap.cloud.core.TemplateEngine().dummy();

        // Fixture setup
        var sut = 1;
        // Exercise system                
        var expectedNumber = 123;
        // Verify outcome
        expect(ss).toBe(expectedNumber);
        //expect(ss).message();
        // Teardown        
    });

    it("render",() => {

        var ss = new sap.cloud.core.TemplateEngine().dummy();

        // Fixture setup
        var sut = 1;
        // Exercise system                
        var expectedNumber = 123;
        // Verify outcome
        expect(ss).toBe(expectedNumber);
        //expect(ss).message();
        // Teardown        
    });

    it("process",() => {

        var ss = new sap.cloud.core.TemplateEngine().dummy();

        // Fixture setup
        var sut = 1;
        // Exercise system                
        var expectedNumber = 123;
        // Verify outcome
        expect(ss).toBe(expectedNumber);
        //expect(ss).message();
        // Teardown        
    });


});

