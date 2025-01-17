const config = require("config");
const { createServer } = require('http');

const { app } = require('./app');

const port = config.get('SERVER.PORT');
app.set('port', port);

const server = createServer(app);

const onError = (error) => {
  if(error.syscall !== 'listen')
    throw error;

  const bind = typeof port === 'string'
    ? 'Pipe ' + port 
    : 'Port ' + port;

  switch(error.code){
    case 'EACCES': 
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
    default: 
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr.port}`;
  console.info(`Listening on ${bind}`);
}

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);





