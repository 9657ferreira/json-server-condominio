const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const cors = require('cors');

// Configuração CORS → para aceitar tudo
server.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middlewares do json-server
server.use(middlewares);

// Rotas do json-server
server.use(router);

// Iniciar o server
const port = process.env.PORT || 10000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
