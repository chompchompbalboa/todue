<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

use App\Models\User;

class UserSubscription extends Model
{
    use Traits\UsesUuid;
  
    protected $table = 'userSubscription';
    
    const CREATED_AT = 'createdAt';
    const UPDATED_AT = 'updatedAt';

    protected $visible = [ 'id', 'type', 'provider', 'stripeSetupIntentClientSecret', 'trialEndDate' ];
    protected $fillable = [ 'id', 'type', 'provider' ];
    protected $appends = [ 'stripeSetupIntentClientSecret', 'trialEndDate' ];
  
    public function getStripeSetupIntentClientSecretAttribute() {
      if(in_array($this->type, [ 'TRIAL', 'TRIAL_EXPIRED', 'YEARLY_EXPIRED' ])) {
        $stripeSetupIntent = $this->user()->createSetupIntent();
        return $stripeSetupIntent->client_secret;
      }
      return null;
    }
  
    public function getTrialEndDateAttribute() {
      if($this->type === 'TRIAL') {
        $userCreatedDate = new Carbon($this->createdAt);
        return $userCreatedDate->add(7, 'days')->toDateTimeString();
      }
      return null;
    }

    public function user() {
      return $this->belongsTo('App\Models\User', 'userId')->first();
    }
}
