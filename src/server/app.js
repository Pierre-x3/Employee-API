const express = require('express');
const morgan = require('morgan');

const { handerError } = require('../common/response.common.js');

const API = require('../router');
const { logger } = require('../common/winston.common.js');

const app = express();

app.use(morgan('common'));

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

API(app);

app.use((error, req, res, next) => {

  if(!error?.isOperation && process.env.NODE_ENV==PRODUCTION)
    logger.error(`An error occurred: ${error.message}`, { stack: error.stack })

  if(error) handerError(res, error);
});

require('../database/SQLite/default.data.js');

module.exports = { app };