    const cartt = document.getElementById('big-shopping-cart');
    const openButton = document.getElementById('cart-button');
    const closeButton = document.getElementById('cart-close-button');
    const overlay = document.getElementById('overlay');

    function openCart() {
        cartt.style.right = '0';
        overlay.style.display = 'block';
        document.body.style.overflowY = 'hidden';
        cartt.style.overflowY = 'auto';
    }

    function closeCart() {
        cartt.style.right = '-40vw';
        overlay.style.display = 'none';
        document.body.style.overflowY = 'auto';
    }

    openButton.addEventListener('click', openCart);
    closeButton.addEventListener('click', closeCart);
    overlay.addEventListener('click', closeCart);

    const favv = document.getElementById('favourites');
    const openfavv = document.getElementById('fav-button');
    const closefavv = document.getElementById('fav-close-button');

    function openfav() {
        favv.style.right = '0';
        overlay.style.display = 'block';
        document.body.style.overflowY = 'hidden';
        favv.style.overflowY = 'auto';
    }

    function closefav() {
        favv.style.right = '-40vw';
        overlay.style.display = 'none';
        document.body.style.overflowY = 'auto';
    }

    openfavv.addEventListener('click', openfav);
    closefavv.addEventListener('click', closefav);
    overlay.addEventListener('click', closefav);

    let cart = [];
    let tprice = 0;
    localStorage.setItem('tprice', tprice);
    let favs = [];
    // localStorage.setItem('favs', JSON.stringify(favs));
    // localStorage.setItem('cart', JSON.stringify(cart));


    let cart_prod = JSON.parse(localStorage.getItem('cart')) || [];
    let products_container = document.getElementById('shopping-cart');
    for(let i = 0; i < cart_prod.length; i++){
        if(i == 0){
            products_container.replaceChildren();
        }
        let div = document.createElement('div');
        products_container.appendChild(div);
        div.classList.add("cart-product-box");
        let image_box = document.createElement('div');
        image_box.classList.add('cart-image-box');
        let name = document.createElement('p');
        let text = document.createElement('div');
        let price = document.createElement('p');
        div.appendChild(image_box);
        div.appendChild(text);
        text.appendChild(name);
        text.appendChild(price);
        text.classList.add('cart-text');
        name.classList.add('cart-prod-name');
        price.classList.add('cart-price');
        name.innerHTML = "FAIR " + cart_prod[i].metal + " " + cart_prod[i].shape + " " + cart_prod[i].stone + " " + cart_prod[i].type;
        price.innerHTML = cart_prod[i].price + "$";
        image_box.style.backgroundImage = 'url('+cart_prod[i].img+')';

        const remove = document.createElement('button');
        remove.id = 'remove';
        remove.innerHTML = '+';
        div.appendChild(remove);
        remove.addEventListener('click', function(){
            cart_prod.splice(i, 1);
            localStorage.setItem('cart', JSON.stringify(cart_prod));
            location.reload();
        });

        let tprice =  parseFloat(localStorage.getItem('tprice'));
        tprice += parseFloat(cart_prod[i].price);
        localStorage.setItem('tprice', tprice);
    }

    let total = document.createElement('p');
    products_container.appendChild(total);
    let tt = localStorage.getItem('tprice', tprice);
    total.innerHTML = 'Total: ' + parseFloat(tt).toFixed(2) + '$';
    total.classList.add('total-price');
    let checkout = document.createElement('button');
    checkout.classList.add('btn');
    checkout.innerHTML = 'CHECKOUT'
    products_container.appendChild(checkout);
    checkout.addEventListener('click', function(){
        localStorage.setItem('ok', '1');
        location.href = 'checkout-en.html';
    });

    let fav_prod = JSON.parse(localStorage.getItem('favs')) || [];
    let favs_container = document.getElementById('fav');
    for(let i = 0; i < fav_prod.length; i++){
        if(i == 0){
            favs_container.replaceChildren();
        }
        let div = document.createElement('div');
        favs_container.appendChild(div);
        div.classList.add("cart-product-box");
        let image_box = document.createElement('div');
        image_box.classList.add('cart-image-box');
        let name = document.createElement('p');
        let text = document.createElement('div');
        let price = document.createElement('p');
        div.appendChild(image_box);
        div.appendChild(text);
        text.appendChild(name);
        text.appendChild(price);
        text.classList.add('fav-text');
        name.classList.add('fav-prod-name');
        price.classList.add('cart-price');
        name.innerHTML = "FAIR " + fav_prod[i].metal + " " + fav_prod[i].shape + " " + fav_prod[i].stone + " " + fav_prod[i].type;
        price.innerHTML = fav_prod[i].price + "$";
        image_box.style.backgroundImage = 'url('+fav_prod[i].img+')';

        const remove = document.createElement('button');
        remove.id = 'remove';
        remove.innerHTML = '+';
        div.appendChild(remove);
        remove.addEventListener('click', function(){
            fav_prod.splice(i, 1);
            localStorage.setItem('favs', JSON.stringify(fav_prod));
            location.reload();
        });

        const add_cart = document.createElement('button');
        add_cart.classList.add('btn');
        add_cart.classList.add('da-btn');
        add_cart.innerHTML = 'ADD TO CART';
        text.appendChild(add_cart);
        add_cart.onclick = function aaa(){
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            let pr = fav_prod[i];
            cart.push(pr);
            localStorage.setItem('cart', JSON.stringify(cart));
            fav_prod.splice(i, 1);
            localStorage.setItem('favs', JSON.stringify(fav_prod));
            location.reload();
        }
    }

    let logout = document.querySelector('.log-sgnup');
    let l = localStorage.getItem('login');
    if(l == 'true'){
        logout.replaceChildren();
        logout.innerHTML = '<button id="log_out">LOG OUT</button>';
        document.getElementById('log_out').addEventListener('click', function(){
            localStorage.setItem('login', 'false');
            location.reload();
        });
    }

    






