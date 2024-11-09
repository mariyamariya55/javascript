//creating object using functions

function cars(id, title, price, color){
    this.id=id,
    this.title=title,
    this.price=price,
    this.color=color
}

let car1= new cars(1,'alto', 800000, 'white')
console.log(car1);