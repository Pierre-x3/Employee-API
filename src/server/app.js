const express = require('express');
const morgan = require('morgan');

const { HandlerError } = require('../common/response.common.js');

const API = require('../router');

const app = express();

app.use(morgan('common'));

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

API(app);

app.use((error, req, res, next) => {
  if(error) new HandlerError(res, error).exec();
});

require('../database/SQLite/default.data.js');

module.exports = { app };