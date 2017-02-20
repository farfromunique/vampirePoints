<?php
class bloodPool {	
	public $blood = array();
	private $code;
	private $printCode;
	
	function __construct($bloodData, $target = 'web') {
	/*  $bloodData is an integer
	***		NOTE: this is technically the "available" blood, which means it is a count of unchecked!
	syntax: new bloodPool($variableChunk['blood'],15);
	result: Blood Pool [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] \n
					   [ ] [ ] [ ] [ ] [*] [*] [*] [*] [*]
	*/
		for ($i = 1; $i <= 20; $i++) {
			$disabled = true;
			$checked = 'no';
			if ($bloodData < $i) {
				$checked = 'yes';
			}
			$dotID = 'bloodPool-' . sprintf("%02s",$i);
			$this->blood[$i] = new blood($dotID,$checked,$target);
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
		$this->code = '<div id="bloodPool" class="attr">Blood Pool' . "\n" . '<br />' . "\n";
		for ($i = 1; $i <= count($this->blood); $i++) {
			if ($i == 11) {
				$this->code .= '<br />' . "\n";
			}
			$this->code .= $this->blood[$i]->showCode();
		}
		$this->code .= '<br />' . "\n" . '</div>' . "\n" . '</div>' . "\n";
	}
	
	public function showCode() {
		return $this->code;
	}
	
	private function buildPrint() {
		$this->printCode = '<div id="bloodPool" class="attr">Blood Pool' . "\n" . '<br />' . "\n";
		for ($i = 1; $i <= count($this->blood); $i++) {
			if ($i == 11) {
				$this->printCode .= '<br />' . "\n";
			}
			$this->printCode .= $this->blood[$i]->showPrint();
		}
		$this->printCode .= '<br />' . "\n" . '</div>' . "\n" . '</div>' . "\n";
	}
	
	public function showPrint() {
		return $this->printCode;
	}
}
