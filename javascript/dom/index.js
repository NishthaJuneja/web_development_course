// const heading = document.getElementById('heading')
// heading.innerText = "hello from js file";

// const heading = document.querySelector('h2')
// heading.style.backgroundColor = "pink";
// heading.style.border = "1px solid purple ";

// const new_tag = document.createElement("p");
// new_tag.setAttribute("id","para")
// new_tag.innerText = "paragraph tag"

// const body = document.getElementsByTagName("body")
// body[0].appendChild(new_tag)

let data = ["monitor","laptop", "mouse", "mic", "keyboard"]
const ul = document.getElementById("specs")
for (let i= 0; i<data.length; i++){
    const li_tag = document.createElement("li")
    li_tag.style.backgroundColor = "pink"
    li_tag.style.margin = "5px"
    li_tag.style.padding = "5px"
    li_tag.style.borderRadius = "5px"
    li_tag.style.textAlign = "center"
    li_tag.innerText = data[i]
    ul.appendChild(li_tag)
}