<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateTodoListSublistAddTagId extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::table('todoListSublists', function (Blueprint $table) {
        $table->uuid('defaultTagId')->nullable();
        $table->foreign('defaultTagId')->references('id')->on('todoListTags');
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
      Schema::table('todoListSublists', function (Blueprint $table) {
        $table->dropForeign('todolistsublists_defaulttagid_foreign');
        $table->dropColumn('defaultTagId');
      });
    }
}
