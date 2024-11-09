//primitive datatypes
// let, var, const
let name='mariya'
console.log(name);
name='rose'
console.log(name);

// sting means 'number' 'number+439749' '68787##%#4' or " "

// var numer=10;
// numer=20;
// console.log(numer);

// const hello=10;  //const unable to reassign

// let number=10;
// let number2=11;
// let sum;
// sum=number+number2;

// console.log("addutinon"+" " +sum);

let arr=['january','february','march','april']
let arr3=[]

arr.map((e)=>{
let result=(e+222);
arr3.push(result)

console.log(arr);

})

    

console.log(arr);
let mapping=arr.map((e)=>{

return  e.toString() .toUpperCase().slice(0,3) 
})
console.log(mapping);

var color=['rose','lotu','white','yellow']
 var sArr=color.filter((u)=>{

return u=='white'

})
console.log(sArr);