@extends('layouts.index')

@section('title')
Forgot - 
@stop

@section('scripts')
<!-- Css escondido -->
<link rel="stylesheet" href="/assets/admin/asset/css/bootstrap.min.css">

<script type="text/javascript" src="/assets/admin/js/remind.js"></script>
@stop
<!-- /@scripts -->

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
	
@if(Session::get('status'))
<p class="here">
	<span style="color: #00904e;">{{ Session::get('status') }}</span> 
	<br><br>
	<div class="alert alert-success">
		Ya puedes dirigirte a tu correo electrónico y revisar el email 
	que te enviamos con los	pasos necesarios para restablecer tu contraseña.
	</div>	
	</p>
<br><br>
@else

@if(Session::get('error'))
	<p class="here">
		<span style="color: #d9534f;">{{ Session::get('error') }}</span> 
	</p>
@else
	<p class="here">Olvidaste tu contraseña, al parecer.</p>
@endif


</li>
<li class="sep">
	{{Form::text('email',Input::old('email'),array(
	'autofocus',
	'class' => 'form-control',
	'id' => 'email',
	'placeholder' => 'Ingresa tu email'
	))}}
	@if( $errors->has('email') )
		@foreach($errors->get('email') as $error )
		  <br/> <span style="color:red">* {{ $error }}</span>
		@endforeach
	@endif


</li>

<li>
	<input class="cta"  name="commit" id="commit" tabindex="4" type="submit" value="Enviar instrucciones">
  @endif
  <!-- /session::get('status') -->
</li>

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
</div>
<!-- /prey-login -->
@stop
<!-- /@content -->

