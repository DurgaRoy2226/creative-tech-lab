function clearOutput(id) {
  document.getElementById(id).textContent = "";
}

/* TASK 1 – setTimeout (Callback Hell Lite) */
function runTask1() {
  const out = document.getElementById("out1");
  out.textContent = "Fetching user details...\n";

  setTimeout(() => {
    out.textContent += "User data received\n";

    setTimeout(() => {
      out.textContent += "Processing data...\n";
    }, 1000);

  }, 2000);
}

/* TASK 2 – Promise */
function runTask2() {
  const out = document.getElementById("out2");
  out.textContent = "Checking network...\n";

  const simulateFetch = new Promise((resolve, reject) => {
    let isOnline = true;

    setTimeout(() => {
      if (isOnline) resolve("Data fetched successfully");
      else reject("Network error");
    }, 1500);
  });

  simulateFetch
    .then(msg => out.textContent += msg)
    .catch(err => out.textContent += err);
}

/* TASK 3 – Async / Await */
async function runTask3() {
  const out = document.getElementById("out3");
  out.textContent = "Loading posts...\n";

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    const posts = await response.json();

    posts.forEach(post => {
      out.textContent += `• ${post.title}\n`;
    });

  } catch (error) {
    out.textContent += "Error loading posts";
  }
}
