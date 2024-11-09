
class cake{

constructor(id,color,flawere,price,shop,count){
this.id=id,
this.color=color,
this.flawere=flawere,
this.price=price,
this.shop=shop,
this.count=count


}
bake(){

    return `make ${this.shop} with ${this.flawere}`
}

bill(){


    return this.price * this.count
}


}
let basa=new cake(2,"brown","vennila",200,"ragam",4)
console.log(basa)
console.log(basa.bake());
console.log(basa.bill());

class blam extends cake{

#name ="yashmi"

constructor(id,color,flawere,price,shop,count,street,ownere){
super(id,color,flawere,price,shop,count)
this.street=street,
this.ownere=ownere
}

getName(){

    return this.#name
}
setName(val){

    return this.#name=val
}

}
let icecream=new blam(4,"white","stabery","500","keishna","7","raja","keerthi")
console.log(icecream.bake());
console.log(icecream.bake());

icecream.color="red"
console.log(icecream);
icecream.setName("cupice")
console.log( icecream.getName());