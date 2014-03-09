<?php
class attribute {
	private $numberOfDots = 5;
	public $name;
	public $shortName;
	
	public $dots = array();
	private $code;
	
	function __construct($name, $dotsArray) {
	/** $name is a string (Proper case) that translates to the name of the dot group
	*** $dotsArray is an array of integers with 2 named keys:
	*** 	'disabled' contains the number of disabled dots (starting from index 1)
	*** 	'checked' contains the number of checked dots (starting from index 1)
	syntax: new attribute('NameOfAttribute',[3,5]);
	result: NameOfAttribute (*)(*)(*)( )( )
	*/
		$this->name = $name;
		$this->shortName = strtolower(substr($name,0,3));
		for ($i = 1; $i <= $this->numberOfDots; $i++) {
			$disabled = true;
			$checked = false;
			if ($dotsArray['disabled'] >= $i) {
				$disabled = true;
			}
			if ($dotsArray['checked'] >= $i) {
				$checked = true;
			}
			$dotID = "$this->shortName$i";
			$this->dots[$i] = new dot($dotID,$checked,$disabled);
		}
		$this->buildCode();
	}
	
	private function buildCode() {
		$this->code = '<div id="' . $this->shortName . '" class="attr">' . $this->name . "\n" . '<div class="container">' . "\n";
		for ($i = 1; $i <= count($this->dots); $i++) {
			$this->code .= $this->dots[$i]->showCode();
		}
		$this->code .= '</div>' . "\n" . '</div>' . "\n";
	}
	
	public function showCode() {
		return $this->code;
	}
}
?>