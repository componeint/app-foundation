<?php
/**
 * ResponseMacroServiceProvider.php
 * Created by anonymous on 04/01/16 0:14.
 */

namespace Onderdelen\AppFoundation;

use Illuminate\Support\ServiceProvider;
use Response;

class ResponseMacroServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        Response::macro('success', function ($message, $data) {
            return Response::json([
                'error'   => false,
                'message' => $message,
                'data'    => $data,
            ]);
        });

        Response::macro('error', function ($message, $status = 400) {
            return Response::json([
                'success'     => false,
                'message'     => $status . ' error' . ' : ' . $message,
                'status_code' => $status,
            ], $status);
        });

        Response::macro('exception', function ($message, $status = 400, $data = null) {
            return Response::json([
                'success'     => false,
                'error'       => true,
                'message'     => $status . ' exception' . ' : ' . $message,
                'data'        => $data,
                'status_code' => $status,
            ], $status);
        });
    }

    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}