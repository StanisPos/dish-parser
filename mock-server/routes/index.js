const apiRoute = require('./api/index');

module.exports = {
  init: server => {
    server.get('*', (req, res, next) => {
      console.log(`Request was made to: ${req.originalUrl}`);

      return next();
    });

    server.use('/api', apiRoute.recipes);
  },
};
