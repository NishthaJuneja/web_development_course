//let user = document.getElementById('user-id')

async function fetch_user(){
    let response = await fetch("https://api.github.com/users/nishtha");
    let result = await response.json();
    console.log(result)
}
fetch_user();

// document.getElementById('btn').addEventListener('click',()=>{
//     let user_id = user.value
//     console.log(user_id)
// })
// https://api.github.com/users/username