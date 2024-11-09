// let sub1=(n1,n2)=>(n1-n2)
// console.log(sub1(10,5));





// var n=2;
// var n1=4
// let sum;


// let total=()=>{
//     sum=n*n1
// }
// total()
// console.log(sum);






// let n5=12
// let n6=10
// let sum1;

// let sub2=()=>
// {

// sum1=n5-n6



// }

// sub2()
// console.log(sum1);





let today= new Date
let time=today.getTime()
let minutes=today.getMinutes()
let hours=today.getHours()
let seconds=today.getSeconds()
let months=today.getMonth()
let year=today.getFullYear()

console.log(today);
console.log(time);
console.log(minutes);
console.log(hours);
console.log(seconds);
console.log(months);
console.log(year);

let cam=new Date
cam.setDate(11)
console.log(cam);

cam.setFullYear(2010,3,4)
console.log(cam);
const d = new Date("2015-03-25");
console.log(d);
d.setMonth(12)
console.log(d);


const mon=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']

const b=new Date()

let months=mon[b.getMonth()]
console.log(months);


const day=['sun','mon,','tue','wed','thur','fri','sat']

let s=new Date()
let c=day[s.getDay()]
console.log(c);

