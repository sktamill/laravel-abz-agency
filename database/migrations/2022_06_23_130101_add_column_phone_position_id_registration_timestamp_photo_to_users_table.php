<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnPhonePositionIdRegistrationTimestampPhotoToUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('phone')->nullable();
            $table->unsignedBigInteger('position_id')->nullable();
            $table->timestamp('registration_timestamp')->nullable();
            $table->string('photo')->nullable();

            $table->index('position_id', 'position_idx');
            $table->foreign('position_id', 'position_fk')->on('positions')->references('id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
}
