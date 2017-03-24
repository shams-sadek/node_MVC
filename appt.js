/**
 | ---------------------------------------------------------
 | express
 | ---------------------------------------------------------
 */
var express = require('express');
var app = express();





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
