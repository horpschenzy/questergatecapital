<?php

namespace App\Exceptions;

use Exception;

class IsEmpty extends Exception
{
    public static function create($message)
    {
        return new static("{$message}");
    }
}
