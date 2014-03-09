<?php

	class sheet {
		public $name;
		public $player;
		public $chronicle;
		public $nature;
		public $demeanor;
		public $concept;
		public $generation;
		public $sire;
		public $title;
		
		public $game = 'Vampire: the Masquerade';
		
		public $attributes;
		public $abilites;
		public $advantages;
		
		private $code;
		
		private $save;
		
		function __construct($name, $settings) {
			$this->character = $settings['fluff']['character'];
			$this->player = $settings['fluff']['player'];
			$this->chronicle = $settings['fluff']['chronicle'];
			$this->nature = $settings['fluff']['nature'];
			$this->demeanor = $settings['fluff']['demeanor'];
			$this->concept = $settings['fluff']['concept'];
			$this->generation = $settings['fluff']['generation'];
			$this->sire = $settings['fluff']['sire'];
			$this->title = $settings['fluff']['title'];
			
			$this->attributes = new section('Attributes',$settings['attributes']);
			$this->abilities = new section('Abilities',$settings['abilities']);
			$this->advantages = new section('Advantages',$settings['advantages']);
			
			$this->buildCode($settings);
		}
		
		private function buildCode($settings) {
			$header = '<div id="charSheet">';
			$clanOrGame = '<div id="clanName"><H1>' . $this->game . '</H1></div>';
			$text = new textfields($settings['fluff']);
			$attributes = $this->attributes->showCode();
			$abilities = $this->abilities->showCode();
			$advantages = $this->advantages->showCode();
			
			$this->code = $header . "\n" .
							$clanOrGame . "\n" .
							$text->showCode() . "\n" . 
							$attributes . "\n" .
							$abilities . "\n" .
							$advantages . "\n" .
							'</div>';
		}
		
		public function showCode() {
			return $this->code;
		}
	}

?>