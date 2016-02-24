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
        Response::macro('success', function (array $data = [], $message = 'success') {
            return Response::json([
                'status' => [
                    'error'   => false,
                    'message' => $message,
                ],
                'data'   => $data,
            ]);
        });

        Response::macro('error', function ($message = 'error', $statusCode = 400) {
            return Response::json([
                'status'  => [
                    'success'     => false,
                    'message'     => $message,
                    'status_code' => $statusCode,
                ],
                'message' => 'Error ' . $statusCode . ' : ' . $message,
            ]);
        });

        Response::macro('fail', function ($message = 'fail', $statusCode = 400, array $data = null) {
            return Response::json([
                'status'  => [
                    'success'     => false,
                    'error'       => true,
                    'message'     => $message,
                    'status_code' => $statusCode,
                ],
                'message' => 'Error ' . $statusCode . ' : ' . $message,
                'data'    => $data,
            ]);
        });

        /*
        Response::macro('success', function ($data) {
            return Response::json([
                'errors' => false,
                'data'   => $data,
            ]);
        });

        Response::macro('error', function ($message, $status = 400) {
            return \Response::json([
                'message'     => $status . ' error',
                'errors'      => [
                    'message' => [$message],
                ],
                'status_code' => $status,
            ], $status);
        });
        */
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