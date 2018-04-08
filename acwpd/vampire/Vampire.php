<?php 

namespace ACWPD\Vampire;

class Vampire {
	private $id;
	private $JSON;
	private $firebase;

	public function __construct(\Slim\Container $c) {
		$this->firebase = $c->firebase;
	}

	public function loadFromID(int $id) {
		$db = $this->firebase->getDatabase();
		$data = $db->getReference('/' . $id)->getValue();
		return $data;
	}

	public function createNew() {
		//TODO set to '/base' when ready for production
		return $this->getData('/test/base'); 
	}

	public function getData(string $id) {
		$db = $this->firebase->getDatabase();
		$data = $db->getReference('/' . $id)->getValue();
		return $data;
	}

	public function saveData(string $json, $id = null) : string {
		$decoded = json_decode($json);
		if (is_null($id)) {
			$ref = $this->firebase->getDatabase()->getReference('/test')->push($decoded);
			$key = $ref->getKey();
			return $key;
		} else {
			$ref = $this->firebase->getDatabase()->getReference('/test');
			$ref->update([$id => $decoded]);
			return $id;
		}
	}
}
