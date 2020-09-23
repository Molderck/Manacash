'use strict';

const constants = require('./constants');

module.exports = (() => {

  const environment = {
    database: {
      dialect: process.env.DATABASE_DIALECT || constants.SUPPORTED_DATABASE.POSTGRES,
      url: process.env.DATABASE_URI || '',
    }
  };

  return environment;
})();