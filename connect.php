<?php
	require_once('config.php');
	$con = new PDO('mysql:host=' . VAMPIRE_DB_HOST . ';dbname=' . VAMPIRE_DB_NAME,VAMPIRE_DB_USER,VAMPIRE_DB_PASS);
	
	
	
	$basicVamp = $con->prepare('SELECT `Data` FROM `vampireList` WHERE UID = :char');
	$basicVamp->bindparam(":char",$charNum);
	$basicVamp->execute();
	$result = $basicVamp->fetch(PDO::FETCH_ASSOC);
	$basic = unserialize($result['Data']);
	
	$characters = $con->prepare('SELECT `UID`,`Name`,`Data` FROM `vampireList` WHERE `UID` > 1000 LIMIT 0,5');
	$characters->execute();
	$fiveChars = $characters->fetchAll(PDO::FETCH_ASSOC);
	
?>