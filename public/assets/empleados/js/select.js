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


});