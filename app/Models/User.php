<?php

namespace App\Models;

use Laravel\Cashier\Billable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use Billable;
    use HasApiTokens;
    use Notifiable;
    use Traits\UsesUuid;

    protected $visible = [ 'id', 'name', 'email' ];
    protected $fillable = [ 'name', 'email', 'password' ];
    protected $hidden = [ 'password', 'remember_token' ];

    protected $casts = [ 'email_verified_at' => 'datetime' ];
  
    public function active() {
      return $this->hasOne('App\Models\UserActive', 'userId');
    }

    public function lists() {
        return $this->belongsToMany('App\Models\TodoList', 'todoListUsers', 'userId', 'listId');
    }

    public function userSubscription() {
      return $this->hasOne('App\Models\UserSubscription', 'userId');
    }
}
