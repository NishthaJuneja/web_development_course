// function sum(...num){  //rest operator used in functions and objects
//     let total = num[0]+num[1]+num[2];
//     console.log(num);
//     console.log(total);
// }
// sum(4,5,7);

// let obj =  {
//     title:"objects",
//     tags : "rest , spread",
//     description:"hello everyone"
// }
// let {title,tags,description} = obj  //destructing
// console.log(title);
// console.log(description);

// let {title,...remaining} = obj //rest destructing
// console.log(remaining);

// function obj1(...hello){
//     console.log(hello);
// }
// obj1(obj)

// function obj1({title,tags,description}){
//     //console.log(tags)
//     let tags_array = tags.split(",")
//     console.log(tags_array)
// }
// obj1(obj)

// let arr1 = [34,5,67,9,52]
// let arr2 = [4,78,23,67,11]
// let new_array = [...arr1 , ...arr2] //spread used for arrays
// console.log(new_array)

//for each method it takes function as argument
// let arr = [3,6,89,452,23,67]
// arr.forEach(function(val){
//     console.log(val)
// })

// let arr = [3,6,89,452,23,67]
// const hello = (arr) =>{  //arrow function
//     console.log(arr);
// }
// hello(arr);

//map method
// let arr = [3,6,89,452,23,67]
// const new_array = arr.map((arr) => {
//     arr+=1;
//     return arr;
// });
// console.log(new_array);

//filter method
// let arr = [3,6,89,452,23,67]
// const new_array = arr.filter((val) =>{
//     if (val <=23){
//         return val;
//     }

// })
// //const new_array = arr.filter((val) => val<=23)
// console.log(new_array)

//reduce method
// let arr = [3,6,89,452,23,67]
// const new_array = arr.reduce((accumulator , current_value) =>{  //accumulator = previous_value
//     accumulator = accumulator+current_value;
//     return accumulator
// },1) // 1 means that accumulator startsfrom 1 here , it starts from any number which we initialized there
// console.log(new_array)

let students = [
    { name:"nishtha",course:"btech", branch:"IT"},
    { name:"rohit",course:"btech", branch:"civil"},
    { name:"neha",course:"btech", branch:"cse"},
    { name:"anish",course:"btech", branch:"IT"},
    { name:"mishka",course:"btech", branch:"cse"},
    { name:"ritika",course:"btech", branch:"civil"},
    { name:"vasu",course:"btech", branch:"mechanical"},
    { name:"mukesh",course:"btech", branch:"IT"},
]; 
// const new_array = students.filter((val) =>{
//     if(val.branch === 'civil'){
//         let name = val.name ;
//         console.log(name)
//         return val;
//     }
// })
// console.log(new_array);
const new_array = students.filter((val) =>{
    if(val.branch === 'civil'){
                return val;
    }
}).map((val) => val.name)
console.log(new_array);