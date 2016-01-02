(function() {
    'use strict';

    angular
        .module('appFoundation')
        .config(cfpLoadingBar);

    cfpLoadingBar.$inject = ['cfpLoadingBarProvider'];

    /* @ngInject */
    function cfpLoadingBar(cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = false;
    }

})();

