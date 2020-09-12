@extends('layout')

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
  </script>
@endsection

@section('react-script')
  <script src="{{ mix('js/app.js') }}"></script>
@endsection