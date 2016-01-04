/**
 * Modified from https://github.com/jadjoubran/laravel5-angular-material-starter/blob/master/angular/services/API.service.js
 * by anonymous on 04/01/16 1:19.
 */

(function() {
    'use strict';

    angular
        .module('appFoundation')
        .factory('API', API);

    API.$inject = ['Restangular', 'ToastService', '$localStorage'];

    /* @ngInject */
    function API(Restangular, ToastService, $localStorage) {
        //content negotiation
        var
            headers = {
                'Content-Type': 'application/json',
                'Accept'      : 'application/x.laravel.v1+json'
            },
            service = serviceFn();

        return service;

        ////////////////

        function serviceFn() {
            return Restangular.withConfig(function(RestangularConfigurer) {
                RestangularConfigurer
                    .setBaseUrl('/api/')
                    .setDefaultHeaders(headers)
                    .setErrorInterceptor(function(response) {
                        if (response.status === 422) {
                            for (var error in response.data.errors) {
                                return ToastService.error(response.data.errors[error][0]);
                            }
                        }
                    })
                    .addFullRequestInterceptor(function(element, operation, what, url, headers) {
                        if ($localStorage.jwt) {
                            headers.Authorization = 'Bearer ' + $localStorage.jwt;
                        }
                    });
            });
        }
    }

})();

