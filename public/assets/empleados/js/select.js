jQuery(document).ready(function() {
	//Al iniciar mandamos consultar todos los paises que se mantienen en nuestra base de datos atravez de la ruta paises
	$.getJSON('estados', function( estados ){
		$('#estado').html('');
		$('#estado').append($('<option></option>').text('Seleccione un estado....').val(''));
		$.each(estados, function(i) {
			// console.log(estados[i].nombre);
			$('#estado').append("<option value=\""+estados[i].id+"\">"+estados[i].nombre+"<\/option>");
		});
		//$('#estado').select2();
	});

    //Cargando el municipio al cambiar el estado
	$("#estado").change( function(event) {
		$.ajax({
			url: 'municipios',
			type: 'POST',
			data: 'estado=' + $("#estado option:selected").val(),
		}).done(function ( municipio ){


			$('#municipio').html('');
			$('#municipio').append($('<option></option>').text('Seleccione un municipo').val(''));
			$.each(municipio, function(i) {
				 $('#municipio').append("<option value=\""+municipio[i].id+"\">"+municipio[i].nombre+"<\/option>");
			});
			// $('#estado').select2();
		});
	});


	 //Cargando la parroquia al cambiar el municipio
	$("#municipio").change( function(event) {
		console.log('si');
		var str =  $('#form-update-data').serialize();
		$.ajax({
			url: 'parroquias',
			type: 'POST',
			data: str,
		}).done(function ( parroquia ){


			$('#parroquia').html('');
			$('#parroquia').append($('<option></option>').text('Seleccione una parroquia').val(''));
			$.each(parroquia, function(i) {
				// console.log(parroquia[i]);
				 $('#parroquia').append("<option value=\""+parroquia[i].id+"\">"+parroquia[i].nombre+"<\/option>");
			});
			// $('#estado').select2();
		});
	});

	 //Cargando la ciudad al cambiar la parroqui
	$("#parroquia").change( function(event) {
		console.log('si');
		var str =  $('#form-update-data').serialize();
		$.ajax({
			url: 'ciudades',
			type: 'POST',
			data: str,
		}).done(function ( parroquia ){


			$('#ciudad').html('');
			$('#ciudad').append($('<option></option>').text('Seleccione una ciudad').val(''));
			$.each(ciudad, function(i) {
				// console.log(ciudad[i]);
				 $('#ciudad').append("<option value=\""+ciudad[i].id+"\">"+ciudad[i].nombre+"<\/option>");
			});
			// $('#estado').select2();
		});
	});
var increment = 1;
// Boton add parentesco
$('#add_parentesco').click(function(e){
	increment ++;
	e.preventDefault();
	var html = "<div class='form-group'>";
	html = html + "<div class='col-sm-4'>";
	html = html + "<label for=fullname"+increment+" class=control-label>Nombre Completo</label>";
	html = html + "<input class='form-control' id='fullname"+increment+"' name='fullname"+increment+"' placeholder='Nombre completo del familiar "+increment+"' required>";
	html = html + "</div>";
	// Segundo div parentesco
	html = html + "<div class='col-sm-4'>";
	html = html + "<label for=parentesco"+increment+" class=control-label>Parentesco</label>";
	html = html + "<input class='form-control' id='parentesco"+increment+"' name='parentesco"+increment+"' placeholder='Ingrese el parentesco' required>";
	html = html + "</div>";
	// Tercer div edad
	html = html + "<div class='col-sm-2'>";
	html = html + "<label for=edadp"+increment+" class=control-label>Edad</label>";
	html = html + "<input class='form-control' id='edadp"+increment+"' name='edadp"+increment+"' placeholder='Ingrese la edad' required>";
	html = html + "</div>";
	// cuarto div sexo
	html = html + "<div class='col-sm-2'>";
	html = html + "<label for=sexop"+increment+" class=control-label>Sexo</label>";
	html = html + "<select class='form-control' id='sexop"+increment+"' name='sexop"+increment+"' required>";
	html = html + "<option value=''>-</option>";
	html = html + "<option value='1'>Femenino</option>";
	html = html + "<option value='2'>Masculino</option>";
	html = html + "</select>";
	html = html + "</div>";
	//
	html = html + "</div>";

    $('#parentescoAdd').append(html);
    $('#n_familiar').val(increment);


	console.log('boton');
});

});
