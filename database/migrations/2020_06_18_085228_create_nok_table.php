<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNokTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('nok', function (Blueprint $table) {
            $table->id();
            $table->string('nok_name')->nullable();
            $table->string('nok_phone')->nullable();
            $table->string('nok_relationship')->nullable();
            $table->string('nok_state')->nullable();
            $table->string('nok_city')->nullable();
            $table->string('nok_address')->nullable();
            $table->timestamps();
        });

        Schema::table('nok', function (Blueprint $table) {
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
        Schema::dropIfExists('nok');
    }
}
