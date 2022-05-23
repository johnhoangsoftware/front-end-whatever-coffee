const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();
//const localStorage = require('localStorage');
class HomeController {


    index(req, res, next) {
        var state = null;
        res.render('Home', {
            state
        });

    }

    authenToken(req, res, next) {
        const authorizationHeader = req.headers['authorization'];
        const token = authorizationHeader.split(' ')[1];
    }


    login(req, res, next) {
        axios.post('https://whatever-coffee.herokuapp.com/api/auth/login', {
                /*
                username: "hanzo",
                password: "15112002"
                */
               
                
                username: req.body.username,
                password: req.body.password
                
            })
            .then(() => {
                var state = 1;
                res.render('home', {
                    state
                });
            })
            .catch(function(error) {
                res.redirect('/#login');
                console.log(error);
            });
    }

    //[POST] /register 
    register(req, res, next) {
       axios('https://whatever-coffee.herokuapp.com/api/auth/register', {
           method: 'POST',
              data: {
                username: req.body.username,
                password: req.body.password,
                dob: req.body.dob,
                phone: req.body.phone,
                role: 'admin'
              }
        }).then (response => {
            console.log(response.data);
                res.redirect('/#login');
        }).catch(function (error) {
            console.log(error);
            res.redirect('/#create');
        })
    }
}

module.exports = new HomeController;
