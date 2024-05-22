<?php
namespace App\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use App\Services\DeviceService;

class DeviceController {
    protected $deviceService;

    public function __construct() {
        $this->deviceService = new DeviceService();
    }

    public function getDevices(Request $request, Response $response, $args) {
        $devices = $this->deviceService->getDevices();
        $response->getBody()->write(json_encode($devices));
        return $response->withHeader('Content-Type', 'application/json');
    }

    public function getDevice(Request $request, Response $response, $args) {
        $id = $args['id'];
        $device = $this->deviceService->getDevice($id);
        $response->getBody()->write(json_encode($device));
        return $response->withHeader('Content-Type', 'application/json');
    }

    public function createDevice(Request $request, Response $response, $args) {
        $data = $request->getParsedBody();
        $this->deviceService->createDevice($data);
        return $response->withStatus(201);
    }

    public function updateDevice(Request $request, Response $response, $args) {
        $id = $args['id'];
        $data = $request->getParsedBody();
        $this->deviceService->updateDevice($id, $data);
        return $response->withStatus(200);
    }

    public function deleteDevice(Request $request, Response $response, $args) {
        $id = $args['id'];
        $this->deviceService->deleteDevice($id);
        return $response->withStatus(200);
    }
}
