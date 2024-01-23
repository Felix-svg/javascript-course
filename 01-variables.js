let cartQuantity = 0;

function quantity() {
  const quantityButton = document.getElementById("quantity");
  quantityButton.addEventListener("click", () => {
    //let cartQuantity = 0;
    console.log(`Cart quantity: ${cartQuantity} `);
    displayCartQuantity();
    return cartQuantity;
  });
}
quantity();

function add() {
  const addButton = document.getElementById("add");
  addButton.addEventListener("click", () => {
    cartQuantity++;
    console.log(`Cart quantity: ${cartQuantity}`);
    //displayCartQuantity();
    return cartQuantity;
  });
}
add();

function two() {
  const twoButton = document.getElementById("two");
  twoButton.addEventListener("click", () => {
    cartQuantity = cartQuantity + 2;
    console.log(`Cart quantity: ${cartQuantity}`);
    //displayCartQuantity();
    return cartQuantity;
  });
}
two();

function three() {
  const threeButton = document.getElementById("three");
  threeButton.addEventListener("click", () => {
    cartQuantity = cartQuantity + 3;
    console.log(`Cart quantity: ${cartQuantity}`);
    //displayCartQuantity();
    return cartQuantity;
  });
}
three();

function reset() {
  const resetButton = document.getElementById("reset");
  resetButton.addEventListener("click", () => {
    cartQuantity = 0;
    console.log(`Cart quantity: ${cartQuantity}`);
    displayCartQuantity();
    return cartQuantity;
  });
}
reset();

//display cart quantity in webpage
function displayCartQuantity() {
  const display = document.getElementById("results");
  const price = document.createElement("p");
  display.innerHTML = `
      <p><strong>Cart quantity: </strong>${cartQuantity}</p>
      `;

  display.appendChild(price);
}
