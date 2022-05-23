

function order(orderList, customer, totalPrice) {
    let customerId = postCustomer(customer);;
    let storeId = Math.floor(Math.random() *6) +1;
    let orderElement = {
        total_price: totalPrice,
        customerId: customerId,
        storeId: storeId
    };
    let orderNumber = postOrder(orderElement);

    for (let i = 0; i < orderList.length; i++) {
        let orderDetails = {
            unit_price: orderList[i].Value,
            quantity: orderList[i].Quantity,
            orderId: orderNumber,
            productId: orderList[i].Id,
            storeId: storeId
        };
        postOrderDetails(orderDetails);
    }
}

 function postOrder(orderElement) {

    await axios({
        method: 'post',
        url: 'https://whatever-coffee.herokuapp.com/api/orders',
        data: orderElement
    }).then(response => {
        console.log(response.data);
        return response.data.id;
    }).catch(function (error) {
        console.log(error);
        return -1;
    })
}


 function postOrderDetails(orderDetails) {
    await axios({
        method: 'post',
        url: 'https://whatever-coffee.herokuapp.com/api/orderdetails',
        data: orderDetails
    }).then(function(response) {
        console.log(response.data);
    }).catch(function(error) {
        console.log(error);
    })
}

 function postCustomer(customer) {
    await axios({
        method: 'post',
        url: 'https://whatever-coffee.herokuapp.com/api/customer',
        data: {
            balance: 0,
            phone: customer.phone,
            name: customer.name

        }
    }).then(response => {
        console.log(response.data);
        return response.data.id;
    }).catch(function (error) {
        console.log(error);
        return -1;
    })
}