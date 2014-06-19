<?php

	class header {
	
	private $code;
	
	function __construct($target = 'web') {
		$this->code = 	'<html>' . "\n" . 
							'<head>' . "\n" . 
								'<meta charset="UTF-8">' . "\n" . 
								'<link rel="stylesheet" type="text/css" href="sheet.css">' . "\n" . 
								'<title>Freebies / XP checker for V:tM characters</title>' . "\n";
								if ($target == 'web') {
				$this->code .= 	'<script type="text/javascript" src="ACWPD.js"></script>' . "\n" . 
								'<script type="text/javascript" src="main.js"></script>' . "\n" . 
								'<script type="text/javascript" src="testing.js"></script>' . "\n" . 
								'<script type="text/javascript" src="sheet.js"></script>' . "\n";
								}
			$this->code .=	'</head>' . "\n";
	}
	
	function showCode() {
		return $this->code;
	}
}