/*The json-server module runs the backend of the API. Go to https://github.com/typicode/json-server for more information on the methods and routes available*/
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);
