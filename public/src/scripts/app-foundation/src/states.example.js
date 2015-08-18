/**
 * Created by consigliere on August 18th 2015, 12:57:06 pm.
 */

appFoundation.config([
    '$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        'use strict';

        // $urlRouterProvider.otherwise('/');

        $stateProvider
            //.state('main', {
            //    url         : '/',
            //    templateUrl : '/app-foundation'
            //})
            .state('appFoundation', {
                url         : '/app-foundation',
                templateUrl : '/app-foundation'
            });
            //.state('appFoundationDashboard.appFoundation', {
            //    url         : '/dashboard/app-foundation',
            //    templateUrl : '/dashboard/app-foundation'
            //});
    }
]);