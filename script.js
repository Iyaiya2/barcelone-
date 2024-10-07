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

let slideIndex = 0;
showSlides();

// Show slides function
function showSlides() {
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    // Increment slideIndex
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    // Reset dots to inactive
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Display the current slide
    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";

    // Change image every 3 seconds
    setTimeout(showSlides, 3000);
}

// Function to change slides when user clicks arrows
function plusSlides(n) {
    slideIndex += n - 1;
    showSlides();
}

// Function to go to a specific slide (dot)
function currentSlide(n) {
    slideIndex = n;
    showSlides();
}