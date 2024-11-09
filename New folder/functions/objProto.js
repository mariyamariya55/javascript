function getString(name){
    this.name=name
}

getString.prototype.reverseString=function (){
//    return this.name.length
let rev=''
for(i=this.name.length-1; i>=0; i--){
    rev+=this.name[i]

}
return rev
}

let mariya=new getString('mariya')
let std2=new getString('ramya')
console.log(mariya.reverseString());
console.log(std2.reverseString());


