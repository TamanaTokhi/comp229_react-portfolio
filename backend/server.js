
require('dotenv').config();

let configDB = require('./config/db');
let app = require('./config/express');
var http = require('http');
var debug = require('debug')('comp229:server');

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

async function startServer() {
  try {
    await configDB();

    var server = http.createServer(app);

    server.listen(port);
    server.on('error', onError);
    server.on('listening', onListening);

    function onListening() {
      var addr = server.address();
      var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;

      console.log('==== The app is running on http://localhost:' + port);
      debug('Listening on ' + bind);
    }
  } catch (err) {
    console.error('Failed to start the server:', err.message);
    process.exit(1);
  }
}

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;

    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;

    default:
      throw error;
  }
}

startServer();
