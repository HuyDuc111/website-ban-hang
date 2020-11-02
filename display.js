var urlImg ='';
var renderImg ='';
var renderName ='';
var renderPrice ='';
var renderButtonAddToCart ='';
var renderButtonDetails ='';
var renderProductBox ='';
var returnInfo ='';
var cartInfo=[];
var renderSearches ;

// display a list of items
function displayItems(item){
    document.getElementsByClassName('display')[0].innerHTML='';
    for(let i = 0; i < item.length; i++){
        renderName = `<div class='product-name' onclick="viewDetail('${item[i].name}')">${item[i].name}</div>`;
        urlImg = item[i].image;
        renderImg =`<img src='${urlImg}' class="img" onclick="viewDetail('${item[i].name}')">`
        renderPrice = `<div class="product-price">${item[i].price} Đ</div>`;
        renderButtonAddToCart=`<div class="button-add-too-cart" onclick="addToCart('${item[i].name}')">Add To Cart</div>`;
        renderButtonDetails =`<div class="button-details" onclick="viewDetail('${item[i].name}')">Details</div>`;
        renderProductBox = '<div class="product-box">'+renderName + renderImg + renderPrice + renderButtonAddToCart + renderButtonDetails +'</div>';
        document.getElementsByClassName('display')[0].innerHTML += renderProductBox;
    }
}
//display from search of other pages
if(localStorage.getItem("searchPhone")!== null) {
    renderSearches = localStorage.getItem("searchPhone");
    localStorage.removeItem("searchPhone");
    let result = items.filter(function(v){
        return v.name.toLowerCase().includes(renderSearches.toLowerCase());
    })
    if(result.length > 0)
    {
        displayItems(result);
    }
    else{
        document.getElementsByClassName('display')[0].innerHTML="";
        returnInfo = "<div> Không có kết quả nào phù hợp</div>";
        document.getElementsByClassName('display')[0].innerHTML += returnInfo;
    } 
}else{
    displayItems(items);
}
// display items with the same brand
function displayBrand(item, brand) {
    displayItems(item);   
}
// display items by order min to max
function displayBrandByOrder(item, order) {
    if(item.length === 0){
        returnInfo = "<div> Không có kết quả nào phù hợp</div>"
        document.getElementsByClassName('display')[0].innerHTML = returnInfo;
    }else{
    displayItems(item);
    }
    document.getElementById('2tr').style.backgroundColor = '#ffffff';    
    document.getElementById('4tr').style.backgroundColor = '#ffffff';
    document.getElementById('7tr').style.backgroundColor = '#ffffff';
    document.getElementById('13tr').style.backgroundColor = '#ffffff';
    document.getElementById('more').style.backgroundColor = '#ffffff';
    document.getElementById(order).style.backgroundColor = '#f1f1f1';
}
// return an array of items with the same brand
function returnItemsByClickBrand(brand){
    let searchPhone = brand;
    let result = items.filter(function(v){
        return v.brand.toLowerCase().includes(searchPhone.toLowerCase());
    })
    return result;
}
// return items from min to max price
function returnItemsByClickOrder(item,min,max){
    let result = item.filter(function(v){
        return min<v.price && v.price<=max;
    })
    return result;
}
function displayItemsByWhatOrder(item){
    displayItems(item);
    document.getElementById('2tr').style.backgroundColor = '#ffffff';    
    document.getElementById('4tr').style.backgroundColor = '#ffffff';
    document.getElementById('7tr').style.backgroundColor = '#ffffff';
    document.getElementById('13tr').style.backgroundColor = '#ffffff';
    document.getElementById('more').style.backgroundColor = '#ffffff';
}
//view detail function
function viewDetail(name){
    localStorage.setItem('selected', name);
    window.location.href = 'details.html';
}
//number of items on cart
if(localStorage.getItem("cart") === null){
    document.getElementById("number").innerHTML="";
}else{
    document.getElementById("number").innerHTML=JSON.parse(localStorage.getItem("cart")).length;
}
// create an shoppingCart obj, have 2 function create a new item and store it n times
// when click the add to cart button check if the shoppingCart obj isn't exists create a new one
// every time the addToCart button is clicked check if the item is already in the shoppingCart then stored times will +=1
// if the item is not in the shoppingCart then add new item to the shoppingCart with value = 1
// save the shoppingCart obj to localStorage every times the button is clicked 
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
//search by brand SamSung
document.getElementById("SamSung").addEventListener("click", displaySamSung);
function displaySamSung(){
    let result = returnItemsByClickBrand("SamSung")
    displayBrand(result,"SamSung");
}
//search by brand IPhone
document.getElementById("IPhone").addEventListener("click", displayIPhone);
function displayIPhone(){
    let result = returnItemsByClickBrand("IPhone")
    displayBrand(result,"IPhone");
}
// search by brand OPPO
document.getElementById("OPPO").addEventListener("click", displayOPPO);
function displayOPPO(){
    let result = returnItemsByClickBrand("OPPO")
    displayBrand(result,"OPPO");
}
// search by brand ViVo
document.getElementById("ViVo").addEventListener("click", displayViVo);
function displayViVo(){
    let result = returnItemsByClickBrand("ViVo")
    displayBrand(result,"ViVo");
}
// search by brand Vsmart
document.getElementById("Vsmart").addEventListener("click", displayVsmart);
function displayVsmart(){
    let result = returnItemsByClickBrand("Vsmart")
    displayBrand(result,"Vsmart");
}
//less than 2tr
document.getElementById("2tr").addEventListener("click", display2tr);
function display2tr(){
    let result = returnItemsByClickOrder(items,0,2000000);
    displayBrandByOrder(result,"2tr");
}
//2tr to 4tr
document.getElementById("4tr").addEventListener("click", display4tr);
function display4tr(){
    let result = returnItemsByClickOrder(items,2000000,4000000);
    displayBrandByOrder(result,"4tr");
}
//4tr to 7tr
document.getElementById("7tr").addEventListener("click", display7tr);
function display7tr(){
    let result = returnItemsByClickOrder(items,4000000,7000000);
    displayBrandByOrder(result,"7tr");
}
// 7tr to 13tr
document.getElementById("13tr").addEventListener("click", display13tr);
function display13tr(){
    let result = returnItemsByClickOrder(items,7000000,13000000);
    displayBrandByOrder(result,"13tr");
}
// more then 13tr items
document.getElementById("more").addEventListener("click", displayMore);
function displayMore(){
    let result = returnItemsByClickOrder(items,13000000,999000000);
    displayBrandByOrder(result,"more");
}
// ascending-order
document.getElementById("ascending-order").addEventListener("click", displayAscendingOrder);
function displayAscendingOrder() {
    items.sort(function(a, b) {return a.price - b.price});
    displayItemsByWhatOrder(items);
}
// descending-order
document.getElementById("descending-order").addEventListener("click", displayDescendingOrder);
function displayDescendingOrder() {
    items.sort(function(a, b) {return b.price - a.price});
    displayItemsByWhatOrder(items);
}
//search button
document.getElementById("search-button").addEventListener('click', searchPhone)
function searchPhone(){
    let searchDom = document.getElementById("input");
    let search = searchDom.value.trim();
    document.getElementById("input").value="";
     if(search === "") return -1;
    let result = items.filter(function(v){
        return v.name.toLowerCase().includes(search.toLowerCase());
    })
    if(result.length > 0)
     {displayItems(result)}
    else{
        document.getElementsByClassName('display')[0].innerHTML="";
        returnInfo = "<div> Không có kết quả nào phù hợp</div>";
        document.getElementsByClassName('display')[0].innerHTML += returnInfo;
}
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
