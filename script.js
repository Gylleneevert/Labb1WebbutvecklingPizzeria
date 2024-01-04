

class Pizza {
    constructor({name, price, ingredients, imagePath }) {
      
      this.name = name;
      this.price = price;
      this.ingredients = ingredients;
      this.imagePath = imagePath;
    }
  }
  
 
let cartList = [];
let currentPizza;
let cartimgbtn = document.querySelector('.cartimg');
let quantitySpan = document.getElementById("quantitySpan");
let closeCartbtn = document.querySelector('.close');
let checkOutbtn = document.querySelector('.checkout')
let body = document.querySelector('body');
let plusbtn = document.querySelector('.plus');
let minusbtn = document.querySelector('.minus');


let closebody = document.querySelector('body');


  const pizzaList = [
   
new Pizza({
    name: "Margherita",
    price: 10.99,
    ingredients: ["tomato sauce", "mozzarella", "basil"],
    imagePath: "img/Hawaii.jpg"
  }),
  
  new Pizza({
    name: "Pepperoni",
    price: 12.99,
    ingredients: ["tomato sauce", "mozzarella", "pepperoni"],
    imagePath: "img/Hawaii.jpg"
  }),
  
  new Pizza({
    name: "Vegetariana",
    price: 11.99,
    ingredients: ["tomato sauce", "mozzarella", "vegetables"],
    imagePath: "img/Hawaii.jpg"
  }),
  
  new Pizza({
    name: "Hawaiian",
    price: 13.99,
    ingredients: ["tomato sauce", "mozzarella", "ham", "pineapple"],
    imagePath: "img/Hawaii.jpg"
  }),
  
  new Pizza({
    name: "Capricciosa",
    price: 12.49,
    ingredients: ["tomato sauce", "mozzarella", "ham", "mushrooms"],
    imagePath: "img/Hawaii.jpg"
  }),
  
 new Pizza({
    name: "Quattro Formaggi",
    price: 14.99,
    ingredients: ["tomato sauce", "mozzarella", "gorgonzola", "parmesan", "fontina"],
    imagePath: "img/Hawaii.jpg"
  }),
  
 
  
  
  ];
  
  
  const pizzaContainer = document.getElementById("pizza-container");

  pizzaList.forEach((pizza) => {
    const pizzaCard = document.createElement("div");
    pizzaCard.classList.add("col-3", "ms-5", "mt-3");
  
    const card = document.createElement("div");
    card.classList.add("card", "border-danger", "bg-black", "text-white", "text-center");
    card.style.maxWidth = "20rem";
  
    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    cardHeader.textContent = pizza.name;
  
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "d-flex", "flex-column", "align-items-center");
  
    const imageElement = document.createElement("img");
    imageElement.classList.add("img-fluid");
    imageElement.src = pizza.imagePath; 
    imageElement.alt = pizza.name;
  
    const ingredientsElement = document.createElement("p");
    ingredientsElement.classList.add("card-text");
    ingredientsElement.textContent = `Ingredients: ${pizza.ingredients.join(", ")}`;
  
    const addButton = document.createElement("button");
    addButton.classList.add("btn", "btn-danger", "btn-sm");
    addButton.type = "button";
    addButton.textContent = "Lägg Till Pizza";
    addButton.addEventListener("click", () => {
    addPizzaToCart(pizza);
    showCartList();
    });
    
  
    cardBody.appendChild(imageElement);
    cardBody.appendChild(ingredientsElement);
    cardBody.appendChild(addButton);
  
    card.appendChild(cardHeader);
    card.appendChild(cardBody);
  
    pizzaCard.appendChild(card);
    pizzaContainer.appendChild(pizzaCard);

  });

  function updateQuantitySpan() {
    let quantitySpan = document.getElementById("quantitySpan");
    if (quantitySpan) {
      quantitySpan.textContent = cartList.reduce((total, item) => total + item.quantity, 0).toString();
    }
}


function updateTotalPrice() {

  let PriceSpan = document.getElementById("Price");
 
  if (PriceSpan) {
    let total = cartList.reduce((total, item) => (item.price * item.quantity) );
    PriceSpan.textContent = total.toString();
    }
  }


