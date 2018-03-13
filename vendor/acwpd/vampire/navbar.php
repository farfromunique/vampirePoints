<?php

namespace ACWPD\Vampire;


	class navbar {
		public $game;
		private $clanCode;
		private $backgroundCode;
		
		/**
		 * navbar constructor.
		 * @param $game
		 * @return bool Always true
		 */
		function __construct($game){
			$this->game = $game;
			$this->buildClan();
			$this->buildBackgrounds();
			
			return true;
		}
		
		/**
		 * @return bool Always true
		 */
		private function buildClan() {
			$this->clanCode = '<select name="clan" id="clanSelect">' . "\n";
			switch ($this->game) {
				case 'Vampire: the Masquerade':
				default:
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
				}
				for ($i = 0; $i < (count($clanEquivalent) - 1); $i++) {
							$this->clanCode .= '<option>' . $clanEquivalent[$i] . '</option>' . "\n";
				}

				$this->clanCode .= '</select>';

				return true;
			}
			
		public function showClan() {
			return $this->clanCode;
		}
		
		/**
		 * @return bool Always true
		 */
		public function buildBackgrounds() {
			$this->backgroundCode = '';
			for ($i = 1; $i <= 6; $i++) {
				$this->backgroundCode .= '<select name="background' . $i . '" id="background' . $i . '">' . "\n";
				switch($this->game) {
					case 'Vampire: the Masquerade':
					default:
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
				}	
				
				for ($j = 0; $j < (count($backgroundList) -1); $j++) {
					$this->backgroundCode .= '<option>' . $backgroundList[$j] . '</option>' . "\n";
				}
				
				$this->backgroundCode .= '</select>';
			}
			return true;
		}
		
		/**
		 * @return mixed HTML for Backgrounds Select box
		 */
		public function showBackgrounds() {
			return $this->backgroundCode;
		}
	}
