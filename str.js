let arr=[1,2,4,5,6,7,8,8]
console.log(arr.length); //length
console.log(arr[0]+arr[1]); //index

arr[0]='mariya'  //reassign
arr[1]='rose'
console.log(arr);

let hello=[]
hello[0]='sunday'
hello[1]='monday'
hello[3]='wednesday'

hello[2]='tuesday'

console.log(hello);
hello.push('thursday')  //push - add element to the array in the end
hello.push('saturday','sunday')
hello.push('thursday')
console.log(hello);

hello.pop()     //pop- remove last element 
// hello.pop() 
// hello.pop() 
// hello.pop() 
console.log(hello);

hello.shift() //remove first element
console.log(hello);

hello.unshift('march') 
console.log(hello.length);  //add as a first element

console.log(hello.slice(1,3));   //arr.slice(starting index, end index)  (1,3) -->1,2 not 3 upto 3 only


