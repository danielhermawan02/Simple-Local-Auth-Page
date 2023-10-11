document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const username = document.getElementById("input_Username").value;
            const password = document.getElementById("input_Password").value;

            // console.log("username : " + username)
            // console.log("password : " + password)

            // You can add your login logic here, for example:
            const storedData = localStorage.getItem(username); // Retrieves the JSON string
            const parsedData = JSON.parse(storedData); // Parses the JSON string into a JavaScript object

            // console.log(parsedData.username); // Outputs username : "asd"
            // console.log(parsedData.password); // Outputs password : "asd"
            if (localStorage.getItem(username) != null) {
                if (parsedData.password == password) {
                    alert("Selamat datang " + username + "!");
                    window.location.href = "home.html";
                }
                else {
                    alert("Masukkan password yang benar!")
                }
            } 
            else {
                alert("Masukkan username dan password yang benar!");
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();
            // const firstName = document.getElementById("inputFirstName").value;
            // const lastName = document.getElementById("inputLastName").value;
            const username = document.getElementById("inputUsername").value;
            const password = document.getElementById("inputPassword").value;
            // const passwordConfirm = document.getElementById("inputPasswordConfirm").value;

            // Check if the username already exists in local storage
            if (localStorage.getItem(username)) {
                alert("Username sudah terpakai, pilih username lain.");
            } else {
                // Store the user in local storage (for demonstration purposes)
                localStorage.setItem(username, JSON.stringify({ username, password }));
                alert("Registrasi berhasil, silahkan login.");
                
                // Redirect to the login page after registration
                window.location.href = "login.html";
            }
        });
    }
});