<?php
namespace App\Services;

use GuzzleHttp\Client;

class DeviceService {
    protected $client;

    public function __construct() {
        $this->client = new Client([
            'base_uri' => 'https://api.ciotd.com/',
            'auth' => ['username', 'password'] // Use as credenciais corretas
        ]);
    }

    public function getDevices() {
        $response = $this->client->get('/device');
        return json_decode($response->getBody(), true);
    }

    public function getDevice($id) {
        $response = $this->client->get("/device/{$id}");
        return json_decode($response->getBody(), true);
    }

    public function createDevice($data) {
        $this->client->post('/device', [
            'json' => $data
        ]);
    }

    public function updateDevice($id, $data) {
        $this->client->put("/device/{$id}", [
            'json' => $data
        ]);
    }

    public function deleteDevice($id) {
        $this->client->delete("/device/{$id}");
    }
}
