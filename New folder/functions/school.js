function student(name,lastname,mark1,mark2,mark3){
this.name=name;
this.lastname=lastname;
this.mark1=mark1;
this.mark2=mark2;
this.mark33=mark3;

this.total=function(){
    return this.mark1+this.mark2+this.mark3
},
this.avg=function(){
    return this.total()/3
},





let student2=new student('keerthi','keerthana',54,85,78);
console.log('name:',student.name,student.lastname)
console.log("total marks",student.total());
console.log("average mark",student.average());

}
