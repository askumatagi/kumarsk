// let mb={
//     id:101,
//     Name:"xyz",
//     Place:"bug",
// }
// console.log(mb);
// console.log(typeof mb);
// console.log(mb.Name);

// //object inside the object
// let mb={
//     id:101,
//     Name:"xyzz",
//     address:{
//         city:"bng"
//     }
// }
// console.log(mb.address.city);
// console.log(mb.id);
// console.log(mb.Name);
// //change value by using unique type id
// console.log(mb.id=108);
// console.log(mb.address.city="bjp");
// console.log(mb);
// //adding one more id
// console.log(mb.marks=100);
// console.log(mb);


// // //object using this keyword
// let obj={
//     id:101,
//     Name:"asdad",
//    address:function(){
//     let city="bng"
//     let pincode=56086
//     return `${city} ${pincode}`
//    }
// }
// console.log(obj.address());

// let obj1={
//     id:101,
//     Name:"asdsd",
//     address:function a1(){
//         return this.id;
//     }
// }
// console.log(obj1.Name());

// let Ename="basya";
// let obj2={
//     id:104,
//     Name:"adsa",
//     address:function(){
//         return this.Name;
//     }
// }
// console.log(obj2.address());

// //math object
// console.log(Math.round(33.6));
// console.log(Math.ceil(430.2));
// console.log(Math.floor(101.9));
// console.log(Math.sqrt(4));
// console.log(Math.random()*1000);//generating different types of codesor otp
// console.log(Math.ceil(Math.random()*10000).toString(20));//inside tostring we wrote length of alphabets

// let v1=Math.ceil(Math.random()*10000).toString(19);
// console.log(v1);

// //hello design
// let radCol=Math.ceil(Math.random()*10000).toString(18);
// h1=document.querySelector("h1");
// console.log(h1);
// h1.style.background="#$(radCOL)";
// setTimeout(()=>{
//     console.log("hii");
// },4000)
// setTimeout(()=>{
//     console.log("hello");
// },2000)
// setInterval(()=>{
//     console.log("lazy");
// },6000)


// //date checking
// let dt=new Date();
// console.log(dt);

// console.log(dt.getDate());
// console.log(dt.getFullYear());
// console.log(dt.getDay());
// console.log(dt.getMilliseconds());

//keyword
// let key=document.getElementById('demo');
// key.addEventListener('keydown',()=>{
//     console.log('keydown');
// })

// let key3=document.getElementById('demo');
// key3.addEventListener('keyup',()=>{
//     console.log('keyup');
// })

// let key1=document.getElementById('demo');
// key3.addEventListener('keypress',()=>{
//     console.log('keypress');
// })

//mouse events
let d=document.querySelector('button');
d.addEventListener('mouseover',()=>{
    document.body.style.padding="20px";
    document.body.style.backgroundColor="pink";
    document.body.style.border="10px groove red" ;
    
})
