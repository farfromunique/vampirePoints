<?php
	require_once('VtM.php');
	
	require_once('header.php');	
	
	$sheet = new sheet('',$basic);
	
	echo $sheet->showCode();
	
	require_once('footer.php');
?>