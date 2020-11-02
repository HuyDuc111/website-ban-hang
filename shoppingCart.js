let renderTotalPrice="";
let renderProductBox="";
let totalPrice=0;
let cartName =[]
let numberOfProducts =[]
let productPrice=[]
let productImg=[]
let cart = JSON.parse(localStorage.getItem("cart"));
let a=[];
if(cart===null){
    document.getElementsByClassName("body")[0]="Giỏ Hàng Trống";
}else{
    a = cart.sort();
    for (let i = 0; i<cart.length; i++){
        if(cart[i] !==cart[i-1]){
            cartName.push(cart[i]);
        }
    }
    for (let i = 0; i <cartName.length; i++){
        let b = a.lastIndexOf(cartName[i]) - a.indexOf(cartName[i]) + 1;
        numberOfProducts.push(b);
    }
    for (let i = 0; i <cartName.length; i++){
        let result = items.find(item => item.name === cartName[i]);
        productPrice.push(result.price);
    }
    for (let i = 0; i <cartName.length; i++){
        let result = items.find(item => item.name === cartName[i]);
        productImg.push(result.image);
    }
    for (let i = 0; i <cartName.length; i++){
        totalPrice += numberOfProducts[i]*productPrice[i];
    }
}


function renderCartItem(cartName, numberOfProducts, productPrice, productImg){
    for (let i = 0; i <cartName.length; i++){
    renderProductBox+=`<div class="product-box">
    <img src="${productImg[i]}" alt="">
    <div class="product-name">
        <div class="name">${cartName[i]}</div>
        <div class="price">
            <div class="modified-product">
                <input type="number" value="${numberOfProducts[i]}" min="1" max="5">
            </div>
            <div class="price-product">x ${productPrice[i]}đ</div>
        </div>
    </div>
    <div class="total-product-price">${productPrice[i]*numberOfProducts[i]}đ</div>
    <div class="clear" onclick="clearItem(${i},${numberOfProducts[i]},${productPrice[i]})">x</div>
</div>`
    }
    renderTotalPrice=`<div class="total-price">
    <div class="price-title">TỔNG SỐ TIỀN:</div>
    <div class="sum-price"> ${totalPrice}Đ</div>
    </div>`
    document.getElementsByClassName("body")[0].innerHTML=`
    <div class="title">
    <div class="name">My Cart</div>
    <div class="continue-shopping">Continue Shopping</div>
    </div>
    ${renderProductBox}
    ${renderTotalPrice}
    <div class="order" onclick="order()">Đặt Hàng</div>`;
}

renderCartItem(cartName, numberOfProducts, productPrice, productImg);
function clearItem(i,numberOfProducts,productPrice){
    document.getElementsByClassName("product-box")[i].innerHTML="";
    totalPrice -=  numberOfProducts*productPrice;
    document.getElementsByClassName("sum-price")[0].innerHTML = totalPrice+'đ';
}
function order(){
    if(cart===null){
        alert("Chưa có hàng trong giỏ")
        window.location.href="./display.html";
    }
    else{
        alert("Đặt hàng thành công")
        localStorage.removeItem("cart");
        window.location.href="./index.html";
    }
}
//number of items on cart
if(localStorage.getItem("cart") === null){
    document.getElementById("number").innerHTML="";
}else{
    document.getElementById("number").innerHTML=JSON.parse(localStorage.getItem("cart")).length;
}
//search button
document.getElementById("search-button").addEventListener('click', searchPhone)
function searchPhone(){
    let searchDom = document.getElementById("input");
    let search = searchDom.value.trim();
    localStorage.setItem("searchPhone",search);
    window.location.href="./display.html";
}

// navbar button
document.getElementsByClassName("home")[0].addEventListener("click", function(){
    window.location.href="./index.html";
})
document.getElementsByClassName("category")[0].addEventListener("click", function(){
    window.location.href="./display.html";
})
document.getElementsByClassName("cart")[0].addEventListener("click", function(){
    window.location.href="./shoppingCart.html";
})
document.getElementsByClassName("login")[0].addEventListener("click", function(){
    window.location.href="./login.html";
})
