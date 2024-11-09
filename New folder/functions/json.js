let emp={
    name:'mariya',
    grd:'bsc',
    salary:89000,
    dept:'finance'
}
console.log(emp);
//JSON JAVASCRIPT OBJECT NOTATION
// //to comunicte betw clint and server  //lightweight
let jsonfile=JSON.stringify(emp)

console.log(jsonfile);


//remove json

let removedJson=JSON.parse(jsonfile)
console.log(removedJson);