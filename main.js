document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault(); 

    let isValid = true;

    
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    document.querySelectorAll(".error-message").forEach((el) => {
        el.textContent = "";
        el.style.visibility = "hidden";
    });

    
    if (name === "") {
        showError("name", "Full Name is required");
        isValid = false;
    }

   
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailPattern)) {
        showError("email", "Enter a valid email");
        isValid = false;
    }

    
    let phonePattern = /^[0-9]{10}$/;
    if (!phone.match(phonePattern)) {
        showError("phone", "Enter a valid 10-digit phone number");
        isValid = false;
    }

    
    if (password.length < 6) {
        showError("password", "Password must be at least 6 characters");
        isValid = false;
    }

    
    if (confirmPassword !== password) {
        showError("confirmPassword", "Passwords do not match");
        isValid = false;
    }

    
    if (isValid) {
       alert("Registration Successful!");
        document.getElementById("registrationForm").reset();
    }
});

function showError(inputId, message) {
    let inputField = document.getElementById(inputId);
    let errorField = inputField.nextElementSibling;
    errorField.textContent = message;
    errorField.style.visibility = "visible";
}