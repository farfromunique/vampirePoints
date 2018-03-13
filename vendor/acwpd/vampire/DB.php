<?php 

namespace ACWPD\Vampire;

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

	public function saveVampire($store) {
		$a = serialize($store);

		$basicVamp = $this->connection->prepare('INSERT INTO  `vampires`.`vampireList` (`Name`,`Data`) VALUES (:name,:data)');
		if (!$basicVamp->bindparam(":name",$store['fluff']['character'])) {
			return 'bind :name as `' . $store['fluff']['character'] . '` failed!';
		};
		if (!$basicVamp->bindparam(":data",$a)) {
			return 'bind :data as `' . $a . '` failed!';
		};
		$result = $basicVamp->execute(); 
		if ($result == false) {
			return 'Query failed';
		};

		return $this->connection->lastInsertId();

	}

	public function getMaxVampNumber() {
		$newest = $ud->prepare('SELECT Max(`UID`) FROM `vampireList`');
		$char = 1000;
			if ($newest->execute()) {$char = $newest->fetchColumn();
		}
		return $char;
	}
	
	
}
