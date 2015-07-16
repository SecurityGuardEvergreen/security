$(function(){
	/* datos tabla 1 */
var data1 = [];
for(i=1; i<15;i++){
	data1.push(
    {
        "GUARD": "LUIS HERNANDEZ",
        "DATETIME": "2015-05-17 21:06:50",
        "CODE VALIDATION": "<span style='color:#149814' ><i class='fa fa-check-circle-o fa-lg'></i> </span>",
        "ALERT": "<span style='color:#5CB85C'><i class='fa fa-thumbs-o-up fa-lg'></i> </span>",
		"VIEW": "<button type='button' class='btn btn-info btn-xs'><i class='fa fa-search '></i> </button>"
    },
	{
        "GUARD": "MANUEL MARTINEZ",
        "DATETIME": "2015-05-17 21:06:50",
        "CODE VALIDATION": "<span style='color:#D34E09' ><i class='fa fa-times-circle-o fa-lg'></i> </span>",
        "ALERT": "<span style='color:#E8A800' ><i class='fa fa-info fa-lg'></i> </span>",
		"VIEW": "<button type='button' class='btn btn-info btn-xs'><i class='fa fa-search '></i></button>"
    },
	{
        "GUARD": "MANUEL MARTINEZ",
        "DATETIME": "2015-05-17 21:06:50",
        "CODE VALIDATION": "<span style='color:#149814' ><i class='fa fa-check-circle-o fa-lg'></i> </span>",
        "ALERT": "<span style='color:#982314' ><i class='fa fa-bullseye fa-lg'></i> </span>",
		"VIEW": "<button type='button' class='btn btn-info btn-xs'><i class='fa fa-search '></i> </button>"
    },
	{
        "GUARD": "LUIS HERNANDEZ",
        "DATETIME": "2015-05-17 21:06:50",
        "CODE VALIDATION": "<span style='color:#149814' ><i class='fa fa-check-circle-o fa-lg'></i> </span>",
        "ALERT": "<span style='color:#149814' ><i class='fa fa-thumbs-o-up fa-lg'></i> </span>",
		"VIEW": "<button type='button' class='btn btn-info btn-xs'><i class='fa fa-search '></i> </button>"
    });
}

    
	$('#table1').bootstrapTable({
        data: data1
    });	
	
	/* fin datos tabla 1 */
	
	/* Datos tabla 2 */
var data2 = [];
for(i=1; i<5;i++){
	data2.push(
    {
        "NAME": "Ipad 10.2",
        "MAC ADDRESS": "01-56-B7-75-8C-5S",
        "MODEL": "3G",
        "BRAND": "APPLE",
		"TYPE": "TABLET"
    },
	{
        "NAME": "Iphone 4 #230",
        "MAC ADDRESS": "01-76-B7-75-8C-5S",
        "MODEL": "EDGE",
        "BRAND": "APPLE",
		"TYPE": "PHONE"
    },
	{
        "NAME": "Desktop siragon #154",
        "MAC ADDRESS": "H1-56-B7-75-8C-5S",
        "MODEL": "MN-600",
        "BRAND": "SIRAGON",
		"TYPE": "DESKTOP"
    },
	{
        "NAME": "SR-04 IPAD",
        "MAC ADDRESS": "01-56-B7-7L-8C-5S",
        "MODEL": "3G",
        "BRAND": "APPLE",
		"TYPE": "TABLET"
    });
}	
	
	
	$('#table2').bootstrapTable({
        data: data2
    });	
	/* Fin Datos tabla 2 */
	/* BOTON STATIONS */
	$('#btn_stations_view').click(function(){
		if($(window).width() <= 800){
			
		 $('#contenido2').removeClass('contenido2');	
		 $('#contenido2').css('display','none');
		 
		 console.log('pantalla 480');
			}else{
				if ($('#ico_stations_view').hasClass('fa-rotate-90')){
				open_lateral();
				console.log('pantalla 480AAAAA');
			}else{
				close_lateral();
				console.log('pantalla 480sdsd');
			}
			}
	});
	
	function open_lateral(){
		$('#ico_stations_view').removeClass('fa-rotate-90');
		$('#contenido2').removeClass('mostrarnav');
	}
	function close_lateral(){
		$('#ico_stations_view').addClass('fa-rotate-90');
		$('#contenido2').addClass('mostrarnav');
	}
	/* Activando contenido right */
$("#arrow-right").click(function(){
	$('#contenido2').addClass('contenido2');
	console.log("que fue");
/* 	$('#nav-left').addClass('hide');
	$('.primary').addClass('hide'); */
	
});
/* Ocultando contenido right */
$("#arrow-top-left").click(function(){
	$('#contenido').css('display','none');	
	$('#nav-left').removeClass('hide');
	$('.primary').removeClass('hide');	
});



$('#table2 tr').click(function() { 
var age = $(this).find("td").eq(0).html(); 
console.log(age);// for testing purpose 
if(age=="Ipad 10.2"){
	open_lateral();
}
}); 

$('#imprimir_reporte').click(function(){
	console.log('hola');
	var str = $('#report2').serialize();
	console.log(str);

	

});
$('#report2').submit(function(){
	var str = $('#report2').serialize();
	console.log(str);
});
	
	
});

// Row Style
function rowStyle(row, index) {
    var classes = ['active', 'success', 'info', 'warning', 'danger'];
    
    if (index === 0 ) {
        return {
            classes: classes[4]
        };
    }
    return {};
}