let studnt=[]


let student1={name:'keerthana',
    lastname:'keerthi',
    mark1:89,
    mark2:25,
    mark3:50,
    
    total:function(){
        return this.mark1+ this.mark2 +this.mark3
    },
    avg:function(){

        return Math.floor(this.total()/3)
    }
    

}


console.log("name:",student1.name,student1.lastname);
console.log("total mark:",student1.total());
console.log("average mark:",student1.avg())






    
let student2={

name:'roselin',
lastname:'rose',
mark1:90,
mark2:80,
mark3:80,

total:function(){

return this.mark1+this.mark2+this.mark3
},

avg:function(){
    return this.total()/3;
}



}
// console.log("name:",student2.name,student2.lastname);
// console.log("total mark:",student2.total());
// console.log("avg:",student2.avg());

 let student3={

name:'yashmi',
lastName:'yash',
mark1:79,
mark2:56,
mark3:89,


total:function(){

return this.mark1+this.mark2+this.mark3

},

avg:function(){

return this.total()/3

}


}
console.log("name:",student3.name,student3.lastName);


console.log("total mark:", student3.total())
console.log("average mark",student3.avg());


 let student4={


name:'suba',
lastName:'subi',
mark1:65,
mark2:74,
mark3:89,


total:function(){

return this.mark1+this.mark2+this.mark3


},

avg:function(){

return this.total()/3

}


}
// console.log("name:",student4.name,student4.lastName);

// console.log("total marks",student4.total());
// console.log("average mark",student4.avg());

student5={

name:'navitha',
lastName:'navi',
mark1:40,
mark2:67,
mark3:50,

total:function(){

    return this.mark1+this.mark2+this.mark3
},

avg:function(){

return Math.floor(this.total()/3)

}

}

console.log("name:",student5.name,student5.lastName);
console.log("total marks:", student5.total());
console.log("average mark",student5.avg());


studnt.push(student1,student2,student3,student4,student5)
console.log(studnt);

let filterdarray=studnt.filter((y)=>{

return y.total=total<70
 
})

console.log(filterdarray);