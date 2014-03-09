<?php

	class navbar {
		public $game;
		private $code;
		
		function __construct($game){
			$this->game = $game;
			$this->buildCode();
		}
		
		private function buildCode() {
			$this->code = '<select name="clan" id="clanSelect">' . "\n";
			switch ($this->game) {
				case 'Vampire: the Masquerade':
					$clanEquivalent = [
						'Select your Clan',
						'- Camarilla -',
						'Brujah',
						'Gangrel',
						'Malkavian',
						'Nosferatu',
						'Toreador',
						'Tremere',
						'Ventrue',
						'- Sabbat -',
						'Lasombra',
						'Tzimisce',
						'- Independant -',
						'Assimite',
						'Giovanni',
						'Ravnos',
						'Setite',
						'- Extinct -',
						'Salubri',
						'Cappadocian'
						];
					
					for ($i = 0; $i < (count($clanEquivalent) - 1); $i++) {
						$this->code .= '<option>' . $clanEquivalent[$i] . '</option>' . "\n";
					}
					break;
				
				default:
					$this->code .= 'Error!';
					break;
				}
				
			$this->code .= '</select>';
			}
			
		public function showCode() {
			return $this->code;
		}
	}
?>