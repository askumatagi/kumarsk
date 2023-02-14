// //ananymous function

// let a=function(){
//     console.log("hello");
// }
// a()

// //named function
// function demo(){
//     console.log("hi hello");
// }
// demo()
// //console.log(demo);//function body
// //''''console.log(demo());//hi hello,undefined

// //first class function
// let a1=function(){
//     console.log("mr cool");
// }
// a1()

// //function with expression
// let a2=function(){
//     console.log("namskara");
// }
// a2()

// //higher order function
// function hof(x,y,task){
//     a=task(x,y);
//     return a;
// }
// let add=hof(20,40,function(x,y)
// {
//     return x+y;
// })
// console.log(add);

// let sub=hof(80,50,function(x,y)
// {
//     return x-y;
// })
// console.log(sub);

// let mul=hof(3,2,function(x,y)
// {
//    return x*y;
// })
// console.log(mul);

// //make js code syncronus to asyncronus by using set time out
// console.log("executes 1");
// setTimeout(function()
// {
//     console.log("executes 2");
// },10000)
// console.log("executes 3");

// ///////////////arrays...................
// let a=[1,"hello",true,false,undefined,null,function a(){}];
// console.log(a);
// console.log(typeof a);
// console.log(Array.isArray(a));

// //push
// let array=[100,200,300,400]
// console.log(array.push("500","hi"));
// console.log(array);

// //unshift
// let array1=[100,200,300,400]
// console.log(array1.unshift("000"));
// console.log(array1);

// //pop
// let array2=[100,200,300,400]
// console.log(array2.pop("000"));
// console.log(array2);

// //shift -->removes first element
// let array3=[100,200,300,400]
// console.log(array3.shift());
// console.log(array3);

// //slice metheod
// let array4=[600,200,300,400,800]
// console.log(array4.slice(1,4));//include starting index exclude last index
// console.log(array4);

//splice
// let array5=[600,200,300,400,800]
// console.log(array5.splice(1,2,"hi","hello","hey"));//include starting index exclude last index
// console.log(array5);

//fill
// let array6=[600,200,300,400,800]
// console.log(array6.fill(4));//include starting index exclude last index
// console.log(array6);

//concat
// let array7=[600,200,300,400,800];
// let array8=["hi","helllo"];
// console.log(array7.concat(array8));//include starting index exclude last index
// console.log(array7.concat(array8));

//includes
// let array9=[600,200,300,400,800]
// console.log(array9.includes(400));//include starting index exclude last index
// console.log(array9);

// let array12=[];//empty array
// console.log(array12);
// console.log(typeof array12);
// console.log(Array.isArray(array12));
// console.log();

// let array13=[1000,2000,30000,40000]
// console.log(array13);
// console.log(array13.length);//6
// console.log(array13[9]);//undefined

// array13[0]="rockey";
// console.log(array13);

// array13[10]="last element";
// console.log(array13);

// array13[5];
// console.log(array13);

// //map method-->returns new array with same length
// let number=[1,2,3,4,5];
// let dn=number.map(n=>n*2)
// console.log(dn);//2,4,6,8,10

// //filter method-->if any element doesent satisfy the condition
// let numb=[1,2,3,4,5];
// let d=numb.filter(n=>n>1)
// console.log(d);

//reduce
// let number2=[1,2,3,4,5];
// let initialvalue=0;
// let result=number2.reduce((accu,value)=>value+accu,initialvalue)
// console.log(result);