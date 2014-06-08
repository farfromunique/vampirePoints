<?php

	class Parser {
		public function getParameters($uri) {
			$uri = strtolower($uri);
			$request  = str_replace("", "", $uri);
			$site_array  = mb_split("/", $request);

			foreach($site_array as $key => $value) {
				if($value == "") {
					unset($site_array[$key]);
				}
			}
			return array_values($site_array);
		}
	
		public function buildOutput($pageName, $other='') {
			ob_start();
			if ($other != '') {
				require ($other);
			}
			require_once($pageName);
			$output = ob_get_contents();
			ob_end_clean();
			return $output;
		}
		
		public function stringToArray($string) {
			$string = str_replace("\n", "", $string);
			$output = explode(";",$string);
			for ($i = 0; $i<(count($output)); $i++) {
				$output[$i] = explode("=>",$output[$i]);
				if (array_key_exists(1,$output[$i])) {
					$output[$i][1] = rtrim($output[$i][1]);
				};
			}
			for ($i = 0; $i<(count($output)-1); $i++) {
				if (array_key_exists(1,$output[$i])) {
					$keys[$i] = trim($output[$i][0]);
					$values[$i] = $output[$i][1];
				}
			};
			
			$output = array_fill_keys($keys, "x");
			for ($i=0; $i<count($output); $i++) {
				$output[$keys[$i]] = $values[$i];
			}
			return $output;
		}
	}
?>