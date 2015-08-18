/**
 * Created by consigliere on August 18th 2015, 4:31:10 pm.
 */

// appFoundation
angular.module('consigliere.appFoundation').config(['$translateProvider', function ($translateProvider) {
    'use strict';
    $translateProvider.translations('en', {
        TITLE : 'Hello',
        FOO   : 'This is a paragraph.'
    });
    // $translateProvider.preferredLanguage('en');
}]);

//appFoundation
//  .controller('Ctrl', function ($scope, $translate) {
//      $scope.changeLanguage = function (key) {
//          $translate.use(key);
//      };
//  });

// <h1>{{ 'TITLE' | translate }}</h1>
// <p>{{ 'FOO' | translate }}</p>