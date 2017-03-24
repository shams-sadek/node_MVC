
/**
 | -----------------------------------------------------------------------------
 | All Routes are calling here...
 | -----------------------------------------------------------------------------
 */
module.exports = function(app){

    app.use('/', require('./home'));

    app.use('/birds', require('./birds'));



}
