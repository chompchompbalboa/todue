<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class UserSubscription extends Model
{
    use Traits\UsesUuid;
  
    protected $table = 'userSubscription';
    
    const CREATED_AT = 'createdAt';
    const UPDATED_AT = 'updatedAt';

    protected $visible = [ 'id', 'type', 'stripeSetupIntentClientSecret' ];
    protected $fillable = [ 'id', 'type' ];
    protected $appends = [ 'stripeSetupIntentClientSecret' ];
  
    public function getStripeSetupIntentClientSecretAttribute() {
      if(in_array($this->type, [ 'TRIAL_EXPIRED', 'YEARLY_EXPIRED' ])) {
        if($user = $this->user()) {
          $stripeSetupIntent = $user->createSetupIntent();
          return $stripeSetupIntent->client_secret;
        }
      }
      return null;
    }

    public function user() {
      return $this->belongsTo('App\Models\User', 'userId')->first();
    }
}
