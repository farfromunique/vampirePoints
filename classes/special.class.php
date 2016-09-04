<?php
class special extends section {	
	
	function __construct($settings, $target = 'web') {
		$this->name = 'Other';
		$this->groups[] = new attribute('Humanity', $settings['humanity'],$target,10,'yes');
		$this->groups[] = new attribute('Willpower', $settings['willpower'],$target,10,'yes');
		$this->groups[] = new bloodPool($settings['blood'],$target);
		
		switch ($target) {
			case 'web':
				$this->buildCode();
				break;
				
			case 'print':
				$this->buildPrint();
				break;
				
			default;
				echo 'error!';
				break;
		}
	}
	
	private function buildCode() {
		
		$this->code = '<div id="other" class="section">' . "\n" . '<br />';
		$this->code .= '<div class="lefty">&nbsp;</div>' . "\n" . '<div id="hum-will-blood" class="centery">' . "\n";
		for ($i = 0; $i < count($this->groups); $i++) {
			$this->code .= $this->groups[$i]->showCode();
		}
		$this->code .= '<div class="righty">&nbsp;</div>' . "\n" . '</div>' . "\n";
	}
	
	public function showCode() {
		return $this->code;
	}	
	
	private function buildPrint() {
		$this->printCode = '<div id="other" class="section">' . "\n" . '<br />';
		$this->printCode .= '<div class="lefty">&nbsp;</div>' . "\n" . '<div id="hum-will-blood" class="centery">' . "\n";
		
		for ($i = 0; $i < count($this->groups); $i++) {
			$this->printCode .= $this->groups[$i]->showPrint();
		}
		$this->printCode .= '</div>' . "\n" . '</div>' . "\n";
	}	
	
	public function showPrint() {
		return $this->printCode;
	}	
}

?>