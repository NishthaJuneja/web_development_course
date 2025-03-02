// const btn =document.getElementById("btn")
 //const body = document.querySelector("body")
// event handler
//  btn.onclick = () =>{         
//     console.log("hello from js file")
//  }
//  btn.onclick = () =>{
//     console.log("hello from js file2")
//  } this overwrite it last one 


//event listener  // this execute all events not the last one means dont overwrite it
// btn.addEventListener('click',function(){
//     console.log("hello from file")
// })
// btn.addEventListener('click',function(){
//     console.log("hello from file2")
// })
// btn.addEventListener('click',(event_object)=>{
//     const input_value = prompt("color change ?")
//     console.log(input_value)
//     body.style.backgroundColor = `${input_value}`
//     console.log(event_object.target)
    // const confirm_box = confirm("color change?")
    //     console.log(confirm_box) //return true or false
    
// })

const submit = document.getElementById("submit");
const color_name = document.getElementById("color_name");
let p = document.createElement("p")
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    //console.log(e)
//body.style.backgroundColor = `${color_name.value}`
p.innerText = color_name.value
document.body.appendChild(p)
})