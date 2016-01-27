<?php namespace Onderdelen\AppFoundation;

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
        // Find path to the package
        $componenentsFileName = with(new ReflectionClass('\Onderdelen\AppFoundation\AppFoundationServiceProvider'))->getFileName();
        $componenentsPath = dirname($componenentsFileName);

        $this->loadViewsFrom($componenentsPath . '/../views', 'appFoundation');

        //include $componenentsPath . '/../routes.php';

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
        $this->app->register(\Onderdelen\AppFoundation\ResponseMacroServiceProvider::class);
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
