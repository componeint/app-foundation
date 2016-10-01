<?php
/**
 * AppFoundationServiceProvider.php
 * Created by @anonymoussc on 13/12/15 11:09.
 */

namespace Componeint\AppFoundation;

use ReflectionClass;
use Illuminate\Foundation\AliasLoader;
use Illuminate\Support\ServiceProvider;

class AppFoundationServiceProvider extends ServiceProvider
{
    /**
     * Indicates if loading of the provider is deferred.
     *
     * @var bool
     */
    protected $defer = false;

    /**
     * Bootstrap the application events.
     *
     * @return void
     */
    public function boot()
    {
        $componenentsFileName = with(new ReflectionClass('\Componeint\AppFoundation\AppFoundationServiceProvider'))->getFileName();
        $componenentsPath     = dirname($componenentsFileName);

        $this->loadViewsFrom($componenentsPath . '/../../resources/views', 'appFoundation');

        // include $componenentsPath . '/../routes.php';
    }

    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
        $this->app->register(\Dingo\Api\Provider\LaravelServiceProvider::class);
        $this->app->register(\Barryvdh\Cors\ServiceProvider::class);
        $this->app->register(\Componeint\AppFoundation\ResponseMacroServiceProvider::class);
    }

    /**
     * Get the services provided by the provider.
     *
     * @return array
     */
    public function provides()
    {
        return [];
    }

}
