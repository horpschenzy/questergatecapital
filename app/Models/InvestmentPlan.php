<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Contracts\Auditable;

class InvestmentPlan extends Model implements Auditable
{
    use \OwenIt\Auditing\Auditable;
    
    protected $auditInclude = [];

    protected $auditTimestamps = true;
    protected $table = 'investment_plan';
    
    protected $guarded = [];

    public function user(){
    	return $this->belongsTo('App\Models\User');
    }
    
    public function details(){
    	return $this->hasMany('App\Models\InvestmentPlanDetail');
    }
}
