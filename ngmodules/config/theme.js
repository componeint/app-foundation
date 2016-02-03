/**
 * Created by anonymous on 03/01/16 2:42.
 */

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

