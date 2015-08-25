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

<!-- <div id="header">

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

    <div id="footer">

         <p class="page">Página</p>
    </div>

<div class="main">



</div>
 -->
<!-- ===============Links para imrpimir============== -->
<link rel="stylesheet" href="/assets/empleados/css/customp.css">
<script src="/assets/empleados/js/jquery.print.js"></script>
<script src="/assets/empleados/js/imp.js"></script>
<!-- ===============Fin links para imrpimir========== -->
<!-- =================== -->
<!-- ==== Imprimir ===== -->
<!-- =================== -->
<div id="imprime">

  <table >
    <tbody>
      <tr class="head">
        <td style="width:190px;" rowspan="2"><img src="assets/empleados/img/evergreen_logo_pdf.png" width="150"></td>
        <td style="width:100px;text-align:center;" rowspan="2"><h3>Sistema de Gestión Integral Formatos </h3> </td>
        <td style="width:190px;border-bottom-style:none;" width="200px">Documento No.:</td>
      </tr>
      <tr class="head">
        <td style="text-align:right;border-top-style:none;"><b>EGS-AD-RH-23-F</b></td>
      </tr>
      <tr>
        <td colspan="3" style="text-align:center; font-size:18"><b>Actualización de datos de los empleados</b></td>
      </tr>
      <tr>
          <td style="width:190px;">Reemplaza a: <b>N/A</b></td>
          <td style="width:190px;">Fecha de comprobación: <b>Agosto 2015</b></td>
          <td style="width:190px;">Rev.No.: <b>0</b></td>
      </tr>
    </tbody>
  </table>



<div id="printe" style="clear:both;" >


  <h5>datos laborales</h5>
  <table>
    <tbody>
      <tr>
        <td class="td_h" style="width:293.33px;">Centro de trabajo</td>
        <td class="td_h" style="width:293.33px;">nivel de educacion</td>
        <td class="td_h" style="width:293.33px;">cargo</td>
      </tr>
      <tr>
        <td id="print_centro"></td>
        <td id="print_nivel_edu"></td>
        <td id="print_cargo"></td>
      </tr>
    </tbody>
  </table>

  <!-- fin datos de la empresa -->
  <h5>Datos personales</h5>

  <table>
    <tbody>
      <tr>
        <td class="td_h" colspan="2">Primer nombre</td>
        <td class="td_h" colspan="2">Segundo Nombre</td>
      </tr>
      <tr>
        <td colspan="2" id="print_nombre"></td>
        <td colspan="2" id="print_segundonombre"></td>
      </tr>
      <tr>
        <td class="td_h" colspan="2">Primer apellido</td>
        <td class="td_h" colspan="2">segundo apellido</td>
      </tr>
      <tr>
        <td colspan="2" id="print_apellido"></td>
        <td colspan="2" id="print_segundoapellido"></td>
      </tr>

      <tr>
        <td class="td_h">cédula</td>
        <td class="td_h">rif</td>
        <td class="td_h">estado civil</td>
        <td class="td_h">sexo</td>
      </tr>
      <tr>
        <td id="print_ced"></td>
        <td id="print_rif"></td>
        <td id="print_estatocivil"></td>
        <td id="print_sexo"></td>
      </tr>
      <tr>
        <td class="td_h">fecha de nacimiento</td>
        <td class="td_h">edad</td>
        <td class="td_h">tipo de sangre</td>
        <td class="td_h">lateralidad</td>
      </tr>
      <tr>
        <td id="print_nacimiento"></td>
        <td id="print_edad"></td>
        <td id="print_tiposangre"></td>
        <td id="print_lateralidad"></td>
      </tr>
      <tr>
        <td class="td_h" colspan="4">discapacidad</td>
      </tr>
      <tr>
        <td id="print_discapacidad" colspan="4"></td>
      </tr>
    </tbody>

  </table>
  <!-- fin datos personales -->
<h5>DIRECCIÓN ACTUAL DE RESIDENCIA</h5>
<table>
  <tbody>
  <tr>
    <td class="td_h" style="width:293.33px">estado</td>
    <td class="td_h" style="width:293.33px">municipio</td>
    <td class="td_h" style="width:293.33px">párroquia</td>
  </tr>
  <tr>
    <td id="print_estado"></td>
    <td id="print_municipio"></td>
    <td id="print_parroquia"></td>
  </tr>
  <tr>
    <td class="td_h" colspan="3">direccion</td>
  </tr>
  <tr>
    <td id="print_direccion" colspan="3"></td>
  </tr>
</tbody>
</table>
<!-- fin datos de residencia -->
<h5>Carga Familiar</h5>
<table>
  <tbody id="tb_familiar">
    <tr>
      <td class="td_h" style="width:176px;">nombre completo</td>
      <td class="td_h" style="width:176px;">cédula</td>
      <td class="td_h" style="width:176px;">parentesco</td>
      <td class="td_h" style="width:176px;">fecha de nacimiento</td>
      <td class="td_h" style="width:88px;">edad</td>
      <td class="td_h" style="width:88px;">sexo</td>
    </tr>




  </tbody>
</table>
<!-- Fin carga familiar -->
<h5>persona de contacto en caso de emergencia</h5>
<table>
  <tbody>
     <tr>
      <td class="td_h" style="width:293px;">nombre completo</td>
      <td class="td_h" style="width:293px;">Relación</td>
      <td class="td_h" style="width:293px;">teléfono</td>
     </tr>
     <tr>
       <td id="print_contac_nombre"></td>
       <td id="print_contac_relacion"></td>
       <td id="print_contac_telf"></td>
     </tr>
  </tbody>
</table>

</div>

<br>

<div class="firma_left">
  <p id="print_empleado_firma" style="margin:0px !important;"></p>
  <span class="calificativo">empleado</span>
</div>
<!-- <div class="firma_right">
  <p style="margin:0px !important;">Guzmán desc</p>
  <span class="calificativo">supervisor</span>
</div> -->

<div class="clearfix"></div>


<div id="footer" >

  <hr>
  <center><p>Av José Antonio Anzoátegui, Km 97
Anaco, Estado Anzoátegui - Venezuela</p>
  <p>Telf.(0282) 400.7000; 424.58.59 -Fax(0282) 424.11.89
    www.evergreenservice.net e-mail:info@evergreenservice.net</p>
</center>
</div>

</div>






</body>
</html>
