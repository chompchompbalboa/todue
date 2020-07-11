@extends('layout')

@section('access-token')
  <meta name="access-token" content="{{ $accessToken }}" />
@endsection

@section('react-script')
  <script src="{{ mix('js/app.js') }}"></script>
@endsection