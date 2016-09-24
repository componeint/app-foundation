/**
 * layout.provider.js
 * Created by anonymous on 05/02/16 8:38.
 */

(function() {
    'use strict';

    angular
        .module('appFoundation')
        .provider('layout', layout);

    layout.$inject = [];

    /* @ngInject */
    function layout() {

        this.dashboard = dashboard;
        this.view      = view;
        this.layout    = layout;
        this.$get      = function() {
            return {};
        };

        ////////////////

        function dashboard(viewName) {
            if (viewName !== '') {
                return './views/dashboard/' + appName(viewName) + '/' + fileDir(viewName) + '/' + fileName(viewName) + '.html';// jscs:ignore maximumLineLength
            } else {
                return './views/app/app/home/home.html';
            }
        }

        function view(viewName) {
            if (viewName !== '') {
                return './views/app/' + appName(viewName) + '/' + fileDir(viewName) + '/' + fileName(viewName) + '.html';// jscs:ignore maximumLineLength
            } else {
                return './views/app/app/home/home.html';
            }
        }

        function layout(viewName) {
            if (viewName !== '') {
                return './views/layouts/' + appName(viewName) + '/' + fileDir(viewName) + '/' + fileName(viewName) + '.html';// jscs:ignore maximumLineLength
            } else {
                return './views/layouts/themes/default/minimalist.html';
            }
        }

        function appName(v) {
            if (v.split('.')[0]) {
                return v.split('.')[0];
            } else {
                return 'app';
            }
        }

        function fileDir(v) {
            if (v.split('.')[1]) {
                return v.split('.')[1];
            } else if (!v.split('.')[0]) {
                return v;
            } else {
                return 'home';
            }
        }

        function fileName(v) {
            if (v.split('.')[2]) {
                return v.split('.')[2];
            } else if (!v.split('.')[2]) {
                if (v.split('.')[1]) {
                    return v.split('.')[1];
                }
            } else {
                return 'home';
            }
        }
    }

})();

