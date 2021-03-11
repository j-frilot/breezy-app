let imageOne = "url(img/slide-main-1.jpg)"
let imageTwo = "url(img/slide-main-2.jpg)"
let imageThree = "url(img/slide-main-3.jpg)"

let images = [
    `${imageOne}`,
    `${imageTwo}`,
    `${imageThree}`,
];

let page = document.querySelector(".slideshow").style.backgroundImage = `${imageOne}`;
let right = document.querySelector(".right");
let left = document.querySelector(".left");

///////////////FOR AUTO SLIDES//////////////////

imageCount = 0
function imageSlide () {
   let page = document.querySelector(".slideshow").style.backgroundImage = images[imageCount];
    imageCount ++;

    if ( imageCount >= images.length) {
        imageCount = 0;
    }

    console.log(imageCount);
}
setInterval(imageSlide, 3000);
