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
        'trial@quickdoapp.com' => [ 'email' => 'trial@quickdoapp.com', 'name' => 'Trial', 'subscriptionType' => 'TRIAL' ],
        'trialexpired@quickdoapp.com' => [ 'email' => 'trialexpired@quickdoapp.com', 'name' => 'Trial Expired', 'subscriptionType' => 'TRIAL_EXPIRED' ],
        'yearly@quickdoapp.com' => [ 'email' => 'yearly@quickdoapp.com', 'name' => 'Yearly', 'subscriptionType' => 'YEARLY' ],
        'yearlyexpired@quickdoapp.com' => [ 'email' => 'yearlyexpired@quickdoapp.com', 'name' => 'Yearly Expired', 'subscriptionType' => 'YEARLY_EXPIRED' ],
        'yearlyexpiredgraceperiod@quickdoapp.com' => [ 'email' => 'yearlyexpiredgraceperiod@quickdoapp.com', 'name' => 'Yearly Expired', 'subscriptionType' => 'YEARLY_EXPIRED_GRACE_PERIOD' ]
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
