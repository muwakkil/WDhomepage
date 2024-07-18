// $(document).ready(function() {
//     var images = [ 'image1.png', 'image2.png', image3.png' ];
//     var random = 1 + Math.floor(Math.random() * images.length);
  
//     $('.slider-class').html('<img src="' + images[random] + '" />');
//   });

const container = document.querySelector(".content");

const baseURL = "https://source.unsplash.com/random/";

const rows = 7;

for (let i = 0; i < rows * 3; i++) {
    const img= document.createElement("img");
    img.src= `${baseURL}${randomSize()}`;
    container.appendChild(img);
}



function randomSize() {
    return `${randomNumber()}x${randomNumber()}`;
}

// randomSize();
// randomSize();
// randomSize();
// randomSize();
// randomSize();
// randomSize();
// randomSize();
// randomSize();


function randomNumber(){
    return Math.floor(Math.random() * 10) + 100;
}

// randomNumber();
// randomNumber();
// randomNumber();
// randomNumber();
// randomNumber();
// randomNumber();
// randomNumber();
// randomNumber();


imagesArray = new Array(5);
imagesArray[0] = new Image();
imagesArray[0].src = new "images/IMG_1.JPG";
imagesArray[1] = new Image();
imagesArray[1].src = new "";
imagesArray[2] = new Image();
imagesArray[2].src = new "";
imagesArray[3] = new Image();
imagesArray[3].src = new "";
imagesArray[4] = new Image();
imagesArray[4].src = new "";
imagesArray[5] = new Image();
imagesArray[5].src = new "";
imagesArray[6] = new Image();
imagesArray[6].src = new "";

function displyImage (){
    var num=Math.floor(Math.random());
    document.getElementById(imagesArray[num]);
}