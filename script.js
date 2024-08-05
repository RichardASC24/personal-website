// Get references for back to the top button
let backtotopButton = document.getElementById('back-to-top');

// This function determines whether the back-to-top button should be shown or hidden based on the user's scroll position.
function scrollPosition(){
    // This gets the total height of the document (webpage), including any content that extends beyond the viewport.
    let websiteHeight = document.documentElement.scrollHeight;
    // This calculates the current scroll position plus the height of the viewport. Essentially, this gives the distance from the top of the page to the bottom of the viewport.
    let currentwheelPos = window.innerHeight + window.pageYOffset;
    // If the user has scrolled to the bottom of the page (currentwheelPos is greater than or equal to websiteHeight - 1), the button is shown. Otherwise, it is hidden.
    if( currentwheelPos >= websiteHeight - 1) {
        backtotopButton.style.display = "block";
    }
    else {
        backtotopButton.style.display = "none";
    }
}

// This function scrolls the page back to the top when the back-to-top button is clicked.
function scrollToTop() {
    // Sets the scroll position of the document body to 0.
    document.body.scrollTop = 0;
    // This line of code sets the scroll position of the entire webpage to the top.
    document.documentElement.scrollTop = 0; 
}

// Attach scrollPosition to the window scroll event
window.addEventListener("scroll", scrollPosition);

// Attach scrollToTop to the button click event
backtotopButton.addEventListener("click", scrollToTop);



/*--Stop Animation Section--*/

let gallerySpinner = document.querySelector('.gallery-spinner');

function repeatAnimation() {
    gallerySpinner.style.animation = 'none'; // Pause the animation
    gallerySpinner.offsetHeight; // forces a reflow of the element, which restarts the animation.
    gallerySpinner.style.animation = ''; // Restart the animation
}

// The animation iteration event is triggered every time the animation completes one cycle, so this function will run each time the animation ends. 
gallerySpinner.addEventListener('animationiteration', repeatAnimation);

    