<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Contracts\Auditable;

class BankAccount extends Model implements Auditable
{
    use \OwenIt\Auditing\Auditable;

    protected $table = 'bank_account_detail';

    protected $auditInclude = [];

    protected $auditTimestamps = true;
    
    protected $guarded = [];

    public function user(){
    	return $this->belongsTo('App\Models\User');
    }
}
