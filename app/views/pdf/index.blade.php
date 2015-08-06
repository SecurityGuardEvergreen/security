<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>pdf</title>
	<style>
body{
      font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 1.42857143;
    color: #333;
}


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
            /*text-align: center;*/
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


        /*=========Inidio=====*/
        .main{
          position: relative;
          margin-top: 150px;
        }
        .b{
          color:#2771EA;
          font-weight: bold;
        }
        /*=======Tabla======*/
/*table, th, td {
    border: 1px solid black;
}*/
.box{
/*background:#999;*/
float:left;
/*border:1px solid #444;*/
}
</style>
<!-- Latest compiled and minified CSS -->


</head>
<body>

<div id="header">

  <table cellspacing="0" >
  <thead>
    <tr>
      <td><img src="assets/empleados/img/evergreen_logo_pdf.png" width='130'></td>
      <td  style="padding: 0 20px;">
        <h3>Sistema de Gestión Integral Formatos</h3>
      </td>
      <td>
        Documento No.:
        <br>
      EGS-AD-PR-02-F
      </td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="3"  style="text-align:center;">
        <h2>Actualización de datos</h2>
      </td>
    </tr>
    <tr>
      <td colspan="3">
        <span class="b">Reemplaza a:</span> Oct.08, Rev. 0.
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span class="b">Fecha de aprobación:</span>   Octubre 2014
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span class="b">Rev. No.:</span>  1
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span class="b">REQUISICIÓN. N°:</span>
     </td>

    </tr>
  </tbody>
</table>




</div>
    <!--footer para cada pagina-->
    <div id="footer">
        <!--aqui se muestra el numero de la pagina en numeros romanos-->
         <p class="page">Página</p>
    </div>

<div class="main">


 <!--  <div class="alert alert-success" role="alert">Dios es bueno</div> -->

</div>








</body>
</html>
