import data from './db.json';

import { create, router as _router, defaults, rewriter } from 'json-server';
const server = create()
const router = _router(data)
const middlewares = defaults({
    static:'./build'
})
const ports = process.env.ports || 3000;


server.use(middlewares)
server.use(jsonServer.rewriter({
    '/api/*':'/$1'
}))
server.use(router)

server.listen(ports)