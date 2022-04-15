class OrderController {
    index(req, res, next) {
        Product.find({})
            .then(Products => { res.render('orderPage'), { product } })

    }
}

module.exports = new OrderController;