export interface IUserSubscription {
	id: string
  type: 'TRIAL' | 'TRIAL_EXPIRED' | 'YEARLY' | 'YEARLY_EXPIRED' | 'YEARLY_EXPIRED_GRACE_PERIOD'
  stripeSetupIntentClientSecret?: string
}

export interface IUserSubscriptionUpdates {
	type?: IUserSubscription['type']
}

