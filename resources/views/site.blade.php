@extends('layout')

@section('data')
  <script>
    const initialData = {
      csrfToken: @json($csrfToken)
    }
  </script>
@endsection

@section('react-script')
  <script src="{{ mix('js/site.js') }}"></script>
@endsection