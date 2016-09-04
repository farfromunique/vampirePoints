<?php

	class sheet {
		public $character;
		public $player;
		public $chronicle;
		public $nature;
		public $demeanor;
		public $concept;
		public $generation;
		public $sire;
		public $title;
		public $clan;
		
		public $game = 'Vampire: the Masquerade';
		
		public $attributes;
		public $abilites;
		public $advantages;
		
		public $specialSection;
		
		private $code;
		private $printCode;
		
		function __construct($settings,$target = 'web') {
			$this->clan = $settings['fluff']['clan'];
			$this->character = $settings['fluff']['character'];
			$this->player = $settings['fluff']['player'];
			$this->chronicle = $settings['fluff']['chronicle'];
			$this->nature = $settings['fluff']['nature'];
			$this->demeanor = $settings['fluff']['demeanor'];
			$this->concept = $settings['fluff']['concept'];
			$this->generation = $settings['fluff']['generation'];
			$this->sire = $settings['fluff']['sire'];
			$this->title = $settings['fluff']['title'];
			
			$this->attributes = new section('Attributes',$settings['attributes'],$target);
			$this->abilities = new section('Abilities',$settings['abilities'],$target);
			$this->advantages = new section('Advantages',$settings['advantages'],$target);
			
			$this->specialSection = new special($settings,$target);
			
			switch ($target) {
			case 'web':
				$this->buildCode($settings);
				break;
			case 'print':
				$this->buildPrint($settings);
				break;
			}
		}
		
		private function buildCode($settings) {
			$header = '<div id="charSheet">';
			$clanOrGame = '<div id="clanName"><H1>' . $this->clan . '</H1></div>';
			$text = new textfields($settings['fluff'],'web');
			$attributes = $this->attributes->showCode();
			$abilities = $this->abilities->showCode();
			$advantages = $this->advantages->showCode();
			
			$specialSection = $this->specialSection->showCode();
			
			$this->code = $header . "\n" .
							$clanOrGame . "\n" .
							$text->showCode() . "\n" . 
							$attributes . "\n" .
							$abilities . "\n" .
							$advantages . "\n" . 
							$specialSection . "\n" . 
							'<form action="store.php" method="post">' . "\n" . 
							'<input type="hidden" id="outClanName" name="clan">' . "\n" . 
							'<input type="hidden" id="fluff" name="fluff">' . "\n" . 
							'<input type="hidden" id="allDots" name="AllDots">' . "\n" . 
							'<input type="hidden" id="customNames" name="CustomNames">' . "\n" . 
							'<input type="Submit" value="Save" id="Save"></form></div></div>';
		}
		
		public function showCode() {
			return $this->code;
		}
		
		private function buildPrint($settings) {
			$header = '<div id="charSheet">';
			$clanOrGame = '<div id="clanName"><H1>' . $this->clan . '</H1></div>';
			$text = new textfields($settings['fluff'],'print');
			$attributes = $this->attributes->showPrint();
			$abilities = $this->abilities->showPrint();
			$advantages = $this->advantages->showPrint();
			
			$specialSection = $this->specialSection->showPrint();
			
			$this->printCode = $header . "\n" .
							$clanOrGame . "\n" .
							$text->showPrint() . "\n" . 
							$attributes . "\n" .
							$abilities . "\n" .
							$advantages . "\n" .
							$specialSection . "\n" . 
							'</div>';

		}
		
		public function showPrint() {
			return $this->printCode;
		}
		
	}

?>