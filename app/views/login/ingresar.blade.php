@extends('layouts.index')

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
<div class="brand-update">


<!-- <figure class="logo-wrap">
<div class="logo logo-w"></div>
</figure> -->

<figure class="logo-wrapp">
<div class="logoP logo-wP"></div>
</figure>
</div>
<div class="current-form">

<!-- /if -->


{{ Form::open(array(
	'url' => 'ingresar',
	'method' => 'post',
	'class' => 'form form-session',
	'id' => 'new-session')) }}

  <div style="margin:0;padding:0;display:inline">


<ul class="sign-form">
<li>
	<p class="here">
		@if(Session::get('message_pass_cambio_true'))
		<span style="color:#008B4C;">{{Session::get('message_pass_cambio_true')}}</span> <br>
			Ya puede ingresar con su nueva contraseña y para eso necesitamos sus
		@endif

			@if(Session::get('msg'))
				{{ Session::get('msg') }}
				<p>Si desea ingresar nuevamente introduzca sus credenciales</p>
			@elseif(Session::get('error_message_duplicada_sesion'))
				 <span style="color: #d9534f;">{{ Session::get('error_message_duplicada_sesion') }}</span>
			@elseif(Session::get('error_message'))
			 <span style="color: #d9534f;">{{ Session::get('error_message') }} </span>
			 	Necesitamos nuevamente sus credenciales, por favor.

			  @else
			  Credenciales, por favor.
			@endif
	</p>
</li>
<li class="sep">
	{{ Form::text('nickname',Input::old('nickname'),array(
	'id' => 'nickname',
	'placeholder'=>'Usuario',
	'tabindex' => 1,
	'autofocus' => 'autofocus',
	'class' => 'form-control',
	'maxlength' => 45
	))}}
	@if( $errors->has('nickname') )
		@foreach($errors->get('nickname') as $error )
		  <br/> <span style="color:red">* {{ $error }}</span>
		@endforeach
	@endif
 </li>
<li>
	{{ Form::input('password', 'password', Input::old('password'),array(
	'id' => 'password',
	'placeholder'=>'Tu contraseña',
	'tabindex' => 2,
	'class' => 'form-control'
	))}}
	@if( $errors->has('password') )
		@foreach($errors->get('password') as $error )
		  <br/> <span style="color:red">* {{ $error }}</span>
		@endforeach
	@endif
  </li>

<li class="checkbox">
<a href="forgot"><p class="recovery_pass">Olvidaste tu contrase&ntilde;a?</p></a>
</li>
	{{ Form::submit('Ingresar',array(
	'id' => 'password',
	'placeholder'=>'Tu contraseña',
	'tabindex' => 4,
	'class' => 'cta'
	))}}

</ul>

{{ Form::close() }}


</div>
</div>
</div>
</div>
</div>

@stop
<!-- /@content -->
