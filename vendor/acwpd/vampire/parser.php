<?php

namespace ACWPD\Vampire;

	
/* Provides parsing tools for ACWPD Projects
 * Feel free to use this in your projects! Just provide Attribution by keeping this block in place!
 * 
 * This is version 1.1
 * 
 * For the latest version, please visit: https://github.com/farfromunique/ACWPD_Tools
 * 
 * This code is copyright (C) 2016 Aaron Coquet / ACWPD
 */ 
 
class Parser {
    /** @param string $str String containing a time in UTC surrounded by ":-:UTC:-:" on one side and ":-:" on the other.
     * @param mixed $TimeZoneOffset The difference from a given timezone.
     * @param string $timeFormat The PHP-style time format desired by the user.
     * @return string The string returned either has the time adjusted by the offset given, or (on error) the original text.
     */
	public function fixUTC($str,$TimeZoneOffset,$timeFormat) {
		$bits = explode(":-:",$str);
		for ($i=0;$i<count($bits);$i++) {
			if ($bits[$i] == "UTC") {
				$tds = explode(' ',$bits[$i + 1]); // Format is (2013-08-14 05:00:00)
				$tds_date = explode('-',$tds[0]);
				$tds_time = explode(':',$tds[1]);
				$fixTime = date($timeFormat,mktime($tds_time[0],$tds_time[1],$tds_time[2],$tds_date[1],$tds_date[2],$tds_date[0]) + $TimeZoneOffset);
				$bits[$i] = '';
				$bits[$i+1] = $fixTime;
				$output = implode($bits);
				return $output;
			}
		}
		return $str;
	}

	public function makeMainDiv($str) {
		return "<div id='content' class='content'>$str</div>";
	}
	
	public function buildOutput($pageName)
	{
		ob_start();
		require($pageName);
		$output = ob_get_contents();
		ob_end_clean();
		return $output;
	}
	
	public function getParameters($uri)
	{
		$uri = strtolower($uri);
		$request = str_replace("", "", $uri);
		$site_array = mb_split("/", $request);
		
		foreach ($site_array as $key => $value) {
			if ($value == "") {
				unset($site_array[$key]);
			}
		}
		return array_values($site_array);
	}
	
	public function stringToArray($string)
	{
		$string = str_replace("\n", "", $string);
		$output = explode(";", $string);
		for ($i = 0; $i < (count($output)); $i++) {
			$output[$i] = explode("=>", $output[$i]);
			if (array_key_exists(1, $output[$i])) {
				$output[$i][1] = rtrim($output[$i][1]);
			};
		}
		for ($i = 0; $i < (count($output) - 1); $i++) {
			if (array_key_exists(1, $output[$i])) {
				$keys[$i] = trim($output[$i][0]);
				$values[$i] = $output[$i][1];
			}
		};
		
		$output = array_fill_keys($keys, "x");
		for ($i = 0; $i < count($output); $i++) {
			$output[$keys[$i]] = $values[$i];
		}
		return $output;
	}
	
}

?>