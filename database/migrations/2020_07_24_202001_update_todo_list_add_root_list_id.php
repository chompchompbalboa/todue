<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateTodoListAddRootListId extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::table('todoLists', function (Blueprint $table) {
        $table->uuid('rootListId')->nullable();
        $table->foreign('rootListId')->references('id')->on('todoLists');
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
        $table->dropForeign('todolists_rootlistid_foreign');
        $table->dropColumn('rootListId');
      });
    }
}