function addPizzaToCart(pizza){
  console.log('before adding pizza')
  let existingPizza = cartList.find((item) => item.name === pizza.name);
  if (existingPizza) {
    existingPizza.quantity++;
    existingPizza.price += pizza.price;
  } 
  else {
    pizza.quantity = 1;
    cartList.push(pizza);
  }
   console.log('after adding pizza')
  updateQuantitySpan();
  updateTotalPrice();
  
  alert("Du lade till " + pizza.name + " i din kundvagn");
 
}
 
function removePizzaFromCart(pizza) {
  let existingPizza = cartList.find((item) => item.name === pizza.name);
  if (existingPizza) {
    if (existingPizza.quantity > 1) {
      existingPizza.quantity--;
      existingPizza.price -= pizza.price;
    } else {
      cartList = cartList.filter((item) => item.name !== pizza.name);
    }
    updateQuantitySpan();
    updateTotalPrice();
    alert("Du tog bort en " + pizza.name + " från din kundvagn");
  }
}

function getPizzaList(){
  return PizzaList;
}

function getCartList(){
return cartList;
}

function showPizzaList() {
  let cartContainer = document.getElementById("items");
  let pizzaList = getPizzaList();
  cartContainer.innerHTML = "";

  PizzaList.forEach((pizza) => {
    
    let orderedPizza = document.createElement("div");
    orderedPizza.innerHTML = `<p>${pizza.name} - $${pizza.price.toFixed(2)}</p>`;
    cartContainer.appendChild(orderedPizza);
  });
}


// function showCartList() {
//   console.log('Showing cartList')
//   let cartContainer = document.getElementById("items");
//   let cartList = getCartList();
//   cartContainer.innerHTML = "";

//   cartList.forEach((pizza) => {
    
//     let pizzaItem = document.createElement("div");
//     pizzaItem.classList.add("row", "item");

//     let imageDiv = document.createElement("div");
//     imageDiv.classList.add("imageDiv", "col-3");
//     let image = document.createElement("img");
//     image.classList.add("cartimage");
//     image.src = pizza.imagePath;
//     image.alt = pizza.name;
//     imageDiv.appendChild(image);
    
//     let nameDiv = document.createElement("div");
//     nameDiv.classList.add("name", "col-3", "text-start");
//     nameDiv.textContent = pizza.name;

//     let priceDiv = document.createElement("div");
//     priceDiv.classList.add("price", "col-3", "text-end");
//     priceDiv.textContent = pizza.price.toFixed(2);

//     let quantityDiv = document.createElement("div");
//     quantityDiv.classList.add("cartquantity","col-3");

//     let quantityContainer = document.createElement("div");
//     quantityContainer.classList.add("cartquantity-container");

//     let minusButton = document.createElement("span");
//     minusButton.classList.add("minus", "btn", "btn-success");
//     minusButton.textContent = "-";
//     minusButton.addEventListener("click", function {
//         removePizzaFromCart(pizza)
//         showCartList();
//     });
//     let quantitySpan = document.createElement("span");
//     quantitySpan.textContent = "1"; // Du kan ersätta detta med det verkliga värdet
//     let plusButton = document.createElement("span");
//     plusButton.classList.add("plus", "btn", "btn-success");
//     plusButton.textContent = "+";
    
//     quantityDiv.appendChild(minusbtn);
//     quantityDiv.appendChild(quantitySpan);
//     quantityDiv.appendChild(plusbtn);

//     quantityDiv.appendChild(quantityContainer);
    
//     pizzaItem.appendChild(imageDiv);
//     pizzaItem.appendChild(nameDiv);
//     pizzaItem.appendChild(priceDiv);
//     pizzaItem.appendChild(quantityDiv);

    
//     cartContainer.appendChild(pizzaItem);
//   });
// }


