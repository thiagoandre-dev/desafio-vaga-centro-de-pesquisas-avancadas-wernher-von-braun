<?php
namespace App\Middleware;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Psr7\Response as SlimResponse;

class AuthMiddleware {
    public function __invoke(Request $request, Response $response, $next) {
        $auth = $request->getHeaderLine('Authorization');

        if (empty($auth) || !$this->checkCredentials($auth)) {
            $response = new SlimResponse();
            return $response->withStatus(401);
        }

        return $next($request, $response);
    }

    private function checkCredentials($auth) {
        list($username, $password) = explode(':', base64_decode(substr($auth, 6)));
        // Verifique as credenciais aqui
        return ($username === 'user' && $password === 'pass');
    }
}
