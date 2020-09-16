@extends('layout')

@section('head')
    @if(in_array($userSubscription->type, ['TRIAL', 'TRIAL_EXPIRED', 'YEARLY_EXPIRED']))
      <script src="https://js.stripe.com/v3/"></script>
    @endif
@endsection

@section('data')
  <script>
    const initialData = {
      accessToken: @json($accessToken),
      csrfToken: @json($csrfToken),
      active: @json($active),
      lists: @json($lists),
      user: @json($user),
      userSubscription: @json($userSubscription)
    }
    @if(in_array($userSubscription->type, [ 'TRIAL', 'TRIAL_EXPIRED', 'YEARLY_EXPIRED' ]))
      const environment = {
        stripeKey: "{{ env('STRIPE_KEY') }}"
      }
    @endif
  </script>
@endsection

@section('react-script')
  <script src="{{ mix('js/app.js') }}"></script>
@endsection