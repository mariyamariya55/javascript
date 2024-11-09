// let pattern=/hello/;
// let strng='hello world......Hello to the user'

// console.log(strng.search(pattern));   //0 th index 

// let pattern=/hello/;
// let strng='Hello world......Hello to the user'

// console.log(strng.search(pattern));   //-1 unavailable


let statement='hello world......Hello to the user'

console.log(statement.search(/hello/i)); //i - insencitive (check both caps and small)
console.log(statement.match(/hello/ig));

console.log(statement.replace(/hello/ig,'mariya'));

let pat=/hello/i
let word='hello world......Hello to the user'
console.log(pat.test(word));   //true or fal
console.log(pat.exec(word)); //complete details


