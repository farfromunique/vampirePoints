<?php
	
return [
	'settings' => [
        'displayErrorDetails' => true, // set to false in production
        'addContentLengthHeader' => false, // Allow the web server to send the content-length header

        // Renderer settings
        'renderer' => [
            'template_path' => __DIR__ . '/../templates/',
        ],

        // Monolog settings
        'logger' => [
            'name' => 'slim-app',
            'path' => isset($_ENV['docker']) ? 'php://stdout' : __DIR__ . '/../logs/app.log',
            'level' => \Monolog\Logger::DEBUG,
		],
		
		// Environment
		'environment' => [
			// TODO: get this from environment variables
			'production' => false,
			'development' => true
		],

		// Database
		'database' => [
			// TODO: get this from environment variables
			'DSN_type' => '',
			'DSN_path' => '',
			'DSN_name' => '',
			'DSN_user' => '',
			'DSN_pass' => '',
			'DSN_full' => '' // use this to provide a custom DSN that PDO can accept. This overrides all other database[] variables!
		],
		'firebase' => [
			/* Note: Firebase connection types are not DSNs! */
			// TODO: get this from environment variables
			'Firebase_JSON_Key' => '/path/to/key.json'
		]
    ],
];