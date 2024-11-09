class pizzaMaker{
    constructor(title,toppings,price,count){
      
        this.title=title,
        this.toppings=toppings,
        this.price=price,
        this.count=count
    }
    bake(){
        return `make ${this.title} with ${this.toppings}`
    }
    bill(){
        return this.price * this.count
    }
}

let chickenPizza= new pizzaMaker('chicken pizza','olives',80,3)
// console.log(chickenPizza.bake());
// console.log(chickenPizza.bill());

//example of inheritance
class createChildPizza extends pizzaMaker{
    #name='Mariya Rose'  //private  (encapsulation)
    constructor(id,title,toppings,price,count,size){
        super(title,toppings,price,count)
        this.id=id,
        this.size=size
    }
   getName(){
    return this.#name
   }
   setName(val){
    return this.#name=val
   }

}

let margeritaPizza=new createChildPizza(1,'margarita',['caps','olives'],299,2,'medium')

console.log(margeritaPizza.bill());  //here i didn't mentioned method in child but it will automatically taking the methods
//of parent

console.log(margeritaPizza.bake());

margeritaPizza.count=1;
console.log(margeritaPizza);
console.log(margeritaPizza.bill()); 

margeritaPizza.setName('Pizza lover')
console.log(margeritaPizza.getName());