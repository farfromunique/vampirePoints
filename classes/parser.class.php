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
	
	
	}
?>