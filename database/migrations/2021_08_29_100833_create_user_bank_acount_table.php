<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Eloquent\SoftDeletes;

class CreateUserBankAcountTable extends Migration
{
    use SoftDeletes;
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_bank_acounts', function (Blueprint $table) {
            $table->id();
            $table->string('account_number');
            $table->string('account_name');
            $table->string('bank_name');
            $table->string('bank_code');
            $table->boolean('is_deleted')->nullable();
            $table->timestamps();
            $table->softDeletes();
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_bank_acount');
    }
}
