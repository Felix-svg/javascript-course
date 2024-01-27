const subscribe = document.querySelector(".js-subscribe-buutton");
subscribe.addEventListener("click", function () {
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
