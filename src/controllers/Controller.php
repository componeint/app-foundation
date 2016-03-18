<?php
/**
 * Controller.php
 * Created by anonymous on 14/01/16 8:58.
 */

namespace Componeint\AppFoundation\Controller;

use Dingo\Api\Http\Request;
use Dingo\Api\Exception\ValidationHttpException;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;


/**
 * Class Controller
 * @package Componeint\AppFoundation\Controller
 */
abstract class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * @param Request $request
     * @param array   $rules
     * @param array   $messages
     * @param array   $customAttributes
     */
    public function validate(Request $request, array $rules, array $messages = [], array $customAttributes = [])
    {
        $validator = $this->getValidationFactory()->make($request->all(), $rules, $messages, $customAttributes);

        if ($validator->fails()) {
            throw new ValidationHttpException($validator->errors());
        }
    }
}