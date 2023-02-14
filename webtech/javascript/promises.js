let chu=new Promise((resolve,reject)=>{
    let name="yash";
    if(name=="yash")
    resolve(name);
    else
    reject("name is not yash")
});
chu.then((name)=>{
    console.log(name);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("promise finished");
})