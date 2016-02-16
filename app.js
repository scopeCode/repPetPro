var express       =     require('express');
var session       =     require('express-session');
var dustjs        =     require('adaro');
var path          =     require('path');
var cookieParser  =     require('cookie-parser');
var bodyParser    =     require('body-parser');
var compression   =     require('compression');
var app           =     express();
var cfg           =     require('./config');
var routes        =     require("./routes");
require("./models/models");


app.engine("html",dustjs.dust());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compression());
app.use(session({
  secret                  :   cfg.session_secret,
  resave                  :   true,
  saveUninitialized      :   false,
  cookie                  :   {
           maxAge  :   cfg.session_time
  }
}));

var log4js = require('log4js');
log4js.configure({
  appenders: [
    { type: 'console' }, //控制台输出
    /*{
     type: 'file', //文件输出
     filename: 'logs/access.log',
     maxLogSize: 1024,
     backups:3,
     category: 'normal'
     }*/
  ]
});
var logger = log4js.getLogger('normal');
app.use(log4js.connectLogger(logger,{level:log4js.levels.DEBUG, format:':method :url'}));

routes(app);
module.exports = app;