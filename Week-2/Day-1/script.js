// 1. const & let
const APP_NAME = "ES6 Practice";
const VERSION = 1;

// 2. Template Literals
const student = "Durga-Roy";
const course = "Web Development";

// 3. Object Destructuring
const theme = { primary: "Black", secondary: "purple" };
const { primary, secondary } = theme;

// 4. Array Spread
const fruits1 = ["kivi", "pomegranate"];
const fruits2 = ["mango", "graps"];
const allFruits = [...fruits1, ...fruits2];

// 5. Rest Parameters
const showHobbies = (...hobbies) => hobbies.join(", ");

// 6. Arrow Function
const area = (l, w) => l * w;

// 7. Default Parameters
const greet = (name = "Guest") => `Hello, ${name}!`;

// 8. Object Destructuring with Defaults
const car = { brand: "Tesla", model: "Model 3" };
const { brand, model, range = "350km" } = car;

// 9. Map with Arrow Function
const upperFruits = allFruits.map(f => f.toUpperCase());

// Run
document.getElementById('run').addEventListener('click', () => {
    const output = `
App: ${APP_NAME} (v${VERSION})
Welcome to ${APP_NAME}! Current version: ${VERSION}
Student: ${student}, Course: ${course}
Primary Color: ${primary} — Secondary: ${secondary}
Merged Fruits: ["${allFruits.join('","')}"]
Hobbies: ${showHobbies("coding", "sketching", "gaming")}
Area of rectangle (5x4): ${area(5, 4)}
${greet(student)}
${greet()}
Car: ${brand} ${model} — Range: ${range}
Uppercase fruits: ${upperFruits.join(", ")}

-- Demo finished --
    `.trim();

    document.getElementById('output').innerText = output;
    console.log(output);
});

// Clear
document.getElementById('clear').addEventListener('click', () => {
    document.getElementById('output').innerText = '';
    console.clear();
});