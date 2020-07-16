<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTodoTags extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('todoTags', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('tagId');
            $table->uuid('listId');
            $table->uuid('todoId');
            $table->softDeletes();
            $table->timestamp('createdAt')->nullable();
            $table->timestamp('updatedAt')->nullable();
            
            $table->foreign('tagId')->references('id')->on('todoListTags');
            $table->foreign('listId')->references('id')->on('todoLists');
            $table->foreign('todoId')->references('id')->on('todos');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('todoTags');
    }
}
