<?php
class section {	
	public $name;
	public $groups = array();
	private $code;
	private $LCR = ['lefty','centery','righty'];
	
	function __construct($name, $groups) {
		$this->name = $name;
		for ($i = 0; $i < (count($groups) / 2); $i++) /* $groups *MUST* have an even number of indicies or this screws up! */ {
			$groupName = "$groups[$i]";
			$this->groups[$i] = new attributeGroup($this->LCR[$i],$groupName,$groups[$groupName]);
		}
		$this->buildCode();
	}
	
	private function buildCode() {
		$this->code = '<div id="' . strtolower($this->name) . '" class="section">' . "\n" . $this->name . '<br />';
		for ($i = 0; $i < count($this->groups); $i++) {
			$this->code .= $this->groups[$i]->showCode();
		}
		$this->code .= '</div>';
	}
	
	public function showCode() {
		return $this->code;
	}		
}

?>