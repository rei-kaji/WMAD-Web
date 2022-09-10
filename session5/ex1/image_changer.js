const img = ["./assets/header1.jpg","./assets/header2.jpg","./assets/header3.jpg","./assets/header4.jpg"]

let count = -1;

const image_changer = ()=>{
    count++;
    if (count == img.length) count = 0;
    header_image.src = img[count];
    setTimeout(() => { image_changer(); }, 5000);
}

window.addEventListener('load',() => {

    image_changer();

})