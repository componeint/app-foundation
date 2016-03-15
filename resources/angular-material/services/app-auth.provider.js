/**
 * app-auth.provider.js
 * Created by anonymous on 15/03/16 8:30.
 */

(function() {
    'use strict';

    angular
        .module('appFoundation')
        .provider('appAuth', appAuth);

    appAuth.$inject = [];

    /* @ngInject */
    function appAuth() {

        this.$get = function() {
            return {};
        };

        ////////////////

    }

})();
/*

 myApp.provider('unicornLauncher', function UnicornLauncherProvider() {
 var useTinfoilShielding = false;

 this.useTinfoilShielding = function(value) {
 useTinfoilShielding = !!value;
 };

 this.$get = ["apiToken", function unicornLauncherFactory(apiToken) {

 // let's assume that the UnicornLauncher constructor was also changed to
 // accept and use the useTinfoilShielding argument
 return new UnicornLauncher(apiToken, useTinfoilShielding);
 }];
 });

 /////////////

 myApp.config(["unicornLauncherProvider", function(unicornLauncherProvider) {
 unicornLauncherProvider.useTinfoilShielding(true);
 }]);

 */