<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>Actualización de empleados</title>


  <link rel="stylesheet" href="/assets/empleados/css/bootstrap.min.css">
  <link rel="stylesheet" href="/assets/empleados/css/font-awesome.min.css">
  <style>
  /*@media print {*/
    .td_h{
      width:220px;
      /*border:solid  1.0pt;*/
      mso-border-alt:solid  .2pt;
      background:#D9D9D9;
      text-transform:uppercase;
    }
    td{
      /*width:220px;*/
      border:solid  1.0pt;
      mso-border-alt:solid  .2pt;
      padding:0cm 5.4pt 0cm 5.4pt;
      font-family:"Arial",sans-serif;
      font-size: 9pt;
    }
    h5{
      text-transform:uppercase;
    }
/*}*/

.head td {
  /*background-color: red;*/
  padding: 0px !important;
}
  </style>


  <!-- =============== -->
  
</head>
<body>
<div id="main">

  <table >
    <tbody>
      <tr class="head">
        <td style="width:190px;" rowspan="2"><img src="assets/empleados/img/evergreen_logo_pdf.png" width="150"></td>
        <td style="width:500px;text-align:center;" rowspan="2"><h3>Sistema de Gestión Integral Formatos </h3> </td>
        <td style="width:190px;border-bottom-style:none;" width="200px">Documento No.:</td>
      </tr>
      <tr class="head">
        <td style="text-align:right;border-top-style:none;"><b>EGS-AD-PR-02-F</b></td>
      </tr>
      <tr>
        <td colspan="3" style="text-align:center;">Requisición de Materiales, Equipos y Servicios</td>
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
        <td>bllll</td>
        <td>bllll</td>
        <td>bllll</td>
      </tr>
    </tbody>
  </table>

  <!-- fin datos de la empresa -->
  <h5>Datos personales</h5>

  <table>
    <tbody>
      <tr>
        <td class="td_h" colspan="2">nombre</td>
        <td class="td_h" colspan="2">Segundo Nombre</td>
      </tr>
      <tr>
        <td colspan="2">Jesus</td>
        <td colspan="2">Jesus</td>
      </tr>
      <tr>
        <td class="td_h" colspan="2">apellido</td>
        <td class="td_h" colspan="2">segundo apellido</td>
      </tr>
      <tr>
        <td colspan="2">as</td>
        <td colspan="2">as</td>
      </tr>
      
      <tr>
        <td class="td_h">cédula</td>
        <td class="td_h">rif</td>
        <td class="td_h">estado civil</td>
        <td class="td_h">sexo</td>
      </tr>
      <tr>
        <td>12</td>
        <td>1212</td>
        <td>sol</td>
        <td>f</td>
      </tr>
      <tr>
        <td class="td_h">fecha de nacimiento</td>
        <td class="td_h">edad</td>
        <td class="td_h">tipo de sangre</td>
        <td class="td_h">lateralidad</td>
      </tr>
      <tr>
        <td>sdffecha de nacimiento</td>
        <td>sdfedad</td>
        <td>sdftipo de sangre</td>
        <td>sdflateralidad</td>
      </tr>
      <tr>
        <td class="td_h" colspan="4">discapacidad</td>
      </tr>
      <tr>
        <td colspan="4">N/A</td>
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
    <td>muisa</td>
    <td>muisa</td>
    <td>muisa</td>
  </tr>
  <tr>
    <td class="td_h" colspan="3">direccion</td>
  </tr>
  <tr>
    <td  colspan="3">minidess</td>
  </tr>
</tbody>
</table>
<!-- fin datos de residencia -->
<h5>Carga Familiar</h5>
<table>
  <tbody>
    <tr>
      <td class="td_h" style="width:176px;">nombre completo</td>
      <td class="td_h" style="width:176px;">parentesco</td>
      <td class="td_h" style="width:176px;">fecha de nacimiento</td>
      <td class="td_h" style="width:176px;">edad</td>
      <td class="td_h" style="width:176px;">sexo</td>
    </tr>
    <tr>
      <td>bla</td>
      <td>bla</td>
      <td>bla</td>
      <td>bla</td>
      <td>bla</td>
    </tr>
    <tr>
      <td>bla</td>
      <td>bla</td>
      <td>bla</td>
      <td>bla</td>
      <td>bla</td>
    </tr>
  </tbody>
</table>
<!-- Fin carga familiar -->
<h5>persona de contacto en casdo de emergencia</h5>
<table>
  <tbody>
     <tr>
      <td class="td_h" style="width:440px;">nombre completo</td>
      <td class="td_h" style="width:440px;">teléfono</td>
     </tr>
     <tr>
       <td>el nomnbre</td>
       <td>el telf</td>
     </tr>
  </tbody>
</table>

</div>

</div>
<!-- fin main -->
<input class="btn btn-primary" type="button" id="print" value="Imprimir">







</body>


<script src="/assets/empleados/js/vendor/jquery-1.10.2.min.js"></script>
<script src="/assets/empleados/js/jquery.print.js"></script>

 <script type='text/javascript'>

$(function() {


$('#print').click(function(){

  var nombre ="Elvis";
// var data = 'Hello '+nombre+'!!!<br/><img src="assets/empleados/img/evergreen_logo_pdf.png" width="200">';



$("#main").print({
  //Use Global styles
  globalStyles : true,
  //Add link with attrbute media=print
  mediaPrint : true,
  //Custom stylesheet
   // stylesheet : "/assets/empleados/css/bootstrap.min.css",
  //Print in a hidden iframe
  iframe : true,
  //Don't print this
  noPrintSelector : ".avoid-this",
  //Add this at top
  // prepend : data,
  //Add this on bottom
  append : "<br/>Buh Bye!"
});

});


});
</script>
</html>
