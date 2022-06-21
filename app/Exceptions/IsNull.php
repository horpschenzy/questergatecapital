<?php

namespace App\Exceptions;

use Exception;

class IsNull extends Exception
{
    public static function create($message)
    {
        return new static("{$message}");
    }
}
