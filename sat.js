const numbers15=[1,2,3,4,5,6,7,8,9,10]
let sum=0
let i=0
while(i<numbers15.length){
  if(numbers15[i] %2==0){
    sum+=numbers15[i];
  }
  i++;
  }
console.log(sum);



 const array=[1,2,3,2,3,4,5,6,6,8,5]
const dublicate=array.filter((item, index)=>array.indexOf(item) !==index);
console.log(dublicate)

 let numbers=446
 let lastdigit=numbers%10
 console.log(lastdigit) 
 

//  let num15=-546
//  let result=num15.toString().split('').reverse().join('')
//  console.log(result)
// const number13=-546
// const reversednumber=reversednumber(number13);
// console.log(reversednumber);

// let n=-546
// let isNegative =n<0;
// n=Math.abs(n);
// let reverseNumber=0;
// while(n!==0){

//   let digit=n/10;
//   reversenumber=reversenumber*10+digit;
//   n=Math.floor(n/10);
//   if(isNegative){

//     reversen=
  

let length=7
let width=2
let area=length*width;
console.log('the area of rectangle is')
let permiter=2*(length+width);
console.log('the permiter of your react angle is ' +permiter)

let side=5;
let areasquare=side*side;
console.log('The areaof squar is' + areasquare)