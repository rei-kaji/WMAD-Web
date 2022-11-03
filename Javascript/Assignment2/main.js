const scrollUp = document.getElementById("arrow");
const scrollDown = document.getElementById("down");
const galleryImage = document.getElementById("gallery");
const Images = [
  "./assets/photo1.png",
  "./assets/photo2.png",
  "./assets/photo3.png",
  "./assets/photo4.png",
];

scrollUp.addEventListener("click", () => {
  alert("Hello Lion!");
});

scrollDown.addEventListener("click", () => {
  scrollTo({ top: 1000 });
});

let image = "";
for (let i = 0; i < Images.length; i++) {
  image += `<img src=${Images[i]}>`;
}

galleryImage.innerHTML = image;
