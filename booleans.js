function rockMove() {
  const rock = document.getElementById("rock");
  //const randomNumber = Math.random();
  rock.addEventListener("click", function () {
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      console.log("rock");
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      console.log("paper");
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      console.log("scissors");
    }
  });
}
rockMove();
