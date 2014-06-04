<?php
class attribute {
	private $numberOfDots = 5;
	public $name;
	public $shortName;
	
	public $dots = array();
	private $standalone;
	private $code;
	private $printCode;
	
	function __construct($name, $dotsArray, $target = 'web', $numberOfDots = 5,$standalone = 'no') {
	/** $name is a string (Proper case) that translates to the name of the dot group
	*** $dotsArray is an array of integers with 2 named keys:
	*** 	'disabled' contains the number of disabled dots (starting from index 1)
	*** 	'checked' contains the number of checked dots (starting from index 1)
	syntax: new attribute('NameOfAttribute',[3,5]);
	result: NameOfAttribute (*)(*)(*)( )( )
	*/
		$this->name = $name;
		$this->standalone = $standalone;
		$this->numberOfDots = $numberOfDots;
		$this->shortName = strtolower(substr($name,0,5));
		for ($i = 1; $i <= $this->numberOfDots; $i++) {
			$disabled = true;
			$checked = false;
			if ($dotsArray['checked'] >= $i) {
				$checked = true;
			}
			$dotID = "$this->shortName$i";
			$this->dots[$i] = new dot($dotID,$checked,$target);
		}
		switch ($target) {
			case 'web':
				$this->buildCode();
				break;
			case 'print':
				$this->buildPrint();
				break;
		}
	}
	
	private function buildCode() {
		if ($this->standalone == 'no') {
			$this->code = '<div id="' . $this->shortName . '" class="attr">' . $this->name . "\n" . '<div class="container">' . "\n";
		} else {
			$this->code = '<div id="' . $this->shortName . '" class="attr">' . $this->name . '<br />' . "\n";
		}
		for ($i = 1; $i <= count($this->dots); $i++) {
			$this->code .= $this->dots[$i]->showCode();
		}
		if ($this->standalone == 'no') {
			$this->code .= '</div>' . "\n";
		}
		$this->code .= '</div>' . "\n";
	}
	
	public function showCode() {
		return $this->code;
	}
	
	private function buildPrint() {
		if ($this->standalone == 'no') {
			$this->printCode = '<div id="' . $this->shortName . '" class="attr">' . $this->name . "\n" . '<div class="container">' . "\n";
		} else {
			$this->printCode = '<div id="' . $this->shortName . '" class="attr">' . $this->name . '<br />' . "\n";
		}
		for ($i = 1; $i <= count($this->dots); $i++) {
			$this->printCode .= $this->dots[$i]->showPrint();
		}
		if ($this->standalone == 'no') {
			$this->printCode .= '</div>' . "\n";
		}
		$this->printCode .= '</div>' . "\n";
	}
	
	public function showPrint() {
		return $this->printCode;
	}
}
?>