/**
 * Application root
 *
 * @module app
 **/

  'use strict';

var pkg = require('./package.json');

var koa = require('koa');
var serve = require('koa-static');
var router = require('koa-router');
var etag = require('koa-etag');
var body = require('koa-parse-json');

var nconf = require('nconf');
var mongoose = require('mongoose');

var path = require('path');

var Logger = require('./server/module/Logger');
var Socket = require('./server/module/Socket');
var app = koa();

var io;

var server;
var PORT;


if (process.env.NODE_ENV === 'production') {
  nconf.file(path.join(__dirname, 'config/prod.json'));
}
else if (process.env.NODE_ENV === 'test') {
  nconf.file(path.join(__dirname, 'config/test.json'));
}
else {
  nconf.file(path.join(__dirname, 'config/dev.json'));
}

mongoose.connect(nconf.get('mongo:connect'));

PORT = process.env.PORT || nconf.get('port');


/**
 * Configuring middlewares
 */

require('koa-qs')(app);
app.use(etag());
app.use(body());
app.use(router(app));

Logger.init();
app.use(serve(process.env.CLIENT_DIR || nconf.get('client')));


/**
 * Router
 */

{

  let brew = require('./server/route/brew');
  let log = require('./server/route/log');

  app.get('/api', function *(next) {
    yield next;
    this.body = { name: pkg.name, version: pkg.version };
  });

  app.post('/brew', brew.set);
  app.get('/brew/stop', brew.stop);
  app.get('/brew/pause', brew.pause);


// logs
  app.get('/api/logs/brews', log.findBrew);
  app.get('/api/logs', log.find);

}


/**
 * Fire up the server
 */

server = app.listen(PORT, function () {
  Logger.info('Server is listening on ' + PORT, 'app', {
    name: pkg.name,
    version: pkg.version
  });
});


/**
 * Configure socket.io
 */

io = require('socket.io').listen(server);
io.set('log level', 1);

Socket.init(io);