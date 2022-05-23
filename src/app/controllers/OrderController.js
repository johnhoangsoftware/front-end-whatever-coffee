const axios = require('axios');
class OrderController {
    index(req, res, next) {
        
        axios({
            method: 'get',
            url: 'https://whatever-coffee.herokuapp.com/api/products'
        }).then(response => {
            var products = response.data;
            res.render('orderPage', {
                products
            });
        }).catch(function (error) {
            console.log(error);
        })
        
    }
   
    purchase(req, res, next) {
        var success = "True";
        var arr = req.body.orListTotal.split('|');
        var totalPrice = arr[1];
        var orderList = JSON.parse(arr[0]);
        var customer = {
            NameCus: req.body.customerName,
            PhoneCus: req.body.customerPhone,
            balance: "0"
        }
        var customerId = 10;
        var storeId = String(Math.floor(Math.random() *6) +1);
        var orderNumber = 8;
        
        //post customer
        axios('https://whatever-coffee.herokuapp.com/api/customer', {
            method: 'POST',
            data: { 
                name: customer.NameCus,
                phone: customer.PhoneCus,
                balance: "0"
            }
        }).then(response => {
            console.log(response.data);
            customerId = response.data.id;
        }).catch(function (error) {
            success = "false";
            console.log(error);
        })

        //post order
        var orderElement = {
            date:"2022-05-23",
            total_price: totalPrice,
            customerId: customerId,
            storeId: storeId
        };

        axios('https://whatever-coffee.herokuapp.com/api/orders',{
            method: 'post', 
            data: {
                date: orderElement.date,
                total_price: totalPrice,
                customerId: customerId,
                storeId: storeId
            }
        }).then(response => {
            console.log(response.data);
            orderNumber = response.data.id;
            
        }).catch(function (error) {
            console.log(error);
            success = "false"
        }) 

        //post order details

        for ( var i = 0; i < orderList.length; i++) {
            var orderDetails = {
                unit_price: String(orderList[i].Value),
                quantity: String([i].Quantity),
                orderId: orderNumber,
                productId: orderList[i].Id,
            };
            console.log(orderDetails);
            axios('https://whatever-coffee.herokuapp.com/api/orderdetails', {
                method: 'post', 
                data: {
                    unit_price: orderDetails.unit_price,
                    quantity: orderDetails.quantity,
                    orderId: orderNumber,
                    productId: orderDetails.productId,
                }
            }).then(function(response) {
                console.log(response.data);
                //res.send(response.data);
            }).catch(function(error) {
                console.log(error);
                success = "false"
            })
        }

        //res.send(success);
        //this.orderBuy(orderList, customer, totalPrice);
        res.redirect('back');
    }

    orderBuy(orderList, customer, totalPrice) {
         var customerId = postCustomer(customer);
         
         var orderElement = {
            total_price: totalPrice,
            customerId: customerId,
            storeId: storeId
        };
        console.log(customerId);

    //      var orderNumber = postOrder(orderElement);
    
    //     for ( var i = 0; i < orderList.length; i++) {
    //          var orderDetails = {
    //             unit_price: orderList[i].Value,
    //             quantity: orderList[i].Quantity,
    //             orderId: orderNumber,
    //             productId: orderList[i].Id,
    //             storeId: storeId
    //         };
    //         postOrderDetails(orderDetails);
    //     }
    // }
    
    // postOrder(orderElement) {
    
    //     axios({
    //         method: 'post',
    //         url: 'https://whatever-coffee.herokuapp.com/api/orders',
    //         data: orderElement
    //     }).then(response => {
    //         console.log(response.data);
    //         return response.data.id;
    //     }).catch(function (error) {
    //         console.log(error);
    //         return -1;
    //     })
    }
    
    
    postOrderDetails(orderDetails) {
        axios({
            method: 'post',
            url: 'https://whatever-coffee.herokuapp.com/api/orderdetails',
            data: orderDetails
        }).then(function(response) {
            console.log(response.data);
        }).catch(function(error) {
            console.log(error);
        })
    }
    
    postCustomer(customer) {
        var customerId = 2;
        axios('https://whatever-coffee.herokuapp.com/api/customer', {
            method: 'POST',
            data: { 
                name: customer.NameCus,
                phone: customer.PhoneCus,
                balance: "0"
            }
        }).then(response => {
            console.log(response.data);
            customerId = response.data.id;
        }).catch(function (error) {
            console.log(error);
            customerId = -1;
        })
        return customerId;
    }

    
}

module.exports = new OrderController;