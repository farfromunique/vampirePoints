<?php

namespace ACWPD\Vampire;

	class textfields {
		
		private $game;
		private $code;
		private $printCode;
		
		function __construct($settings,$target = 'web') {
			$this->game = $settings['game'];
			$this->updateCode($settings,$target);
		}
		
		private function updateCode($info,$target = 'web') {
			$character = '';
			$player = '';
			$chronicle = '';
			$nature = '';
			$demeanor = '';
			$concept = '';
			$generation = '';
			$sire = '';
			$title = '';
			
			switch ($target) {
				case 'web':
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
									'<input type="text" id="characterName" name="characterName"' . $character . '>' . "\n" . 
								'</label>' . "\n" . 
								'<br />' . "\n" . 
								'<label>Player' . "\n" . 
									'<input type="text" id="player" name="player"' . $player . '>' . "\n" . 
								'</label>' . "\n" . 
								'<br />' . "\n" . 
								'<label>Chronicle' . "\n" . 
									'<input type="text" id="chronicle" name="chronicle"' . $chronicle . '>' . "\n" . 
								'</label>' . "\n" . 
								'<br />' . "\n" . 
							'</div>' . "\n" . 
							'<div id="text2" class="centery">' . "\n" . 
								'<label>Nature' . "\n" . 
									'<input type="text" id="nature" name="nature"' . $nature . '>' . "\n" . 
								'</label>' . "\n" . 
								'<br />' . "\n" . 
								'<label>Demeanor' . "\n" . 
									'<input type="text" id="demeanor" name="demeanor"' . $demeanor . '>' . "\n" . 
								'</label>' . "\n" . 
								'<br />' . "\n" . 
								'<label>Concept' . "\n" . 
									'<input type="text" id="concept" name="concept"' . $concept . '>' . "\n" . 
								'</label>' . "\n" . 
								'<br />' . "\n" . 
							'</div>' . "\n" . 
							'<div id="text3" class="righty">' . "\n" . 
								'<label>Generation' . "\n" . 
									'<input type="text" id="generation" name="generation"' . $generation . 'disabled="disabled">' . "\n" . 
								'</label>' . "\n" . 
								'<br />' . "\n" . 
								'<label>Sire' . "\n" . 
									'<input type="text" id="sire" name="sire"' . $sire . '>' . "\n" . 
								'</label>' . "\n" . 
								'<br />' . "\n" . 
								'<label>Title' . "\n" . 
									'<input type="text" id="title" name="title"' . $title . '>' . "\n" . 
								'</label>' . "\n" . 
							'</div>' . "\n" . 
						'</div>' . "\n";
					break;
				
				case 'print':
					if ($info['character'] != '') { 
						$character = $info['character'];
					}
					
					if ($info['player'] != '') { 
						$player = $info['player'];
					}
					
					if ($info['chronicle'] != '') { 
						$chronicle = $info['chronicle'];
					}
					
					if ($info['nature'] != '') { 
						$nature = $info['nature'];
					}
					
					if ($info['demeanor'] != '') { 
						$demeanor = $info['demeanor'];
					}
					
					if ($info['concept'] != '') { 
						$concept = $info['concept'];
					}
					
					if ($info['generation'] != '') { 
						$generation = $info['generation'];
					}
					
					if ($info['sire'] != '') { 
						$sire = $info['sire'];
					}
					
					if ($info['title'] != '') { 
						$title = $info['title'];
					}
					$this->printCode = 
						'<div id="plainText" class="section">' . "\n" . 
							'<div id="text1" class="lefty">' . "\n" . 
								'Character Name: ' . $character . "\n" . 
								'<br />' . "\n" . 
								'Player Name: ' . $player . "\n" . 
								'<br />' . "\n" . 
								'Chronicle: ' . $chronicle . "\n" . 
							'</div>' . "\n" . 
							'<div id="text2" class="centery">' . "\n" . 
								'Nature: ' . "\n" . $nature . "\n" . 
								'<br />' . "\n" . 
								'Demeanor: ' . $demeanor . "\n" . 
								'<br />' . "\n" . 
								'Concept: ' . $concept . "\n" . 
							'</div>' . "\n" . 
							'<div id="text3" class="righty">' . "\n" . 
								'Generation: ' . $generation . "\n" . 
								'<br />' . "\n" . 
								'Sire: ' . $sire . "\n" . 
								'<br />' . "\n" . 
								'Title: ' . $title . "\n" . 
							'</div>' . "\n" . 
						'</div>' . "\n";
					break;
			}
		}
		
		public function showCode() {
			return $this->code;
		}
		
		public function showPrint() {
			return $this->printCode;
		}
	}
	
?>