let arr=['monday','tuesday','wednesday','thursday','friday','saterday','sunday']
let num2=[];
arr.map((m)=>{
    let result=(m+333);
    num2.push(result)



})
console.log(num2);
let mapping=arr.map((m)=>{
return m.toString().toUpperCase().slice(0,3)
    


})
console.log(mapping);
