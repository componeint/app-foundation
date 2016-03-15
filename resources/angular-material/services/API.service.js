/**
 * API.service.js
 * Modified by anonymous on 04/01/16 1:19.
 */

(function() {
    'use strict';

    angular
        .module('appFoundation')
        .factory('API', API);

    API.$inject = ['Restangular', 'Toast', '$localStorage'];

    /* @ngInject */
    function API(Restangular, Toast, $localStorage) {

        //content negotiation
        var
            headers = {
                'Content-Type': 'application/json',
                'Accept'      : 'application/x.onsigbaar.v1+json'
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
                                return Toast.error(response.data.errors[error][0]);
                            }
                        }

                    })
                    .addFullRequestInterceptor(function(element, operation, what, url, headers) {

                        if ($localStorage.onsigbaar_token) {
                            headers.Authorization = 'Bearer ' + $localStorage.onsigbaar_token;
                        }

                    })
                    .addResponseInterceptor(function(data, operation, what, url, response, deferred) {

                        var extractedData;
                        // look for getList operations
                        if (operation === 'getList') {
                            // handle the data and meta data
                            extractedData = data.data;
                            // extractedData.meta = data.data.meta;
                        } else {
                            extractedData = data;
                        }

                        return extractedData;

                    })
                    .setMethodOverriders(['put', 'patch', 'delete']);

            });

        }

    }

})();

