$(function() {


$('#print').click(function(){

  console.log('imp.js');
// var data = 'Hello '+nombre+'!!!<br/><img src="assets/empleados/img/evergreen_logo_pdf.png" width="200">';

// =============Asignando valores de los inputs==============
print_centro = $('input[name="centro"]:checked').val().toUpperCase();
print_nivel_edu =  $('#educacion option:selected').text();
print_cargo = $('#cargo option:selected').text();
print_nombre = $('#name').val();
print_segundonombre = $('#secondname').val();
print_apellido = $('#lastname').val();
print_segundoapellido = $('#lastname2').val();
print_ced = $('#tipo_ced option:selected').text()+ $('#ced').val();
print_rif = $('#tipo_rif option:selected').text()+ $('#rif').val();
print_estatocivil = $('#edo_civil option:selected').text();
print_sexo = $('#sexo option:selected').text();
print_nacimiento = $('#nacimiento').val();
print_edad = $('#edadempleado').text();
print_tiposangre = $('#blood option:selected').text();
print_lateralidad = $('#lateralidad option:selected').text();
print_discapacidad = $('#discapacidad').val();
print_estado = $('#estado option:selected').text();
print_municipio = $('#municipio option:selected').text();
print_parroquia = $('#parroquia option:selected').text();
print_direccion = $('#address').val();

print_parent_nombre1 = $('#fullname1').val()+' '+$('#apellidofamiliar1').val();
print_parent_cedula1 = $('#ced_familiar1').val();
print_parent_parentesco1 = $('#parentesco1').val();
print_parent_nacimiento1 = $('#nacimientop1').val();
print_parent_edad1 = $('#edadempleadofamilia1').text();
print_parent_sexo1 = $('#sexop1 option:selected').text();


$('#print_centro').text(print_centro);
$('#print_nivel_edu').text(print_nivel_edu);
$('#print_cargo').text(print_cargo);
$('#print_nombre').text(print_nombre);
$('#print_segundonombre').text(print_segundonombre);
$('#print_apellido').text(print_apellido);
$('#print_segundoapellido').text(print_segundoapellido);
$('#print_ced').text(print_ced);
$('#print_rif').text(print_rif);
$('#print_estatocivil').text(print_estatocivil);
$('#print_sexo').text(print_sexo);
$('#print_nacimiento').text(print_nacimiento);
$('#print_edad').text(print_edad);
$('#print_tiposangre').text(print_tiposangre);
$('#print_lateralidad').text(print_lateralidad);
$('#print_discapacidad').text(print_discapacidad);
$('#print_estado').text(print_estado);
$('#print_municipio').text(print_municipio);
$('#print_parroquia').text(print_parroquia);
$('#print_direccion').text(print_direccion);
$('#print_parent_nombre1').text(print_parent_nombre1);
$('#print_parent_cedula1').text(print_parent_cedula1);
$('#print_parent_parentesco1').text(print_parent_parentesco1);
$('#print_parent_nacimiento1').text(print_parent_nacimiento1);
$('#print_parent_edad1').text(print_parent_edad1);
$('#print_parent_sexo1').text(print_parent_sexo1);

// =============Fina asignando valores de los inputs=========

// realizando la carga dinámica de los familiares
n_n = $("#n_familiar").val();
if(n_n>1){
  for (var i = 2; i <= n_n; i++) {
    print_parent_nombre = $('#fullname'+i).val()+' '+$('#apellidofamiliar'+i).val();
    print_parent_cedula = $('#ced_familiar'+i).val();
    print_parent_parentesco = $('#parentesco'+i).val();
    print_parent_nacimiento = $('#nacimientop'+i).val();
    print_parent_edad = $('#edadempleadofamilia'+i).text();
    print_parent_sexo = $('#sexop'+i+' option:selected').text();

    $('#print_parent_nombre'+i).text(print_parent_nombre);
    $('#print_parent_cedula'+i).text(print_parent_cedula);
    $('#print_parent_parentesco'+i).text(print_parent_parentesco);
    $('#print_parent_nacimiento'+i).text(print_parent_nacimiento);
    $('#print_parent_edad'+i).text(print_parent_edad);
    $('#print_parent_sexo'+i).text(print_parent_sexo);
  };
}

// ==============Imprimir=================
$("#imprime").print({
  //Use Global styles
  globalStyles : true,
  //Add link with attrbute media=print
  mediaPrint : false,
  //Custom stylesheet
  stylesheet : "/assets/empleados/css/print.css",
  //Print in a hidden iframe
  iframe : true,
  //Don't print this
  noPrintSelector : ".avoid-this",
  //Add this at top
  // prepend : data,
  //Add this on bottom
  // append : "<br/>Buh Bye!"
});
// ==============Imprimir=================

});



});