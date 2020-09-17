export interface IUserSubscription {
	id: string
  type: 'TRIAL' | 'TRIAL_EXPIRED' | 'YEARLY' | 'YEARLY_EXPIRED'
  provider: null | 'STRIPE' | 'APPLE' | 'QUICKDO'
  stripeSetupIntentClientSecret?: string
  trialEndDate?: string
}

export interface IUserSubscriptionUpdates {
	type?: IUserSubscription['type']
  provider?: IUserSubscription['provider']
}

