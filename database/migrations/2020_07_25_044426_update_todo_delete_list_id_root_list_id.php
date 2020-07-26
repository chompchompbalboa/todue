<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateTodoDeleteListIdRootListId extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('todoLists', function (Blueprint $table) {
            $table->dropForeign('todolists_listid_foreign');
            $table->dropForeign('todolists_rootlistid_foreign');
            $table->dropColumn('listId');
            $table->dropColumn('rootListId');
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
            $table->uuid('listId')->nullable();
            $table->foreign('listId')->references('id')->on('todoLists');
            $table->uuid('rootListId')->nullable();
            $table->foreign('rootListId')->references('id')->on('todoLists');
        });
    }
}
