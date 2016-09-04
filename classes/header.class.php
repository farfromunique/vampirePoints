<?php

	class header {
	
	private $code;
	
	function __construct($target = 'web') {
		$this->code = 	'<html>' . "\n" . 
							'<head>' . "\n" . 
								'<meta charset="UTF-8">' . "\n" . 
								'<link rel="stylesheet" type="text/css" href="/css/main.css">' . "\n" . 
								'<title>Freebies / XP checker for V:tM characters</title>' . "\n";
		if ($target == 'web') {
			$this->code .= 		'<script type="text/javascript" src="/js/ACWPD-ajax.js"></script>' . "\n" . 
								'<script type="text/javascript" src="/js/main.js"></script>' . "\n";
		}
		// Page specific includes

		switch ($_SERVER['REQUEST_URI']) {
			case '/show.php':
				$this->code .=		'<script type="text/javascript" src="/js/testing.js"></script>' . "\n" . 
									'<script type="text/javascript" src="/js/sheet.js"></script>' . "\n";
				break;
			
			case '/index.php':
			case '/':
				$this->code .=		'<script type="text/javascript" src="/js/splash.js"></script>' . "\n";
				break;
			
			default:
				# code...
				break;
		}
		if (strpos($_SERVER['REQUEST_URI'],"show") !== false) { 
			$this->code .=		'<script type="text/javascript" src="/js/testing.js"></script>' . "\n" . 
								'<script type="text/javascript" src="/js/sheet.js"></script>' . "\n";
		}


			
			$this->code .=	'</head>' . "\n";
	}
	
	function showCode() {
		return $this->code;
	}

	public function __toString() {
		return $this->showCode();
	}
}