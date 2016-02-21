/**
 * toast.service.js
 * Upgraded from https://github.com/jadjoubran/laravel5-angular-material-starter/blob/master/angular/services/toast.service.js
 * by anonymous on 30/12/15 18:11.
 */

(function() {
    'use strict';

    angular
        .module('appFoundation')
        .factory('ToastService', ToastService)
        .factory('Toast', ToastService);

    ToastService.$inject = ['$mdToast'];

    /* @ngInject */
    function ToastService($mdToast) {
        var delay    = 6000,
            position = 'top right',
            action   = 'OK';

        var service = {
            show : show,
            error: error
        };

        return service;

        ////////////////

        function show(content) {
            if (!content) {
                return false;
            }

            return $mdToast.show(
                $mdToast.simple()
                    .textContent(content)
                    .position(position)
                    .action(action)
                    .hideDelay(delay)
            );
        }

        function error(content) {
            if (!content) {
                return false;
            }

            return $mdToast.show(
                $mdToast.simple()
                    .textContent(content)
                    .position(position)
                    .theme('warn')
                    .action(action)
                    .hideDelay(delay)
            );
        }
    }

})();

