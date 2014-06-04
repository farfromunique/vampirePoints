<?php
class blood {
	public $name;
	public $checked;
	private $code;
	private $printCode;
	
	function __construct($id, $checked = 'no', $target = 'web') {
		$this->name = $id;
		$this->checked = $checked;
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
		$this->code = '<div class="bloodPool">' . "\n";
		$this->code .= '<input type="checkbox" class="blood" id="' . $this->name . '" name="' . $this->name . '"';
		if ($this->checked == 'yes') { $this->code .= ' checked="true"';}
		$this->code .= ' disabled="disabled">' . "\n" . '<label for="' . $this->name . '"></label>' . "\n" . '</div>' . "\n";
	}
	
	public function showCode() {
		return $this->code;
	}
	
	private function buildPrint() {
		if ($this->checked == 'yes') {
			$this->printCode = '<img src="images/filledBlood.png">';
		} else {
			$this->printCode = '<img src="images/emptyBlood.png">';
		}
		$this->printCode .= "\n";
	}
	
	public function showPrint() {
		
		return $this->printCode;
	}
}
?>