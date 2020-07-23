<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateTodoListAddListId extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::table('todoLists', function (Blueprint $table) {
        $table->uuid('listId')->nullable();
        $table->foreign('listId')->references('id')->on('todoLists');
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
        $table->dropForeign('todolists_listid_foreign');
        $table->dropColumn('listId');
      });
    }
}
