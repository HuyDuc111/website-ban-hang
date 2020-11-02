let renderName="";
let renderInfo="";
let renderImg="";
let renderPromo="";
let renderPrice="";
let renderPromoList="";
let renderPromoInfo="";
let renderServiceList="";
let renderProductInfoList="";
let renderMonitor="";
let renderOS="";
let renderBackCamera="";
let renderFrontCamera="";
let renderCPU="";
let renderRAM="";
let renderStorageCard="";
let renderSIMCard="";
let renderBattery="";
let renderButton="";
let renderBody="";
let cartInfo=[];
let selectedName = localStorage.getItem('selected');
let item = items.find(function (p) {
    return p.name === selectedName;
});
function displayItem(item){
    renderName=`<div class="phoneName">${item.name}</div>`;
    renderImg=`<img src="${item.image}" alt="">`;
    renderPrice=`<div class="price">${item.price}</div>`;
    for (let i = 0; i <item.moreInfo.length; i++) {
        renderPromoInfo+=`<div class="promo-info">${item.moreInfo[i]}</div>`;
    }
    renderPromoList =`
    <div class="promo-list">
    <div class="promo-info" id="title">
        <div id="title-promo">Khuyến Mại</div>
        <div id="promo-time">Giá và khuyến mãi dự kiến áp dụng đến 30/11</div>
    </div>
    ${renderPromoInfo}
    </div>
    `;
    renderServiceList='<div class="service-list"><div class="service">Chọn thêm các dịch vụ miễn phí chỉ có ở TGDĐ:</div><input type="checkbox" id="checkbox1"><label for="checkbox1"class="service">Giao ngay từ cửa hàng gần bạn nhất</label><br><input type="checkbox" id="checkbox2"><label for="checkbox2"class="service">Chuyển danh bạ, dữ liệu qua máy mới</label><br><input type="checkbox" id="checkbox3"><label for="checkbox3"class="service">Mang nhiều màu để bạn lựa chọn</label><br><input type="checkbox" id="checkbox4"><label for="checkbox4"class="service">Mang thêm điện thoại khác để bạn xem</label><br></div>';
    renderMonitor=`<div class="product-info">Màn hình:${item.info.Monitor}</div>`;
    renderOS=`<div class="product-info">Hệ điều hành:	     ${item.info.OS}</div>`;
    renderBackCamera=`<div class="product-info">Camera sau:	     ${item.info.BackCamera}</div>`;
    renderFrontCamera=`<div class="product-info">Camera trước:	     ${item.info.FrontCamera}</div>`;
    renderCPU=`<div class="product-info">CPU:	     ${item.info.CPU}</div>`;
    renderRAM=`<div class="product-info">RAM:	     ${item.info.RAM}</div>`;
    renderStorageCard=`<div class="product-info">Bộ nhớ trong:	     ${item.info.StoreCard}</div>`;
    renderSimCard=`<div class="product-info">Thẻ SIM:       ${item.info.SIMCard}</div>`;
    renderBattery=`<div class="product-info">Dung lượng pin:	     ${item.info.Battery}</div>`;
    renderProductInfoList='<div class="product-info-list"><div class="product-info" id="title-info">Thông số kỹ thuật</div>'+renderMonitor+renderOS+renderBackCamera+renderFrontCamera+renderCPU+renderRAM+renderStorageCard+renderSimCard+renderBattery+'</div>';
    renderButton=`<div class="add-to-cart-button" onclick="addToCart('${item.name}')"><div class="name">Add To Cart</div><div class="options">Giao hàng tận nơi hoặc mua tại siêu thị</div></div>`;
    renderPromo='<div class="promo">'+renderPrice+ renderPromoList+renderServiceList+'</div>';
    renderInfo='<div class="info">'+renderImg+ renderPromo+renderProductInfoList +'</div>';
    renderBody= renderName+ renderInfo+ renderButton;
    document.getElementsByClassName("body")[0].innerHTML=renderBody;
}
displayItem(item);
//number of items on cart
if(localStorage.getItem("cart") === null){
    document.getElementById("number").innerHTML="";
}else{
    document.getElementById("number").innerHTML=JSON.parse(localStorage.getItem("cart")).length;
}
// add to cart button
function addToCart(a){
    if(JSON.parse(localStorage.getItem("cart")) === null){
        document.getElementById("number").innerHTML="1";
        cartInfo.push(a);
        localStorage.setItem("cart", JSON.stringify(cartInfo));
    }else{
        document.getElementById("number").innerHTML=JSON.parse(localStorage.getItem("cart")).length+1;
        cartInfo = JSON.parse(localStorage.getItem("cart"));
        cartInfo.push(a);
        localStorage.setItem("cart", JSON.stringify(cartInfo)); 
    }
}
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
