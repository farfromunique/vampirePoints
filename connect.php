<?php
	
	$con = new PDO('mysql:host=localhost;dbname=vampires','prince','letmebeyourruler');
	
	
	
	$basicVamp = $con->prepare('SELECT `Data` FROM `vampireList` WHERE UID = :char');
	$basicVamp->bindparam(":char",$charNum);
	$basicVamp->execute();
	$result = $basicVamp->fetch(PDO::FETCH_ASSOC);
	$basic = unserialize($result['Data']);
	
	
?>