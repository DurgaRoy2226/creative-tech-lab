window.onload = function () {
  let name = prompt("Enter your name:");
  if (name && name.trim() !== "") {
    document.getElementById("welcomeText").textContent = "Welcome, " + name + "!";
  } else {
    document.getElementById("welcomeText").textContent = "Welcome, Guest!";
  }
};
