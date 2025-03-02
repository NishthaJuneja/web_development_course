// promise has three states 
// pending : it is inital state
// fulfilled : it is final state
// rejected : it is final state  either the promise is rejected or fulfilled

// const promise1 = new Promise(function fun1(resolve, reject){  //creation of promise is sync operation
//     resolve("promise resolved");
// }).then(
//     function success(result){
//     console.log(result);
// },
// function reject(err){
//     console.log(err)
// }
// );

// function is_data(item){
//     const promise1 = new Promise(function fun1(resolve, reject){
//         setTimeout(function timer1(){
//             if(item){
//                 resolve("promise resolved")
//             } else{
//                 reject("promise rejected")
//             }
//         },4000)
//     });
//     return promise1;
// }

//  let result = is_data("mfgkvs")
//  result.then(function success(result){
//     console.log(result)
//  })

// let p = new Promise(function(res, rej ){
//     res("promise resolved")
// })
// console.log(p)

// function search_food(item, cb1){
//     console.log("searching start",item , ".........")
//     setTimeout(function timer1(){
//         let data = `list of ${item}`
//         cb1( item,data);
//     },3000)
// }
// search_food("chole chawal", function fun1(item,data){
//     console.log(item)
//     console.log(data)
// })

function search_food(item){
    return new Promise(function fun1(res, rej){
        console.log("searching start",item , ".........")
    setTimeout(function timer1(){
        let data = `list of ${item}`
         res({item,data})
     },3000)
    })
}
function order_food(item){
    return new Promise(function fun2(res, rej ){
        console.log("select",item);
    setTimeout(function timer2(){
        let id = Math.floor(Math.random()*99999);
        console.log("order created sucessfully with id no.", id)
        res({id, item});
    },4000)
    })
}
function payment(item, id){
    return new Promise (function fun3(res,rej){
        console.log(`payment started for ${item} with id no. ${id}` )
    setTimeout(function timer3(){
        let status = true;
        res(status)
    },6000)
    })
}
let result = search_food("pizza").then(function consume1(detail){
    console.log(detail.data);
    return order_food(detail.item);
}).then(function consume2(detail2){
    console.log(detail2.id)
    return payment(detail2.item , detail2.id)
}).then(function consume3(status){
    console.log("payment successfull with status",(status))
})

// order_food(item.item).then(function consume2(id){
//     console.log(id)
//     payment(item.item,id).then(function consume3(status){
//         console.log("payment sucessfull with status",status)
//     })
// })