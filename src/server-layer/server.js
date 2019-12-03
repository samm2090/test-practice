const app = require('./app');
const logger = require('winston');
const http = require('http');

const port = process.env.PORT | '83';
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
server.on('listening', onListening);

function onListening() {
    const addr = server.address();
    const actualPort = addr.port;
    logger.verbose(`Server is listening on port ${actualPort}`, { scope: 'loaders', subscope: 'server' });
}
