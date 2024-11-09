class emp{
    constructor(name,salary,dept){
        this.name=name,
        this.salary=salary,
        this.dept=dept
    }
    getDetails(){
        return `${this.name} in ${this.dept} having salry ${this.salary}`
    }
}

class developer extends emp{
    constructor(name,salary,dept,lang){
        super(name,salary,dept)
        this.lang=lang
    }
    getDetails(){
        return `${this.dept} ${this.name} knows ${this.lang}`
    }
}

class manager extends emp{
    constructor(name,salary,dept,TeamSize){
        super(name,salary,dept)
       this.TeamSize=TeamSize
    }
    getDetails(){
        return `This manager handling team size ${this.TeamSize}`
    }
}

emp.prototype.greeting=function (name){
    return `hello ${this.dept}`
}


let anitha=new emp('niva',250000,'hr')
let ajay=new manager('suba',60000,'sales',8)
let sujary=new developer('suj',90000,'it','java')
console.log(sujary);
console.log(anitha.getDetails());
console.log(ajay.getDetails());
console.log(
    sujary.getDetails());

    console.log(sujary.greeting('surjay'));


