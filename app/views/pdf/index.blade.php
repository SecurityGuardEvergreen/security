<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>Dios</title>
	<style>
	.negro{
		color:red;
	}
	.alert {
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
}
.alert-success {
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #d6e9c6;
}
.page-num:before { content: counter(page); }
.whatever { page-break-after: always; }


 /* estilos para el footer y el numero de pagina */

        #header {
            position: fixed;
            left: 0px;
            top: 0px;
            right: 0px;
            /*height: 30px;*/
            /*background-color: #333;*/
            /*color: #fff;*/
            text-align: center;
        }
        #footer {
            position: fixed;
            left: 0px;
            bottom: 0px;
            right: 0px;
            height: 30px;
            /*background-color: #333;*/
            /*color: #fff;*/
             text-align: right;

        }

        #footer .page:after {
            content: counter(page) " de " counter(pages);
        }

</style>
<!-- Latest compiled and minified CSS -->


</head>
<body>

 <div id="header">
        Header de la página
    </div>
    <!--footer para cada pagina-->
    <div id="footer">
        <!--aqui se muestra el numero de la pagina en numeros romanos-->
         <p class="page">Página </p>
    </div>

<h1 class="negro">Hola mundo</h1>
		Dios es bueno y aquí {{$nombre}} es su hijo
		<br><span style="color:red;">imagen</span>

	<img src='assets/admin/images/logo.png' width='100'>
	<div class="alert alert-success" role="alert">Dios es bueno</div>

	@for($i = 0; $i < 120;$i++)
	Contando {{$i}}
	<br>
	@endfor





</body>
</html>
