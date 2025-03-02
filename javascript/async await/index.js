// async function fun1(){  //async functions return promise object and normal function returns particular value
//     return "hello";  
// }
// let x = fun1();
// console.log(x);

//promise methods

function api1(){
    return new Promise ((res, rej)=>{
        setTimeout(() => {
            
            res("api1")
        }, 5000);
    })
}
function api2(){
    return new Promise ((res, rej)=>{
        setTimeout(() => {
            
            res("api2")
        }, 7000);
    })
}
function api3(){
    return new Promise ((res, rej)=>{
        setTimeout(() => {
            
            res("api3")
        }, 2000);
    })
}

// let x = api1()
// console.log(x)
//  api2().then((data)=>{
//     console.log(data)
//  })

// api3().then((data)=>{
//     console.log(data)
// })

// let x = Promise.all([api1(),api2(),api3()]).then((data)=>{  //promise all works for fullfilled , it works paralelly as the longest time taken by the promise at that time all the promises execute
//     console.log(data)
// })

//promise.allsettled works for settled in which the promise can either fullfilled or rejected
// let x = Promise.allSettled([api1(),api2(),api3()]).then((data)=>{  //promise all works for fullfilled
//     console.log(data)
// })

// promise.any can ignore rejected promise and it can pick the first fullfilled promise
// let x = Promise.any([api1(),api2(),api3()]).then((data)=>{  //promise all works for fullfilled
//     console.log(data)
// })

//promise.race can work with first settled promise
let x = Promise.race([api1(),api2(),api3()]).then((data)=>{  //promise all works for fullfilled
    console.log(data)
})
