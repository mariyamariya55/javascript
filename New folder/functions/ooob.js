// function cat(gender,color,type,price){
//     this.gender=gender,
//     this.color=color,
//     this.type=type,
//     this.price=price

// }
// let cat1=new cat("female","black","animal",5000)
// console.log(cat1)

// function dog(gender,color,food,price,country,name){
// this. gender=gender,
// this.color=color,
// this.food=food,
// this.pric=price,
// this.country=country
// this.name=name


// }
// let dog1=new dog("male","black","biscuits",9000,"india","atlass")
// console.log(dog1)

// function bike(name,brand,price,color){
//     this.name=name,
//     this.brand=brand,
//     this.price=price,
//     this.color=color
// }
// let bike1=new bike("splender","honda",70000,"red")
// console.log(bike1)


// function mobile(name,color,price,ram,gp,sim){
//     this.name=name,
//     this.color=color,
//     this.price=price,
//     this.ram=ram,
//     this.gp=gp,
//     this.sim=sim
// }
// let mobile1=new mobile("redmi","shadow",15000,"four","jio")
// console.log(mobile1)

function tv(company,color,price,type){
    this.company=company,
    this.color=color,
    this.price=price,
    this.type=type
}

let tv1=new tv("lg","black",7000,"led")
console.log(tv1)
console.log(tv1.company)

//destructuring

console.log(tv1);
// let {company, color}=tv1   (if u need u can take remaining value by using rest otherwise no need)
let {company, color,...rest}=tv1 
console.log(company);

console.log(rest);

// ...rest - it wll take the remainng value

