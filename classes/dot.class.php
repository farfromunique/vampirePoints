<?php
class dot {
	public $name;
	public $checked;
	public $disabled;
	private $code;
	private $printCode;
	
	function __construct($id, $checked = false, $disabled = true, $target = 'web') {
		$this->name = $id;
		$this->checked = $checked;
		$this->disabled = $disabled;
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
		$this->code = '<div class="dots">' . "\n";
		$this->code .= '<input type="checkbox" class="dot" id="' . $this->name . '"';
		if ($this->checked) { $this->code .= ' checked="true"';}
		if ($this->disabled) { $this->code .= ' disabled="disabled"';}
		$this->code .= '>' . "\n" . '<label for="' . $this->name . '"></label>' . "\n" . '</div>' . "\n";
	}
	
	public function showCode() {
		return $this->code;
	}
	
	private function buildPrint() {
		$this->printCode = '<div class="dots">' . "\n";
		if ($this->checked) { 
			$this->printCode .= '<img src="images/filledDot.png">'; 
		} else {
			$this->printCode .= '<img src="images/emptyDot.png">'; 
		}
		$this->printCode .= "\n" . '</div>' . "\n";
	}
	
	public function showPrint() {
		return $this->printCode;
	}
}
?>