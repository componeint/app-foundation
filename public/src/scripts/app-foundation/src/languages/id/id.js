/**
 * Created by consigliere on August 18th 2015, 12:57:06 pm.
 */

// appFoundation
angular.module('consigliere.appFoundation').config(['$translateProvider', function ($translateProvider) {
    'use strict';
    $translateProvider.translations('id', {
        TITLE : 'Hallo',
        FOO   : 'Ini adalah paragraf.'
    });
    // $translateProvider.preferredLanguage('id');
}]);

//appFoundation
//  .controller('Ctrl', function ($scope, $translate) {
//      $scope.changeLanguage = function (key) {
//          $translate.use(key);
//      };
//  });

// <h1>{{ 'TITLE' | translate }}</h1>
// <p>{{ 'FOO' | translate }}</p>