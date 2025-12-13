// Rectangle area function
function getArea(l, w) {
    return l * w;
}

// Vote eligibility function
const voteCheck = (age) => {
    return age >= 18 ? "You can vote" : "You cannot vote";
};

// Even or odd
function checkEvenOdd(num) {
    return num % 2 === 0 ? "Even Number" : "Odd Number";
}

// Button Functions
function calcArea() {
    let l = Number(document.getElementById("len").value);
    let w = Number(document.getElementById("wid").value);

    if (l <= 0 || w <= 0 || isNaN(l) || isNaN(w)) {
        document.getElementById("resArea").innerText = "Enter valid positive numbers!";
        return;
    }

    document.getElementById("resArea").innerText = "Area: " + getArea(l, w);
}

function checkVote() {
    let age = Number(document.getElementById("vAge").value);

    if (age <= 0 || isNaN(age)) {
        document.getElementById("resVote").innerText = "Enter a valid age!";
        return;
    }

    document.getElementById("resVote").innerText = voteCheck(age);
}

function checkNum() {
    let n = Number(document.getElementById("num").value);

    if (isNaN(n)) {
        document.getElementById("resNum").innerText = "Enter a valid number!";
        return;
    }

    document.getElementById("resNum").innerText = checkEvenOdd(n);
}
