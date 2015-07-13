@extends('layouts.login')

@section('title')
Login - 
@stop

@section('test')
<center><h1>Jesus</h1> </center>
@stop

@section('content')

<div id="prey-login">
<div class="wrap-login">
<div class="group-login">
<div class="form-login">
<div class="brand-login">

<!-- End Google Tag Manager
<figure class="logo-wrap">
<div class="logo logo-w"></div>
</figure> -->
<figure class="logo-wrapp">
<div class="logoP logo-wP"></div>
</figure>
</div>
<div class="current-form">
@if(Session::get('msg'))
  <p>{{ Session::get('msg') }}</p>
@endif
<!-- /if -->


{{ Form::open(array('url' => '/login', 'method' => 'post', 'class' => 'form form-session', 'id' => 'new-session')) }}

  <div style="margin:0;padding:0;display:inline">

  <input name="authenticity_token" type="hidden" value="vAhRwZHnHMYIS9qKrA56eOmrqROHRlzUeT2ApJKKAHY="></div>


<ul class="sign-form">
<li>
<p class="here">Credenciales, por favor.</p>
</li>
<li class="sep">
  <input autofocus="autofocus" class="form-control" id="nickname" name="nickname" placeholder="Usuario" tabindex="1" type="text">
</li>
<li>
  <input class="form-control" id="password" name="password" placeholder="Tu contraseña" tabindex="2" type="password">
</li>
<li class="checkbox">
<label>
<input id="remember_me" name="remember_me" tabindex="3" type="checkbox" value="1">
<span></span>
<label for="remember_me">Recordarme</label>

</label>
<a href="#"><p class="recovery_pass">Olvidaste tu contrase&ntilde;a?</p></a>
</li>
<li><input class="cta" data-disable-with="Ingresando..." name="commit" tabindex="4" type="submit" value="Ingresar"></li>

</ul>

{{ Form::close() }}


</div>
</div>
</div>
</div>
</div>
@stop
<!-- /@content -->