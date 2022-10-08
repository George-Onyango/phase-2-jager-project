const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middlewares = defaults({
  static: "./build",
});
const ports = process.env.ports || 3000;

server.use(middlewares);
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);
server.use(router);

server.listen(ports);
