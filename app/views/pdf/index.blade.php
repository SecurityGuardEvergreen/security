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






<div id="printe" style="">


  <h5>datos laborales </h5>
  <table cellspacing="0">
    <tbody>
      <tr>
        <td class="td_h" style="">Centro de trabajo</td>
        <td class="td_h" style="">nivel de educación</td>
        <td class="td_h" style="">cargo</td>
      </tr>
      <tr>
        <td id="print_centro">{{$empleado[0]['centro']}}</td>
        <td id="print_nivel_edu">{{$empleado[0]['niveledu']}}</td>
        <td id="print_cargo">{{$empleado[0]['cargo']}}</td>
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
        <td colspan="2" id="print_nombre">{{$empleado[0]['nombre']}}</td>
        <td colspan="2" id="print_segundonombre">{{$empleado[0]['segundo_nombre']}}</td>
      </tr>

      <tr>
        <td class="td_h-2"  colspan="2">Primer apellido</td>
        <td class="td_h-2"  colspan="2">segundo apellido</td>
      </tr>
      <tr>
        <td id="print_apellido" colspan="2">{{$empleado[0]['apellido']}}</td>
        <td id="print_segundoapellido" colspan="2">{{$empleado[0]['segundo_apellido']}}</td>
      </tr>

      <tr>
        <td class="td_h-1">cédula</td>
        <td class="td_h-1">rif</td>
        <td class="td_h-1">estado civil</td>
        <td class="td_h-1">sexo</td>
      </tr>
      <tr>
        <td id="print_ced">{{$empleado[0]['full_ced']}}</td>
        <td id="print_rif">{{$empleado[0]['sigla_rif']}}-{{$empleado[0]['rif']}}</td>
        <td id="print_estatocivil">{{$empleado[0]['marital']}}</td>
        <td id="print_sexo">{{$empleado[0]['sexop']}}</td>
      </tr>
      <tr>
        <td class="td_h-1">fecha de nacimiento</td>
        <td class="td_h-1">edad</td>
        <td class="td_h-1">tipo de sangre</td>
        <td class="td_h-1">lateralidad</td>
      </tr>
      <tr>
        <td id="print_nacimiento">{{$empleado[0]['fecha_nacimiento']}}</td>
        <td id="print_edad">{{$empleado[0]['sexop']}}</td>
        <td id="print_tiposangre">{{$empleado[0]['sangre_tipo']}}</td>
        <td id="print_lateralidad">{{$empleado[0]['lateralidad']}}</td>
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
    <td id="print_estado">{{$empleado[0]['estado']}}</td>
    <td id="print_municipio">{{$empleado[0]['municipio']}}</td>
    <td id="print_parroquia">{{$empleado[0]['parroquia']}}</td>
  </tr>
  <tr>
    <td class="td_h" colspan="3">dirección</td>
  </tr>
  <tr>
    <td id="print_direccion" colspan="3">{{$empleado[0]['direccion']}}</td>
  </tr>
</tbody>
</table>
<!-- fin datos de residencia -->

<h5>persona de contacto en caso de emergencia</h5>
<table cellspacing="0">

  <tbody>
   
     <tr>
      <td class="td_h" style="">nombre completo</td>
      <td class="td_h" style="">Relación</td>
      <td class="td_h" style="">teléfono</td>
     </tr>
     <tr>
       <td id="print_contac_nombre">{{$empleado[0]['nombre_contacto']}}</td>
       <td id="print_contac_relacion">{{$empleado[0]['rela_contacto']}}</td>
       <td id="print_contac_telf">{{$empleado[0]['telf_contacto']}}</td>
     </tr>
  </tbody>
</table>

</div>

<br>

<div class="firma_left">
  <p id="print_empleado_firma" style="margin:0px !important;"></p>
  <span class="calificativo">empleado</span>
</div>


<!-- ===========Carga familiar o Discapacidad ========= -->

<div style="page-break-before:always">

<!-- discapacidad -->
<table cellspacing="0">
  <tbody>
    <tr>
        <td class="td_h">discapacidad</td>
      </tr>
      <tr>
        <td ></td>
      </tr>
  </tbody>
</table>
<!-- fin discapacidad -->
<!-- Carga Familiar -->
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
 @foreach($familiar as $data)
 
   <tr>
      <td> {{$data->nombre}}</td>
      <td>{{$data->ced}}</td>
      <td>{{$data->parentesco}}</td>
      <td>{{$data->nacimiento}}</td>
      <td></td>
      <td>{{$data->sexof}}</td>
    </tr>
  @endforeach
  </tbody>
</table>



<br>
<!-- Firma -->
<div class="firma_left">
  <p id="print_empleado_firma" style="margin:0px !important;"></p>
  <span class="calificativo">empleado</span>
</div>
<!-- Firma -->


</div> 

</div>






</body>
</html>
