// let paymentA=new Promise((resolve,reject)=>{
//     let status=true;

//     if(status){
//         setTimeout(resolve,1000,'Payment A successs')
//     }else{
//         setTimeout(reject,2000,'Payment A failed')
//     }
// })

// paymentA.then(res=>console.log(res))
// .catch(err=>console.log(err))

// console.log(paymentA);

//handling more than one promise
let paymentA=new Promise((resolve,reject)=>{
    let status=false;

    if(status){
        setTimeout(resolve,1000,'Payment A successs')
    }else{
        setTimeout(reject,2000,'Payment A failed')
    }
})
let paymentB=new Promise((resolve,reject)=>{
    let status=true;

    if(status){
        setTimeout(resolve,2000,'Payment B successs')
    }else{
        setTimeout(reject,2000,'Payment B failed')
    }
})
let paymentC=new Promise((resolve,reject)=>{
    let status=true;

    if(status){
        setTimeout(resolve,3000,'Payment C successs')
    }else{
        setTimeout(reject,2000,'Payment C failed')
    }
})

// Promise.all([paymentA,paymentB,paymentC])
// .then(res=>console.log(res))
// .catch(err=>console.log(err))

// Promise.allSettled([paymentA,paymentB,paymentC])
// .then(res=>console.log(res))
// .catch(err=>console.log(err))

Promise.race([paymentA,paymentB,paymentC])
.then(res=>console.log(res))
.catch(err=>console.log(err))
console.log(paymentA,paymentB,paymentC);

