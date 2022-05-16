<?php

use App\Models\Moderator;
use App\Models\Respondent;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tests', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Moderator::class, 'moderator_id');
            $table->foreignIdFor( Respondent::class, 'project_id')->nullable()->default(null);
			$table->integer('type');
			$table->string('name', 1000);
			$table->string('instruction', 1000);
			$table->date('expire_date')->nullable();
			$table->integer('status')->default(0);
			$table->string('slug', 1000);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tests');
    }
}
