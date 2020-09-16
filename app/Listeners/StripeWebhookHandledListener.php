<?php

namespace App\Listeners;

use Laravel\Cashier\Events\WebhookHandled;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

use App\Models\User;
use App\Models\UserSubscription;

use Illuminate\Support\Facades\Log;

class StripeWebhookHandledListener
{
    /**
     * Handle the event.
     *
     * @param  WebhookHandled  $event
     * @return void
     */
    public function handle(WebhookHandled $event)
    { 
      // The event payload ($event->payload) is the Stripe Event object 
      // (https://stripe.com/docs/api/events/object)
      $stripeEvent = $event->payload;
      if($stripeEvent['type'] === 'customer.subscription.updated') {
        $this->handleCustomerSubscriptionUpdated($stripeEvent);
      }
      if($stripeEvent['type'] === 'customer.subscription.deleted') {
        $this->handleCustomerSubscriptionDeleted($stripeEvent);
      }
    }

    /**
     * Get the User from the Stripe Event 
     *
     * @return User $user
     */
    private function getUserSubscriptionFromStripeEvent($payload) { 
      $userStripeId = $payload['data']['object']['customer'];
      if($user = User::where('stripe_id', $userStripeId)->first()) {
        if($userSubscription = $user->userSubscription()->first()) {
          return $userSubscription;
        }
        return null;
      }
      return null;
    }

    /**
     * Get the customer status from the Stripe Event 
     *
     * @return void
     */
    private function getCustomerStatusFromStripeEvent($payload) { 
      return $payload['data']['object']['status'];
    }


    /**
     * Handle Stripe's "customer.subscription.updated" event
     *
     * @return void
     */
    private function handleCustomerSubscriptionUpdated($stripeEvent)
    {
      // Get the User and the Stripe customer status
      $userSubscription = $this->getUserSubscriptionFromStripeEvent($stripeEvent);
      $stripeCustomerStatus = $this->getCustomerStatusFromStripeEvent($stripeEvent);
      if(isset($userSubscription, $stripeCustomerStatus)) {
        // TRIAL
        if($userSubscription->type === 'TRIAL') {
          if($stripeCustomerStatus === 'active') {
            $userSubscription->type = 'YEARLY';
            $userSubscription->provider = 'STRIPE';
          }
        }
        // TRIAL_EXPIRED
        if($userSubscription->type === 'TRIAL_EXPIRED') {
          if($stripeCustomerStatus === 'active') {
            $userSubscription->type = 'YEARLY';
            $userSubscription->provider = 'STRIPE';
          }
        }
        // YEARLY_EXPIRED
        if($userSubscription->type === 'YEARLY_EXPIRED') {
          if($stripeCustomerStatus === 'active') {
            $userSubscription->type = 'YEARLY';
            $userSubscription->provider = 'STRIPE';
          }
        }
        $userSubscription->save();
      }
    }

    /**
     * Handle Stripe's "customer.subscription.deleted" event
     *
     * @return void
     */
    private function handleCustomerSubscriptionDeleted($stripeEvent)
    {
      // Get the User and the Stripe customer status
      $userSubscription = $this->getUserSubscriptionFromStripeEvent($stripeEvent);
      $stripeCustomerStatus = $this->getCustomerStatusFromStripeEvent($stripeEvent);
      if(isset($userSubscription, $stripeCustomerStatus)) {
        // YEARLY
        if($userSubscription->type === 'YEARLY') {
          if($stripeCustomerStatus === 'canceled' || $stripeCustomerStatus === 'incomplete_expired') {
            $userSubscription->type = 'YEARLY_EXPIRED';
            $userSubscription->provider = null;
          }
        }
        $userSubscription->save();
      }
    }
}
