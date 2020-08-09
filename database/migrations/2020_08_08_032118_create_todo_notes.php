<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTodoNotes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('todoNotes', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('listId');
            $table->uuid('todoId');
            $table->softDeletes();
            $table->string('value', 1000);
            $table->timestamp('createdAt')->nullable();
            $table->timestamp('updatedAt')->nullable();
            
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
        Schema::dropIfExists('todoNotes');
    }
}
