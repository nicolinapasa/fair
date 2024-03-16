document.querySelector('#name').addEventListener('input', function () {
    if (this.value == '' || this.value == null) {
        console.log('Empty or null value');
        localStorage.removeItem('name');
    } else {
        localStorage.setItem('name', this.value);
    }   
});

let name_inp = document.getElementById("name");
let name = localStorage.getItem('name');
name_inp.value = name;

document.querySelector('#email').addEventListener('input', function () {
    if (this.value == '' || this.value == null) {
        console.log('Empty or null value');
        localStorage.removeItem('email');
    } else {
        localStorage.setItem('email', this.value);
    }   
});

let email_inp = document.getElementById("email");
let email = localStorage.getItem('email');
email_inp.value = email;

document.querySelector('#address').addEventListener('input', function () {
    if (this.value == '' || this.value == null) {
        console.log('Empty or null value');
        localStorage.removeItem('address');
    } else {
        localStorage.setItem('address', this.value);
    }   
});

let address_inp = document.getElementById("address");
let address = localStorage.getItem('address');
address_inp.value = address;

document.querySelector('#city').addEventListener('input', function () {
    if (this.value == '' || this.value == null) {
        console.log('Empty or null value');
        localStorage.removeItem('city');
    } else {
        localStorage.setItem('city', this.value);
    }   
});

let city_inp = document.getElementById("city");
let city = localStorage.getItem('city');
city_inp.value = city;

document.querySelector('#state').addEventListener('input', function () {
    if (this.value == '' || this.value == null) {
        console.log('Empty or null value');
        localStorage.removeItem('state');
    } else {
        localStorage.setItem('state', this.value);
    }   
});

let state_inp = document.getElementById("state");
let state = localStorage.getItem('state');
state_inp.value = state;

document.querySelector('#zip').addEventListener('input', function () {
    if (this.value == '' || this.value == null) {
        console.log('Empty or null value');
        localStorage.removeItem('zip');
    } else {
        localStorage.setItem('zip', this.value);
    }   
});

let zip_inp = document.getElementById("zip");
let zip = localStorage.getItem('zip');
zip_inp.value = zip;

document.querySelector('#name_on_card').addEventListener('input', function () {
    if (this.value == '' || this.value == null) {
        console.log('Empty or null value');
        localStorage.removeItem('name_on_card');
    } else {
        localStorage.setItem('name_on_card', this.value);
    }   
});

let name_on_card_inp = document.getElementById("name_on_card");
let name_on_card = localStorage.getItem('name_on_card');
name_on_card_inp.value = name_on_card;

document.querySelector('#card_number').addEventListener('input', function () {
    if (this.value == '' || this.value == null) {
        console.log('Empty or null value');
        localStorage.removeItem('card_number');
    } else {
        localStorage.setItem('card_number', this.value);
    }   
});

let card_number_inp = document.getElementById("card_number");
let card_number = localStorage.getItem('card_number');
card_number_inp.value = card_number;

document.querySelector('#exp_month').addEventListener('input', function () {
    if (this.value == '' || this.value == null) {
        console.log('Empty or null value');
        localStorage.removeItem('exp_month');
    } else {
        localStorage.setItem('exp_month', this.value);
    }   
});

let exp_month_inp = document.getElementById("exp_month");
let exp_month = localStorage.getItem('exp_month');
exp_month_inp.value = exp_month;

document.querySelector('#exp_year').addEventListener('input', function () {
    if (this.value == '' || this.value == null) {
        console.log('Empty or null value');
        localStorage.removeItem('exp_year');
    } else {
        localStorage.setItem('exp_year', this.value);
    }   
});

let exp_year_inp = document.getElementById("exp_year");
let exp_year = localStorage.getItem('exp_year');
exp_year_inp.value = exp_year;

document.querySelector('#cvv').addEventListener('input', function () {
    if (this.value == '' || this.value == null) {
        console.log('Empty or null value');
        localStorage.removeItem('cvv');
    } else {
        localStorage.setItem('cvv', this.value);
    }   
});

document.querySelector('#ch').addEventListener('change', function () {
    if(this.checked == false){
        localStorage.setItem("checked", "false");
    }
    else{
        localStorage.setItem("checked", "true");
    }
});

let cvv_inp = document.getElementById("cvv");
let cvv = localStorage.getItem('cvv');
cvv_inp.value = cvv;


let check = localStorage.getItem("checked");
if(check == "true"){
    document.getElementById("ch").checked = true;
}
else{
    document.getElementById("ch").checked = false;
}

