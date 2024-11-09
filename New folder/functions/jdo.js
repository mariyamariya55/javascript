let emp={


    name:"rose",
    grd:"b.e",
    class:"first",
    salary:"20000",
    dept:"sales"
}
console.log(emp);

let jsonfile=JSON.stringify(emp)
  

console.log(jsonfile);

let removedJson=JSON.parse(jsonfile)
console.log(removedJson);


const jsonstring='{"name":"john","age":"30","city":"canda"}'

const obj=JSON.parse(jsonstring)

console.log(obj.name)
console.log(obj.age);
console.log(obj.city);