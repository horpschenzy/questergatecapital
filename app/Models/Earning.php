<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Contracts\Auditable;

class Earning extends Model implements Auditable
{
    use \OwenIt\Auditing\Auditable;
    
    protected $auditInclude = [];

    protected $auditTimestamps = true;
    protected $table = 'earnings';
    
    protected $guarded = [];

    public function user(){
    	return $this->belongsTo('App\Models\User');
    }
}
