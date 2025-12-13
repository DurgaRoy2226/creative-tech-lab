let page = document.getElementById("page");

function changeColor(color) {
    page.style.color = color;
}

function changeFont() {
    let selected = document.getElementById("fontSelect").value;
    page.style.fontFamily = selected;
}

function changeSize(value) {
    let current = parseInt(window.getComputedStyle(page).fontSize);
    page.style.fontSize = (current + value) + "px";
}

function applyStyle(style) {
    if (style === "bold") page.style.fontWeight = "bold";
    if (style === "italic") page.style.fontStyle = "italic";
    if (style === "underline") page.style.textDecoration = "underline";
}

function removeStyle(style) {
    if (style === "bold") page.style.fontWeight = "normal";
    if (style === "italic") page.style.fontStyle = "normal";
    if (style === "underline") page.style.textDecoration = "none";
}
