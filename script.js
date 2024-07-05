const pEl = document.querySelectorAll("p");
const h1El = document.querySelectorAll("h1");
const body = document.querySelector("body");

for (let i = 0; i < pEl.length; i++){
    const text = pEl[i].textContent
    const index = text.indexOf("-")
    const newString = text.slice(index + 2)
    pEl[i].textContent = text.slice(0, index + 2)
    const newEl = document.createElement("span")
    newEl.textContent = newString
    newEl.style.textDecoration = "underline blue"
    newEl.style.fontSize = "22px"
    pEl[i].appendChild(newEl)
    pEl[i].style.fontSize = "22px"
}

for (let i = 0; i < h1El.length; i++) {
    h1El[i].style.fontSize = "22px"
}

body.style.padding = "20px"