'use strict';

const express = require('express');
const http = require('http');
const app = express();

const createServer = async () => {
  let server = http.createServer(app);
  return server;
};

module.exports = createServer;