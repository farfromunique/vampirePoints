<?php

/**
 * Created by PhpStorm.
 * User: aaron
 * Date: 10/22/2016
 * Time: 9:39 PM
 */
class DotRating
{
	static function Display($name, $size, $dotStatus = null)
	{
		$name = strtolower(str_replace(' ', '_', $name));
		$capName = ucwords(strtolower($name));
		$shortName = substr(strtolower($name), 0, 5);
		
		if (is_null($dotStatus)) {
			$dotStatus = array_fill(1, $size, 'normal');
		} elseif (!is_array($dotStatus)) {
			$dotStatus = array_fill(1, $size, $dotStatus);
		} elseif (count($dotStatus) < $size) {
			$dotStatus = array_pad($dotStatus, $size, 'normal');
		}
		array_unshift($dotStatus, null);
		
		$out = '<fieldset class="rating" id="' . $name . '_set" data-title="' . $capName . '">' . "\n";
		
		for ($i = $size; $i > 0; $i--) {
			$out .= '<input type="radio" id="' . $shortName . $i . '" name="' . $capName . '" value="' . $i . '"';
			if ($dotStatus[$i] !== 'normal') {
				$out .= $dotStatus[$i] . '="' . $dotStatus[$i] . '"';
			}
			$out .= '"/>' . "\n";
			$out .= '<label class="full" for="' . $shortName . $i . '" title="' . $i . ' Dots in ' . $capName . '"></label>' . "\n";
		}
		
		$out .= '</fieldset>' . "\n";
		
		return $out;
	}
}