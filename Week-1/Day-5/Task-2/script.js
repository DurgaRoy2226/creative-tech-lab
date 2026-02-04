function validateForm() {
    let valid = true;

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let pass = document.getElementById("password");

    let nameMsg = document.getElementById("nameMsg");
    let emailMsg = document.getElementById("emailMsg");
    let passMsg = document.getElementById("passMsg");

    // reset messages & shake
    [name, email, pass].forEach(i => i.classList.remove("shake"));
    [nameMsg, emailMsg, passMsg].forEach(m => m.innerText = "");

    if (name.value.trim() === "") {
        nameMsg.innerText = "Name cannot be empty.";
        name.classList.add("shake");
        valid = false;
    }

    if (email.value.trim() === "") {
        emailMsg.innerText = "Email cannot be empty.";
        email.classList.add("shake");
        valid = false;
    }

    if (pass.value.trim() === "") {
        passMsg.innerText = "Password cannot be empty.";
        pass.classList.add("shake");
        valid = false;
    }

    if (valid) alert("Form submitted successfully!");
}

/* THEME SWITCHER -------------------------*/
function setTheme(mode) {
    document.body.className = mode;
}
