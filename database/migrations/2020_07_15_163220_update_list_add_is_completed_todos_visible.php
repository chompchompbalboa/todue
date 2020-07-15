<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateListAddIsCompletedTodosVisible extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::table('todoLists', function (Blueprint $table) {
        $table->boolean('isCompletedTodosVisible', 5)->default(true);
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
      Schema::table('todoLists', function (Blueprint $table) {
        $table->dropColumn('isCompletedTodosVisible');
      });
    }
}
