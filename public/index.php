<?php 

DEFINE('projectRoot',dirname(dirname(__FILE__)));

require_once projectRoot . '/vendor/autoload.php';
require_once projectRoot . '/config.php';

// instantiate the App object
$app = new \Slim\App($slimConfig);

$container = $app->getContainer();
$container['logger'] = function($c) {
    $logger = new \Monolog\Logger('VampireLog');
    $file_handler = new \Monolog\Handler\StreamHandler("logs/vampire.log");
    $logger->pushHandler($file_handler);
    return $logger;
};


// Add route callbacks
$app->get('/', function ($request, $response, $args) {
	$this->logger->addInfo("Root");
	return $response->withStatus(200)->write('Hello World!');
});



// Run application
$app->run();