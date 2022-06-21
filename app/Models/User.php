<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\SoftDeletes;
use OwenIt\Auditing\Contracts\Auditable;

class User extends Authenticatable implements Auditable
{
    use HasApiTokens, HasFactory, Notifiable;
    use SoftDeletes;
    use \OwenIt\Auditing\Auditable;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'firstname',
        'lastname',
        'email',
        'phone',
        'password',
        'created_on',
        'updated_on',
        'deleted_on',
        'is_deleted',
        'is_active',
        'referral_code',
        'usertype'
    ];

    protected $auditInclude = [];

    protected $auditTimestamps = true;

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function phone(){
        return $this->hasOne('App\Models\Phone');
    }

    public function nok(){
        return $this->hasOne('App\Models\NextOfKin');
    }

    public function bank(){
        return $this->hasOne('App\Models\BankAccount');
    }

    public function earning(){
        return $this->hasMany('App\Models\Earning');
    }

    public function referral(){
        return $this->hasMany('App\Models\Referral','referrer');
    }

    public function deposit(){
        return $this->hasMany('App\Models\Deposit');
    }

    public function qgwallet(){
        return $this->hasMany('App\Models\QGWallets');
    }

    public function withdrawal(){
        return $this->hasMany('App\Models\Withdrawal');
    }

    public function investment(){
        return $this->hasMany('App\Models\InvestmentPlan');
    }
}
