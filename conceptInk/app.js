
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var clienthome = require('./routes/clienthome');
var newsfeed = require('./routes/newsfeed');
var article = require('./routes/article');
var makerequest = require('./routes/makerequest');
var yourrequests = require('./routes/yourrequests');
var artistroster = require('./routes/artistroster');
var artist = require('./routes/artist');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/clienthome', clienthome.viewProject);
app.get('/newsfeed', newsfeed.viewFeed);
app.get('/article', article.viewArticle);
app.get('/makerequest', makerequest.makeRequest);
app.get('/yourrequests', yourrequests.viewRequest);
app.get('/artistroster', artistroster.viewArtists);
app.get('/artist', artist.viewArtist);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
