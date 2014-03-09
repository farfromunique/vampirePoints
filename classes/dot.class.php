<?php
class dot {
	public $name;
	
	private $code;
	
	function __construct($id, $checked = false, $disabled = true) {
		$this->name = $id;
		$this->checked = $checked;
		$this->disabled = $disabled;
		$this->buildCode();
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
}
?>