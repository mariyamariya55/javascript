// class shapes{
// constructor(length,width,shapes){

//     this.length=length,
//     this.width=width,
//     this.shapes=shapes
// }

// display(){
// / return `make ${this.length} with ${this.width}`
    
// }
// displayshe(){
//     return this.length+this.width
// }

// }

// let ans=new shapes(5,4,'reactangla')
// console.log(ans)

// // console.log(displayshe());

// class rectangle extends shapes{

//     super(){

//     }

//     findArea(){

//         return this.length+this.wideth
//     }

//     findPerimiter(){

//         return 2*(this.length+this.width)
//     }
//     }
// let answer = new shapes(7,4)
// console.log(answer)


class shapes{

    constructor(length,width){

        this.length=length,
        this.width=width
   
   
    }

    discribe(){
return `make ${this.length} with ${this.width}`
        
    }
        
    }
class rectangle extends shapes{
    constructor(length,width){

        super()


        
this.length=length,
this.width=width


    }

    area(){
        return this.length + this.width
    }

permiter(){

    return 2(this.length + this.width)
}
}
const myreactangle=new shapes(5,4)
console.log(myreactangle.discribe());
console.log(`the area is :$ {myreactngle.area()}`);
console.log('the area is :${myreactangle.permiter() }');