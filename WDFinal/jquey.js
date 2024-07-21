document.addEventListener("DOMContentLoaded", function() {
    const imageGrid = document.getElementById("image-grid");
    let imagePaths = [
        "images/IMG_1.JPG",
        "images/IMG_2.JPG",
        "images/IMG_3.JPG",
        "images/IMG_4.JPG",
        
        "images/IMG_6.jpg",
  
        "images/IMG_8.JPG",
        "images/IMG_9.jpg",
        "images/IMG_10.jpg",
        "images/IMG_11.jpg",
        "images/IMG_12.jpg",
        "images/IMG_15.jpg",
        "images/IMG_16.jpg",
        "images/IMG_17.jpg",
        "images/IMG_18.jpg",
        
    ];

    const numberOfImages = Math.min(20, imagePaths.length); // Number of images to display in the grid

    function getRandomImage() {
        const randomIndex = Math.floor(Math.random() * imagePaths.length);
        const imagePath = imagePaths[randomIndex];
        imagePaths.splice(randomIndex, 1); // Remove the selected image from the array
        return imagePath;
    }

    function createImageItem(src) {
        const div = document.createElement("div");
        div.classList.add("grid-item");
        
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Random Image";
        
        div.appendChild(img);
        return div;
    }

    for (let i = 0; i < numberOfImages; i++) {
        if (imagePaths.length === 0) break; // Stop if there are no more images to display
        const randomImageSrc = getRandomImage();
        const imageItem = createImageItem(randomImageSrc);
        imageGrid.appendChild(imageItem);
    }
});