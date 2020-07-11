<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTodoListUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('todoListUsers', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('listId');
            $table->uuid('userId');
            $table->softDeletes();
            $table->timestamp('createdAt')->nullable();
            $table->timestamp('updatedAt')->nullable();
  
            $table->foreign('listId')->references('id')->on('todoLists');
            $table->foreign('userId')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('todoListUsers');
    }
}
