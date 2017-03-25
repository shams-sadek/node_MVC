/**
 | ---------------------------------------------------------
 | express
 | ---------------------------------------------------------
 */
var express = require('express');
var app = express();

const bodyParser = require('body-parser');


app.use(bodyParser.json())


/**
 | -----------------------------------------------------------------------------
 | mongoose Database Connection String
 | -----------------------------------------------------------------------------
 */
global.mongoose = require('mongoose');

// mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/faiza');
mongoose.Promise = global.Promise;




/**
 | ---------------------------------------------------------
 | global variables
 | ---------------------------------------------------------
 */

global.globalUrl = 'http://localhost:3000';




/**
 | ---------------------------------------------------------
 | trigger all routes
 | ---------------------------------------------------------
 */
 var route = require('./routes/route');
 route(app);



/**
 | ---------------------------------------------------------
 | trigger all APIs
 | ---------------------------------------------------------
 */
 var api = require('./apis/api');
 api(app);




 /**
  | ----------------------------------------------------------------------------
  | error handling middleware
  | ----------------------------------------------------------------------------
  */
 app.use(function(err, req, res, next){
     console.log(err);
    res.status(422).send({ error: err });
 });




/**
 | ---------------------------------------------------------
 | express-handlebars (template engine)
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
 | ---------------------------------------------------------
 | Start Server
 | ---------------------------------------------------------
 */
app.listen('3000', function(){
    console.log('listening port 3000.');
})
