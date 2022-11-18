const over_big = require("../assets/over_big.png");

const image = document.getElementsByClassName("weatherImage");

image.addEventListener("mouseover", () => {
  console.log("Hi");
  image.src = over_big;
});
