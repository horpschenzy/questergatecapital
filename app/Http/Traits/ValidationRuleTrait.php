<?php

namespace App\Http\Traits;

trait ValidationRuleTrait
{

    function vRules()
    {
        return [
            'firstname' => 'required|min:3',
            'lastname' => 'required|min:3',
            'email' => 'required|email|unique:users',
            'phone' => 'required|unique:users',
            'password' => 'required|min:8|confirmed',
        ];
    }

    function vMessages()
    {
        return [
            'required' => ':attribute is required.',
            'email' => ':attribute must be in a valid format.',
            'email.unique' => ':attribute already exist.',
            'phone.unique' => ':attribute already exist.',
            'min' => ':attribute must have at least :min characters.',
            'password.min' => ':attribute must have at least :min characters.',
        ];
    }
}
