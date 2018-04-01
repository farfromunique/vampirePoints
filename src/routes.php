<?php

use Slim\Http\Request;
use Slim\Http\Response;

// Routes

$app->get('/', function ($request, $response, $args) {
	$this->logger->addInfo("Root");
	return $response->withStatus(200)->write('Hello World!');
});

$app->get('/[{name}]', function (Request $request, Response $response, array $args) {
    // Sample log message
    $this->logger->info("Slim-Skeleton '/' route");

    // Render index view
    return $this->renderer->render($response, 'index.phtml', $args);
});
