
// let myProm=new Promise((resolve,reject)=>{
//     let users=fetch('https://jsonplaceholder.typicode.com/users')

//     if(users){
//         setTimeout(resolve,3000,users)
//     }else{
//         reject('unable to fetch')
//     }
// })

// myProm.then(res=>console.log(res))
// .catch(res=>console.log(res))

let users=fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then(res=>console.log(res))
.catch(err=>console.error(err))