<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;
use App\Models\UserSubscription;

class UserSubscriptionController extends Controller
{
  
  public function purchase(Request $request, User $user)
  {
      $stripeSetupIntentPaymentMethodId = $request->input('stripeSetupIntentPaymentMethodId');
      try {
        $user->createOrGetStripeCustomer();
        $userSubscription = $user->userSubscription()->first();
        if(in_array($userSubscription->type, [ 'TRIAL_EXPIRED', 'YEARLY_EXPIRED' ])) {
          if($user->newSubscription('yearly', env('STRIPE_YEARLY_PLAN_ID'))->create($stripeSetupIntentPaymentMethodId)) {
            $this->purchaseSuccess($userSubscription);
            return response()->json($userSubscription->toArray(), 200);
          }
        }
      } catch (Exception $e) {
        return($e);
      }
  }
  
  public function purchaseSuccess(UserSubscription $userSubscription)
  {
      $userSubscription->type = 'YEARLY';
      $userSubscription->save();
      return $userSubscription;
  }

    public function update(Request $request, UserSubscription $subscription)
    {
      return $subscription->update($request->all());
    }
}
