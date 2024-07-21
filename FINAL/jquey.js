// $(document).ready(function() {
//     var images = [ 'image1.png', 'image2.png', image3.png' ];
//     var random = 1 + Math.floor(Math.random() * images.length);
  
//     $('.slider-class').html('<img src="' + images[random] + '" />');
//   });

const container = document.querySelector(".content");

const baseURL = "https://source.unsplash.com/random/";

const rows = 5;

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

var 