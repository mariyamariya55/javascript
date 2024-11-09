let arr=['apple','mango','lemon','onion']
// console.log(arr);
// console.log(arr.length);
// arr.push("watermelon");
// console.log(arr);
// arr.push('karat','fuite')
// arr.push('tomoto')

// console.log(arr);
// arr.pop()
// console.log(arr);
// arr.pop()
// console.log(arr);
// arr.shift()
// console.log(arr);
// arr.unshift('latfigure');
// console.log(arr);

arr.shift()
console.log(arr);
arr.unshift('tree')
console.log(arr);
console.log(arr.slice(1,4))

// arr.map((fruit)=>{
//  console.log(fruit);
// })

 let week=['mon','tue','wed','thurs','fri','sat']

// let newWeek=[]
// week.map((days)=>{
//      newWeek.push(days + 'day')
  
// })
// console.log(newWeek);

let number=[1,2,3,4,5,6,7]
let number2=[]
number.map((n)=>{
    console.log(n*2);
  let result= (n*3);
  number2.push(result)
})

console.log(number2);

let mappedNumber= number.map((n)=>{
    return n*3
 
})
console.log(mappedNumber);
let fileredWeek= week.filter((w)=>{
   return w=='sat'
})

console.log(fileredWeek);



let veg=['karat', 'bitruit', 'onion']

 let fArr=veg.filter((n)=>{

return n=='onion'

})
console.log(fArr);