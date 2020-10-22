var urlImg ='';
var renderImg ='';
var renderName ='';
var renderPrice ='';
var renderButtonAddToCart ='';
var renderProductBox ='';
let selectedName = localStorage.getItem('selected');
let item = items.find(function (p) {
    return p.name === selectedName;
});
function displayItem(i){
    renderName = `<div class='product-name'>${i.name}</div>`;
    urlImg = i.image;
    renderImg =`<img src='${urlImg}' class="img")>`
    renderPrice = `<div class="product-price">${i.price} Đ</div>`;
    renderButtonAddToCart='<div><button >Add To Cart</button></div>';
    renderProductBox = '<div class="product-box">'+renderName + renderImg + renderPrice + renderButtonAddToCart+'</div>';
    document.getElementsByClassName('render')[0].innerHTML += renderProductBox;
}
displayItem(item);