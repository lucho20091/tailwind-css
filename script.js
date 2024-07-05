const pEl = document.querySelectorAll("p");

for (let i = 0; i < pEl.length; i++){
    const text = pEl[i].textContent
    const index = text.indexOf("-")
    const newString = text.slice(index + 2)
    pEl[i].textContent = text.slice(0, index + 2)
    const newEl = document.createElement("span")
    newEl.textContent = newString
    newEl.style.textDecoration = "underline blue"
    newEl.style.fontSize = "30px"
    pEl[i].appendChild(newEl)
    pEl[i].style.fontSize = "30px"
}