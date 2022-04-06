const orderRoutes = require('./order')

function routes(app) {

    app.use('/orderPage', orderRoutes)

    app.get('/introduction', (req, res) => { res.render('introduction') })

    app.get('/terms', (req, res) => { res.render('terms') })

    app.get('/policy', (req, res) => { res.render('policy') })

    app.get('/stores', (req, res) => { res.render('stores') });

    app.get('/discount', (req, res) => { res.render('discount') });

    app.get('/', (req, res) => { res.render('Home') });

}

module.exports = routes;