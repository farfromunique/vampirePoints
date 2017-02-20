<?php

	class printable {
		private $data = array();		
		private $code;
		private $filledDot = '<img src="images/filledDot.png">';
		private $emptyDot = '<img src="images/emptyDot.png">';
		private $filledSquare = '<img src="images/filledSquare.png">';
		private $emptySquare = '<img src="images/emptySquare.png">';
		
		function __construct($settings) {
			$this->data = array_merge($settings);
			$this->buildCode();
		}
		
		private function buildCode() {
			$LCR = ['lefty','centery','righty'];
			$i = 1;
			$this->code = '<html>' . "\n" .
							'<head>' . "\n" .
								'<meta charset="UTF-8">' . "\n" .
								'<link rel="stylesheet" type="text/css" href="sheet.css">' . "\n" .
							'</head>' . "\n" .
							'<body>' . "\n" .

								'<div id="clanName"><H1>' . $this->data['clan'] . '</H1></div>' . "\n" .

								'<div id="plainText" class="section">' . "\n";

			$this->code .=		'<div id="text1" class="lefty">' . "\n" .
										'Character\'s Name:' . "\n" .
										'<span class="plain">' . $this->data['fluff']['character'] . '</span>' . "\n" .
										'<br />' . "\n" .
										'Player\'s Name:' . "\n" .
										'<span class="plain">' . $this->data['fluff']['player'] . '</span>' . "\n" .
										'<br />' . "\n" .
										'Chronicle:' . "\n" .
										'<span class="plain">' . $this->data['fluff']['chronicle'] . '</span>' . "\n" .
										'<br />' . "\n" .
									'</div>' . "\n" .

									'<div id="text2" class="centery">' . "\n" .
										'Nature:' . "\n" .
										'<span class="plain">' . $this->data['fluff']['nature'] . '</span>' . "\n" .
										'<br />' . "\n" .
										'Demeanor:' . "\n" .
										'<span class="plain">' . $this->data['fluff']['demeanor'] . '</span>' . "\n" .
										'<br />' . "\n" .
										'Concept:' . "\n" .
										'<span class="plain">' . $this->data['fluff']['concept'] . '</span>' . "\n" .
										'<br />' . "\n" .
									'</div>' . "\n" .

									'<div id="text3" class="righty">' . "\n" .
										'Generation:' . "\n" .
										'<span class="plain">' . $this->data['fluff']['generation'] . '</span>' . "\n" .
										'<br />' . "\n" .
										'Sire:' . "\n" .
										'<span class="plain">' . $this->data['fluff']['sire'] . '</span>' . "\n" .
										'<br />' . "\n" .
										'Title:' . "\n" .
										'<span class="plain">' . $this->data['fluff']['title'] . '</span>' . "\n" .
										'<br />' . "\n" .
									'</div>' . "\n" .
								'</div>' . "\n";
		
			foreach ($this->data['crunch'] as $section => $group) {
					if ($section != 'Other') {
					$this->code .= '<div id="' . strtolower((string)$section) . '" class="section">' . "\n" .
										(string)$section . '<br />' . "\n";
					foreach ($group as $groupname => $attribute) {
						$i++;
						if ($i == 3) {$i = 0;}
						switch ((string)$groupname) {
							case 'Attributes':
							case 'Abilities':
							case 'Advantages':
								$this->code .= '<div id="' . strtolower((string)$groupname) . '" class="' . $LCR[$i] . '">' . (string)$groupname . "\n";
								foreach ($attribute as $attributename => $thingy) { //for 5-filledDot stats with static names
									$this->code .= '<div id="' . substr($attributename,0,3) . '" class="attr">' . $attributename . "\n" .
												'<div class="container">' . "\n";
													for ($j = 0; $j < $this->data['crunch'][(string)$section][(string)$groupname][(string)$attributename]['checked']; $j++) {
														$this->code .= $this->filledDot;
													}	
													for ($k = $j; $k < 5; $k++) {
														$this->code .= $this->emptyDot;
													}
							$this->code .=  	'</div>' . "\n" .
											'</div>' . "\n";
								}
								break;
								
							case 'Disciplines':
							case 'Backgrounds':
							case 'Virtues':
								$this->code .= '<div id="' . strtolower((string)$groupname) . '" class="' . $LCR[$i] . '">' . (string)$groupname . "\n";
								foreach ($attribute as $attributename => $thingy) { //for 5-Dot stats with dynamic names
									$this->code .= '<div id="' . substr($attributename,0,3) . '" class="attr">' . $this->data['choices'][(string)$groupname][(string)$attributename] . "\n" .
												'<div class="container">' . "\n";
													for ($j = 0; $j < $this->data['crunch'][(string)$section][(string)$groupname][(string)$attributename]['checked']; $j++) {
														$this->code .= $this->filledDot;
													}	
													for ($k = $j; $k < 5; $k++) {
														$this->code .= $this->emptyDot;
													}
								$this->code .=  	'</div>' . "\n" .
												'</div>' . "\n";
								}
								break;
								
							case 'Other':
								$this->code .= '<div id="otherTraits class="section">' . "\n" . 
											'<div id="otherTraits" class="lefty">&nbsp;</div>' . "\n" . 
											'<div id="hum-will-blood" class="centery">' . "\n";
								foreach ($this->data['crunch']['Other'] as $group => $groupVal) {
									$this->code .= '<div id="' . strtolower((string)$group) . '" class="attr">' . (string)$group . "\n" . 
													'<div class="container">';
									foreach ($groupVal as $key => $value) {
										$this->code .= '<div id="' . substr($attributename,0,3) . '" class="attr">' . $this->data['choices'][(string)$groupname][(string)$attributename] . "\n";
											if ($group != 'Blood Pool') {
												'<div class="container">' . "\n";
												for ($j = 0; $j < $this->data['crunch']['Other'][(string)$group]['checked']; $j++) {
													$this->code .= $this->filledDot;
												}	
												for ($k = $j; $k < 5; $k++) {
													$this->code .= $this->emptyDot;
												}
											$this->code .= '</div>' . "\n";
											} else {
												$this->code .= '<div class="container">' . "\n";
												
												$this->code .= '</div>' . "\n";
											}
									$this->code .=  	'</div>' . "\n";
										}
												'</div>' . "\n"; 
								}
								$this->code .= 	'</div>' . "\n";
								break;
						}
					}
				$this->code .= 	'</div>' . "\n";
				}
			}
		}
		
		public function showCode() {
			return $this->code;
		}
	}
