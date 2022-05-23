const axios = require('axios');

class StoreController {
    index(req, res, next) {
        axios({
            method: 'get',
            url: 'https://whatever-coffee.herokuapp.com/api/stores'
            
        }).then(response => {
            //console.log(response.data);
            
            var stores = response.data;

            res.render('stores',{
                stores
            });


        }).catch(err => {
            console.log(err.data)
        })
    }
}

module.exports = new StoreController;
