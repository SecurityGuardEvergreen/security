<?php

class ExportController extends BaseController {
	public function excel(){
		// $data = array('Nombre','Apellido');
		$data = Empleado::all();
		// var_dump($data);
		// array_unshift($data, array(array("manzana", "frambuesa")));
		
// 		$data = array(
//     array('data1', 'data2'),
//     array('data3', 'data4'),
//     array('data3', 'data4','noseee','jesus'),
//     $data1
// );
// print_r($data);
// 		Excel::create('Filenamelvis', function($excel)  use($data){

// 			$excel->sheet('Empleado Elvis', function($sheet) use($data) {
// 			        $sheet->fromArray($data, null, 'A1', false, false);
// 			    });


// 		})->download('xls');


Excel::create('Mi archivo', function($excel) use($data){

	$excel->sheet('Empleado Elvis', function($sheet) use($data) {

		 $sheet->fromArray($data, null, 'A1', false, false);
			    });

    // Set the title
    $excel->setTitle('Mi titulo de elvis');

    // Chain the setters
    $excel->setCreator('Elvis Reyes')
          ->setCompany('rsmappdevelopers')
          ->setSubject('los empleados')
          ->setKeywords('evergreen, empleados');

    // Call them separately
    $excel->setDescription('Una descripcion de los cambios de las propiedades del archivo');

})->download('xls');

	} // fin excel
}