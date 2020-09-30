const serverApi = require('./configs/server');
const serverConfig = require('./configs/config');

const server = serverApi();

server.start(serverConfig);
