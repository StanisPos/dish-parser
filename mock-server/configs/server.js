const jsonServer = require('json-server');
const path = require('path');
const routes = require('../routes/index');

module.exports = () => {
  const server = jsonServer.create();
  const middlewares = jsonServer.defaults();
  const baseRoute = jsonServer.router(path.join(__dirname, '..', 'mock-json-db', 'db.json'));

  return {
    start: ({ hostname, port }) => {
      server.use(middlewares);
      server.use(jsonServer.bodyParser);

      server.use('/test', (req, res) => {
        res.send('Поприколу');
      });

      routes.init(server);

      server.use(baseRoute);
      server.listen(port, () => {
        console.log(`Server listening on - http://${hostname}:${port}`);
      });
    },
  };
};
