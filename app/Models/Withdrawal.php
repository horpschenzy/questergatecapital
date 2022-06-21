<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Contracts\Auditable;

class Withdrawal extends Model implements Auditable
{
    use \OwenIt\Auditing\Auditable;
    
    protected $table = 'withdrawals';

    protected $auditInclude = [];

    protected $auditTimestamps = true;
    
    protected $guarded = [];

    public function user(){
    	return $this->belongsTo('App\Models\User');
    }
}
