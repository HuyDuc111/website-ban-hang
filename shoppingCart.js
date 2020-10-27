let cartName =[]
let numberOfProducts =[]
let productPrice=[]
let cart = JSON.parse(localStorage.getItem("cart"));
// console.log(cart);
let a = cart.sort();
// console.log(a);
for (let i = 0; i<cart.length; i++){
    if(cart[i] !==cart[i-1]){
        cartName.push(cart[i]);
    }
}
// console.log(cartName);
for (let i = 0; i <cartName.length; i++){
    let b = a.lastIndexOf(cartName[i]) - a.indexOf(cartName[i]) + 1;
    numberOfProducts.push(b);
}
for (let i = 0; i <cartName.length; i++){
    let result = items.find(item => item.name === cartName[i]);
    productPrice.push(result.price);
}
for (let i = 0; i <cartName.length; i++){
    console.log(`${cartName[i]} : ${numberOfProducts[i]}: ${productPrice[i]}`)
}