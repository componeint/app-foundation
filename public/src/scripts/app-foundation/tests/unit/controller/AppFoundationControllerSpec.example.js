/**
 * Created by consigliere on August 18th 2015, 12:57:06 pm.
 *
 * @module test.consigliere.appFoundation
 * @name AppFoundationController
 *
 * @description
 * Tests for AppFoundationController under consigliere.appFoundation
 * _Test description._
 */


describe('Controller: consigliere.appFoundation.AppFoundationController', function () {

    'use strict';

    // load the controller's module
    beforeEach(module('consigliere.appFoundation'));

    var ctrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('AppFoundationController', {
            $scope : scope
        });
    }));

    it('should be defined', function () {
        expect(ctrl).toBeDefined();
    });
});
