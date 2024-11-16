// JavaScript to handle the popup functionality
const openPopupButton = document.getElementById('openPopup');
const popupContainer = document.getElementById('popupContainer');
const closePopupButton = document.getElementById('closePopup');

// Show the popup when "Open Popup" button is clicked
openPopupButton.addEventListener('click', () => {
    popupContainer.style.display = 'flex';
});

// Close the popup when "×" button is clicked
closePopupButton.addEventListener('click', () => {
    popupContainer.style.display = 'none';
});

// Close the popup when clicking outside the popup content
popupContainer.addEventListener('click', (e) => {
    if (e.target === popupContainer) {
        popupContainer.style.display = 'none';
    }
});



// Get the elements
const popup1 = document.getElementById('popup1');
const openPopup1 = document.getElementById('openPopup1');
const backButton1 = document.getElementById('back1');



// Open the pop-up when button is clicked
openPopup1.addEventListener('click', () => {
    popup1.style.display = 'flex';
});

backButton1.addEventListener('click', () => {
    popup1.style.display = 'none';  // Close the popup
});
// Close the popup when clicking outside the popup content
popup1.addEventListener('click', (e) => {
    if (e.target === popup1) {
        popup1.style.display = 'none';
    }
});



// JavaScript to handle the popup functionality
const openmodal = document.getElementById('openmodal');
const modal = document.getElementById('modal');
const back2 = document.getElementById('back2');

// Show the popup when "Open Popup" button is clicked
openmodal.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Close the popup when "×" button is clicked
back2.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the popup when clicking outside the popup content
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// JavaScript to handle the popup functionality
const openmodal3 = document.getElementById('openmodal3');
const modal3 = document.getElementById('modal3');
const back3 = document.getElementById('back3');

// Show the popup when "Open Popup" button is clicked
openmodal3.addEventListener('click', () => {
    modal3.style.display = 'flex';
});

// Close the popup when "back" button is clicked
back3.addEventListener('click', () => {
    modal3.style.display = 'none';
});

select3.addEventListener('click', () => {
    modal3.style.display = 'none';
});

// Close the popup when clicking outside the popup content
modal3.addEventListener('click', (e) => {
    if (e.target === modal3) {
        modal3.style.display = 'none';
    }
});


// Quit

const popup4 = document.getElementById("popup4");
const openPopupBtn4 = document.getElementById("openPopup4");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

openPopupBtn4.addEventListener("click", () => {
    popup4.style.display = "flex";
});

noBtn.addEventListener("click", () => {
    popup4.style.display = "none";
});

yesBtn.addEventListener("click", () => {
    alert("Quitting the game...");
    popup4.style.display = "none";
});

// Close the popup when clicking outside the popup content
popup4.addEventListener('click', (e) => {
    if (e.target === popup4) {
        popup4.style.display = 'none';
    }
});

const popup = document.getElementById('popup');
const openPopup = document.getElementById('openPopup');
const resume = document.getElementById('resume');
const restart = document.getElementById('restart');
const quit = document.getElementById('quit');

// Open the pop-up when button is clicked
    openPopup.addEventListener('click', () => {
    popup.style.display = 'flex';
});

// Add functionality to buttons
resume.addEventListener('click', () => {
    popup.style.display = 'none';  // Close the popup
    alert('Resuming the game');
});

restart.addEventListener('click', () => {
    popup.style.display = 'none'; 
    alert('Restarting the game');
});

quit.addEventListener('click', () => {
    popup.style.display = 'none'; 
    alert('Quitting the game');
});


function replaceDiv() {
    // Hide the first div
    document.getElementById("instructions").style.display = "none";
    // Show the second div
    document.getElementById("popup1").style.display = "block";
}