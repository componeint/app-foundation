/**
 * app-auth.provider.js
 * Created by anonymous on 15/03/16 8:30.
 */

(function () {
    'use strict';

    angular
        .module('appFoundation')
        .provider('appAuth', appAuth);

    appAuth.$inject = [];

    /* @ngInject */
    function appAuth() {

        this.$get = function () {
            return {};
        };

        ////////////////

    }

})();