let ok = localStorage.getItem('ok');
if(ok == 0){
    let products_container = document.querySelector('.product');
    let product = JSON.parse(localStorage.getItem('personalize'));
    let div = document.createElement('div');
    products_container.appendChild(div);
    div.classList.add("cart-product-box");
    let name = document.createElement('p');
    let text = document.createElement('div');
    let price = document.createElement('p');
    div.appendChild(text);
    text.appendChild(name);
    text.appendChild(price);
    text.classList.add('fav-text');
    name.classList.add('fav-prod-name');
    price.classList.add('cart-price');
    name.innerHTML = "FAIR " + product.metal + " " + product.shape + " " + product.stone + " " + product.type;
    price.innerHTML = '59.99' + "$";
}
else{
    let cart = JSON.parse(localStorage.getItem('cart'));
    let bought = cart;
    cart = [];
    localStorage.setItem('bought', JSON.stringify(bought));
    localStorage.setItem('cart', JSON.stringify(cart));
}

function verification(){
    let b = 0;
    if(localStorage.getItem('name') == null){
        name_inp.style.border = "1px solid red";
        name_inp.style.color = "red";
        b = 1;
    }
    else{
        let name = localStorage.getItem("name");
        if(/\d/.test(name) == true){
            name_inp.style.border = "1px solid red";
            name_inp.style.color = "red";
            b = 1;
        }
        else{
            name_inp.style.border = "1px solid black";
            name_inp.style.color = "black";
        }
    }

    if(localStorage.getItem('email') == null){
        name_inp.style.border = "1px solid red";
        name_inp.style.color = "red";
        b = 1;
    }
    else{
        let email = localStorage.getItem("email");
        if(email.includes("@") == false){
            email_inp.style.border = "1px solid red";
            email_inp.style.color = "red";
            b = 1;
        }
        else{
            let i = email.indexOf("@");
            if(email[i + 1] == null){
                email_inp.style.border = "1px solid red";
                email_inp.style.color = "red";
                b = 1;
            }
            else{
                if(email.includes(".") == false){
                    email_inp.style.border = "1px solid red";
                    email_inp.style.color = "red";
                    b = 1;
                }
                else{
                    let i1 = email.indexOf(".");
                    if(email[i1 + 1] == null){
                        email_inp.style.border = "1px solid red";
                        email_inp.style.color = "red";
                        b = 1;
                    }
                    else{
                        email_inp.style.border = "1px solid black";
                        email_inp.style.color = "black";
                    }
                }
            }
        }
    }


    if(localStorage.getItem('address') == null){
        address_inp.style.border = "1px solid red";
        address_inp.style.color = "red";
        b = 1;
    }
    else{
        address_inp.style.border = "1px solid black";
        address_inp.style.color = "black";
    }


    if(localStorage.getItem('city') == null){
        city_inp.style.border = "1px solid red";
        city_inp.style.color = "red";
        b = 1;
    }
    else{
        let city = localStorage.getItem("city");
        if(/\d/.test(city) == true){
            city_inp.style.border = "1px solid red";
            city_inp.style.color = "red";
            b = 1;
        }
        else{
            city_inp.style.border = "1px solid black";
            city_inp.style.color = "black";
        }
    }

    if(localStorage.getItem('state') == null){
        state_inp.style.border = "1px solid red";
        state_inp.style.color = "red";
        b = 1;
    }
    else{
        let state = localStorage.getItem("state");
        if(/\d/.test(state) == true){
            state_inp.style.border = "1px solid red";
            state_inp.style.color = "red";
            b = 1;
        }
        else{
            state_inp.style.border = "1px solid black";
            state_inp.style.color = "black";
        }
    }

    if(localStorage.getItem('zip') == null){
        zip_inp.style.border = "1px solid red";
        zip_inp.style.color = "red";
        b = 1;
    }
    else{
        let zip = localStorage.getItem("zip");
        if(isNaN(zip) == true){
            zip_inp.style.border = "1px solid red";
            zip_inp.style.color = "red";
            b = 1;
        }
        else{
            if(zip.length != 5){
                zip_inp.style.border = "1px solid red";
                zip_inp.style.color = "red";
                b = 1;
            }
            else{
                zip_inp.style.border = "1px solid black";
                zip_inp.style.color = "black";
            } 
        }
    }

    if(localStorage.getItem('name_on_card') == null){
        name_on_card_inp.style.border = "1px solid red";
        name_on_card_inp.style.color = "red";
        b = 1;
    }
    else{
        let name_on_card = localStorage.getItem("name_on_card");
        if(/\d/.test(name_on_card) == true){
            name_on_card_inp.style.border = "1px solid red";
            name_on_card_inp.style.color = "red";
            b = 1;
        }
        else{
            if(name_on_card.includes(" ") == false){
                name_on_card_inp.style.border = "1px solid red";
                name_on_card_inp.style.color = "red";
                b = 1;
            }
            else{
                name_on_card_inp.style.border = "1px solid black";
                name_on_card_inp.style.color = "black";
            }
        }
    }


    let pattern = /[a-zA-Z]/;

    if(localStorage.getItem('card_number') == null){
        card_number_inp.style.border = "1px solid red";
        card_number_inp.style.color = "red";
        b = 1;
    }
    else{
        let card_number = localStorage.getItem("card_number");
        if(pattern.test(card_number) == true){
            card_number_inp.style.border = "1px solid red";
            card_number_inp.style.color = "red";
            b = 1;
        }
        else{
            if(card_number.includes("-") == false){
                card_number_inp.style.border = "1px solid red";
                card_number_inp.style.color = "red";
                b = 1;
            }
            else{

                if(card_number.length != 19){
                    card_number_inp.style.border = "1px solid red";
                    card_number_inp.style.color = "red";
                    b = 1;
                }
                else{
                    if(card_number[4] != "-" || card_number[9] != "-" || card_number[14] != "-"){
                        card_number_inp.style.border = "1px solid red";
                        card_number_inp.style.color = "red";
                        b = 1;
                    }
                    else{
                        card_number_inp.style.border = "1px solid black";
                        card_number_inp.style.color = "black";
                    }
                }              
            }  
        }
        if(card_number[0] == '4'){
            localStorage.setItem("tipul", "visa");
        }
        else{
            if(card_number[0] == '5'){
                localStorage.setItem("tipul", "mastercard");
            }
            else{
                if(card_number[0] == '1'){
                    localStorage.setItem("tipul", "aexpress");
                }
                else{
                    if(card_number[0] == '6'){
                        localStorage.setItem("tipul", "discover");
                    }

                    else{
                        if(card_number[0] == '2' || card_number[0] == '3' || card_number[0] == '7' || card_number[0] == '8' || card_number[0] == '9'){
                            localStorage.setItem("tipul", "altul");
                        }
                    }
                
                }
            }
        }
    }

    let tip = localStorage.getItem("tipul");
    let visa = document.getElementById("visa");
    let mastercard = document.getElementById("mastercard");
    let aexpress = document.getElementById("aexpress");
    let discover = document.getElementById("discover");
    if(tip == "visa"){
        mastercard.style.opacity = ".2";
        aexpress.style.opacity = ".2";
        discover.style.opacity = ".2";
        visa.style.opacity = "1";
    }

    if(tip == "mastercard"){
        visa.style.opacity = ".2";
        aexpress.style.opacity = ".2";
        discover.style.opacity = ".2";
        mastercard.style.opacity = "1";
    }

    if(tip == "aexpress"){
        mastercard.style.opacity = ".2";
        visa.style.opacity = ".2";
        discover.style.opacity = ".2";
        aexpress.style.opacity = "1";
    }

    if(tip == "discover"){
        mastercard.style.opacity = ".2";
        aexpress.style.opacity = ".2";
        visa.style.opacity = ".2";
        discover.style.opacity = "1";
    }

    if(tip == "altul"){
        mastercard.style.opacity = ".2";
        aexpress.style.opacity = ".2";
        visa.style.opacity = ".2";
        discover.style.opacity = ".2";
    }


    
    if(localStorage.getItem('exp_month') == null){
        exp_month_inp.style.border = "1px solid red";
        exp_month_inp.style.color = "red";
        b = 1;
    }
    else{
        let arr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let exp_month = localStorage.getItem("exp_month");
        if(/\d/.test(exp_month) == true){
            exp_month_inp.style.border = "1px solid red";
            exp_month_inp.style.color = "red";
            b = 1;
        }
        else{
            if(arr.includes(exp_month) == false){
                exp_month_inp.style.border = "1px solid red";
                exp_month_inp.style.color = "red";
                b = 1;
            }
            else{
                exp_month_inp.style.border = "1px solid black";
                exp_month_inp.style.color = "black";
            }
        }
    }

    if(localStorage.getItem('exp_year') == null){
        exp_year_inp.style.border = "1px solid red";
        exp_year_inp.style.color = "red";
        b = 1;
    }
    else{
        let exp_year = localStorage.getItem("exp_year");
        if(isNaN(exp_year) == true){
            exp_year_inp.style.border = "1px solid red";
            exp_year_inp.style.color = "red";
            b = 1;
        }
        else{
            if(exp_year < new Date().getFullYear()){
                exp_year_inp.style.border = "1px solid red";
                exp_year_inp.style.color = "red";
                b = 1;
            }
            else{
                if(exp_year.length != 4){
                    exp_year_inp.style.border = "1px solid red";
                    exp_year_inp.style.color = "red";
                    b = 1;
                }
                else{
                    exp_year_inp.style.border = "1px solid black";
                    exp_year_inp.style.color = "black";
                }
            }
        }
    }


    if(localStorage.getItem('cvv') == null){
        cvv_inp.style.border = "1px solid red";
        cvv_inp.style.color = "red";
        b = 1;
    }
    else{
        let cvv = localStorage.getItem("cvv");
        if(isNaN(cvv) == true){
            cvv_inp.style.border = "1px solid red";
            cvv_inp.style.color = "red";
            b = 1;
        }
        else{
            if(cvv.length != 3){
                cvv_inp.style.border = "1px solid red";
                cvv_inp.style.color = "red";
                b = 1;
            }
            else{
                cvv_inp.style.border = "1px solid black";
                cvv_inp.style.color = "black";
            } 
        }
    }


    if(b == 0){
        localStorage.setItem('b', '0');
    }
    else{
        localStorage.setItem('b', '1');
    }
}