<?php
	require_once('header.php');
?>
<?php
	function makeDot($shortName, $countNumber) {
		$output = '<div class="dots">' . "\n" . '<input type="checkbox" class="dot" id="' . $shortName . $countNumber . '"';
		if ($countNumber == 1) {
			$output .= ' checked=true';
		}
		$output .= ' disabled="disabled">' . "\n"  . '<label for="' . $shortName . $countNumber . '"></label>' . "\n" . '</div>';
		return $output;
	}
	
	function makeFiveDots($longName) {
		$shortName = strtolower(substr($longName,0,3));
		$output = '<div id="' . $shortName . '" class="attr">' . $longName . "\n" . '<div class="container">' . "\n";
		for ($i = 1; $i <= 5; $i++) {
			$output .= makeDot($shortName,$i);
		}
		$output .= '</div>' . "\n" . '</div>';
		return $output;
	}
	
	function makeSegment($LCR, $group, $longNameArr) {
		$output = '<div id="' . strtolower($group) . '" class="' . $LCR . '">' . $group . "\n";
		for ($i = 0; $i < count($longNameArr); $i++) {
			$output .= makeFiveDots($longNameArr[$i]);
		}
		$output .= '</div>';
		unset($longName); 
		return $output;
	}
	
	function makeAttributes() {
		$LCR = ['lefty','centery','righty'];
		$attrGroups = ['Physical','Social','Mental'];
		$attrNames = [['Strength', 'Dexterity', 'Stamina'],['Charisma', 'Manipulation', 'Appearance'],['Perception', 'Intelligence', 'Wits']];
		print_r($attrNames[0]);
		$output = '<div id="attributes" class="section">' . "\n" . 'Attributes<br />';
		
		for ($i = 0; $i < 3; $i++) {
			$output .= makeSegment($LCR[$i],$attrGroups[$i],$attrNames[$i]);
		}
		
		$output .= "\n" . '</div>';
		return $output;
	}
	
	makeAttributes();
?>