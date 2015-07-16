@extends('layouts.index')

@section('title')
Forgot - 
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
	'url'  => 'forgot',
	'method' => 'post', 
	'class' => 'form form-session', 
	'id' => 'new-session')) }}


<div style="margin:0;padding:0;display:inline">

<ul class="sign-form">
<li>
@if(Session::get('error') || Session::get('status'))
	<p class="here"><span style="color: #d9534f;">{{ Session::get('error') }}</span> </p>
@else
	<p class="here">Olvidaste tu contraseña, al parecer.</p>
@endif

</li>
<li class="sep">
  <input autofocus="autofocus" class="form-control" id="email" name="email" placeholder="Ingresa tu email" tabindex="1" type="text">
</li>

<li><input class="cta"  name="commit" tabindex="4" type="submit" value="Enviar instrucciones"></li>

<li>
<a class="btn-link btn-block" href="login">Regresar al login</a>
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