function showCartList() {
  console.log('Showing cartList');
  let cartContainer = document.getElementById("items");
  let cartList = getCartList();
  cartContainer.innerHTML = "";

  cartList.forEach((pizza) => {
    let pizzaItem = document.createElement("div");
    pizzaItem.classList.add("row", "item");

    let imageDiv = document.createElement("div");
    imageDiv.classList.add("imageDiv", "col-3");
    let image = document.createElement("img");
    image.classList.add("cartimage");
    image.src = pizza.imagePath;
    image.alt = pizza.name;
    imageDiv.appendChild(image);

    let nameDiv = document.createElement("div");
    nameDiv.classList.add("name", "col-3", "text-start");
    nameDiv.textContent = pizza.name;

    let priceDiv = document.createElement("div");
    priceDiv.classList.add("price", "col-2", "text-end");
    priceDiv.textContent = pizza.price.toFixed(2);

    let quantityDiv = document.createElement("div");
    quantityDiv.classList.add("cartquantity", "col-4");

    let quantityContainer = document.createElement("div");
    quantityContainer.classList.add("cartquantity-container");

    // Dynamiskt skapa minusknapp
    let minusButton = document.createElement("span");
    minusButton.classList.add("minus", "btn", "btn-success");
    minusButton.textContent = "-";
    minusButton.addEventListener("click", function() {
      removePizzaFromCart(pizza); // Skicka med den aktuella pizzan till removePizzaFromCart
      showCartList();
    });

    // Skapa och lägg till quantitySpan
    let quantitySpan = document.createElement("span");
    quantitySpan.textContent = "1";  // Du kan ersätta detta med det verkliga värdet
    quantitySpan.textContent = pizza.quantity.toString(); 

    // Dynamiskt skapa plusknapp
    let plusButton = document.createElement("span");
    plusButton.classList.add("plus", "btn", "btn-success");
    plusButton.textContent = "+";
    plusButton.addEventListener("click", function() {
      addPizzaToCart(pizza); // Skicka med den aktuella pizzan till addPizzaToCart
      showCartList();
    });

    // Lägg till knapparna och quantitySpan i quantityContainer
    quantityContainer.appendChild(minusButton);
    quantityContainer.appendChild(quantitySpan);
    quantityContainer.appendChild(plusButton);

    // Lägg till quantityContainer i quantityDiv
    quantityDiv.appendChild(quantityContainer);

    // Lägg till alla element i pizzaItem
    pizzaItem.appendChild(imageDiv);
    pizzaItem.appendChild(nameDiv);
    pizzaItem.appendChild(priceDiv);
    pizzaItem.appendChild(quantityDiv);

    // Lägg till pizzaItem i cartContainer
    cartContainer.appendChild(pizzaItem);
  });
}



  
cartimgbtn.addEventListener('click', () => {
  body.classList.toggle('showcart')
});



closeCartbtn.addEventListener('click',() => {
body.classList.toggle('showcart')
});

checkOutbtn.addEventListener('click', () => {
  
  let cartContainer = document.getElementById("items")
  cartContainer.innerHTML = "";
  cartList = [];
  alert('Hoppas det smakar!')
});

// minusButton.addEventListener('click', function() {
//   console.log('using minusButton')
//   let pizzaCard = event.target.closest(".col-3");
//   let pizzaIndex = Array.from(pizzaContainer.children).indexOf(pizzaCard);
//   let pizza = pizzaList[pizzaIndex];
//   currentPizza = pizza;
//   removePizzaFromCart(currentPizza);
//   showCartList();
//   console.log('du tog bort en pizza')
// });

// plusButton.addEventListener('click', function() {
//   console.log('using plusButton')
//   let pizzaCard = event.target.closest(".col-3");
//   let pizzaIndex = Array.from(pizzaContainer.children).indexOf(pizzaCard);
//   let pizza = pizzaList[pizzaIndex];
//   currentPizza = pizza;
//   addPizzaToCart(currentPizza);
//   showCartList();
//   console.log('du la till en pizza')
// });









// minusbtn.addEventListener('click', function(){
  
//   removePizzaFromCart(currentPizza)
// })
  
//   <div class="col-3 ms-5 mt-3">
//             <div class="card border-danger bg-black text-white" style="max-width: 20rem;">
//               <div class="card-header text-center"><h4>Hawaii</h4></div>
//               <div class="card-body d-flex flex-column align-items-center">
//                 <img class="img-fluid" src="img/Hawaii.jpg" alt="#">
//                 <p class="card-text">Tomatsås, Ost, Skinka, Ananas</p>
//                 <a type="button" class="btn btn-danger btn-sm" href="#">Lägg Till Pizza</a>
//               </div>
//             </div>
//           </div>





