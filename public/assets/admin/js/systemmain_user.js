$(function(){
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

    
	$('#table_user').bootstrapTable({
        data: data1
    });	
	

});