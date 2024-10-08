// Get modal element
var modal = document.getElementById("loginModal");

// Get the button that opens the modal
var btn = document.getElementById("loginBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Function to show the slides
let slideIndex = 0;
showSlides(slideIndex);

// Show specific slide based on index
function showSlides(n) {
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");

    // Ensure slideIndex stays within bounds
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    // Reset all dots to inactive
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Display the current slide and mark the corresponding dot as active
    slides[slideIndex].style.display = "block";  
    dots[slideIndex].className += " active";
}

// Function to navigate through slides
function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

// Function to go to a specific slide
function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
}

// Auto-slideshow functionality (change every 3 seconds)
function autoSlides() {
    plusSlides(1);  // Move to the next slide
    setTimeout(autoSlides, 3000);  // Repeat every 3 seconds
}

// Start auto slideshow
autoSlides();
