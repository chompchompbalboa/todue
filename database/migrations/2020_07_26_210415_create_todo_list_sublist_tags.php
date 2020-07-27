<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTodoListSublistTags extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('todoListSublistTags', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('listId');
            $table->uuid('sublistId');
            $table->uuid('tagId');
            $table->string('type');
            $table->softDeletes();
            $table->timestamp('createdAt')->nullable();
            $table->timestamp('updatedAt')->nullable();
            
            $table->foreign('listId')->references('id')->on('todoLists');
            $table->foreign('sublistId')->references('id')->on('todoListSublists');
            $table->foreign('tagId')->references('id')->on('todoListTags');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('todoListSublistTags');
    }
}
