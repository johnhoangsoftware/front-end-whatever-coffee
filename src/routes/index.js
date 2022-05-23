const orderRoutes = require('./order')
const storesController = require('../app/controllers/StoreController');
const homeRoutes = require('./home');
const discountRoutes = require('./discount');

function routes(app) {

    app.use('/orderPage', orderRoutes)

    app.get('/introduction', (req, res) => { res.render('introduction') })

    app.get('/terms', (req, res) => { res.render('terms') })

    app.get('/policy', (req, res) => { res.render('policy') })

    app.get('/stores', storesController.index);

    app.use('/discount', discountRoutes);

    app.use('/', homeRoutes);

}

module.exports = routes;