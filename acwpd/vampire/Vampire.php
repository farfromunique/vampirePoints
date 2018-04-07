<?php 

namespace ACWPD\Vampire;

class Vampire {
	private $id;
	private $JSON;
	private $firebase;

	public function __construct(\Slim\Container $c) {
		$this->firebase = $c->firebase;
	}

	public function loadFromJSON(string $JSON) : bool {
		// Short circuit if not valid JSON
		$throwaway = json_decode($JSON, true, 10);
		if ( is_null($throwaway) ) {
			return false;
		}
		$this->JSON = $JSON;
		return true;
	}

	public function loadFromID(int $id) {
		# code...
	}

	public function createNew() {
		// loadFromID(base);
	}

	public function getData($id = 1000) {
		$db = $this->firebase->getDatabase();
		$data = $db->getReference('/' . $id)->getValue();
		return $data;
	}
}
