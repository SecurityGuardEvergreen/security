<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>Actualización de empleados</title>


  <link rel="stylesheet" href="/assets/empleados/css/bootstrap.min.css">
    <link rel="stylesheet" href="/assets/empleados/css/font-awesome.min.css">
</head>
<body>

<div id="header" >




</div>


<input class="btn btn-primary" type="button" id="print" value="Imprimir">







</body>


<script src="/assets/empleados/js/vendor/jquery-1.10.2.min.js"></script>
<script src="/assets/empleados/js/jquery.print.js"></script>

 <script type='text/javascript'>

$(function() {


$('#print').click(function(){

  var nombre ="Elvis";
var data = 'Hello '+nombre+'!!!<br/><img src="assets/empleados/img/evergreen_logo_pdf.png" width="250"><div class="alert alert-warning alert-dismissible " role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Warning!</strong> Better check yourself, you re not looking too good.</div>';


$("#header").print({
  //Use Global styles
  globalStyles : true,
  //Add link with attrbute media=print
  mediaPrint : false,
  //Custom stylesheet
  stylesheet : "http://fonts.googleapis.com/css?family=Inconsolata",
  //Print in a hidden iframe
  iframe : true,
  //Don't print this
  noPrintSelector : ".avoid-this",
  //Add this at top
  prepend : data,
  //Add this on bottom
  append : "<br/>Buh Bye!"
});

});


});
</script>
</html>
