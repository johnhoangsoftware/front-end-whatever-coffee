//import {axiosPost} from './axiosPost';
var addBtns = document.getElementsByClassName('addBtn');
var orderList = JSON.parse(sessionStorage.getItem("orderList")) || [];


/**
 * Init addBtns.
 */
for (let i = 0; i < addBtns.length; i++) {
    addBtns[i].onclick = function () {
        // Check duplication.
        let duplicate = false;
        let choiceName = addBtns[i].name.split(':')[1];
        let buttonId = addBtns[i].name.split(':')[0];
        for (let j = 0; j < orderList.length && duplicate == false; j++) {
            if (orderList[j].Name == choiceName) {
                orderList[j].Quantity++;
                orderList[j].Id = buttonId;
                duplicate = true;
            }
        }

        // Push new choice to orderList.
        if (duplicate == false) {
            let choice = {
                Id: buttonId,
                Name: choiceName,
                Value: addBtns[i].value,
                Quantity: 1
            }
            orderList.push(choice);
        }

        // Update sessionStorage.
        sessionStorage.setItem('orderList', JSON.stringify(orderList));
    }
}

/**
 * Render orderList on orderForm.
 */
document.getElementById('orders').onclick = function () {
    let total = 0;
    location.href = '#orderForm';
    document.getElementById('orderedProducts').innerHTML = "";

    for (let i = 0; i < orderList.length; i++) {
        let ul = document.createElement("ul");

        let li1 = document.createElement("li");
        let productName = orderList[i].Name;
        let t1 = document.createTextNode(("" + (i + 1) + ". ") + productName);
        li1.appendChild(t1);
        ul.appendChild(li1);

        let li2 = document.createElement("li");
        let Quantity = orderList[i].Quantity;
        let t2 = document.createTextNode(Quantity);
        li2.appendChild(t2);
        ul.appendChild(li2);

        let li3 = document.createElement("li");
        let price = Number(orderList[i].Value) * orderList[i].Quantity;
        let t3 = document.createTextNode(price);
        li3.appendChild(t3);
        ul.appendChild(li3);

        document.getElementById('orderedProducts').appendChild(ul);
        total += Number(price);
    }

    document.getElementById('total').innerHTML = total;
    document.getElementById('orderBtn').value = JSON.stringify(orderList)+"|"+total;
}

function clearOrderList() {
    total = 0;
    document.getElementById('total').innerHTML = total;
    document.getElementById('orderedProducts').innerHTML = "";
    sessionStorage.removeItem('orderList');
    orderList = JSON.parse(sessionStorage.getItem("orderList")) || [];
}

/**
 * Actions after cancelling order. 
 */
document.getElementById('cancelBtn').onclick = function () { clearOrderList(); }

/**
 * Actions after clicking orderBtn.
 */
document.getElementById('orderBtn').onclick = function () {
 clearOrderList();
}

// function onClickProfile() {
//     let state = sessionStorage.getItem('state');
//     if(state == 1) {
//         location.href = '#emProfile';
//     }else {
//         location.href = '#login';
//     } ; 
    
// }

document.getElementById('profile').onclick = function () {
    
    let state = sessionStorage.getItem('state');
    if(state == 1) {
        location.href = '#emProfile';
    }else{
        location.href = '#login';
    } ;  
}

document.getElementById('logoutBtn').onclick = function () {
    sessionStorage.setItem('state', 0);
    location.href = '/';
}

// document.getElementById('loginBtn').onclick = function () {
//     //sessionStorage.setItem('state', 1);
//     // location.href = '#loginSuccess';
    
// } 


