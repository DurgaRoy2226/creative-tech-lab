const avatar = document.getElementById("avatar");
const nameEl = document.getElementById("name");
const emailEl = document.getElementById("email");
const statusEl = document.getElementById("status");

async function fetchUser() {
  statusEl.textContent = "Fetching user...";
  
  try {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();

    const user = data.results[0];

    avatar.src = user.picture.large;
    nameEl.textContent = `${user.name.first} ${user.name.last}`;
    emailEl.textContent = user.email;

    statusEl.textContent = "User loaded successfully";
  } catch (error) {
    statusEl.textContent = "Failed to load user";
    console.error(error);
  }
}

function clearCard() {
  avatar.src = "";
  nameEl.textContent = "—";
  emailEl.textContent = "—";
  statusEl.textContent = "Cleared";
}
