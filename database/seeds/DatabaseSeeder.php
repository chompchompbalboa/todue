<?php

use Illuminate\Database\Seeder;

use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
      $users = [
        'eastmanrjr@gmail.com' => [ 'email' => 'eastmanrjr@gmail.com', 'name' => 'Rocky Eastman', 'subscriptionType' => 'LIFETIME' ],
        'trial@quickdo.app' => [ 'email' => 'trial@quickdo.app', 'name' => 'Trial', 'subscriptionType' => 'TRIAL' ],
        'trialexpired@quickdo.app' => [ 'email' => 'trialexpired@quickdo.app', 'name' => 'Trial Expired', 'subscriptionType' => 'TRIAL_EXPIRED' ],
        'yearly@quickdo.app' => [ 'email' => 'yearly@quickdo.app', 'name' => 'Yearly', 'subscriptionType' => 'YEARLY' ],
        'yearlyexpired@quickdo.app' => [ 'email' => 'yearlyexpired@quickdo.app', 'name' => 'Yearly Expired', 'subscriptionType' => 'YEARLY_EXPIRED' ],
        'yearlyexpiredgraceperiod@quickdo.app' => [ 'email' => 'yearlyexpiredgraceperiod@quickdo.app', 'name' => 'Yearly Expired', 'subscriptionType' => 'YEARLY_EXPIRED_GRACE_PERIOD' ]
      ];

      // Seed each user
      foreach($users as $currentUser) {

        // Create the new user
        $newUser = User::create([
          'name' => $currentUser['name'],
          'email' => $currentUser['email'],
          'password' => Hash::make('secret')
        ]);
        
        // Create the new UserActive
        $newUser->active()->create([
          'id' => Str::uuid()->toString(),
          'listId' => null,
          'sublistId' => null,
          'isCompletedTodosVisible' => false
        ]);
        
        // Create the new UserActive
        $newUser->userSubscription()->create([
          'id' => Str::uuid()->toString(),
          'type' => $currentUser['subscriptionType']
        ]);
      }
    }
}
