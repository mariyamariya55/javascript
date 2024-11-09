class shapes{

    constructor(x, y){
this.xposition=x;
this.yposition=y

    }
    findarea(){

    }
}
class circle extends shapes{

    constructor(x,y,radius){
        this.xposition=x,
        this.yposition=y,
        this.radius=radius
    }
    getarea(){

    }
}
let round=new shapes(1,2,3)
console.log(round);