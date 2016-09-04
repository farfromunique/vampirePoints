<?php
	// DB Name short-cicuit for Dev/Stage/Prod
	if ($_SERVER['SERVER_NAME'] == 'vampire.acwpd.com' 
	 || $_SERVER['SERVER_NAME'] == 'vampirepoints.nfshost.com') { // put your PRODUCTION server name(s) here
		define('VAMPIRE_ENVIRONMENT', 'Production');
		define('VAMPIRE_DB_HOST', 'sdgae.db');				// use the servername from your production environment
	} else {
		define('VAMPIRE_ENVIRONMENT', 'Development');
		define('VAMPIRE_DB_HOST', 'localhost');				// user the servername from your development / staging environment
	}
	
	define('VAMPIRE_DB_NAME', 'vampires');
	define('VAMPIRE_DB_USER', 'prince');
	define('VAMPIRE_DB_PASS', 'letmebeyourruler');
	