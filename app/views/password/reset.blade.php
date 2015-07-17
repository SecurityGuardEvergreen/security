@extends('layouts.index')

@section('title')
Reset Password - 
@stop



@section('content')

<div id="prey-login">
<div class="wrap-login">
<div class="group-login">
<div class="form-login">
<div class="brand-login">


<figure class="logo-wrapp">
<div class="logoP logo-wP"></div>
</figure>
</div>


<div class="current-form">

<!-- /if -->

{{ Form::open(array(
	'url'  => 'password/reset/t',
	'method' => 'post', 
	'class' => 'form form-session', 
	'id' => 'new-session')) }}


<div style="margin:0;padding:0;display:inline">

<ul class="sign-form">
<li>
@if(Session::get('error'))
	<p class="here"><span style="color: #d9534f;">{{ Session::get('error') }}</span> </p>
@else
	<p class="here">Restablezca su contraseña.</p>
@endif

</li>
<input type="hidden" name="token" value="{{ $token }}">
<li class="sep">
  <input autofocus="autofocus" class="form-control" id="email" name="email" placeholder="Ingresa tu email" tabindex="1" type="text">
</li>

<li>
  <input class="form-control" id="password" name="password" placeholder="Ingrese su nueva contraseña" tabindex="2" type="password">
</li>
<li>
  <input class="form-control" id="password" name="password_confirmation" placeholder="Confirme su nueva contraseña" tabindex="3" type="password">
</li>
<li><input class="cta"  name="commit" tabindex="4" type="submit" value="Restablecer contraseña"></li>

<li>
<a class="btn-link btn-block" href="/login">Regresar al login</a>
</li>
</ul>

{{ Form::close() }}

 


</div>
</div>
</div>
</div>
</div>
@stop
<!-- /@content -->