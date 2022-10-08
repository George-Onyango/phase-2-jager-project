import data from './db.json';

import { create, router as _router, defaults } from 'json-server';
const server = create()
const router = _router(data)
const middlewares = defaults()
const ports = process.env.PORT || 3000;


server.use(middlewares)
server.use(router)

server.listen(ports)