
var express = require('express');

var app = express();

// var homeController = require('./controllers/homeController');

var controllers = require('./controllers/controller');


global.dbConnectionString = 'mongodb://127.0.0.1:27017/faiza';



/**
 | -----------------------------------------------------------------------------
 | Set view engine (ejs & express)
 | -----------------------------------------------------------------------------
 */
// app.set('view engine', 'ejs');
//
// app.use('/assets', express.static('assets'));





/**
 | ---------------------------------------------------------
 | express-handlebars
 | ---------------------------------------------------------
 */
var exphbs  = require('express-handlebars');

app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main'
}));

app.set('view engine', 'hbs');

app.use('/assets', express.static('assets'));




/**
 | -----------------------------------------------------------------------------
 | fire all controllers
 | -----------------------------------------------------------------------------
 */
 controllers(app);
// homeController(app);





// example: it works every pages
app.locals.points = 8790;

/**
 | -----------------------------------------------------------------------------
 | server is running...
 | -----------------------------------------------------------------------------
 */
app.listen(3000);
console.log('you are listening port : 3000');