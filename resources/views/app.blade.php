@extends('layout')

@section('access-token')
  <meta name="access-token" content="{{ $accessToken }}" />
@endsection

@section('data')
  <script>
    const initialData = {
      active: @json($active),
      sublists: @json($sublists),
      sublistTags: @json($sublistTags),
      lists: @json($lists),
      todos: @json($todos),
      tags: @json($tags),
      todoNotes: @json($todoNotes),
      todoTags: @json($todoTags),
    }
  </script>
@endsection

@section('react-script')
  <script src="{{ mix('js/app.js') }}"></script>
@endsection