const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();
//const localStorage = require('localStorage');
class HomeController {
    index(req, res, next) {
        res.render('Home');

    }

    authenToken(req, res, next) {
        const authorizationHeader = req.headers['authorization'];
        const token = authorizationHeader.split(' ')[1];
    }


    login(req, res, next) {
        axios.post('https://whatever-coffee-shop.herokuapp.com/api/auth/login', {
                username: req.body.username,
                password: req.body.password
            })
            .then(function(response) {
                console.log(response.data);
                var token = response.data;
                //var token = LocalStorage.setItem('token', response.data.access_token);
                //LocalStorage.setItem('token', response.data.access_token);
                res.send(token);
                // res.json(LocalStorage.getItem('token'));
                //console.log(token);
                //res.render('home');
                // console.log(res.data);
                // console.log(req.headers)
            })
            .catch(function(error) {
                console.log(error);
            });
    }
}

module.exports = new HomeController;

// authenticate(login, password)
//     .then(function(authentication) {
//         window.sessionStorage.setItem('token', authentication.token);
//     })
//     .then(getAccounts)
//     .then(function(accounts) {
//         // display the accounts page
//         // ...
//     })
//     .catch(function(error) {
//         // display error message in the login form
//         // ...
//     });