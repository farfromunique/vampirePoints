<?php
	class textfields {
		
		private $game;
		private $code;
		
		function __construct($settings) {
			$this->game = $settings['game'];
			$this->updateCode($settings);
			}
		
		private function updateCode($info) {
			$character = '';
			$player = '';
			$chronicle = '';
			$nature = '';
			$demeanor = '';
			$concept = '';
			$generation = '';
			$sire = '';
			$title = '';
			
			if ($info['character'] != '') { 
				$character = ' value="' . $info['character'] . '"';
			}
			
			if ($info['player'] != '') { 
				$player = ' value="' . $info['player'] . '"';
			}
			
			if ($info['chronicle'] != '') { 
				$chronicle = ' value="' . $info['chronicle'] . '"';
			}
			
			if ($info['nature'] != '') { 
				$nature = ' value="' . $info['nature'] . '"';
			}
			
			if ($info['demeanor'] != '') { 
				$demeanor = ' value="' . $info['demeanor'] . '"';
			}
			
			if ($info['concept'] != '') { 
				$concept = ' value="' . $info['concept'] . '"';
			}
			
			if ($info['generation'] != '') { 
				$generation = ' value="' . $info['generation'] . '"';
			}
			
			if ($info['sire'] != '') { 
				$sire = ' value="' . $info['sire'] . '"';
			}
			
			if ($info['title'] != '') { 
				$title = ' value="' . $info['title'] . '"';
			}
			
			$this->code = 
				'<div id="plainText" class="section">' . "\n" . 
					'<div id="text1" class="lefty">' . "\n" . 
						'<label>Character\'s Name' . "\n" . 
							'<input type="text" id="characterName"' . $character . '>' . "\n" . 
						'</label>' . "\n" . 
						'<br />' . "\n" . 
						'<label>Player' . "\n" . 
							'<input type="text" id="player"' . $player . '>' . "\n" . 
						'</label>' . "\n" . 
						'<br />' . "\n" . 
						'<label>Chronicle' . "\n" . 
							'<input type="text" id="chronicle"' . $chronicle . '>' . "\n" . 
						'</label>' . "\n" . 
						'<br />' . "\n" . 
					'</div>' . "\n" . 
					'<div id="text2" class="centery">' . "\n" . 
						'<label>Nature' . "\n" . 
							'<input type="text" id="nature"' . $nature . '>' . "\n" . 
						'</label>' . "\n" . 
						'<br />' . "\n" . 
						'<label>Demeanor' . "\n" . 
							'<input type="text" id="demeanor"' . $demeanor . '>' . "\n" . 
						'</label>' . "\n" . 
						'<br />' . "\n" . 
						'<label>Concept' . "\n" . 
							'<input type="text" id="concept"' . $concept . '>' . "\n" . 
						'</label>' . "\n" . 
						'<br />' . "\n" . 
					'</div>' . "\n" . 
					'<div id="text3" class="righty">' . "\n" . 
						'<label>Generation' . "\n" . 
							'<input type="text" id="generation"' . $generation . '>' . "\n" . 
						'</label>' . "\n" . 
						'<br />' . "\n" . 
						'<label>Sire' . "\n" . 
							'<input type="text" id="sire"' . $sire . '>' . "\n" . 
						'</label>' . "\n" . 
						'<br />' . "\n" . 
						'<label>Title' . "\n" . 
							'<input type="text" id="title"' . $title . '>' . "\n" . 
						'</label>' . "\n" . 
					'</div>' . "\n" . 
				'</div>' . "\n";
		}
		
		public function showCode() {
			return $this->code;
		}
	}
	
?>