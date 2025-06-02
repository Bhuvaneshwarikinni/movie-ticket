document.addEventListener('DOMContentLoaded', () => {
    const switchLinks = document.querySelectorAll('.switch');
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');

    switchLinks.forEach(link => {
        link.addEventListener('click', () => {
            signupForm.classList.toggle('active');
            loginForm.classList.toggle('active');
        });
    });

    // Signup Event
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = signupForm.querySelector('input[type="email"]').value;
        const password = signupForm.querySelector('input[type="password"]').value;

        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);

        alert("Sign Up Successful! Now, log in.");
    });

    // Login Event
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = loginForm.querySelector('input[type="email"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;

        const savedEmail = localStorage.getItem("userEmail");
        const savedPassword = localStorage.getItem("userPassword");

        if (email === savedEmail && password === savedPassword) {
            alert("Login successful! Welcome");
	    window.location.href = "main_web.html";
        } else {
            alert("Invalid credentials. Please try again.");
        }

        
	
    });
});
