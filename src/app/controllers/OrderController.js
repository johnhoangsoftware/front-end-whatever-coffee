class OrderController {
    index(req, res) {
        res.render('orderPage');
    }
}

module.exports = new OrderController;