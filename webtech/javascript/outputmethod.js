// //OUTPUT VISIBLE IN WEB PAGE
// let a=1;
// let b=2;
// let c=a+b;
// document.write(c);
// document.write("web class");

// //WRITELN IS USED TO SPACE B/W THE O/P
// let v=2;
// let m=3;
// let z=(v+m);
// document.writeln(z);
// document.writeln(z);

// //USER OUTPUT
// let p=8;
// let s=10;
// let o=(p+s);
// console.log(o);

// // // DYNAMIC INPUT IN JS and useroutput 
// let x=Number(prompt("ENTER THE VALUE"));
// let y=Number(prompt("ENTER THE VLUE OF Y"));
// let v1=(x+y);
// console.log(v1);

// // DYNAMIC INPUT IN JS and webpage output using PROMPT(prompt by default in string)
// let x1=prompt("ENTER THE VALUE");
// let y1=prompt("ENTER THE VLUE OF Y");
// let v2=(x1*y1);
// document.writeln(v2);

// //alert has only one button ok
// alert("check the charge of laptop");

// //confirm is also one alert msg and has only two button ok and cancel
// confirm("laptop charge is full");

//implicit type casting
// console.log(5+'5');//5 is in string converted into integer and concated
// console.log(5-'5');//5 is converted to number and substracted
// console.log(5+5);//number

// //EXPLICIT TYPE CASTING
// let f=Number("hi");
// console.log(f,typeof f);

// let f1=Number(123);
// console.log(f1,typeof f1)

// let f2=true;
// console.log(f2,typeof f2);

// let f3="true";
// console.log(f3,typeof f3);

// let f4=String(123);
// console.log(f4,typeof f4);

//OPERATORS
// //AIRTHEMATIC OPERATORS
// let a=10;
// let b=20;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(++a);
// console.log(--b);

// //ASSIGNMENT OPERATOR
// let v=2;
// v+=5;
// console.log(v);
// v-=1;
// console.log(v);
// v*=5;
// console.log(v);
// v/=15;
// console.log(v);


// //COMPARISION OPERATOR
// let y=10;
// let z=6;
// console.log(y==z);
// console.log(y!=z);
// console.log(y===z);
// console.log(y!==z);
// console.log(y<z);

// //LOGICAL OPERATOR
// let d=5;
// let e=6;
// console.log(d<e && e<d);
// console.log(d>e || e>d);

// //STRING
// let a="pmc";
// console.log(typeof a);
// let d='pmc';
// console.log(typeof d);
// let b=`pmc`;
// console.log(typeof b);
// let c="'hi'";
// console.log(c);
// let e='"hii"';
// console.log(e);
// let d1="amit";
// let d2=101;
// let d3=1000;
// console.log(`${d1} is of id ${d2} earning ${d3}`);

// let v1="amit kumar";
// console.log(v1.length);
// console.log(v1.endsWith("r"));
// console.log(v1.slice(0,7));
// console.log(v1.split('').reverse('').join(''));

// // bigdint
// let a1=BigInt("123455");
// console.log(a1);
// let a2=BigInt(12323412);
// console.log(a2);
// // let a3=BigInt("fjkf");
// // console.log(a3);//error


// //number
// let a4=333;
// console.log(typeof a4);
// let a5=Number(true);
// console.log(typeof a5 , a5);
// let a6=Number("hiiji");
// console.log(typeof a6,a6);

// //null
// console.log(null,typeof null);

// //boolean
// let a7=Boolean(213);
// console.log(typeof a7,a7);
// console.log("true"); 
// let b1=true;
// console.log(typeof b1,b1);
// let b2=Boolean("true");
// console.log(typeof b2,b2);
// let b3=Boolean("TRUE");
// console.log(typeof b3,b3);
    

var v=10;
var v1=11;
console.log(v);
console.log(v1);
let v33=12;
const v44=21;
function demo()
{
    let b=10;
    console.log(b);
}
demo()