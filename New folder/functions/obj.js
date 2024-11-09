let a={}
a.fname='mariya'
a.lname='rose'
a.age=20
a.grd='BE'

console.log(a);

let car={
    color:'black',
    wheels:4,
    brnd:'HONDA',
    colorVar:['blak','blue','green','orange','red']


}
console.log(car.wheels); //dot notation
console.log(car['color']);  //box notation
console.log(car.colorVar);
console.log(car.colorVar[0]);


let b={firstname:'john',lastname:'doe',age:'23',eyecolor:'blue'}

console.log(b)

let hero={

    color:'white',
    movie:['sura','gilli','thaliva','goat','paya'],
    create:'sun cinemas',}


let lastName='hello'
    let student={name: 'mariya',
        grad:'bsc',
        lastName:'Rose',
        fullName:function (){
            return this.name+this.lastName
        }
    }
    
console.log(student.fullName());



// }console.log(hero)
// console.log(hero.color);
// console.log(hero.movie[3

