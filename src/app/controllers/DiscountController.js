const axios = require('axios');
class DiscountController {
    index(req, res, next) {
        axios({
            method: 'get',
            url: 'https://whatever-coffee.herokuapp.com/api/products'
        }).then(response => {
            console.log(response.data);
            var products = response.data;
            res.render('discount', {
                products
            });
        }).catch(err => {
            console.log(err.data)
        })
    }
}

module.exports = new DiscountController;