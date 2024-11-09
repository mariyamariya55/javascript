class sudent{


constructor(name,subject,depatment,mark){

this.name=name,
this.subject=subject,
this.depatment=depatment,
this.mark=mark

}
getdetails(){

    return `${this.name} in ${this.subject} ${this.depatment} having mark ${this.mark}`
}


}

class professor extends sudent{
    constructor(name,subject,depatment,mark,language){
super(name,subject,depatment,mark)
this.language=language


    }
getdetails(){

    return `${this.name} in ${this.mark} ${this.language}`
}

}

sudent.prototype.greeting=function(name){
    return `hello ${this.mark}`
}


class hod extends sudent{


    constructor(name,subject,depatment,salary){

        super(name,subject,depatment)
        this.salary=salary
        
}
getdetails(){

    return `${this.name} in ${this.depatment} happy ${this.salary}`
}

}

let kerthi=new sudent("karhi","maths","civil","80")
let arthi=new professor("adhi","scince","mech","95","hindi")
let mahesh=new hod("mala","english","cs","15000")
console.log(kerthi.getdetails());
console.log(arthi.getdetails());
console.log(mahesh.getdetails());
