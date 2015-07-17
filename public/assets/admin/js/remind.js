$(function(){
// Click Buttom submit
$('#commit').click(function(){
	$(this).attr('value','Generando solicitud ...');
	setTimeout(resetTxtBtn,7000);
});

function resetTxtBtn(){
	$('#commit').attr('value','Enviar instrucciones');
}



});
