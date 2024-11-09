let reacha=new Promise((resolve,reject)=>{
const reached=true;
if(reached){
    setTimeout(resolve,3000)
    console.log("vidhya reached");

}else{

reject("vidhya not reached")

}




})

let reachb=new Promise((resolve,reject)=>{
const reached=true;
if(reached){


    setTimeout(resolve, 1000,)
    console.log("ramaya reached");
}else{


    reject("ramaya not reached")
}




})

let reachc=new Promise((resolve,reject)=>{

const reached=false;
if(reached){

    setTimeout(resolve, 1000)
    console.log("suba reached");
}else{


reject("suba is not reached")

}




})
Promise.allSettled([reacha,reachb,reachc])
.then((message)=>console.log(message))
.catch((message)=> console.log(message))


