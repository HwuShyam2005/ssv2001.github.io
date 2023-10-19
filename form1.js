document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    const usernameError = document.getElementById("username-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const confirmPasswordError = document.getElementById("confirm-password-error");
  
    function validateUsername() {
      // Validation code for username
      if (username.value.trim() === "") {
        username.classList.add("error");
        usernameError.textContent = "Username is required";
        var element = document.getElementById('username');
        element.style.borderColor = '#ff3860';
        return false;
      } else {
        username.classList.remove("error");
        usernameError.textContent = "";
        var element = document.getElementById('username');
        element.style.borderColor = '#f0f0f0';
        return true;
      }
    }
  
    function validateEmail() {
      // Validation code for email
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (email.value.trim() === "") {
        email.classList.add("error");
        emailError.textContent = "Email is required";
        var element = document.getElementById('email');
        element.style.borderColor = '#ff3860';
        return false;
      } else if (!emailPattern.test(email.value)) {
        email.classList.add("error");
        emailError.textContent = "Invalid email format";
        var element = document.getElementById('email');
        element.style.borderColor = '#ff3860';
        return false;
      } else {
        email.classList.remove("error");
        emailError.textContent = "";
        var element = document.getElementById('email');
        element.style.borderColor = '#f0f0f0';
        return true;
      }
    }
  
    function validatePassword() {
      // Validation code for password
      if (password.value.trim() === "") {
        password.classList.add("error");
        passwordError.textContent = "Password is required";
        var element = document.getElementById('password');
        element.style.borderColor = '#ff3860';
        return false;
      } else if (password.value.length < 8) {
        password.classList.add("error");
        passwordError.textContent = "Password must be at least 8 characters";
        var element = document.getElementById('password');
        element.style.borderColor = '#ff3860';
        return false;
      } else {
        password.classList.remove("error");
        passwordError.textContent = "";
        var element = document.getElementById('password');
        element.style.borderColor = '#f0f0f0';
        return true;
      }
  
    }
  
    function validateConfirmPassword() {
      // Validation code for confirm password
      if (confirmPassword.value.trim() === "") {
        confirmPassword.classList.add("error");
        confirmPasswordError.textContent = "Confirm Password is required";
        var element = document.getElementById('confirm-password');
        element.style.borderColor = '#ff3860';
        return false;
      } else if (confirmPassword.value !== password.value) {
        confirmPassword.classList.add("error");
        confirmPasswordError.textContent = "Passwords do not match";
        var element = document.getElementById('confirm-password');
        element.style.borderColor = '#ff3860';
        return false;
      } else {
        confirmPassword.classList.remove("error");
        confirmPasswordError.textContent = "";
        var element = document.getElementById('confirm-password');
        element.style.borderColor = '#f0f0f0';
        return true;
      }
    }
  
    function validateForm() {
      // Validation of all fields and returning true if valid, false otherwise
        const isUsernameValid = validateUsername();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();

        return isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid;

    }
  
    form.addEventListener("submit", function (e) {
      if (!validateForm()) {
        e.preventDefault(); // Prevent form submission if there are validation errors
      }
    });
  });