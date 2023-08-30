// function ready(){

//     var removecartitembuttons=document.getElementsByClassName('btn-danger')
//     for(var i=0; i < removecartitembuttons.length;i++){
//         var button=removecartitembuttons[i]
//         button.addEventListener('click',removecartitem)
//     }

//     var quantityinputs=document.getElementsByClassName('cart-quantity-input')
//     for(var i=0; i < quantityinputs.length; i++){
//         var input=quantityinputs[i]
//         input.addEventListener('change',quantitychanged)
//     }


//     var addtocartbuttons=document.getElementsByClassName('shopitem-button')
//     for(var i=0; i< addtocartbuttons.length; i++){
//         var button=addtocartbuttons[i]
//         button.addEventListener('click',addtocartclicked)
//         function hello(){
//             alert("hello world")
//         }
//         function purchaseclicked(){
//             alert('Thankyou for your purchase')
//             var cartitems=document.getElementsByClassName('car-items')[0]
//             while(cartitems.hasChildNodes()) {
//                 cartitems.removeChild(cartitems.firstChild)
//             }       
//             updateCartTotal()
//         }
        
//         function removecartitem(event){
//             var buttonClicked=event.target
//             buttonClicked.parentElement.parentElement.remove()
//             updateCartTotal()
//         }
        
//         function quantitychanged(event){
//             var input =event.target
//             if (isNaN (input.value) || input.value <=0){
//                 input.value=1
//             }
//             updateCartTotal()
//         }
        
        
//         function addtocartclicked(event){
//             var button=event.target
//             var shopItem=button.parentElement.parentElement
//             var title = shopItem.getElementsByClassName("shopitem-title")[0].innerText
//             var price = shopItem.getElementsByClassName("shopitem-price")[0].innerText
//             var imageSrc = shopItem.getElementsByClassName("shopitem-image")[0].src
//             addItemToCart(title,price,imageSrc)
//             updateCartTotal()
        
//         }
        
//         function addItemToCart(title,price, imageSrc){
//             var cartrow = document.createElement('div')
//             cartrow.classList.add('cart-row')
//             var cartitems=document.getElementsByClassName('cart-items')[0]
//             var cartitemsnames=cartitems.getElementsByClassName('cart-item-title')
        
//             for (var i=0; i< cartitemsnames.length;i++){
//                 if(cartitemsnames[i].innerText == title) {
//                     alert("this is already added to cart")
//                     return
                
//                 }
//             }
//             var cartrowcontents= `
//                 <div class="cart-item-column">
//                     <img class="cart-item-image" src="${imageSrc}" width="100" height="100"></img>
//                     <span class="cart-item-title">${title}</span>
//                 </div>
//                 <span class="cart-price cart-column">${price}</span>
//                 <div class="cart-quantity cart-column">
//                     <input class="cart-quantity-input" type="number" value="1"></input>
//                     <button class=" btn-danger" type="button">REMOVE</button>
//                 </div>`
                
//              cartrow.innerHTML=cartrowcontents
//              cartitems.append(cartrow)
//              cartrow.getElementsByClassName('btn-danger')[0].addEventListener('click',removecartitem)
//              cartrow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantitychanged)
        
        
//         }
        
        
//         function updateCartTotal(){
//             var cartitemcontainer =document.getElementsByClassName("cart-items")[0]
//             var cartrows=cartitemcontainer.getElementsByClassName("cart-row")
//             var total=0
        
//             for(var i=0; i< cartrows.length; i++){
//                 var cartrow=cartrows[i]
//                 var priceelement=cartrow.getElementsByClassName("cart-price")[0]
//                 var quantityelement=cartrow.getElementsByClassName('cart-quantity-input')[0]
//                 var price=parseFloat(priceelement.innerText.replace('$','' ))
//                 var quantity=quantityelement.value
//                 total=total+ (price*quantity)
//             }
//             total = Math.round(total*100)/100
//             document.getElementsByClassName('cart-total-price')[0].innerText='$'+ total
//         }
        
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartTableBody = document.querySelector('.cart-table tbody');
const buyNowButton = document.querySelector('.buy-now');

const cartItems = [];

addToCartButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const artPieceName = button.parentElement.querySelector('h3').innerText;
    const artPiecePrice = button.parentElement.querySelector('.price').innerText;

    const newItem = { name: artPieceName, price: artPiecePrice };
    cartItems.push(newItem);

    updateCartTable();
  });
});

function updateCartTable() {
  cartTableBody.innerHTML = '';
  let total = 0;

  cartItems.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.price}</td>
    `;

    cartTableBody.appendChild(row);

    total += parseFloat(item.price.slice(1)); // Remove '$' and convert to float
  });

  document.querySelector('.total').textContent = `Total: $${total.toFixed(2)}`;
}

buyNowButton.addEventListener('click', () => {
  // Handle "Buy Now" logic, e.g., redirect to payment page
});
