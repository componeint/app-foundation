var elixir = require('laravel-elixir'),
    path   = require('./tasks/app.components.js');

require('./tasks/angular.task.js');
require('./tasks/bower.task.js');
require('./tasks/ngHtml2Js.task.js');
require('laravel-elixir-livereload');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    'use strict';

    mix
        .bower()
        .angular(path.ngDirectory())
        .ngHtml2Js(path.htmlDirectory())
        .sass(path.sassDirectory(), 'public/css')
        //.copy(path.copyDirectory(), 'public/views/')// jscs:ignore validateIndentation
        .livereload([
            'public/js/vendor.js',
            'public/js/partials.js',
            'public/js/app.js',
            'public/css/vendor.css',
            'public/css/app.css'
        ], {liveCSS: true});
    //.phpUnit();
});

require('gulp').task('generate', require('./app_components/einherjars/generators/tasks/generate.js').generate);// jscs:ignore maximumLineLength
