const express = require('express');
const app = express();

app.use(require('./persona'));

module.exports = app;