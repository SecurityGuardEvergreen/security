$(function(){
	function capture(){
		console.log("Hola");
	}

    var dials = $(".dials ol li");
    var index;
    var number = $(".number");
	var comentario = $("#comentario");
	var catch_number = "";
    var total="";
	var total_catch;
	
	/* Función Borrar atrás */
	function borrar_atras(){
			total = number.text();
            total = total.slice(0,-1);
            number.empty().append(total);
			
			total_catch = catch_number;
			total_catch = total_catch.slice(0,-1);
			catch_number = total_catch;
		}
		
	/* Fin Función Borrar atrás */

    dials.click(function(){
		
        index = dials.index(this);
		if(number.text().length<8){
		//console.log(number.append(index+1));
        if(index == 9){

            number.append("*");
			catch_number = catch_number + "*";
        }else if(index == 10){

            number.append("*");
			catch_number = catch_number + "0";
			
        }else if(index == 11){

            number.append("*");
			catch_number = catch_number + "#";

        }else if(index == 12){

            //number.empty();
			//catch_number = "";

        }else if(index == 13){
		
            borrar_atras();
        }else if(index == 14){

            //para el pánico;
			var alarma_resp = confirm("Presione el bot\xf3n ACEPTAR para enviar la alarma !!!");
			if(alarma_resp){
				alert("Alarma generada exitosamente !!");
			}
			  
			
        }else if(index == 15){} 
		else{ number.append("*"); catch_number = catch_number + (index+1) }
		
		}else{
			
			if(index == 13){
				borrar_atras();		
			}
		}
		/* Borrar todo */
		if(index == 16){
            number.empty();
			catch_number = "";
        }
		/* Fin Borrar todo */
		
		/* Enviar */
		if(index == 15){

            //para el enviar;
			 //$('#front').submit();
			if(catch_number){
								
				var responsemsg = confirm("\u00bfEst\u00e1  seguro de enviar el c\xf3digo? ");
				if(responsemsg){
					var str = $('#front').serialize();
					alert('Mensaje enviado exitosamente !!!');
				if(str.length>11)
					console.log('Codigo= '+catch_number+' '+str);
				else 
					console.log('Codigo= '+catch_number);
			    number.empty();
				comentario.val('');
				catch_number = "";
				}
				
				
			}else{
				
				//console.log("no");
				alert('Alerta !!!\r \n Est\xe1 intentando enviar un c\xf3digo vac\xedo. \r Corriga este error ingresando el c\xf3digo diario en el key pad de Security Guard .');
			}
			
				
			
        }
		
		
    });

   /*  $(document).keydown(function(e){
		console.log(e);
        switch(e.which){

            case 96:

                number.append("0");
                break;

            case 97:

                number.append("1");
                break;

            case 98:

                number.append("2");
                break;

            case 99:

                number.append("3");
                break;

            case 100:

                number.append("4");
                break;

            case 101:

                number.append("5");
                break;

            case 102:

                number.append("6");
                break;

            case 103:

                number.append("7");
                break;

            case 104:

                number.append("8");
                break;

            case 105:

                number.append("9");
                break;

            case 8:

                total = number.text();
                total = total.slice(0,-1);
                number.empty().append(total);
                break;

            case 27:

                number.empty();
                break;

            case 106:

                number.append("*");
                break;

            case 35:

                number.append("#");
                break;

            case 13:

                $('.pad-action').click();
                break;

            default: return;
        }

        e.preventDefault();
    }); */

	
	});
