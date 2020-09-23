'use strict';

const bootstrap = require('./lib/infrastructure/config/bootstrap');
const createServer = require('./lib/infrastructure/webserver/server');

const start = async () => {

  try {
    // TODO: Enable sequelize
    /* await bootstrap.init(); */

    const server = await createServer();
    server.listen(process.env.PORT || 3000);

    console.log('Server running at:', process.env.PORT || 3000);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();