(function() {
    'use strict';

    angular
        .module('appFoundation')
        .config(theming);

    theming.$inject = ['$mdThemingProvider'];

    /* @ngInject */
    function theming($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('grey')
            .accentPalette('pink')
            .warnPalette('red');
    }

})();

