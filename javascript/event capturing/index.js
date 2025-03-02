// const main_div = document.getElementById("main_div")
// const div1 = document.getElementById("div1")
// const body = document.querySelector("body")

// div1.addEventListener("click", ()=>{
//     console.log("div1")
// },true)
// div2.addEventListener("click", ()=>{
//     console.log("div2")
// })
// main_div.addEventListener("click", ()=>{
//     console.log("maindiv")
// },true)
// body.addEventListener("click", ()=>{
//     console.log("body")
// },true)
//if use true it moves from root to node means from body to main_div then to chid_div this is event capturing it works from top to down but vice versa if we cant use true this is known as event bubbling if we click  on child div it log child_div main_div and body just click on the child_div event 

const box1 = document.querySelector(".box-1")
const box2 = document.querySelector(".box-2")
const items = document.getElementsByClassName("item")

for(let item of items)(
    item.addEventListener("dragstart",(e)=>{
        const data = e.target
        box2.addEventListener("dragover",(e)=>{
            e.preventDefault();
        })
        box2.addEventListener("drop",()=>{
            box2.append(data)
            data =''
        })
    



        box1.addEventListener("dragover",(e)=>{
            e.preventDefault();
        })
        box1.addEventListener("drop",()=>{
            box1.append(data)
            data = ''
        })
    })

)