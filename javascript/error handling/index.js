function search_food(item){
    return new Promise(function fun1(res, rej){
        console.log("searching start",item , ".........")
    setTimeout(function timer1(){
        let data = `list of ${item}`
        
        if (data){
            res({item,data})
        }
        else{
            rej(new Error("list is empty"))
        }
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
        let status = false;
        if(status){

            res(status)
        }
        else{
            rej(new Error(`payment rejected due to some technical error with status ${status}`))
        }
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
//   function reject(err){
//     console.log(err)
//   }
.catch(function reject(err){
    console.log(err)
})
.finally( ()=>{
    console.log("always execute")
})

