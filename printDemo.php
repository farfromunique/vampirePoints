<?php
	spl_autoload_register(function ($class) {
		include 'classes/' . $class . '.class.php';
	});
	
	require_once('printme.php');
	
		$dot = '<img src="images/dot.png">';
		$noDot = '<img src="images/emptyDot.png">';
		$out = '';
		$i = 0;
		$LCR = ['left','centery','righty'];
		
	foreach ($simple['crunch'] as $section => $group) {
		echo (string)$section;
			$out .= '<div id="' . strtolower((string)$section) . '" class="section">' . "\n" .
								(string)$section . '<br />' . "\n";
			foreach ($group as $groupname => $attribute) {
				$i++;
				if ($i == 3) {$i = 0;}
				$out .= '<div id="' . strtolower((string)$groupname) . '" class="' . $LCR[$i] . '">' . (string)$groupname . "\n";
					if ((string)$groupname != 'Disciplines' && (string)$groupname != 'Backgrounds') {
					foreach ($attribute as $attributename => $thingy) {
						$out .= '<div id="' . substr($attributename,0,3) . '" class="attr">' . $attributename . "\n" .
											'<div class="container">' . "\n";
												for ($j = 0; $j < $simple['crunch'][(string)$section][(string)$groupname][(string)$attributename]['checked']; $j++) {
													$out .= $dot;
												}	
												for ($k = $j; $k < 5; $k++) {
													$out .= $noDot;
												}
						$out .=  	'</div>' . "\n" .
										'</div>' . "\n";
					}
				}
				$out .= 	'</div>' . "\n";
				}
			$out .= 	'</div>' . "\n";
			}
			
			echo $out;
?>