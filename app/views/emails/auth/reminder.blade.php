<!DOCTYPE html>
<html lang="en-US">
	<head>
		<meta charset="utf-8">
	</head>
	<body>
	<!-- 	<h2>Password Reset</h2>

		<div>
			To reset your password, complete this form: {{ URL::to('password/reset', array($token)) }}.<br/>
			This link will expire in {{ Config::get('auth.reminder.expire', 60) }} minutes.
		</div>
 -->
<table align="center" border="0" cellspacing="0" cellpadding="0" style="margin:0;padding:0;border:0;outline:0;font-size:100%;vertical-align:baseline;border-collapse:collapse;border-spacing:0;width:100%;background:#e7e6e5;font-family:arial,sans-serif"><tbody><tr align="center" style="margin:0;padding:0;border:0;outline:0;font-size:100%;vertical-align:baseline;background:transparent">
<td align="center" style="margin:0;padding:0;border:0;outline:0;background:transparent;font-size:100%;vertical-align:top">
        
        
<div style="margin:0;padding:0;border:0;outline:0;font-size:100%;vertical-align:baseline;background:transparent;border-radius:5px;overflow:hidden;width:500px;background-color:#fff">
  <div style="margin:0;padding:0;border:0;outline:0;font-size:100%;vertical-align:baseline;background:transparent">
      <a href="http://www.evergreenservice.net">
      	<img src="https://lh4.googleusercontent.com/RwenoDlv7O2HP5v11UtzX2_STR1bEPevZM3e8h5VwFtbABQ0Jooqh0en4fx2Ss3BrACo8Hqt=w1326-h537"></a>
  </div>

  <div style="border:0;outline:0;font-size:100%;vertical-align:baseline;margin:0 auto;padding:20px;width:460px;background:#ffffff;padding-top:30px;padding-bottom:30px">

		<h3 style="color:#086634">{{trans('register.reestablecer')}}</h3>
		<p style="margin:0;padding:0;border:0;outline:0;vertical-align:baseline;background:transparent;color:#5a5a5a;line-height:150%;margin-bottom:15px;text-align:center;font-size:13px">
			{{trans('register.restablecer_pass')}} : {{ URL::to('password/reset', array($token)) }}.<br/>
			{{trans('register.enlace_caducara')}}  {{ Config::get('auth.reminder.expire', 60) }} {{trans('register.minutos')}}.<br>
			{{trans('register.gracias')}}
		</p>
		   </div> 
		  <div style="margin:0;border:0;outline:0;font-size:100%;background:transparent;vertical-align:baseline;padding:25px 20px;background-color:#1a1a1a;text-align:left">
			<p style="font-size:10px;color:#bcbcbc">Estas recibiendo este email porque has 
				solicitado información para Security Guard y estás de acuerdo en recibir
				 emails nuestros. Para más información escríbenos a 
				 <a href="mailto:contacto@evergreenservice.net" style="color:#bcbcbc">contacto@evergreenservice.net</a></p>
		  </div>
		</div>          
      </td>
    </tr></tbody>
</table>


	</body>
</html>


