<?php
class attributeGroup {
	public $name;
	public $attributes = array();
	private $LCR;
	private $code;

	function __construct($LCR, $groupName, $attributeArray) {
		$this->name = $groupName;
		$this->LCR = $LCR;
		for ($i = 0; $i < (count($attributeArray) / 2); $i++) {
			$attrName = "$attributeArray[$i]";
			$this->attributes[$i] = new attribute($attrName,$attributeArray[$attrName]);
		}
		$this->buildCode();
	}

	private function buildCode() {
		$this->code = '<div id="' . strtolower($this->name) . '" class="' . $this->LCR . '">' . $this->name;
		for ($i = 0; $i < count($this->attributes); $i++) {
			$this->code .= $this->attributes[$i]->showCode();
		}
		$this->code .= '</div>';
	}

	public function showCode() {
		return $this->code;
	}
}
?>