const drbutton = document.getElementById("drbutton");
const hsbutton = document.getElementById("hsbutton");
const all = document.getElementById("all");
const milk =document.getElementById("milk");
const input = document.getElementById("productSearch").value;

drbutton.addEventListener("click", () =>{
          milk.style.backgroundColor = `green`;
});

hsbutton.addEventListener("click", () =>{
          milk.style.backgroundColor = `yellow`;
});

all.addEventListener("click", () =>{
          milk.style.backgroundColor = `white`;
});

input.addEventListener("input", () => {
if(input = "milk"){
    milk.style.backgroundColor = `green`;
}
});


/*part for procuct and stock here i need to add new product ,track the amount
  of product remaining and change when the product is bought create an 
  new product*/
  const form =document.getElementById("newProduct");
  const productList =document.getElementById("productList");


  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name=document.getElementById("purchaseDescription").value;
    const amount=Number(document.getElementById("quantityBought").value);
    const buyPrice=Number(document.getElementById("buyPrice").value);
    const sellPrice=Number(document.getElementById("sellPrice").value);
    const sellValue=Number(document.getElementById("sellValue"));
    const profit=Number(document.getElementById("profit"));
    
 

  const product ={
     name:name,
     amount:amount,
     buyPrice:buyPrice,
     sellPrice:sellPrice,
       buyValue(){
          return this.buyPrice * this.amount;
       },
       sellValue(){
         return this.sellPrice * this.amount;
       },
       profit(){
        return this.sellValue - this.buyValue;
       }

  };

  document.getElementById("sellValue").textContent = sellValue();
    products.push(product);
    displayProducts();
    form.reset();
});