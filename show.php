<?php
	if (array_key_exists('target',$_GET)) {
		$target = $_GET["target"];
	} else {
		$target = 'web';
	}
	
	spl_autoload_register(function ($class) {
		include 'classes/' . $class . '.class.php';
	});
	
	$parser = new parser();
	
	require_once('printme.php');
	
	$header = new header($target);
	
	$sheet = new sheet($basic, $target);
	
	echo $header->showCode();
	if ($target == 'web') {
		$navbar = $parser->buildOutput('navbar.php','printme.php');
		echo $navbar;
		echo $sheet->showCode();
	} else {
		echo $sheet->showPrint();
	}
	
	require_once('footer.php');
?>