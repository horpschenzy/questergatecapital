<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Contracts\Auditable;

class SupportMessage extends Model implements Auditable
{
    use \OwenIt\Auditing\Auditable;
    
    protected $auditInclude = [];

    protected $auditTimestamps = true;   

    protected $table = 'support_message';
    
    protected $guarded = [];
}
