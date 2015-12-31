/**
 * Created by anonymous on 30/12/15 18:11.
 */

(function() {
    'use strict';

    angular
        .module('appFoundation')
        .factory('toastService', toastService);

    toastService.$inject = ['$mdToast'];

    /* @ngInject */
    function toastService($mdToast) {
        var delay    = 6000,
            position = 'bottom right',
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
                    .content(content)
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
                    .content(content)
                    .position(position)
                    .theme('warn')
                    .action(action)
                    .hideDelay(delay)
            );
        }
    }

})();

