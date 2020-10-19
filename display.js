var urlImg ='';
var renderImg ='';
var renderName ='';
var renderPrice ='';
var renderButtonAddToCart ='';
var renderButtonDetails ='';
var renderProductBox ='';
var returnInfo ='';
for(let i = 0; i < items.length; i++){
    renderName = `<div class='product-name'>${items[i].name}</div>`;
    urlImg = items[i].image;
    renderImg =`<img src='${urlImg}' class="img">`
    renderPrice = `<div class="product-price">${items[i].price} Đ</div>`;
    renderButtonAddToCart='<div><button>Add To Cart</button></div>';
    renderButtonDetails = '<div><button>Details</button></div>';
    renderProductBox = '<div class="product-box">'+renderName + renderImg + renderPrice + renderButtonAddToCart + renderButtonDetails +'</div>';
    document.getElementsByClassName('display')[0].innerHTML += renderProductBox;
}
document.getElementById("SamSung").addEventListener("click", displaySamSung);
function displaySamSung(){
    let searchPhone = document.getElementById('SamSung').innerHTML;
    let result = items.filter(function(v){
        return v.brand.toLowerCase().includes(searchPhone.toLowerCase());
    })
    document.getElementsByClassName('display')[0].innerHTML=''
    for(let i = 0; i < result.length; i++){
        renderName = `<div class='product-name'>${result[i].name}</div>`;
        urlImg = result[i].image;
        renderImg =`<img src='${urlImg}' class="img">`
        renderPrice = `<div class="product-price">${result[i].price} Đ</div>`;
        renderButtonAddToCart='<div><button>Add To Cart</button></div>';
        renderButtonDetails = '<div><button>Details</button></div>';
        renderProductBox = '<div class="product-box">'+renderName + renderImg + renderPrice + renderButtonAddToCart + renderButtonDetails +'</div>';
        document.getElementsByClassName('display')[0].innerHTML += renderProductBox;
    }
    document.getElementById('SamSung').style.backgroundColor = '#111'; 
    document.getElementById('IPhone').style.backgroundColor = '#333'; 
    document.getElementById('OPPO').style.backgroundColor = '#333'; 
}
document.getElementById("IPhone").addEventListener("click", displayIPhone);
function displayIPhone(){
    let searchPhone = document.getElementById('IPhone').innerHTML;
    let result = items.filter(function(v){
        return v.brand.toLowerCase().includes(searchPhone.toLowerCase());
    })
    document.getElementsByClassName('display')[0].innerHTML=''
    for(let i = 0; i < result.length; i++){
        renderName = `<div class='product-name'>${result[i].name}</div>`;
        urlImg = result[i].image;
        renderImg =`<img src='${urlImg}' class="img">`
        renderPrice = `<div class="product-price">${result[i].price} Đ</div>`;
        renderButtonAddToCart='<div><button>Add To Cart</button></div>';
        renderButtonDetails = '<div><button>Details</button></div>';
        renderProductBox = '<div class="product-box">'+renderName + renderImg + renderPrice + renderButtonAddToCart + renderButtonDetails +'</div>';
        document.getElementsByClassName('display')[0].innerHTML += renderProductBox;
    }
    document.getElementById('SamSung').style.backgroundColor = '#333'; 
    document.getElementById('IPhone').style.backgroundColor = '#111'; 
    document.getElementById('OPPO').style.backgroundColor = '#333'; 
}
document.getElementById("OPPO").addEventListener("click", displayOPPO);
function displayOPPO(){
    let searchPhone = document.getElementById('OPPO').innerHTML;
    let result = items.filter(function(v){
        return v.brand.toLowerCase().includes(searchPhone.toLowerCase());
    })
    document.getElementsByClassName('display')[0].innerHTML=''
    for(let i = 0; i < result.length; i++){
        renderName = `<div class='product-name'>${result[i].name}</div>`;
        urlImg = result[i].image;
        renderImg =`<img src='${urlImg}' class="img">`
        renderPrice = `<div class="product-price">${result[i].price} Đ</div>`;
        renderButtonAddToCart='<div><button>Add To Cart</button></div>';
        renderButtonDetails = '<div><button>Details</button></div>';
        renderProductBox = '<div class="product-box">'+renderName + renderImg + renderPrice + renderButtonAddToCart + renderButtonDetails +'</div>';
        document.getElementsByClassName('display')[0].innerHTML += renderProductBox;
    }
    document.getElementById('SamSung').style.backgroundColor = '#333'; 
    document.getElementById('IPhone').style.backgroundColor = '#333'; 
    document.getElementById('OPPO').style.backgroundColor = '#111'; 
}
document.getElementById("2tr").addEventListener("click", display2tr);
function display2tr(){
    let result = items.filter(function(v){
        return v.price<2000000;
    })
    if(result.length === 0){
        returnInfo = "<div> Không có kết quả nào phù hợp</div>"
        document.getElementsByClassName('display')[0].innerHTML = returnInfo;
    }else{
    document.getElementsByClassName('display')[0].innerHTML=''
    for(let i = 0; i < result.length; i++){
        renderName = `<div class='product-name'>${result[i].name}</div>`;
        urlImg = result[i].image;
        renderImg =`<img src='${urlImg}' class="img">`
        renderPrice = `<div class="product-price">${result[i].price} Đ</div>`;
        renderButtonAddToCart='<div><button>Add To Cart</button></div>';
        renderButtonDetails = '<div><button>Details</button></div>';
        renderProductBox = '<div class="product-box">'+renderName + renderImg + renderPrice + renderButtonAddToCart + renderButtonDetails +'</div>';
        document.getElementsByClassName('display')[0].innerHTML += renderProductBox;
    }}
    document.getElementById('2tr').style.backgroundColor = '#f1f1f1';    
    document.getElementById('4tr').style.backgroundColor = '#ffffff';
    document.getElementById('7tr').style.backgroundColor = '#ffffff';
    document.getElementById('13tr').style.backgroundColor = '#ffffff';
    document.getElementById('more').style.backgroundColor = '#ffffff';
}
document.getElementById("4tr").addEventListener("click", display4tr);
function display4tr(){
    let result = items.filter(function(v){
        return v.price>2000000 & v.price<=4000000;
    })
    if(result.length === 0){
        returnInfo = "<div> Không có kết quả nào phù hợp</div>"
        document.getElementsByClassName('display')[0].innerHTML = returnInfo;
    }else{
    document.getElementsByClassName('display')[0].innerHTML=''
    for(let i = 0; i < result.length; i++){
        renderName = `<div class='product-name'>${result[i].name}</div>`;
        urlImg = result[i].image;
        renderImg =`<img src='${urlImg}' class="img">`
        renderPrice = `<div class="product-price">${result[i].price} Đ</div>`;
        renderButtonAddToCart='<div><button>Add To Cart</button></div>';
        renderButtonDetails = '<div><button>Details</button></div>';
        renderProductBox = '<div class="product-box">'+renderName + renderImg + renderPrice + renderButtonAddToCart + renderButtonDetails +'</div>';
        document.getElementsByClassName('display')[0].innerHTML += renderProductBox;
    }}
    document.getElementById('2tr').style.backgroundColor = '#ffffff';    
    document.getElementById('4tr').style.backgroundColor = '#f1f1f1';
    document.getElementById('7tr').style.backgroundColor = '#ffffff';
    document.getElementById('13tr').style.backgroundColor = '#ffffff';
    document.getElementById('more').style.backgroundColor = '#ffffff';
}
document.getElementById("7tr").addEventListener("click", display7tr);
function display7tr(){
    let result = items.filter(function(v){
        return v.price>4000000 && v.price<=7000000;
    })
    if(result.length === 0){
        returnInfo = "<div> Không có kết quả nào phù hợp</div>"
        document.getElementsByClassName('display')[0].innerHTML = returnInfo;
    }else{
    document.getElementsByClassName('display')[0].innerHTML=''
    for(let i = 0; i < result.length; i++){
        renderName = `<div class='product-name'>${result[i].name}</div>`;
        urlImg = result[i].image;
        renderImg =`<img src='${urlImg}' class="img">`
        renderPrice = `<div class="product-price">${result[i].price} Đ</div>`;
        renderButtonAddToCart='<div><button>Add To Cart</button></div>';
        renderButtonDetails = '<div><button>Details</button></div>';
        renderProductBox = '<div class="product-box">'+renderName + renderImg + renderPrice + renderButtonAddToCart + renderButtonDetails +'</div>';
        document.getElementsByClassName('display')[0].innerHTML += renderProductBox;
    }}
    document.getElementById('2tr').style.backgroundColor = '#ffffff';    
    document.getElementById('4tr').style.backgroundColor = '#ffffff';
    document.getElementById('7tr').style.backgroundColor = '#f1f1f1';
    document.getElementById('13tr').style.backgroundColor = '#ffffff';
    document.getElementById('more').style.backgroundColor = '#ffffff';
}
document.getElementById("13tr").addEventListener("click", display13tr);
function display13tr(){
    let result = items.filter(function(v){
        return v.price>7000000 && v.price<=13000000;
    })
    if(result.length === 0){
        returnInfo = "<div> Không có kết quả nào phù hợp</div>"
        document.getElementsByClassName('display')[0].innerHTML = returnInfo;
    }else{
    document.getElementsByClassName('display')[0].innerHTML=''
    for(let i = 0; i < result.length; i++){
        renderName = `<div class='product-name'>${result[i].name}</div>`;
        urlImg = result[i].image;
        renderImg =`<img src='${urlImg}' class="img">`
        renderPrice = `<div class="product-price">${result[i].price} Đ</div>`;
        renderButtonAddToCart='<div><button>Add To Cart</button></div>';
        renderButtonDetails = '<div><button>Details</button></div>';
        renderProductBox = '<div class="product-box">'+renderName + renderImg + renderPrice + renderButtonAddToCart + renderButtonDetails +'</div>';
        document.getElementsByClassName('display')[0].innerHTML += renderProductBox;
    }}
    document.getElementById('2tr').style.backgroundColor = '#ffffff';    
    document.getElementById('4tr').style.backgroundColor = '#ffffff';
    document.getElementById('7tr').style.backgroundColor = '#ffffff';
    document.getElementById('13tr').style.backgroundColor = '#f1f1f1';
    document.getElementById('more').style.backgroundColor = '#ffffff';
}
document.getElementById("more").addEventListener("click", displayMore);
function displayMore(){
    // document.getElementById("more").style.backgroundColor = red;
    let result = items.filter(function(v){
        return v.price>13000000;
    })
    if(result.length === 0){
        returnInfo = "<div> Không có kết quả nào phù hợp</div>"
        document.getElementsByClassName('display')[0].innerHTML = returnInfo;
    }else{
    document.getElementsByClassName('display')[0].innerHTML=''
    for(let i = 0; i < result.length; i++){
        renderName = `<div class='product-name'>${result[i].name}</div>`;
        urlImg = result[i].image;
        renderImg =`<img src='${urlImg}' class="img">`
        renderPrice = `<div class="product-price">${result[i].price} Đ</div>`;
        renderButtonAddToCart='<div><button>Add To Cart</button></div>';
        renderButtonDetails = '<div><button>Details</button></div>';
        renderProductBox = '<div class="product-box">'+renderName + renderImg + renderPrice + renderButtonAddToCart + renderButtonDetails +'</div>';
        document.getElementsByClassName('display')[0].innerHTML += renderProductBox;
    }}
    document.getElementById('2tr').style.backgroundColor = '#ffffff';    
    document.getElementById('4tr').style.backgroundColor = '#ffffff';
    document.getElementById('7tr').style.backgroundColor = '#ffffff';
    document.getElementById('13tr').style.backgroundColor = '#ffffff';
    document.getElementById('more').style.backgroundColor = '#f1f1f1';
}
document.getElementById("ascending-order").addEventListener("click", displayAscendingOrder);
function displayAscendingOrder() {
    items.sort(function(a, b) {return a.price - b.price});
    document.getElementsByClassName('display')[0].innerHTML='';
    for(let i = 0; i < items.length; i++){
        renderName = `<div class='product-name'>${items[i].name}</div>`;
        urlImg = items[i].image;
        renderImg =`<img src='${urlImg}' class="img">`
        renderPrice = `<div class="product-price">${items[i].price} Đ</div>`;
        renderButtonAddToCart='<div><button>Add To Cart</button></div>';
        renderButtonDetails = '<div><button>Details</button></div>';
        renderProductBox = '<div class="product-box">'+renderName + renderImg + renderPrice + renderButtonAddToCart + renderButtonDetails +'</div>';
        document.getElementsByClassName('display')[0].innerHTML += renderProductBox;
    }
    document.getElementById('2tr').style.backgroundColor = '#ffffff';    
    document.getElementById('4tr').style.backgroundColor = '#ffffff';
    document.getElementById('7tr').style.backgroundColor = '#ffffff';
    document.getElementById('13tr').style.backgroundColor = '#ffffff';
    document.getElementById('more').style.backgroundColor = '#ffffff';
}
document.getElementById("descending-order").addEventListener("click", displayDescendingOrder);
function displayDescendingOrder() {
    items.sort(function(a, b) {return b.price - a.price});
    document.getElementsByClassName('display')[0].innerHTML='';
    for(let i = 0; i < items.length; i++){
        renderName = `<div class='product-name'>${items[i].name}</div>`;
        urlImg = items[i].image;
        renderImg =`<img src='${urlImg}' class="img">`
        renderPrice = `<div class="product-price">${items[i].price} Đ</div>`;
        renderButtonAddToCart='<div><button>Add To Cart</button></div>';
        renderButtonDetails = '<div><button>Details</button></div>';
        renderProductBox = '<div class="product-box">'+renderName + renderImg + renderPrice + renderButtonAddToCart + renderButtonDetails +'</div>';
        document.getElementsByClassName('display')[0].innerHTML += renderProductBox;
    }
    document.getElementById('2tr').style.backgroundColor = '#ffffff';    
    document.getElementById('4tr').style.backgroundColor = '#ffffff';
    document.getElementById('7tr').style.backgroundColor = '#ffffff';
    document.getElementById('13tr').style.backgroundColor = '#ffffff';
    document.getElementById('more').style.backgroundColor = '#ffffff';
}
// search button
// document.getElementById("search-button").addEventListener('click', searchPhone)
// function searchPhone(){
//     let search = document.getElementById("input").value.trim();
//     let result = items.filter((v) =>{
//         return v.name.toLowerCase().includes(search.toLowerCase());
//     })
//     document.getElementsByClassName('display')[0].innerHTML="";
//     for(let i = 0; i < result.length; i++){
//         renderName = `<div class='product-name'>${result[i].name}</div>`;
//         urlImg = result[i].image;
//         renderImg =`<img src='${urlImg}' class="img">`
//         renderPrice = `<div class="product-price">${result[i].price} Đ</div>`;
//         renderButtonAddToCart='<div><button>Add To Cart</button></div>';
//         renderButtonDetails = '<div><button>Details</button></div>';
//         renderProductBox = '<div class="product-box">'+renderName + renderImg + renderPrice + renderButtonAddToCart + renderButtonDetails +'</div>';
//         document.getElementsByClassName('display')[0].innerHTML += renderProductBox;
//     }
// }


