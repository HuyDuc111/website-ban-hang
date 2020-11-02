let renderDt="";
let renderImg="";
let renderName="";
let renderPrice="";
let renderButton="";
var cartInfo=[];
let list1=[items[11],items[2],items[16],items[18]];
let list2=[items[8],items[7],items[3],items[6]];
function renderListPhones1(item) {
    // document.getElementsByClassName('listphone')[0].innerHTML="";
    for (let i = 0; i <item.length; i++){
        renderImg=`<img onclick="viewDetail('${item[i].name}')" src="${item[i].image}"></img>`;
        renderName=`<div class="name" onclick="viewDetail('${item[i].name}')">${item[i].name}</div>`;
        renderPrice=`<p class="price">${item[i].price}đ</p>`;
        renderButton=`<div class="cart2" onclick="addToCart('${item[i].name}')">Add to Cart</div>`;
        renderDt='<div class="dt">'+ renderImg+renderName+renderPrice+renderButton+'</div>';
        document.getElementsByClassName("listphone")[0].innerHTML+=renderDt;
    }
}
function renderListPhones2(item) {
    // document.getElementsByClassName('listphone')[0].innerHTML="";
    for (let i = 0; i <item.length; i++){
        renderImg=`<img onclick="viewDetail('${item[i].name}')" src="${item[i].image}"></img>`;
        renderName=`<div onclick="viewDetail('${item[i].name}')" class="name">${item[i].name}</div>`;
        renderPrice=`<p class="price">${item[i].price}đ</p>`;
        renderButton=`<div class="cart2" onclick="addToCart('${item[i].name}')">Add to Cart</div>`;
        renderDt='<div class="dt">'+ renderImg+renderName+renderPrice+renderButton+'</div>';
        document.getElementsByClassName("listphone")[1].innerHTML+=renderDt;
    }
}
//number of items on cart
if(localStorage.getItem("cart") === null){
    document.getElementById("number").innerHTML="";
}else{
    document.getElementById("number").innerHTML=JSON.parse(localStorage.getItem("cart")).length;
}
// click view details
function viewDetail(name){
    localStorage.setItem('selected', name);
    window.location.href = 'details.html';
}
// click add to cart
function addToCart(name){
    if(JSON.parse(localStorage.getItem("cart")) === null){
        document.getElementById("number").innerHTML="1";
        cartInfo.push(name);
        localStorage.setItem("cart", JSON.stringify(cartInfo));
    }else{
        document.getElementById("number").innerHTML=JSON.parse(localStorage.getItem("cart")).length+1;
        cartInfo = JSON.parse(localStorage.getItem("cart"));
        cartInfo.push(name);
        localStorage.setItem("cart", JSON.stringify(cartInfo)); 
    }
}
renderListPhones1(list1);
renderListPhones2(list2);
//search button
document.getElementById("search-button").addEventListener('click', searchPhone)
function searchPhone(){
    let searchDom = document.getElementById("input");
    let search = searchDom.value.trim();
    localStorage.setItem("searchPhone",search);
    window.location.href="./display.html"
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
