<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTodoListSublist extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('todoListSublists', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('listId');
            $table->string('name')->nullable();
            $table->softDeletes();
            $table->timestamp('createdAt')->nullable();
            $table->timestamp('updatedAt')->nullable();
            
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
        Schema::dropIfExists('todoListSublists');
    }
}
