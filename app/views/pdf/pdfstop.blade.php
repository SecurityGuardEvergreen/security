<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>pdf</title>

<link rel="stylesheet" href="assets/empleados/css/printpdf.css">

<style type="text/css">
  .header,
.footer {
    width: 100%;
    text-align: center;
    position: fixed;
}
.header {
    top: 0px;   

}
.footer {
    bottom: 50px;
    font-size: 8pt;
    
}
.pagenum:before {
    content: counter(page);
}
</style>
</head>
<body>



<!-- =================== -->
<!-- ==== Imprimir ===== -->
<!-- =================== -->
<div class="header">
     <table cellspacing="0" >
    <tbody>
      <tr class="head">
        <td class="td-head" style="" rowspan="2"><img src="assets/empleados/img/evergreen_logo_pdf.png" width="150"></td>
        <td class="td-head" style="text-align:center;" rowspan="2"><h3>Sistema de Gestión Integral Formatos </h3> </td>
        <td class="td-head" style="border-bottom-style:none;" width="200px">Documento Nº.:</td>
      </tr>
      <tr class="head">
        <td style="text-align:right;border-top-style:none; text-transform: uppercase;"><b>EGS-AD-RH-23-F</b></td>
      </tr>
      <tr>
        <td colspan="3" style="text-align:center; font-size:18"><b>Actualización de datos de los empleados</b></td>
      </tr>
      <tr>
          <td >Reemplaza a: <b style=" text-transform: uppercase;">N/A</b></td>
          <td style="width:190px;">Fecha de comprobación: <b>Agosto 2015</b></td>
          <td style="">Rev.No.: <b>0</b></td>
      </tr>
    </tbody>
  </table>
</div>
<!-- =====Header===== -->

<div class="footer">
    
<hr>
  <center>
    <p style="margin-top:0px;margin-bottom:0px;" >Av José Antonio Anzoátegui, Km 97
Anaco, Estado Anzoátegui - Venezuela</p>
  <p style="margin-top:0px;">Telf.(0282) 400.7000; 424.58.59 -Fax(0282) 424.11.89
    www.evergreenservice.net e-mail:info@evergreenservice.net</p>
</center>
Page <span class="pagenum"></span>
</div>






<div id="printe" style="margin-top:200px">


  <h5>datos laborales {{$empleado['nombre']}}</h5>
  <table cellspacing="0">
    <tbody>
      <tr>
        <td class="td_h" style="">Centro de trabajo</td>
        <td class="td_h" style="">nivel de educación</td>
        <td class="td_h" style="">cargo</td>
      </tr>
      <tr>
        <td id="print_centro"></td>
        <td id="print_nivel_edu"></td>
        <td id="print_cargo"></td>
      </tr>
    </tbody>
  </table>

  <!-- fin datos de la empresa -->
  <h5 >Datos personales</h5>

  <table cellspacing="0">
    <tbody>
      <tr>
        <td class="td_h-1" colspan="2" >Primer nombre</td>
        <td class="td_h-1" colspan="2" >Segundo Nombre</td>
      </tr>
     
      <tr>
        <td colspan="2" id="print_nombre"></td>
        <td colspan="2" id="print_segundonombre"></td>
      </tr>

      <tr>
        <td class="td_h-2"  colspan="2">Primer apellido</td>
        <td class="td_h-2"  colspan="2">segundo apellido</td>
      </tr>
      <tr>
        <td id="print_apellido" colspan="2"></td>
        <td id="print_segundoapellido" colspan="2"></td>
      </tr>

      <tr>
        <td class="td_h-1">cédula</td>
        <td class="td_h-1">rif</td>
        <td class="td_h-1">estado civil</td>
        <td class="td_h-1">sexo</td>
      </tr>
      <tr>
        <td id="print_ced"></td>
        <td id="print_rif"></td>
        <td id="print_estatocivil"></td>
        <td id="print_sexo"></td>
      </tr>
      <tr>
        <td class="td_h-1">fecha de nacimiento</td>
        <td class="td_h-1">edad</td>
        <td class="td_h-1">tipo de sangre</td>
        <td class="td_h-1">lateralidad</td>
      </tr>
      <tr>
        <td id="print_nacimiento">Elvis</td>
        <td id="print_edad"></td>
        <td id="print_tiposangre"></td>
        <td id="print_lateralidad"></td>
      </tr>
      <tr>
        <td class="td_h-1" colspan="4" >discapacidad</td>
      </tr>
      <tr>
        <td colspan="4" id="print_discapacidad" ></td>
      </tr> 
    </tbody>

  </table>
  <!-- fin datos personales -->
<h5>DIRECCIÓN ACTUAL DE RESIDENCIA</h5>
<table cellspacing="0">
  <tbody>
  <tr>
    <td class="td_h" style="">estado</td>
    <td class="td_h" style="">municipio</td>
    <td class="td_h" style="">parroquia</td>
  </tr>
  <tr>
    <td id="print_estado"></td>
    <td id="print_municipio"></td>
    <td id="print_parroquia"></td>
  </tr>
  <tr>
    <td class="td_h" colspan="3">dirección</td>
  </tr>
  <tr>
    <td id="print_direccion" colspan="3"></td>
  </tr>
</tbody>
</table>
<!-- fin datos de residencia -->
<h5>Carga Familiar</h5>
<table cellspacing="0">
  <tbody id="tb_familiar">
    <tr>
      <td class="td_h-0" style="">nombre completo</td>
      <td class="td_h-0" style="">cédula</td>
      <td class="td_h-0" style="">parentesco</td>
      <td class="td_h-0" style="">fecha de nacimiento</td>
      <td class="td_h-0" style="">edad</td>
      <td class="td_h-0" style="">sexo</td>
    </tr>

  </tbody>
</table>
<!-- Fin carga familiar -->
<h5>persona de contacto en caso de emergencia</h5>
<table cellspacing="0">

  <tbody>
   
     <tr>
      <td class="td_h" style="">nombre completo</td>
      <td class="td_h" style="">Relación</td>
      <td class="td_h" style="">teléfono</td>
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




<!-- <br><br><br>
<br><br><br>
<br><br><br>
<br><br><br>
<br><br><br>
<br><br><br> -->

<h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet dolorem blanditiis ad perferendis, labore delectus, facere mollitia eius distinctio voluptates aliquid doloremque fugiat est eum. Doloremque aut aperiam enim voluptatibus.</h1>
<h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet dolorem blanditiis ad perferendis, labore delectus, facere mollitia eius distinctio voluptates aliquid doloremque fugiat est eum. Doloremque aut aperiam enim voluptatibus.</h1>
<h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet dolorem blanditiis ad perferendis, labore delectus, facere mollitia eius distinctio voluptates aliquid doloremque fugiat est eum. Doloremque aut aperiam enim voluptatibus.</h1>
<h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet dolorem blanditiis ad perferendis, labore delectus, facere mollitia eius distinctio voluptates aliquid doloremque fugiat est eum. Doloremque aut aperiam enim voluptatibus.</h1>

</div>






</body>
</html>
