<?php
/* Instructions:
 * 	Copy this file to $_SERVER['SERVER_ROOT']/config.php 
 * 	Edit config.php to have the right values in the right places
 * 	Save early, save often!
 */ 
	
	// DB Name short-cicuit for Dev/Stage/Prod
	if ($_SERVER['SERVER_NAME'] == 'server1.domain.tld' 
	 || $_SERVER['SERVER_NAME'] == 'server1.domain.tld') { // put your PRODUCTION server name(s) here
		define('VAMPIRE_ENVIRONMENT', 'Production');
		
		define('VAMPIRE_DB_HOST', 'database');				// use the servername from your production environment
	} else {
		define('VAMPIRE_ENVIRONMENT', 'Development');
		define('VAMPIRE_DB_HOST', 'database');				// user the servername from your development / staging environment
	}
	
	define('VAMPIRE_DB_NAME', 'vampires');
	define('VAMPIRE_DB_USER', 'username');
	define('VAMPIRE_DP_PASS', 'password');
	
	