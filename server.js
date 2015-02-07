
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes/index')
  , user = require('./routes/user')
  , list = require('./routes/list')
  , item = require('./routes/item')
  , profile = require('./routes/profile')
  , register = require('./routes/register')
  , login = require('./routes/login')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('secret'));
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/list', list.index);
app.get('/item', item.index);
app.get('/profile', profile.index);
app.get('/users', user.list);
app.get('/register', register.index);
app.get('/confirm', register.confirm);
app.get('/login', login.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
