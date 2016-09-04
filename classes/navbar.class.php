<?php

	class navbar {
		public $game;
		private $clanCode;
		private $backgroundCode;
		
		function __construct($game){
			$this->game = $game;
			$this->buildClan();
			$this->buildBackgrounds();
		}
		
		private function buildClan() {
			$this->clanCode = '<select name="clan" id="clanSelect">' . "\n";
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
					break;
				
				default:
					$this->clanCode .= 'Error!';
					break;
				}
			for ($i = 0; $i < (count($clanEquivalent) - 1); $i++) {
						$this->clanCode .= '<option>' . $clanEquivalent[$i] . '</option>' . "\n";
			}
					
			$this->clanCode .= '</select>';
			}
			
		public function showClan() {
			return $this->clanCode;
		}
		
		public function buildBackgrounds() {
			$this->backgroundCode = '';
			for ($i = 1; $i <= 6; $i++) {
				$this->backgroundCode .= '<select name="background' . $i . '" id="background' . $i . '">' . "\n";
				switch($this->game) {
					case 'Vampire: the Masquerade':
					$backgroundList = [
						' - Please Select Background - ',
						'Allies',
						'Alternate Identity',
						'Black Hand Membership(*)',
						'Contacts',
						'Domain',
						'Fame',
						'Generation',
						'Herd',
						'Influence',
						'Mentor',
						'Resources',
						'Retainers',
						'Rituals(*)',
						'Status'];
					break;
				
				default:
					$backgroundList = 'Error!';
					break;
				}	
				
				for ($j = 0; $j < (count($backgroundList) -1); $j++) {
					$this->backgroundCode .= '<option>' . $backgroundList[$j] . '</option>' . "\n";
				}
				
				$this->backgroundCode .= '</select>';
			}
		}
		
		public function showBackgrounds() {
			return $this->backgroundCode;
		}
	}
?>