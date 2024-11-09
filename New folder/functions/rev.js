function getString(name){

    this.name=name
}
getString.prototype.reverseString=function(){



    let rev=""
    for(i=this.name.length-1;i>=0;i--){

        rev+=this.name[i]
    }
    return rev
}
let mariya=new getString('mariya')
 let kerthi='mariya'.slice(0,1) .toUpperCase()
  let ker='mariya'.slice(1,6);
  let dec=kerthi.concat(ker)
  console.log(dec);

  

  


  



