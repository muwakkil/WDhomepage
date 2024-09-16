
//     const numberOfImages = Math.min(25, imagePaths.length); // Number of images to display in the grid

//     function getRandomImage() {
//         const randomIndex = Math.floor(Math.random() * imagePaths.length);
//         const imagePath = imagePaths[randomIndex];
//         imagePaths.splice(randomIndex, 1); // Remove the selected image from the array
//         return imagePath;
//     }

//     function createImageItem(src) {
//         const div = document.createElement("div");
//         div.classList.add("grid-item");
        
//         const img = document.createElement("img");
//         img.src = src;
//         img.alt = "Random Image";
        
//         div.appendChild(img);
//         return div;
//     }

//     for (let i = 0; i < numberOfImages; i++) {
//         if (imagePaths.length === 0) break; // Stop if there are no more images to display
//         const randomImageSrc = getRandomImage();
//         const imageItem = createImageItem(randomImageSrc);
//         imageGrid.appendChild(imageItem);
//     }
// });




document.addEventListener("DOMContentLoaded", function() {
    const imageGrid = document.getElementById("image-grid");
    let imagePaths = [
        "images/IMG_1.JPG",
        "images/IMG_2.JPG",
        "images/IMG_3.JPG",
        "images/IMG_4.JPG",
        
        "images/IMG_6.jpg",
  
        "images/IMG_8.JPG",
        
        "images/IMG_10.jpg",
        "images/IMG_11.jpg",
        "images/IMG_12.jpg",

        "images/IMG_15.jpg",
        "images/IMG_16.jpg",
        "images/IMG_17.jpg",
        "images/IMG_18.jpg",
        "images/IMG_19.jpeg",
        "images/IMG_20.jpeg",
        "images/IMG_21.jpg",
        "images/IMG_22.jpg",
        "images/IMG_23.jpg",
       
            "images/IMG_24.jpeg",
            "images/IMG_25.jpg",
            "images/IMG_26.jpg",
            
        
        
    ];

    // Function to get a random image and remove it from the array
    function getRandomImage() {
        const randomIndex = Math.floor(Math.random() * imagePaths.length);
        const imagePath = imagePaths[randomIndex];
        imagePaths.splice(randomIndex, 1); // Remove the selected image from the array
        return imagePath;
    }

    // Function to create an image item for the grid
    function createImageItem(src) {
        const div = document.createElement("div");
        div.classList.add("grid-item");
        
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Random Image";
        
        div.appendChild(img);
        return div;
    }

    // Function to populate the grid with images
    function populateGrid() {
        imageGrid.innerHTML = ""; // Clear the grid
        const numberOfImages = Math.min(25, imagePaths.length); // Number of images to display in the grid

        for (let i = 0; i < numberOfImages; i++) {
            if (imagePaths.length === 0) break; // Stop if there are no more images to display
            const randomImageSrc = getRandomImage();
            const imageItem = createImageItem(randomImageSrc);
            imageGrid.appendChild(imageItem);
        }
    }

    // Refresh button functionality
    document.getElementById("refresh-button").addEventListener("click", function() {
        imagePaths = [
            "images/IMG_1.JPG",
            "images/IMG_2.JPG",
            "images/IMG_3.JPG",
            "images/IMG_4.JPG",
            
            "images/IMG_6.jpg",
      
            "images/IMG_8.JPG",
           
            "images/IMG_10.jpg",
            "images/IMG_11.jpg",
            "images/IMG_12.jpg",
    
            "images/IMG_15.jpg",
            "images/IMG_16.jpg",
            "images/IMG_17.jpg",
            "images/IMG_18.jpg",
            "images/IMG_19.jpeg",
            "images/IMG_20.jpeg",
            "images/IMG_21.jpg",
            "images/IMG_22.jpg",
            "images/IMG_23.jpg",
            "images/IMG_24.jpeg",
            "images/IMG_25.jpg",
            "images/IMG_26.jpg",
            
            // Add more image paths as needed
        ];
        populateGrid(); // Refresh the grid with the initial set of images
    });

    // Shuffle button functionality
    document.getElementById("shuffle-button").addEventListener("click", function() {
        const currentImages = Array.from(imageGrid.querySelectorAll("img")).map(img => img.src);
        imagePaths = shuffleArray(imagePaths.concat(currentImages)); // Shuffle existing images
        populateGrid();
    });

 

    // Shuffle array helper function
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Populate the grid initially
    populateGrid();
    document.addEventListener("DOMContentLoaded", function() {
    const sidePanel = document.getElementById("side-panel");
    const toggleButton = document.getElementById("toggle-panel");

    toggleButton.addEventListener("click", function() {
        if (sidePanel.classList.contains("open")) {
            sidePanel.classList.remove("open");
        } else {
            sidePanel.classList.add("open");
        }
    });
});
});
