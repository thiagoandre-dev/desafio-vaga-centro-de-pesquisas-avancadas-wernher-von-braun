<?php
require __DIR__ . '/../vendor/autoload.php';

use Slim\Factory\AppFactory;
use App\Middleware\AuthMiddleware;
use App\Controllers\DeviceController;

$app = AppFactory::create();

// Middleware de autenticação
$app->add(new AuthMiddleware());

// Rotas
$app->get('/devices', DeviceController::class . ':getDevices');
$app->get('/device/{id}', DeviceController::class . ':getDevice');
$app->post('/device', DeviceController::class . ':createDevice');
$app->put('/device/{id}', DeviceController::class . ':updateDevice');
$app->delete('/device/{id}', DeviceController::class . ':deleteDevice');

$app->run();
