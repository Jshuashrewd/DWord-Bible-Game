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