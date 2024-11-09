// class pizzaMaker{
//     constructor(id,title,toppings,price,count){
//         this.id=id,
//         this.title=title,
//         this.toppings=toppings,
//         this.price=price,
//         this.count=count
//     }
//     bake(){
//         return `make ${this.title} with ${this.toppings}`
//     }
//     bill(){
//         return this.price * this.count
//     }
// }

// let chickenPizza= new pizzaMaker(1,'chicken pizza','olives',80,3)
// console.log(chickenPizza.bake());
// console.log(chickenPizza.bill());


class car{
constructor(name,year,price,color,type,bill,count,title){

    this.name=name,
    this.year=year,
    this.price=price,
    this.color=color,
    this.type=type,
    this.bill=bill,
    this.count=count,
    this.title=title
}
    bake(){

        return `make ${this.title} with ${this.name}`
    }

    CreateBill(){
        return this.price * this.count
    }
}
let car1=new car("audi",2014,5000,"white","amini",40,7,"vichele")
console.log(car1.bake());
console.log(car1.CreateBill());

class rose{


constructor(name,color){
    this.name=name,
    this.color=color


}

}
const my=new rose("red rose","red")
// console.log(my.name,my.color );





