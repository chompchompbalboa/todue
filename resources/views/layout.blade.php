<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Daily - The Todo List That Simplifies Everday Life</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
    <link rel="stylesheet" type="text/css" href="{{ asset('css/base.css', true )}}">
  </head>
  <body>
    <section id="react-container"></section>
    @yield('data')
    @yield('react-script')
  </body>
</html>