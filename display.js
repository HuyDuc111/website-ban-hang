var urlImg ='';
var renderImg ='';
var renderName ='';
var renderPrice ='';
var renderButtonAddToCart ='';
var renderButtonDetails ='';
var renderProductBox ='';
renderName = `<div class='product-name'>${items[0].name}</div>`;
for(let i = 0; i < items.length; i++){
    renderName = `<div class='product-name'>${items[i].name}</div>`;
    urlImg = items[i].image;
    renderImg =`<img src='${urlImg}' class="img">`
    renderPrice = `<div class="product-price">${items[i].price} Đ</div>`;
    renderButtonAddToCart='<div><button>Add To Cart</button></div>';
    renderButtonDetails = '<div><button>Details</button></div>';
    renderProductBox = renderName + renderImg + renderPrice + renderButtonAddToCart + renderButtonDetails;
    document.getElementsByClassName('product-box')[0].innerHTML += renderProductBox;
}
