<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" type="text/css" href="{{asset('js/main.css')}}">
    <title>{{ config('app.name', env('APP_NAME')) }}</title>
</head>

<body style="margin:0;">
    <div id="app">
        @yield('content')
    </div>
</body>

</html>
