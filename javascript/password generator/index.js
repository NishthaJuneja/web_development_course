

const btn = document.getElementById("gen_pass")
const new_pass = document.getElementById("new_pass")
const range = document.getElementById("range")
const range_value = document.getElementById("range_value")

const uppercase =document.getElementById("capital")
const lowercase =document.getElementById("small")
const number =document.getElementById("number")
const symbol =document.getElementById("symbol")
const copy_btn = document.getElementById("copy_btn")
//range_value.innerText = range.value
range.addEventListener("input",(e) => {
    range_value.innerText = e.target.value

})
btn.addEventListener("click",()=>{
    let uppercase_str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let lowercase_str = "abcdefghijklmnopqrstuvwxyz"
    let number_str = "123456789"
    let symbol_str = "!@#$%^&*()+?/';./|{[]-_}"
    let final_str  = ''
    if(uppercase.checked){
        final_str+=uppercase_str
    }
    if(lowercase.checked){
        final_str+=lowercase_str
    }
    if(number.checked){
        final_str+=number_str
    }
    if(symbol.checked){
        final_str+=symbol_str
    }
    if(final_str === ''){
        alert("Please select atleast one field")
    }
    let latest_pass =''

    for (let i = 0; i<range.value; i++){
        let random_number = Math.floor( Math.random()*final_str.length)
        //console.log(random_number)
        latest_pass+=final_str[random_number]
    }
    new_pass.innerText = `${latest_pass}`

    copy_btn.addEventListener("click", async()=>{
        await navigator.clipboard.writeText(new_pass.innerText)
        alert("password copied")
    })


})
