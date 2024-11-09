//arrow function

//function expression
// let sum=function sumOfTWo(n1,n2){

// }
// sum()

//arrow function

// let sub=(n1,n2)=>{
// //subtraction and multiplication
// }
// console.log('hello');

// const fetchData=async()=>{
//     let data=await fetch('https://jsonplaceholder.typicode.com/users')
//     let response=await data.json()
//     console.log(response);


// }
// fetchData()




let fetchData1=async() =>{

  let data=await fetch('https://jsonplaceholder.typicode.com/users')

  // let filtere=data.filtere(item => item.id)
console.log(filtere);
  let response=await data.json()
  console.log(response);
}
fetchData1()




