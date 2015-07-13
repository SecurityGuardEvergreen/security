<?php
if(!isset($page)){
  $page = new stdClass;
  $page->slug = "/login";
  $page->countries = array();
  $page->country = new stdClass;
  $page->country->id = 0;
  $page->geo = array();
  $page->country->name = '';
  $page->country->iso = 'www';
  $page->country->id = "www";
  $page->country->facebook = "";
  $page->country->twitter = "";
  $page->country->google = "";
  $page->country->email = "contacto@institutocanzion.com";
  $page->country->phone = "";
  $page->url = "";
  $page->country->beta = false;
  $page->news = array();
  $page->blog = array();
  $page->slider = array();
}
?>

<!DOCTYPE html>
<!--  -->
<html class="no-js" lang="es"><!-- <![endif] --><head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>@yield('title')  Security Guard </title>
<link href="./login/css/assets.css" media="screen" rel="stylesheet">
<meta charset="utf-8" content="text/html" http-equiv="content-type">
<meta content="ie=edge,chrome=1" http-equiv="x-ua-compatible">


<link href="./login/images/favi.png" rel="shortcut icon">
<link href="./login/images/favi.png" rel="apple-touch-icon">
<link href="./login/images/favi.png" rel="apple-touch-icon" sizes="76x76">
<link href="./login/images/favi.png" rel="apple-touch-icon" sizes="120x120">
<link href="./login/images/favi.png" rel="apple-touch-icon" sizes="152x152">

<meta content="authenticity_token" name="csrf-param">
<meta content="=" name="csrf-token">
<link href="./login/css/style.css" rel="stylesheet" type="text/css">


</head>
<body class="session">

<div>
@yield('content')
</div>





<script>
  var body = document.body,
  timer;
  
  window.addEventListener('scroll', function() {
    clearTimeout(timer);
    if(!body.classList.contains('disable-hover')) {
      body.classList.add('disable-hover')
    }
  
    timer = setTimeout(function(){
      body.classList.remove('disable-hover')
    },500);
  }, false);
</script>




<div>
@yield('scripts')
</div>
</body>

</html>