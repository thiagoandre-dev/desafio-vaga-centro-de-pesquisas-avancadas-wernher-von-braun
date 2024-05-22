# Plataforma de Monitoramento de Dispositivos IoT

## Descrição

Esta aplicação web permite o monitoramento de dispositivos IoT em tempo real. Os usuários podem autenticar-se na aplicação, selecionar dispositivos para monitorar, configurar comandos e visualizar as métricas em um dashboard.

## Tecnologias Utilizadas

- **Backend:** PHP com Slim Framework
- **Frontend:** React
- **Autenticação:** Basic Auth
- **Requisições HTTP:** Guzzle (PHP) e Axios (React)

## Estrutura do Projeto

- **Backend:**
  - `public/index.php`: Entrada principal da aplicação PHP
  - `src/Controllers/DeviceController.php`: Controlador para operações de dispositivos
  - `src/Middleware/AuthMiddleware.php`: Middleware para autenticação
  - `src/Services/DeviceService.php`: Serviço para interagir com a API externa

- **Frontend:**
  - `src/components`: Componentes React (Login, DeviceList, DeviceDetails, Dashboard)
  - `src/services/api.js`: Configuração do Axios para interagir com o backend

## Sugestões de Melhorias

- Implementar autenticação JWT para maior segurança.
- Adicionar validações no backend para os dados de entrada.
- Melhorar a interface do usuário utilizando um framework CSS como Bootstrap ou Material-UI.
- Implementar testes automatizados para garantir a qualidade do código.

## Executando o Projeto

Iniciar o servidor backend:
```bash
php -S localhost:8000 -t public
```

Iniciar o servidor frontend:
```bash
npm start
```

## Contato

Caso tenha alguma dúvida ou sugestão, por favor, entre em contato.

- [contato@thiagoandre.dev](mailto:contato@thiagoandre.dev)
