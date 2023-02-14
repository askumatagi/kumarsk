// let element=document.getElementById('demo').innerHTML='my class'
// console.log(element);

// let element1=document.getElementsByClassName('test').innerHTML="good class"
// console.log(element1)


//dom methods
//1.get elementary id

// let d=document.getElementById('demo').style.background="green";
// console.log(d);
// document.write(d);

// let ele=document.createElement('h2');
// console.log(ele);
// ele.innerHTML="hello";

// let zoom=document.getElementsByClassName('test');
// console.log(zoom);
// console.log(zoom[0]);
// console.log(a);

// let y1=document.querySelectorAll('#demo10');
// console.log(y1);

// let btn=document.querySelector('button');
// console.log(btn);
// btn.onclick=()=>{
//     document.body.style.backgroundColor="red";
// }

//3rd method
let btn1=document.querySelector('button');
btn1.addEventListener('click',()=>{
    document.body.backgroundColor="pink";
})

let element=document.createElement('input')