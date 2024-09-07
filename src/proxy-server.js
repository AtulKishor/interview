// proxy-server.js
const express = require('express');
const corsAnywhere = require('cors-anywhere');

const app = express();
const host = '0.0.0.0';
const port = 8080; // You can change the port if needed

// Set up CORS Anywhere to allow requests
corsAnywhere.createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2'],
}).listen(port, host, () => {
  console.log(`Running CORS Anywhere on ${host}:${port}`);
});
