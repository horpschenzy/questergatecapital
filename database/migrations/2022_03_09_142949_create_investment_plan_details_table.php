<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInvestmentPlanDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('investment_plan_details', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('investment_plan_id');
            $table->double('capital',15,2);
            $table->string('days_remaining');
            $table->string('days_added');
            $table->string('roi');
            $table->double('roi_earned',15,2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('investment_plan_details');
    }
}
