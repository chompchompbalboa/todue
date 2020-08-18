@extends('layout')

@section('data')
  <script>
    const initialData = {
      accessToken: @json($accessToken),
      csrfToken: @json($csrfToken),
      active: @json($active),
      sublists: @json($sublists),
      sublistTags: @json($sublistTags),
      lists: @json($lists),
      todos: @json($todos),
      tags: @json($tags),
      todoNotes: @json($todoNotes),
      todoTags: @json($todoTags),
      user: @json($user),
    }
  </script>
@endsection

@section('react-script')
  <script src="{{ mix('js/app.js') }}"></script>
@endsection