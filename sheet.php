<?php
	
	spl_autoload_register(function ($class) {
		include 'classes/' . $class . '.class.php';
	});

	require_once('printme.php');
	
	$header = new header('web');
	
	$sheet = new sheet($basic, 'web');
	
	require_once('navbar.php');
	
	echo $header->showCode();
	
	echo $sheet->showCode();
	
	require_once('footer.php');
?>