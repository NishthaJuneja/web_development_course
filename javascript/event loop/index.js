function search_food(item, cb1){
    console.log("searching start",item , ".........")
    setTimeout(function timer1(){
        let data = `list of ${item}`
        cb1( item,data);
    },3000)
}
function order_food(item,cb2){
    console.log("select",item);
    setTimeout(function timer2(){
        let id = Math.floor(Math.random()*99999);
        console.log("order created sucessfully with id no.", id)
        cb2(id);
    },4000)
}
function payment(item ,id , cb3){
    console.log(`payment started for ${item} with id no. ${id}` )
    setTimeout(function timer3(){
        let status = true;
        cb3(status)
    },6000)
}
search_food("burger", function fun1( item,data){
    console.log(data)
    order_food(item , function fun2( order_id){
        console.log(order_id)
        payment(item , order_id, function fun3(response){
            console.log("payment successful with status", response)
        })
    })
})