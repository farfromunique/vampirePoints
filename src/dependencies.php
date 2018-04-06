<?php
// DIC configuration

$container = $app->getContainer();

// view renderer
$container['renderer'] = function ($c) {
    $settings = $c->get('settings')['renderer'];
    return new Slim\Views\PhpRenderer($settings['template_path']);
};

// monolog
$container['logger'] = function ($c) {
    $settings = $c->get('settings')['logger'];
    $logger = new Monolog\Logger($settings['name']);
    $logger->pushProcessor(new Monolog\Processor\UidProcessor());
    $logger->pushHandler(new Monolog\Handler\StreamHandler($settings['path'], $settings['level']));
    return $logger;
};

// Custom 404
$container['notFoundHandler'] = function ($container) {
    return function ($request, $response) use ($container) {
		$container->logger->error("404 - " . $container['request']->getRequestTarget());
		return $container['response']
            ->withStatus(404)
            ->withHeader('Content-Type', 'text/html')
			->write('Page not found.<br />' . "\n" . 'Path requested: ' . $container['request']->getRequestTarget());
			
    };
};