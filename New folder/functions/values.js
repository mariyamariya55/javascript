
function divided(a,b){

try{


    if(b==0){


        throw new Error(`the number is not valid`)
    }

    let result=a/b

    console.log(`Result: ${result}`)
    return result;
}catch(Error){




    console.log(Error.message)
}


}
divided(6,2)
divided(6,0)


