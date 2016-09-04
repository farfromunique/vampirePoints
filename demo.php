<?php
require_once('printme.php');
$a = serialize($store);

	$ud = new PDO('mysql:host=localhost;dbname=vampires','prince','letmebeyourruler');
	//$sql = 'INSERT INTO  `vampires`.`vampireList` (`UID`,`Name`,'Data') VALUES (1000,$basic['fluff']['character'],serialize($basic));;
	
	$basicVamp = $ud->prepare('INSERT INTO  `vampires`.`vampireList` (`UID`,`Name`,`Data`) VALUES (1000,:name,:data)');
	if (!$basicVamp->bindparam(":name",$basic['fluff']['character'])) {echo 'bind :name as `' . $basic['fluff']['character'] . '` failed!'; };
	if (!$basicVamp->bindparam(":data",$a)) {echo 'bind :data as `' . $a . '` failed!'; };
	if ($basicVamp->execute()) {echo 'Done!';};
	
?>