const path = require('path');
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, colorize, errors } = format;

const logFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} ${level}: ${stack || message}`;
});

const aplicationLogPath = path.join(__dirname, '../../log/aplication.log');
const aplicationLogExcPath = path.join(__dirname, '../../log/aplication_excep.log');
const aplicationLogRecPath = path.join(__dirname, '../../log/aplication_rejec.log');

const logger = createLogger({
  level: 'info',
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    errors({ stack: true }), 
    colorize(),
    logFormat
  ),
  transports: [
    new transports.File({ filename: aplicationLogPath, level: 'info' }),
  ],
  exceptionHandlers: [
    new transports.File({ filename: aplicationLogExcPath })
  ],
  rejectionHandlers: [
    new transports.File({ filename: aplicationLogRecPath })
  ]
});

module.exports = { logger };