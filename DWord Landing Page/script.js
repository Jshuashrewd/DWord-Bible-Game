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