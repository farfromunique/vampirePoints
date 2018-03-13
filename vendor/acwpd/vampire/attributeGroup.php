<?php

namespace ACWPD\Vampire;

class attributeGroup {
	public $name;
	public $attributes = array();
	private $LCR;
	private $code;
	private $printCode;

	function __construct($LCR, $groupName, $attributeArray,$target = 'web') {
		$this->name = $groupName;
		$this->LCR = $LCR;
		for ($i = 0; $i < (count($attributeArray) / 2); $i++) {
			$attrName = "$attributeArray[$i]";
			$this->attributes[$i] = new attribute($attrName,$attributeArray[$attrName],$target);
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
		$this->code = '<div id="' . strtolower($this->name) . '" class="' . $this->LCR . '">' . $this->name;
		for ($i = 0; $i < count($this->attributes); $i++) {
			$this->code .= $this->attributes[$i]->showCode();
		}
		$this->code .= '</div>';
	}

	public function showCode() {
		return $this->code;
	}
	
	private function buildPrint() {
		$this->printCode = '<div id="' . strtolower($this->name) . '" class="' . $this->LCR . '">' . $this->name;
		for ($i = 0; $i < count($this->attributes); $i++) {
			$this->printCode .= $this->attributes[$i]->showPrint();
		}
		$this->printCode .= '</div>';
	}

	public function showPrint() {
		return $this->printCode;
	}
}
