<?php 
	require_once('config.php');
	
/**
 * 
 */
class DB {
	public $connection;
	
	function __construct() {
		$this->connection = new PDO('mysql:host=' . VAMPIRE_DB_HOST . ';dbname=' . VAMPIRE_DB_NAME,VAMPIRE_DB_USER,VAMPIRE_DB_PASS);

		return true;
	}

	public function getVampire($vampID=1000) {
		$query = $this->connection->prepare("SELECT `Data` FROM `vampireList` WHERE `UID` = :uid");
		$query->bindParam(':uid',$vampID);
		$query->execute();
		$result = $query->fetch(PDO::FETCH_ASSOC);
		return $result['Data'];
	}
}
