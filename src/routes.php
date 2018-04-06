<?php

use Slim\Http\Request;
use Slim\Http\Response;

// Routes

$app->any('/', function (Request $request, Response $response, $args) {
    // Sample log message
	$this->logger->info("Slim-Skeleton '/' route");

    // Render index view
    return $this->renderer->render($response, 'index.phtml', ['thing' => 'that']);
});

$app->any('/static/sheet', function (Request $request, Response $response, array $args) {
    // Sample log message
	$this->logger->info("BS4 Sheet page");

    // Render index view
    return $this->renderer->render($response, 'sheet.phtml', $args);
});

$app->any('/static/home', function (Request $request, Response $response, array $args) {
    // Sample log message
	$this->logger->info("BS4 Homepage");

    // Render index view
	return $this->renderer->render($response, 'home.phtml', $args);
});
