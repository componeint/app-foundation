/**
 * Created by consigliere on August 18th 2015, 4:31:10 pm.
 *
 * @module test.consigliere.appFoundation
 * @name appFoundation
 *
 * @description
 * Tests for appFoundation under consigliere.appFoundation
 * _Test description._
 */


describe('Service: consigliere.appFoundation.appFoundation', function () {

    'use strict';

    // load the service's module
    beforeEach(module('consigliere.appFoundation'));

    // instantiate service
    var service;

    //update the injection
    beforeEach(inject(function (appFoundation) {
        service = appFoundation;
    }));

    /**
     * @description
     * Sample test case to check if the service is injected properly
     * */
    it('should be injected and defined', function () {
        expect(service).toBeDefined();
    });
});
