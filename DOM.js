const subscribe = document.querySelector(".js-subscribe-button");
subscribe.addEventListener("click", () => {
  if (subscribe.innerHTML === "Subscribe") {
    subscribe.innerHTML = "Subscribed";
    subscribe.style.backgroundColor = "#e3dddc";
    subscribe.style.color = "black";
  } else if (subscribe.innerHTML === "Subscribed") {
    subscribe.innerHTML = "Subscribe";
    subscribe.style.backgroundColor = "black";
    subscribe.style.color = "white";
  }
});

function calculateTotal() {
    const inputElement = document.querySelector(".js-cost-input");
    let cost = Number(inputElement.value);
  
    if (cost < 40) {
      cost += 10;
    }
    document.querySelector(".js-total-cost").innerHTML = `$${cost}`;
}

const calculate = document.querySelector(".calculate");
calculate.addEventListener('click',calculateTotal);
