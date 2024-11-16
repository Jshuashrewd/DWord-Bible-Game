// Get elements
const openModalBtn = document.getElementById('signup');
const modalBackground = document.getElementById('modalBackground');
const closeModalBtn = document.getElementById('closeModalBtn');

// Open modal when button is clicked
openModalBtn.onclick = function() {
    modalBackground.style.display = 'block';
};

// Close modal when close button is clicked
closeModalBtn.onclick = function() {
    modalBackground.style.display = 'none';
};

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
    if (event.target === modalBackground) {
        modalBackground.style.display = 'none';
    }
};

// redirect button
document.getElementById('form').addEventListener("submit",
    function(event){
        event.preventDefault();

        if(this.checkValidity()){
            window.location.href = "/DWord User Page/index.html";
        }
        else{
            alert("Please fill in all required fields")
        }
    });




// Get elements
const openModalBtn1 = document.getElementById('signin');
const modalBackground1 = document.getElementById('modalBackground1');
const closeModalBtn1 = document.getElementById('closeModalBtn1');

// Open modal when button is clicked
openModalBtn1.onclick = function() {
modalBackground1.style.display = 'block';
};

// Close modal when close button is clicked
closeModalBtn1.onclick = function() {
modalBackground1.style.display = 'none';
};

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
if (event.target === modalBackground1) {
modalBackground1.style.display = 'none';
}
};

// redirect button
document.getElementById('form1').addEventListener("submit",
function(event){
event.preventDefault();

if(this.checkValidity()){
window.location.href = "/DWord User Page/index.html";
}
else{
alert("Please fill in all required fields")
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