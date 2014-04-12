<?php
	
	spl_autoload_register(function ($class) {
		include 'classes/' . $class . '.class.php';
	});
	
	require_once('printme.php');
	
	require_once('header.php');	
	
	$sheet = new sheet($basic, 'print');
	
	echo $header->showPrint();
	
	echo $sheet->showPrint();
	
	require_once('footer.php');
?>