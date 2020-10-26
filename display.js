var urlImg ='';
var renderImg ='';
var renderName ='';
var renderPrice ='';
var renderButtonAddToCart ='';
var renderButtonDetails ='';
var renderProductBox ='';
var returnInfo ='';
function displayItems(item){
    document.getElementsByClassName('display')[0].innerHTML='';
    for(let i = 0; i < item.length; i++){
        renderName = `<div class='product-name' onclick="viewDetail('${item[i].name}')">${item[i].name}</div>`;
        urlImg = item[i].image;
        renderImg =`<img src='${urlImg}' class="img" onclick="viewDetail('${item[i].name}')">`
        renderPrice = `<div class="product-price">${item[i].price} Đ</div>`;
        renderButtonAddToCart='<div><button >Add To Cart</button></div>';
        renderButtonDetails =`<div><button onclick="viewDetail('${item[i].name}')">Details</button></div>`;
        renderProductBox = '<div class="product-box">'+renderName + renderImg + renderPrice + renderButtonAddToCart + renderButtonDetails +'</div>';
        document.getElementsByClassName('display')[0].innerHTML += renderProductBox;
    }
}
displayItems(items);
function displayBrand(item, brand) {
    displayItems(item);   
    document.getElementById('SamSung').style.backgroundColor = '#333'; 
    document.getElementById('IPhone').style.backgroundColor = '#333'; 
    document.getElementById('OPPO').style.backgroundColor = '#333'; 
    document.getElementById(brand).style.backgroundColor = '#111';   
}
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
function returnItemsByClickBrand(brand){
    let searchPhone = document.getElementById(brand).innerHTML;
    let result = items.filter(function(v){
        return v.brand.toLowerCase().includes(searchPhone.toLowerCase());
    })
    return result;
}
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
function viewDetail(name){
    localStorage.setItem('selected', name);
    window.location.href = 'demoButton.html';
}
// create an shoppingCart obj, have 2 function create a new item and store it n times
// when click the add to cart button check if the shoppingCart obj isn't exists create a new one
// every time the addToCart button is clicked check if the item is already in the shoppingCart then stored times will +=1
// if the item is not in the shoppingCart then add new item to the shoppingCart with value = 1
// save the shoppingCart obj to localStorage every times the button is clicked 
function addToCart(name){

}
document.getElementById("SamSung").addEventListener("click", displaySamSung);
function displaySamSung(){
    let result = returnItemsByClickBrand("SamSung")
    displayBrand(result,"SamSung");
}
document.getElementById("IPhone").addEventListener("click", displayIPhone);
function displayIPhone(){
    let result = returnItemsByClickBrand("IPhone")
    displayBrand(result,"IPhone");
}
document.getElementById("OPPO").addEventListener("click", displayOPPO);
function displayOPPO(){
    let result = returnItemsByClickBrand("OPPO")
    displayBrand(result,"OPPO");
}
document.getElementById("2tr").addEventListener("click", display2tr);
function display2tr(){
    let result = returnItemsByClickOrder(items,0,2000000);
    displayBrandByOrder(result,"2tr");
}
document.getElementById("4tr").addEventListener("click", display4tr);
function display4tr(){
    let result = returnItemsByClickOrder(items,2000000,4000000);
    displayBrandByOrder(result,"4tr");
}
document.getElementById("7tr").addEventListener("click", display7tr);
function display7tr(){
    let result = returnItemsByClickOrder(items,4000000,7000000);
    displayBrandByOrder(result,"7tr");
}
document.getElementById("13tr").addEventListener("click", display13tr);
function display13tr(){
    let result = returnItemsByClickOrder(items,7000000,13000000);
    displayBrandByOrder(result,"13tr");
}
document.getElementById("more").addEventListener("click", displayMore);
function displayMore(){
    let result = returnItemsByClickOrder(items,13000000,999000000);
    displayBrandByOrder(result,"more");
}
document.getElementById("ascending-order").addEventListener("click", displayAscendingOrder);
function displayAscendingOrder() {
    items.sort(function(a, b) {return a.price - b.price});
    displayItemsByWhatOrder(items);
}
document.getElementById("descending-order").addEventListener("click", displayDescendingOrder);
function displayDescendingOrder() {
    items.sort(function(a, b) {return b.price - a.price});
    displayItemsByWhatOrder(items);
}
//search button
document.getElementById("search-button").addEventListener('click', searchPhone)
function searchPhone(){
    let searchDom = document.getElementById("input");
    let search = searchDom.value;
    document.getElementById("input").value="";
    let result = items.filter(function(v){
        return v.name.toLowerCase().includes(search.toLowerCase());
    })
    displayItems(result);
}