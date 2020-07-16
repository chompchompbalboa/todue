<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTodoListTags extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('todoListTags', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('listId');
            $table->string('text')->nullable();
            $table->string('backgroundColor')->nullable();
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
        Schema::dropIfExists('todoListTags');
    }
}
