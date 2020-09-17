<?php

namespace App\Console;

use Carbon\Carbon;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

use App\Models\UserSubscription;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        //
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
      // Every night, convert the subscriptions for users whose trials have expired 
      // from TRIAL to TRIAL_EXPIRED
        $schedule->call(function () {
          $today = new Carbon();
          $trialExpiredCreatedAtDate = $today->subtract(7, 'days')->toDateTimeString();
          $trialExpiredUsers = UserSubscription::where('type', 'TRIAL')
            ->where('createdAt', '<=', $trialExpiredCreatedAtDate)
            ->update([ 'type' => 'TRIAL_EXPIRED' ]);
        })->daily();
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
