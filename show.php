<?php
	if (array_key_exists('target',$_GET)) {
		$target = $_GET["target"];
	} else {
		$target = 'web';
	}
	
	if (array_key_exists('character',$_GET)) {
		$charNum = $_GET["character"];
	} else {
		$charNum = 1000;
	}
	
	
	require_once('connect.php');
	
	spl_autoload_register(function ($class) {
		include 'classes/' . $class . '.class.php';
	});
	
	$parser = new parser();
	
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