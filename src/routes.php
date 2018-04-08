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

$app->group('/a', function () { // AJAX paths
	$this->get('/listVamps/[{count}]', function (Request $request, Response $response, array $args) {
		$this->logger->info('Requested ' . $count . ' vampire cards');

		return $this->renderer->render($response, 'ajaxCard.phtml', $args);
	});
});

$app->group('/static', function() { // static resources
	$this->any('/static/sheet', function (Request $request, Response $response, array $args) {
		// Sample log message
		$this->logger->info("BS4 Sheet page");

		// Render index view
		return $this->renderer->render($response, 'sheet.phtml', $args);
	});

	$this->any('/static/home', function (Request $request, Response $response, array $args) {
		// Sample log message
		$this->logger->info("BS4 Homepage");

		// Render index view
		return $this->renderer->render($response, 'home.phtml', $args);
	});
});

$app->group('/vt', function() { // test routes; will be removed before production
	$this->get('/vt/new', function (Request $request, Response $response) {
		$vamp = new \ACWPD\Vampire\Vampire($this);
		$data = $vamp->createNew();
		die(var_dump($data));
		return $response
				->withStatus(200)
				->withHeader('Content-Type', 'text/html')
				->write('Created Vampire! ' . print_r($data));
	});

	$this->get('/vt/save', function (Request $request, Response $response) {
		$vamp = new \ACWPD\Vampire\Vampire($this);
		$data = $vamp->saveData(file_get_contents('../public/js/base.json'));
		return $response
				->withStatus(200)
				->withHeader('Content-Type', 'text/html')
				->write('Saved Vampire! ' . print_r($data));
	});

	$this->get('/vt/savetobase', function (Request $request, Response $response, array $args) {
		$vamp = new \ACWPD\Vampire\Vampire($this);
		var_dump($args);
		echo "\n\n";
		$data = $vamp->saveData(file_get_contents('../public/js/base.json'), 'base');
		return $response
				->withStatus(200)
				->withHeader('Content-Type', 'text/html')
				->write('Saved Vampire! ' . print_r($data));
	});
});