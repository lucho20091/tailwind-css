const container = document.querySelector(".container")
import { data } from "./data.js"

// Flexbox
const keys = Object.keys(data)
const table = document.createElement("table")
table.style.textAlign = "left"
table.innerHTML = `
  <tr>
    <th>CSS</th>
    <th>Tailwind</th>
    <th>Category</th>
  </tr>`
container.appendChild(table)

let html = ``
for (let item in data.flexbox){
    html += `
<tr>
    <td>${item}</td>
    <td>${data.flexbox[item]}</td>
    <td>${keys[0][0].toUpperCase() + keys[0].slice(1)}</td>
</tr>
    `
}

// Display

for (let item in data.display){
    html += `
<tr>
    <td>${item}</td>
    <td>${data.display[item]}</td>
    <td>${keys[1][0].toUpperCase() + keys[1].slice(1)}</td>
</tr>
    `
}

table.innerHTML += html




































// for (let i = 0; i < pEl.length; i++){
//     const text = pEl[i].textContent
//     const index = text.indexOf("-")
//     const newString = text.slice(index + 2)
//     pEl[i].textContent = text.slice(0, index + 2)
//     const newEl = document.createElement("span")
//     newEl.textContent = newString
//     newEl.style.padding = "0 5px"
//     newEl.style.border = "4px solid blue"
//     newEl.style.fontSize = "16px"
//     pEl[i].appendChild(newEl)
//     pEl[i].style.fontSize = "16px"
//     pEl[i].style.margin= "4px"
// }

// for (let i = 0; i < h1El.length; i++) {
//     h1El[i].style.fontSize = "22px"
// }

// body.style.padding = "20px"

